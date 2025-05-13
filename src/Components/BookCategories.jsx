import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BookCategories = () => {
  const categories = [
    { name: "Novel" },
    { name: "Drama" },
    { name: "Sci-Fi" },
    { name: "Thriller" },
    { name: "History" }
  ];

  const [isHover, setIsHover] = useState(null);

  return (
    <div className='py-20 bg-blue-200 min-h-screen flex justify-center items-center'>
      <div className='w-[90%] lg:w-[70%] border border-blue-400 rounded-3xl p-10 transition-all duration-500 hover:shadow-2xl'>
        <h1 className='text-center text-2xl font-bold text-blue-700 mb-10'>
          Book By Category !!
        </h1>
        
        <div className='grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-6'>
          {categories.map((category, idx) => (
            <Link
              key={idx}
              to={`/category/${category.name}`}
              onMouseEnter={() => setIsHover(idx)}
              onMouseLeave={() => setIsHover(null)}
              className={`w-40 h-14 flex items-center justify-center border border-green-400 
                ${isHover === idx ? 'bg-[#abc4ff] text-white scale-105 shadow-lg' : 'bg-white text-blue-800'} 
                rounded-full duration-300 transform`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCategories;
