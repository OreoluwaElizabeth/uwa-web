import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [apiKey] = useState("uwa_1234567890abcdefqhij");
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(apiKey);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleLogout = () => {
        localStorage.removeItem("users");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-[#04203A] text-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold">UWA API Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm">Welcome, {JSON.parse(localStorage.getItem('users'))?.[0]?.companyName || 'User'}</span>
                        <button onClick={handleLogout} className="bg-[#6495ED] text-white px-4 py-2 rounded-md hover:bg-[#6a93df] transition duration-300">Logout</button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your API Key</h2>
                        <div className="flex items-center space-x-4">
                            <input
                                type="text"
                                value={apiKey}
                                readOnly
                                className="w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-md"
                            />
                            <button onClick={handleCopy} className="bg-[#6495ED] text-white px-4 py-2 rounded-md hover:bg-[#6a93df] transition duration-300"> {copied ? 'Copied!' : 'Copy'} </button>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">Use this key to authenticate your API requests</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Usage Statistics</h2>
                        <div className="space-y-2">
                            <p className="text-gray-600">Total Requests: <span className="font-medium">1,234</span></p>
                            <p className="text-gray-600">This Month: <span className="font-medium">567</span></p>
                            <p className="text-gray-600">Success Rate: <span className="font-medium">98%</span></p>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="bg-[#04203A] text-white px-4 py-2 rounded-md hover:bg-[#06486e] transition duration-300">Regenerate Key</button>
                            <a href="https://x.ai/api" target="_blank" rel="noopener noreferrer" className="bg-[#6495ED] text-white px-4 py-2 rounded-md hover:bg-[#6a93df] transition duration-300 text-center">View API Docs</a>
                            <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300">Contact Support</button>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-3 bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                        <ul className="space-y-3">
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                <span className="text-gray-600">API call to /transactions</span>
                                <span className="text-sm text-gray-500">2025-05-07 14:32</span>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                <span className="text-gray-600">API key accessed</span>
                                <span className="text-sm text-gray-500">2025-05-07 09:15</span>
                            </li>
                            <li className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                                <span className="text-gray-600">API call to /wallets</span>
                                <span className="text-sm text-gray-500">2025-05-06 17:45</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;