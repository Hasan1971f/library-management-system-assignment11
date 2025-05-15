

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AvialableHotBooks = () => {
  const [hotBooks, setHotBooks] = useState([]);

  useEffect(() => {
    fetch('https://assignment11-library-management-server.vercel.app/books/latest')
      .then(res => res.json())
      .then(data => {
        setHotBooks(data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="py-12 px-4 md:px-10 bg-blue-100">
      <h2 className="font-bold text-2xl md:text-4xl text-center mb-8 border-b-4 border-[#64b5f6] inline-block w-fit mx-auto pb-2">
        Hot Books
      </h2>
      <Slider {...settings}>
        {hotBooks.map((hotBook, idx) => (
          <div key={idx} className="flex justify-center items-centerr">
            <div className="bg-blue-100 shadow-lg rounded-lg p-6 flex flex-col items-center transition duration-300 hover:scale-105">
              <img
                src={hotBook.image}
                alt={hotBook.name}
                className="w-32 md:w-48 h-auto object-contain rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {hotBook.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
      <style>{`
        .slick-prev:before,
        .slick-next:before {
          color: #1e3a8a !important; 
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default AvialableHotBooks;
