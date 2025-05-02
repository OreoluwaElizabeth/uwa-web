import React from "react";

const AboutUwa = () => {
    return (
        <div className="bg-[#04203A] py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About UWA</h2>
                    <p className="text-lg text-gray-200 mb-8">
                        A Universal Wallet Address (UWA) simplifies crypto transactions by giving you a single, memorable address like <span className="font-medium text-indigo-400">johndoe.unius</span>. It links all your blockchain addresses (Bitcoin, Ethereum, etc.) behind the scenes, allowing seamless cross-chain payments with no extra fees. Share one address, enjoy endless possibilities.
                    </p>
            </div>
        </div>
    )
}

export default AboutUwa;