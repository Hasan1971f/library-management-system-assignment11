import React from 'react';
import footerIcon from '../assets/lottie/FooterIcon.json'
import Lottie from 'lottie-react';

const Footer = () => {
    return (
        <div className='bg-[#2081f0] bg-opacity-90 '>

            <footer className="py-0">
                <div className='w-48 flex items-center ml-10 justify-between'>
                    <Lottie animationData={footerIcon} ></Lottie>
                    <h2 className='font-bold'>LibroHub</h2>
                </div>
                <div className=' grid 
             grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 justify-items-center text-sm md:text-base'>
                    <nav className='flex flex-col '>
                        <h6 className="footer-title">Service</h6>
                        <a className="link link-hover">All Book</a>
                        <a className="link link-hover">Add Book</a>
                        <a className="link link-hover">Borrow Book</a>
                        <a className="link link-hover">Book Details</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Social</h6>
                        <a className="link link-hover">Twitter</a>
                        <a className="link link-hover">Instagram</a>
                        <a className="link link-hover">Facebook</a>
                        <a className="link link-hover">GitHub</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Explore</h6>
                        <a className="link link-hover">Features</a>
                        <a className="link link-hover">Enterprise</a>
                        <a className="link link-hover">Security</a>
                        <a className="link link-hover">Pricing</a>
                    </nav>
                    <nav className='flex flex-col'>
                        <h6 className="footer-title">Apps</h6>
                        <a className="link link-hover">Mac</a>
                        <a className="link link-hover">Windows</a>
                        <a className="link link-hover">iPhone</a>
                        <a className="link link-hover">Android</a>
                    </nav>
                </div>
            </footer>
            <p className='text-center pb-7 mx-5'>Copyright © {new Date().getFullYear()} - All right reserved by LibroHub</p>
        </div>
    );
};

export default Footer;