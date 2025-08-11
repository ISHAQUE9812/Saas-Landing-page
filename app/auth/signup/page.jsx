'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // success or error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setMessageType('error');
      return setMessage('⚠ Please fill in all fields.');
    }

    setMessageType('success');
    setMessage('✅ Signup successful!');
    setFormData({ name: '', email: '', username: '', password: '' });
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 py-20 px-4">
      <div className="backdrop-blur-lg bg-white/10 border border-gray-300 p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-700 mb-6">
          Create your account
        </h1>

        {message && (
          <p
            className={`text-sm text-center mb-4 ${
              messageType === 'success' ? 'text-green-300' : 'text-red-300'
            }`}
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="flex items-center bg-white rounded-lg px-3 py-2 focus-within:ring-2 ring-purple-300">
            <FiUser className="text-gray-500 mr-2" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="First name"
              className="w-full bg-transparent outline-none text-gray-500 placeholder:text-gray-400"
            />
          </div>

          {/* Username */}
          <div className="flex items-center bg-white rounded-lg px-3 py-2 focus-within:ring-2 ring-purple-300">
            <FiUser className="text-gray-500 mr-2" />
            <input
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              type="text"
              placeholder="Username"
              className="w-full bg-transparent outline-none textgray-500 placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white rounded-lg px-3 py-2 focus-within:ring-2 ring-purple-300">
            <FiMail className="text-gray-500 mr-2"  />
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              name="email"
              placeholder="Email address"
              className="w-full bg-transparent outline-none textgray-500 placeholder:text-gray-400"
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white rounded-lg px-3 py-2 focus-within:ring-2 ring-purple-300">
            <FiLock className="text-gray-500 mr-2"  />
            <input
              value={formData.password}
              onChange={handleChange}
              required
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none textgray-500 placeholder:text-gray-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-400 text-white py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-[1.02]"
          >
            Sign up
          </button>

          <p className="mt-4 text-sm text-center text-gray-500">
            Already have an account?{' '}
            <Link
              href="/auth/login"
              className="text-purple-500 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
