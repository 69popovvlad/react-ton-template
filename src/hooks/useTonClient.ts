import { getHttpEndpoint } from "@orbs-network/ton-access";
import { CHAIN } from "@tonconnect/ui-react";
import { TonClient } from "@ton/ton";

import { useTonConnect } from "./useTonConnect";
import { useAsyncInitialize } from "./useAsyncInitialize";

export function useTonClient() {
    const { network } = useTonConnect()

    return {
        client: useAsyncInitialize(async () => {
            if (!network) return;

            return new TonClient({
                endpoint: await getHttpEndpoint({
                    network: network === CHAIN.MAINNET ? "mainnet" : "testnet"
                })
            })
        }, [network])
    }
}