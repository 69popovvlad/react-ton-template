import React from 'react';
import { Link } from 'react-router-dom';
import { TonConnectButton } from '@tonconnect/ui-react';

import { Button } from 'flowbite-react';
import WalletBalance from '../components/ton/wallet/WalletBalance';


const AppPage: React.FC = () => {
    return (
        <div>
            <h5 className="text-header">Wallet has been connected</h5>
            <div className="w-full-centerd-block">
                
                <TonConnectButton />

                <WalletBalance />

                <Link to='/example'>
                    <Button color="blue">Example page</Button>
                </Link>
            </div>
        </div>
    );
};

export default AppPage;
