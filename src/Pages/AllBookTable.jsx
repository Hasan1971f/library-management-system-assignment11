import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllBookTable = () => {
  const books = useLoaderData();
  // console.log(books);

  const {user} = useContext(AuthContext);

  return (
    <div className="py-20">

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Book Name & Category</th>
                <th>Quantity</th>
                <th>Author </th>
                <th></th>
              </tr>
            </thead>

            {
                books.map(book => 
                    <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12 md:h-20 md:w-200">
                        <img className="duration-300 hover:scale-110 hover:object-center cursor-pointer" src={book.image} alt="Book Pic"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{book.name}</div>
                      <div className="text-sm opacity-50">{book.category}</div>
                    </div>
                  </div>
                </td>

                <div className="flex items-center mt-7">
                <td className="font-bold flex flex-col lg:flex-row ">{book.quantity}
                  <span className="badge badge-ghost bg-blue-400 font-normal badge-md ml-2">Rating : {book.rating} </span>
                </td>
                </div>

                <td>{book.author}</td>
                <th>
                <Link to={`/updatebook/${book._id}`} className="btn btn-info hover:bg-sky-400 hover:border-none scale-75 duration-300   hover:text-white" disabled={book.bookAdderEmail !== user.email}>Update Book</Link>
                </th>
              </tr>
            </tbody>
                )
            }


          </table>

        </div>
      
    </div>
  );
};

export default AllBookTable;