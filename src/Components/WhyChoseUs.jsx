import React from 'react';

const WhyChoseUs = () => {
    return (
        <section className="bg-gradient-to-r  py-12 px-4 md:px-10 mt-20">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold  mb-6">Why Choose <span className="text-purple-600">LibroHub</span>?</h2>
                <p className=" mb-10 max-w-2xl mx-auto">
                Explore a smarter way to borrow, read, and connect with fellow book lovers. LibroHub brings your favorite titles closer than ever before.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="bg-white/20 border border-gray-500 shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">Books by Category</h3>
                    <p className="">Books are neatly categorized — easily explore Novel, Drama, Sci-Fi, History, and more in just a click.</p>
                </div>
                <div className="bg-white/20 border border-gray-500 shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">Easy Borrowing</h3>
                    <p className="">Reserve and borrow books with a few clicks — no lines, no delays.</p>
                </div>
                <div className="bg-white/20 border border-gray-500 shadow-md rounded-xl p-6 hover:shadow-lg transition">
                    <h3 className="text-xl font-semibold text-purple-500 mb-2">Personalized Recommendations</h3>
                    <p className="">Get suggestions based on what you love — discover new reads tailored to your taste.</p>
                </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoseUs;