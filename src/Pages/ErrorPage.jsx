import Lottie from 'lottie-react';
import React from 'react';
import Error from '../../src/assets/lottie/Error.json'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10'>
            <div className='w-80 mx-auto pt-12'>
                <Lottie animationData={Error}></Lottie>
            </div>
            <div className='w-full mx-auto flex justify-center'>
                <NavLink className='p-3 bg-blue-400 rounded-lg  font-bold hover:bg-green-500 duration-300' to={'/'}>Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;