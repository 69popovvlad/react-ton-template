import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

import { useTonConnect } from '../hooks/useTonConnect';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { connected } = useTonConnect();

    return (
        <div>
            <main>
                <div className="content">
                    {connected ? children :
                        <>
                            <div className="w-full-centerd-block">
                                <h5>No connect ed wallet. Please, use tonconnect</h5>
                                <TonConnectButton />
                            </div>
                        </>}
                </div>
            </main>
        </div>
    );
};

export default AppLayout;
