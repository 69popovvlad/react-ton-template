import { Dispatch, useState } from "react";
import { Address, fromNano } from "@ton/ton";

import { useTonClient } from "../useTonClient";
import { useDataFetcher } from "../useDataFetcher";

export function useWalletBalance(address: string | null): {
    balance: bigint;
    balanceFixed: number;
    isStopped: boolean,
    setIsStopped: Dispatch<boolean>,
    isLoading: boolean,
} {
    const { client } = useTonClient();
    const [balance, setBalance] = useState<bigint>(-1n);
    const [balanceFixed, setBalanceFixed] = useState<number>(-1);

    const { isStopped, setIsStopped, isLoading } = useDataFetcher(getBalance);

    async function getBalance() {
        if(!address || !client) {
            return;
        }

        const balance = (await client.getBalance(Address.parse(address)));
        setBalance(balance);
        setBalanceFixed(Number(fromNano(balance)));
    }

    return { balance, balanceFixed, isStopped, setIsStopped, isLoading };
}