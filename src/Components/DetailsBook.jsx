import React, { useContext } from 'react';
import {  useLoaderData, useNavigate } from 'react-router-dom';
import { IoMdStarOutline } from 'react-icons/io';
import ReactStars from "react-rating-stars-component";
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const DetailsBook = () => {

    const book = useLoaderData();
    console.log(book)

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const userName = form.get('name')
        const userEmail = form.get('email')
        const userPic = user?.photoURL;
        const returnDate = form.get('returnDate')
        const bookId = book._id;
        const bookName = book.name;
        const borrowDate = new Date();
        const bookImage = book.image;
        const bookCategory = book.category;


        // if(!returnDate){
        //     toast.error('Please select a return date')
        // }

        const borrowBookDetails = { userName, userEmail, returnDate, bookId, bookName, borrowDate, userPic, bookImage, bookCategory };
        console.log(borrowBookDetails)

        fetch(`http://localhost:5000/borrow/${book._id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(borrowBookDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Book Borrowed Successfully Done",
                        icon: "success",
                        draggable: true
                    });
                    document.getElementById('my_modal_5').close();
                    navigate('/')
                }
            })
    }

    return (
        <section className='px-10 py-20'>
            <div className="hero bg-[#bbdefb]  rounded-3xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={book.image} className="sm:max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex flex-col gap-5 font-semibold'>
                        <h1 className="text-3xl font-bold">Book Name : {book.name}</h1>
                        <p className="text-sm sm:text-2x">Author Name : {book.author}</p>
                        <p className="text-sm sm:text-2x">Book Category : {book.category}</p>
                        <p className="text-sm sm:text-2x">Book Description : {book.description}</p>
                        <p className="text-sm sm:text-2x">Book Content : {book.bookContent}</p>
                        <p className="text-sm sm:text-2x">Book Quantity : {book.quantity}</p>
                        <div className="flex items-center text-sm sm:text-2xl gap-2 flex-wrap">
                            <span>Rating :</span>
                            <ReactStars
                                count={5}
                                value={Number(book.rating) || 0}
                                size={30}
                                activeColor="#ffd700"
                                emptyIcon={<IoMdStarOutline />}
                                filledIcon={<IoMdStarOutline />}
                            />
                        </div>

                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn w-[70%] mx-auto  py-3 px-5 bg-[#99e2b4]  hover:bg-[#3473e9] hover:scale-110 rounded-xl border-none hover:text-white duration-300 hover:shadow-md hover:shadow-lime-50 text-base" disabled={book.quantity == 0}>{book.quantity > 0 ? 'Borrow' : 'Out Of Stock'}</button>
                    </div>
                </div>
            </div>


            {/* Modal  */}
            <dialog id="my_modal_5" className="modal modal-bottom w-[90%] mx-auto  sm:modal-middle ">
                <div className="modal-box bg-blue-100">
                    <h3 className="font-bold text-lg">Borrow : {book.name} </h3>
                    <div className=" flex flex-row justify-center">
                        <form onSubmit={handleSubmit}>
                            <section className='py-5'>
                                <div>
                                    <label>Name <input name='name' type="text" defaultValue={user.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" required /></label>
                                </div>
                                <div>
                                    <label>Email <input name='email' type="email" defaultValue={user.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" required /></label>
                                </div>
                                <div>
                                    <label>Set Return Date<input name='returnDate' type="date" placeholder="Type here" className="input input-bordered w-full max-w-xs" required /></label>
                                </div>
                            </section>

                            <div className='flex flex-row justify-center items-center w-[60%] sm:w-full mx-auto gap-5 '>
                                <button type='submit' className="btn w-[80%] mx-auto  py-3 px-5 bg-[#99e2b4]  hover:bg-[#3280e6]  rounded-xl border-none hover:text-white duration-300 hover:shadow-md hover:shadow-lime-50 sm:text-base">Confirm Borrow</button>

                                <button
                                    onClick={(e) => {
                                        e.target.form.reset();
                                        document.getElementById('my_modal_5').close();

                                    }}
                                    className="btn w-[80%] mx-auto  py-3 px-5 bg-red-500  hover:bg-red-600  rounded-xl border-none hover:text-white duration-300 hover:shadow-md hover:shadow-lime-50 sm:text-base">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>


        </section>
    );
};

export default DetailsBook;




