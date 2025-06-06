import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { data } from 'react-router-dom';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react';
import NoData from '../../src/assets/lottie/NoData.json';
import axios from 'axios';
import UseAxios from '../Components/Hooks/UseAxios';

const BorrowedBooks = () => {

    const [borrowedBooks, setBorrowedBooks] = useState([]);
    const { user } = useContext(AuthContext);

    const axiosSecure = UseAxios();

    useEffect(() => {

        // fetch(`https://assignment11-library-management-server.vercel.app/bookBorrowed?email=${user.email}`)
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data)
        //     setBorrowedBooks(data)
        // })

        // axios.get(`https://assignment11-library-management-server.vercel.app/bookBorrowed?email=${user.email}`, {withCredentials: true})
        // .then(res => {
        //     // console.log(res.data)
        //     setBorrowedBooks(res.data)
        // })

        axiosSecure.get(`/bookBorrowed?email=${user.email}`)
            .then(res => {
                setBorrowedBooks(res.data)
            })

    }, [user.email])

    if (borrowedBooks.length < 1) {
        return <div className='py-32 flex justify-center'>
            <Lottie className='w-56' animationData={NoData}></Lottie>
        </div>;
    }

    // console.log(user.email)

    const handleReturn = (borrowBoookId, bookId) => {
        console.log(borrowBoookId, bookId)
        console.log("Book ID:", bookId);

        Swal.fire({
            title: "Are you sure for Return?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Return it!"
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://assignment11-library-management-server.vercel.app/bookBorrowed/${borrowBoookId}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.message) {
                            Swal.fire('Returned!', 'The book has been returned.', 'success');
                        }
                       
                        fetch(`https://assignment11-library-management-server.vercel.app/books/${bookId}`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json"
                            },
                            body: JSON.stringify({ id: bookId })
                        })
                            .then(res => res.json())
                            .then(data => {

                                console.log(data)

                                if (data.modifiedCount == 1) {
                                    toast.success('Book Return Done')
                                    toast.success('Thanks for Book Return')
                                }

                                const remainingBook = borrowedBooks.filter(borrowedBook => borrowedBook._id !== borrowBoookId);
                                setBorrowedBooks(remainingBook);
                            })
                    })
                    .catch((err) => console.log(err))
            }
        })
    }

    return (
        <div className='grid lg:grid-cols-2  2xl:grid-cols-3 gap-10 justify-center items-center py-16 '>
            {
                borrowedBooks.map(borrowedBook =>
                    <div className='flex justify-center items-center bg-[#bbdefb] p-5 rounded-xl sm:w-[500px] lg:scale-90 mx-auto' key={borrowedBook._id}>
                        <div className='sm:flex justify-between items-center sm:gap-3'>
                            <div className='flex justify-center items-center'>
                                <img className='h-40' src={borrowedBook.bookImage} alt="" />
                            </div>
                            <div className='text-sm font-medium mt-4'>
                                <p>Book Name : {borrowedBook.bookName}</p>
                                <p>Category : {borrowedBook.bookCategory}</p>
                                <p>Borrowed Date : {borrowedBook.borrowDate}</p>
                                <p>Return Date : {borrowedBook.returnDate}</p>
                            </div>
                            <div className='flex justify-center mt-4'>
                                <button onClick={() => handleReturn(borrowedBook._id, borrowedBook.bookId)} className='btn border-none bg-green-600 hover:bg-[#286ed6] hover:border-none scale-95 duration-300 hover:scale-90 sm:text-base hover:text-white shadow-md'>Return Book</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default BorrowedBooks;