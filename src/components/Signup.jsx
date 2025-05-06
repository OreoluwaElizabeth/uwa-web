import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate;
    const [formData, setFormData] = React.useState({
        companyName: '',
        companyEmail: '',
        password: '',
    });
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { companyName, companyEmail, password } = formData;

        if (!companyName || !companyEmail || !password) {
            setError('Please fill in all fields');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.companyEmail === companyEmail)) {
            setError('This email is already registered.');
            return;
        }

        const newUser = { companyName, companyEmail, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        setSuccess('Signup successful! Redirecting to login page...');
        setError('');
        setTimeout (() => {
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#04203A]">Sign Up for UWA API</h2>
                    <p className="mt-2 text-sm text-gray-600">Create your account to start using UWA</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                    {success && <p className="text-green-600 text-center mb-4">{success}</p>}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="Your Company Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="companyEmail" className="block text-sm font-medium text-gray-700">Company Email</label>
                            <input
                                type="email"
                                id="companyEmail"
                                value={formData.companyEmail}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="email@gmail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full p-3 bg-gray-50 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="••••••••"
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#6495ED] text-white p-3 rounded-md hover:bg-[#6a93df] transition duration-300">Sign Up</button>
                    </form>
                    <p>Already have an account?{' '} <Link to="/login" className="text-indigo-600 hover:text-indigo-500 transition">Log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;