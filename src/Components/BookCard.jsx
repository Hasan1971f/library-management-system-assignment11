import React, { useContext } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const BookCard = ({ book }) => {
  const { user } = useContext(AuthContext);

  // console.log(book);
  

  return (
    <div className="bg-[#bbdefb] shadow-lg bg-opacity-90 border border-[#64b5f6] rounded-xl overflow-hidden w-full sm:w-[400px] md:w-[90%] transition-transform hover:scale-105 duration-300">
      <div className="flex flex-col  ">
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-[300px] object-contain  rounded-t-xl"
        />
        <div className="p-5 flex flex-col gap-3 text-start">
          <h1 className="text-2xl font-bold text-blue-900">{book.name}</h1>
          <p className="text-gray-700">Author: {book.author}</p>
          <p className="text-gray-700">Category: {book.category}</p>
          <p className="text-gray-700">Quantity: {book.quantity}</p>

          <div className="flex items-center gap-2 text-gray-800">
            <span className="font-medium">Rating:</span>
            <ReactStars
              count={5}
              value={Number(book.rating) || 0}
              size={24}
              activeColor="#ffd700"
              emptyIcon={<IoMdStarOutline />}
              filledIcon={<IoMdStarOutline />}
            />
          </div>

          <div className="flex justify-center mt-4">
            <Link
              to={`/updatebook/${book._id}`}
              className="btn btn-accent px-5 py-2 rounded-md hover:bg-sky-400 hover:border-none text-white font-medium transition-all duration-300"
              disabled={book.bookAdderEmail !== user.email}
            >
              Update Book
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

// 
