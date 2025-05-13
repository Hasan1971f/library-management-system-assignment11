import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';

const AddBook = () => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddBook = e => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        const image = form.get('image');
        const category = form.get('category');
        const quantity = form.get('quantity');
        const rating = form.get('rating')
        const author = form.get('author-name')
        const description = form.get('description')
        const bookContent = form.get('book-content')
        const bookAdderName = user?.displayName || 'Unknown User';
        const bookAdderEmail = user.email

        const newBook ={ name, image, category, quantity, rating, author, description, bookContent, bookAdderName, bookAdderEmail}
        console.log(newBook)

        fetch('http://localhost:5000/books' ,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newBook)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: 'Book!',
                    text: ' Added Successfully',
                    icon: 'success',
                    timer:2000,
                    timerProgressBar:true
                  });
                  navigate('/')
            }
            console.log(data)
        })

    }

    return (
       <div className='py-20'>
            <div className='bg-[#bbdefb] bg-opacity-40 m-10 border-2 border-[#abc4ff] rounded-2xl  drop-shadow-[0_4px_6px_rgba(59,130,246,0.5)]  duration-300 hover:border-[#95d5b2] font-semibold'>

                <h2 className='text-center text-xl md:text-2xl xl:text-4xl font-bold my-5 border-b-2 border-[#e3f2fd] w-[50%] mx-auto  '>Book Information</h2>

                <form onSubmit={handleAddBook} className='flex flex-col justify-center px-10'>
                
                <div className='grid md:grid-cols-2 gap-5 justify-center' >
                        {/* Book Name */}
                        <div>
                            <p>Book Name</p>
                            <input type="text" name='name' placeholder="Enter Book Name" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" required />
                        </div>

                        {/* Book Image */}
                        <div>
                            <p>Book Image link</p>
                            <input type="text" name='image' placeholder="Enter Book Image Link" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" required />
                        </div>

                        {/* Book Category */}
                        <div>
                            <p>Book Category</p>
                            <select name="category" id="" className=" border-2 p-3 rounded-lg input-bordered w-full  cursor-pointer bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" defaultValue='Select Book Category' required >
                                <option  disabled value="">Select Book Category</option>
                                <option value="Novel">Novel</option>
                                <option value="Thriller">Thriller</option>
                                <option value="History">History</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Drama">Drama</option>
                            </select>
                        </div>

                        {/* Author Name */}
                        <div>
                            <p>Author Name</p>
                            <input type="text" name='author-name' placeholder="Enter Author Name" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" required />
                        </div>

                        {/* Quantity */}
                        <div>
                            <p>Book Quantity</p>
                            <input type="number" name='quantity' placeholder="Enter Book quantity" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" min={1} required />
                        </div>

                        {/* Rating */}
                        <div>
                            <p>Book Rating</p>
                            <input type="number" name='rating' placeholder="Enter Book quantity" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" min={1} max={5} required />
                        </div>

                        {/*  Short Description */}
                        <div>
                            <p>Short Description</p>
                            <input type="text" name='description' placeholder="Enter Short Description" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" required />
                        </div>

                        {/*  Book Content  */}
                        <div>
                            <p>Book Content </p>
                            <input type="text" name='book-content' placeholder="Enter Book Content" className="input input-bordered w-full  bg-[#bbdefb] hover:bg-[#ffedd8] duration-300" required />
                        </div>

                </div>

                {/* submit */}
                <div className='my-5 flex justify-center'>
                        <button  className='px-10 btn btn-info hover:bg-sky-500 hover:border-none scale-110 duration-300 hover:scale-125  hover:text-white'>Submit</button>
                </div>

                </form>

            </div>
       </div>
    );
};

export default AddBook;