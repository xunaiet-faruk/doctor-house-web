import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar';

const Mainrouter = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Mainrouter;