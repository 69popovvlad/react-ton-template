import { CHAIN, useTonConnectUI, useTonWallet } from "@tonconnect/ui-react";
import { Address, beginCell, Sender, SenderArguments, storeStateInit } from "@ton/core";

const approveDelay = 5 * 60 * 1000; // 5 minutes for user to approve

export function useTonConnect(): {
    sender: Sender;
    connected: boolean;
    wallet: string | null;
    network: CHAIN | null;
} {
    const [tonConnectUI] = useTonConnectUI()
    const wallet = useTonWallet()

    return {
        sender: {
            send: async (args: SenderArguments) => {
                const stateInit = (args.init && beginCell()
                    .store(storeStateInit(args.init))
                    .endCell().toBoc().toString("base64")) ?? undefined;

                const response = await tonConnectUI.sendTransaction({
                    messages: [
                        {
                            address: args.to.toString(),
                            amount: args.value.toString(),
                            payload: args.body?.toBoc().toString("base64"),
                            stateInit: stateInit,
                        },
                    ],
                    validUntil: Date.now() + approveDelay,
                });
            },
            address: wallet?.account?.address ? Address.parse(wallet?.account?.address as string) : undefined
        },

        connected: !!wallet?.account.address,
        wallet: wallet?.account.address ?? null,
        network: wallet?.account.chain ?? null
    }
}