import React, { useState } from "react";

const BorrowingTipsFAQ = () => {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const tips = [
        "Use the search bar to find books by title, author, or category.",
        "Check book availability before borrowing.",
        "Return books on time to avoid penalties.",
        "You can borrow up to 3 books at a time."
    ];

    const faqs = [
        {
            question: "How do I create an account?",
            answer: "Click the “Register” button, fill in your details, and submit the form."
        },
        {
            question: "How many books can I borrow at once?",
            answer: "You can borrow up to 3 books at a time."
        },
        {
            question: "What happens if I don’t return a book on time?",
            answer: "You may lose borrowing privileges temporarily or incur a small fine."
        },
        {
            question: "How do I find books in a specific category?",
            answer: "Navigate to the 'Book Categories' section ."
        }
    ];

    return (
        <div className="p-8  rounded-lg md:max-w-3xl mx-auto py-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Borrowing Tips & FAQ</h2>


            <div className=" mb-8">
                <h3 className="text-xl font-medium mb-4">Borrowing Tips</h3>
                <ul className="list-disc pl-6 space-y-2">
                    {tips.map((tip, index) => (
                        <li key={index} className="text-black md:text-xl">{tip}</li>
                    ))}
                </ul>
            </div>

            <div className="">
                <h3 className="text-xl font-medium mb-4">Frequently Asked Questions</h3>
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item mb-4 p-4 bg-[#e9edc9] duration-500 border border-[#90e0ef] rounded-lg cursor-pointer ${openFAQ === index ? "" : "bg-red-50"}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <h4 className="text-lg font-semibold text-black">{faq.question}</h4>
                        </div>
                        {openFAQ === index && <p className="faq-answer text-black mt-2">{faq.answer}</p>}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default BorrowingTipsFAQ;