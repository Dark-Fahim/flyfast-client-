import React from 'react';
import { Outlet } from 'react-router';
import FlyFastNavbar from '../pages/shared/Navbar';
import FlyFastFooter from '../pages/shared/Footer';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <FlyFastNavbar></FlyFastNavbar>
            <div className='grow'>
                <Outlet></Outlet>
            </div>
            <FlyFastFooter></FlyFastFooter>
        </div>
    );
};

export default Root;