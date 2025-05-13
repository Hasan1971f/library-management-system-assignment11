import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import book1 from "../../public/book1 (2).jpg"
import book2 from '../../public/book2 (2).jpg'
import book3 from '../../public/book3 (2).jpg'
import book4 from '../../public/book4.jpg'
import book5 from '../../public/book5.jpg'

const Banner = () => {

    return (

        <div className="carousel mx-auto  lg:w-[70%] md:h-96 lg:h-[420px] 2xl:h-[600px] rounded-lg my-10 border-4 border-[#2196f3] drop-shadow-[0_4px_15px_rgba(56,189,248,0.5)] ">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src={book1}
                className=" w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src={book2}
                className=" w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src={book3}
                className=" w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src={book4}
                className=" w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                src={book5}
                className=" w-full object-cover" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>

        
    );
};

export default Banner;