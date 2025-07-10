'use client'
import React, { useState } from "react";
import Link from "next/link";
const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password){
       return setMessage('Please fill in all fields.') 
    }
    setMessage('Signup successfull');
    setFormData({name:'',email:'',username:'',password:''});
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4 ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md ">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create your account
        </h1>
        {message && <p className="text-sm text-center text-indigo-600 mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
           name="name"
           value={formData.name}
           onChange={handleChange}
           required
            type="text"
            placeholder="Enter your First name"
            className="w-full px-4 py-2 border border-gray-400 rounded-md text-gray-700 placeholder:text-gray-400"
          />
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            type="text"
            placeholder="Enter your  Username"
            className="w-full px-4 py-2 border border-gray-400 rounded-md  text-gray-700 placeholder:text-gray-400"
          />
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            name='email'
            placeholder="Enter your Email"
            className="w-full px-4 py-2 border border-gray-400 rounded-md  text-gray-700 placeholder:text-gray-400"
          />
          <input
          value={formData.password}
           onChange={handleChange}
           required
            type="password"
            name="password"
            placeholder=" Password"
            className="w-full px-4 py-2 border border-gray-400 rounded-md  text-gray-700 placeholder:text-gray-400"
          />
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
            Sign up 
          </button>
          <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <Link href="/auth/login" className="text-purple-600 font-medium">Log in</Link>
        </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
