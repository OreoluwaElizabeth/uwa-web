import React from "react";
import { useState } from 'react';

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is UWA?",
            answer: "A Universal Wallet Address (UWA). It is a unified address linking all your blockchain addressess(e.g Bitcoin, Ethereum, Polygon) behind the scenes, so you only need to share one address for all transactions."
        },
        {
            question: "How does UWA work?",
            answer: "Upon wallet creation, you're assigned a unique UWA (e.g.,johndoe.unius). The wallet maps your various blockchain addresses to this UWA. When someone sends crypto to your UWA, our system automatically routes it to the correct address--no hassle, no extra fees."
        },
        {
            question: "Why use a UWA?",
            answer: "A UWA makes crypto transactions easier by letting you use one memorable address instead of juggling multiple complex ones.It's user-friendly and works across supported blockchains."
        },
        {
            question:"What are the benefits of UWA?",
            answer: "Benefits include a simplified experience with one address for all transactions, cross-chain support, enanced usability with a memorable name, and no extra fees for address lookups."
        },
        {
            question:"Is my UWA secure?",
            answer: "Yes, UWA mappings are encrypted, and updates require user authentication. You can also selectively link addresses to enhance privacy."
        },
        {
            question: "Can I customize my UWA?",
            answer: "Absolutely! During setup, you can pick a username for your UWA (e.g., johndoe.unius). If your preferred name is taken, unique identifiers are added, or you can choose from available options."
        },
        {
            question: "What happens if my UWA isn't recognized?",
            answer: "If a platform doesn't support UWA, you can fall back to using traditional blockchain addresses. The wallet ensures flexibility for all scenarios."
        },
        {
            question:"Does UWA work with all wallet?",
            answer: "UWA works with all blockchains supported by the wallet, such as Bitcoin, Ethereum, and Polygon. Check your wallet's documentation for the full list."
        }
    ];

    return (
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-md">
                            <button 
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                            >
                                <span className="text-lg font-medium text-white">{faq.question}</span>
                                <span className="text-white text-xl">
                                    {openIndex === index ? '-' : '+'}
                                </span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t border-gray-700">
                                    <p className="text-gray-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faqs;