"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!formData.email || !formData.password) {
      return setMessage("Please fill in all fields.");
    }
    setMessage("Login successful (mock)");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className=" flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 px-4 py-20">
      <div className="backdrop-blur-lg bg-white/10 border border-gray-300 p-8 rounded-2xl shadow-xl w-full max-w-md transition-all duration-300 hover:shadow-2xl">
        <h1 className="text-3xl font-extrabold text-center text-gray-700  mb-8">
          Welcome Back
        </h1>

        {message && (
          <p
            role="alert"
            className="text-center mb-6 text-indigo-600 font-medium"
          >
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-semibold text-gray-500 "
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md outline-none text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-semibold text-gray-500"
            >
              Password
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full py-2 px-3 bg-white border border-gray-300 rounded-md outline-none text-gray-700 placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
            />
            <button
              type="button"
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-9 right-3 text-gray-500 dark:text-gray-400 hover:text-indigo-600 transition"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10a9.96 9.96 0 012.672-6.715M9.88 9.88a3 3 0 014.243 4.242m-1.415-1.415L17 17m-1.414-1.414L12 12m7.5 7.5L4.5 4.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-400 text-white py-2 rounded-lg font-semibold transition duration-300 transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600 dark:text-gray-400 text-sm">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
