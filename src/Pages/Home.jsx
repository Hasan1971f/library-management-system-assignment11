import React from 'react';
import Banner from '../Components/Banner';
import AvialableHotBooks from '../Components/AvialableHotBooks';
import BookCategories from '../Components/BookCategories';
import BorrowingTipsFAQ from '../Components/BorrowingTipsFAQ';

const Home = () => {
    return (
        <div>
            <div className='w-[70%] mx-auto lg:w-[55%] 2xl:w-[50%] '>
                <Banner></Banner>
            </div>
            <BookCategories></BookCategories>
            <BorrowingTipsFAQ></BorrowingTipsFAQ>
            <div className='w-[40%] mx-auto'>
                <AvialableHotBooks></AvialableHotBooks>
            </div>
        </div>

    );
};

export default Home;
// 