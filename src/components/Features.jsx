import React from "react";

const Features = () => {
    const features = [
        {
            title: "Cross-Chain Address Mapping",
            desc: "Link all supported blockchains (Bitcoin, Ethereum, etc.) to your UWA"
        },
        {
            title: "Customizable UWA",
            desc: "Personalize your UWA with available options during setup."
        },
        {
            title: "Scalable Infrastructure",
            desc: "Robust backend for thousands of users."
        },
        {
            title: "Secure Management",
            desc: "Encrypted mappings with user authentication for updates."
        }
    ];

    return (
        <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-[#04203A]">UWA Features</h1>
                <p className="mt-4 text-lg text-gray-600">Simplify your crypto experience with a single, human-readable address for all transactions.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="p-6 bg-[#04203A] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
                        <div className="text-4xl mb-4 text-indigo-600">⭐</div>
                        <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                        <p className="mt-2 text-white">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;