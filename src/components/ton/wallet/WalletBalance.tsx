import React from "react";
import { useWalletBalance } from "../../../hooks/wallet/useWalletBalance";
import { useTonConnect } from "../../../hooks/useTonConnect";

const WalletBalance: React.FC = () => {
    const { wallet } = useTonConnect();
    const { balanceFixed } = useWalletBalance(wallet);

    return (
        <h3 className="w-full text-header">{balanceFixed.toFixed(2)} TON</h3>
    );
};

export default WalletBalance;