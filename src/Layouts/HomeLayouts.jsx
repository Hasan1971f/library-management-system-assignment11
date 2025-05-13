import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const HomeLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-blue-200 text-[#0D47A1] '>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayouts;
// 