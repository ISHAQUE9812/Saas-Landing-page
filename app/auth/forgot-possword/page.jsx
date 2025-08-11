"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address." });
      return;
    }

    // Simulated API call
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "If this email exists in our system, you’ll receive a password reset link shortly.",
      });
      setEmail("");
    }, 1000);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          Forgot Password
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Enter your registered email address and we’ll send you a link to reset your password.
        </p>

        {status.message && (
          <div
            className={`mb-4 p-3 rounded-md text-sm ${
              status.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Send Reset Link
          </button>
        </form>

        <div className="text-center mt-6">
          <a
            href="/auth/login"
            className="text-sm text-orange-600 hover:underline"
          >
            Back to Login
          </a>
        </div>
      </div>
    </section>
  );
}
