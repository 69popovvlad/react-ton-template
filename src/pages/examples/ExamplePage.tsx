import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';


const AppPage: React.FC = () => {
    return (
        <div>
            <h5 className="text-header">Nothing here, just page</h5>
            <div className="w-full-centerd-block">
                
                <Link to='/'>
                    <Button color="red">Home</Button>
                </Link>
            </div>
        </div>
    );
};

export default AppPage;
