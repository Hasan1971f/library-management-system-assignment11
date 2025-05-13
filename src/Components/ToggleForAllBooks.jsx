import React, { useState } from 'react';
import AllBooks from '../Pages/AllBooks';
import AllBookTable from '../Pages/AllBookTable';

const ToggleForAllBooks = () => {

    const [viewMode, setViewMode] = useState("card")
    // console.log(viewMode)

    return (
        <div className='py-10'>
            <div className='w-[75%] sm:w-1/2 lg:w-1/3 mx-auto flex justify-center font-semibold text-sm md:text-xl bg-[#8ab7eb] rounded-[40px] py-5 '>
                <label className='flex items-center' >Select View : </label>
                <select className='bg-[#e0e7ff] rounded-xl ml-2  p-2' name="" id="" value={viewMode} onChange={(e) => setViewMode(e.target.value)}>
                    <option value="card">Card View</option>
                    <option value="table">Table View</option>
                </select>
            </div>
            {
                viewMode === "card" ?
                    (<AllBooks></AllBooks>)
                    :
                    (<AllBookTable></AllBookTable>)
            }

        </div>
    );
};

export default ToggleForAllBooks;