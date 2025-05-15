import React, { useContext, useEffect, useState } from 'react';
import { IoMdStarOutline } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ReactStars from "react-rating-stars-component";
import axios from 'axios';

const CategoryBooks = () => {

    const { name } = useParams();
    const [books, setBooks] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(`https://assignment11-library-management-server.vercel.app/books?category=${name}`)
            .then(res => res.json())
            .then(data => {
                setBooks(data)
                setLoading(false);
            })

    }, [name])

    // console.log(name)
   

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-20 justify-items-center">
                {
                    Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 md:py-20 justify-items-center   '>
            {
                books.map((book, idx) =>

                    <div key={idx} className=" bg-[#bbdefb] bg-opacity-80 border-2 border-[#64b5f6] w-[90%] sm:w-[530px]  rounded-xl scale-75 ">
                        <div className="flex-col">
                            <img src={book.image} className="w-[300px]  rounded-lg shadow-2xl mx-auto pt- " />
                            <div className='px-4 flex flex-col gap-3 text-xl font-semibold '>
                                <h1 className="sm:text-2xl text-base font-bold pt-5">Book Name: {book.name}</h1>
                                <p className="text-sm sm:text-2xl">Author Name : {book.author}</p>
                                <p className="text-sm sm:text-2xl">Category : {book.category}</p>
                                <p className="text-sm sm:text-2xl">Quantity : {book.quantity}</p>
                                <div className="flex  items-center text-sm sm:text-2xl">
                                    Rating :
                                    <ReactStars
                                        count={5}
                                        value={Number(book.rating) || 0}
                                        size={30}
                                        activeColor="#ffd700"
                                        emptyIcon={<IoMdStarOutline />}
                                        filledIcon={<IoMdStarOutline />}
                                    />
                                </div>
                            </div>
                            <div className='p-5 flex justify-center'>
                                <Link to={`/details/${book._id}`} className="btn border-none bg-[#71b6ee] hover:bg-sky-500 hover:border-none scale-110 duration-300 hover:scale-125 text-base hover:text-white shadow-md">Details</Link>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    );
};

export default CategoryBooks;