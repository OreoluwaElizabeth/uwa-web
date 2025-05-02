import React from "react";

const Howitworks = () => {
    const steps = [
        {
            number: 1,
            title: "Claim Your UWA",
            description: "In your wallet, pick a username like 'johndoe.' It becomes johndoe.unius (customizable and wallet-specific, e.g., johndoe.mask for MetaMask), unique to you.",
        },
        {
            number: 2,
            title: "Link Your Addresses",
            description: "Add your Ethereum, Bitcoin, or other addresses in your wallet’s settings. They’re tied to your UWA securely on Sui.",
        },
        {
            number: 3,
            title: "Send & Receive",
            description: "Share your UWA. Anyone can send crypto to it, and our system routes it to the right address with no gas fees for lookups.",
        },
    ];

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#04203A] mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
                                <div className="w-16 h-16 bg-[#6495ED] text-white rounded-full flex items-center justify-center mb-4 text-2xl font-bold">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Howitworks;