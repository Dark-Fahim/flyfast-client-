import React from 'react';
import { Outlet } from 'react-router';
import FlyFastNavbar from '../pages/shared/Navbar';
import FlyFastFooter from '../pages/shared/Footer';

const Root = () => {
    return (
        <div>
            <FlyFastNavbar></FlyFastNavbar>
            <Outlet></Outlet>
            <FlyFastFooter></FlyFastFooter>
        </div>
    );
};

export default Root;