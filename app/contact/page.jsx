// Contact/page.js
'use client'; // Required for using useState for form handling and client-side interactions

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChevronRightIcon,
  CalendarDaysIcon, // New icon for scheduling
} from "@heroicons/react/24/outline"; // Using outline icons for a softer look

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(''); // Clear previous messages

    // --- In a real application, you'd send this data to your backend API ---
    console.log('Form Data Submitted:', formData);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      setSubmitMessage('Your message has been sent successfully! We will get back to you shortly.');
      setFormData({ name: '', email: '', company: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mx-auto max-w-xl text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl leading-tight">
          Let's Connect
        </h1>
        <p className="mt-4 text-xl text-gray-700">
          Have questions, feedback, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="mx-auto max-w-7xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        {/* Contact Information / Left Section */}
        <div className="p-10 sm:p-14 bg-indigo-700 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-indigo-100">Contact Information</h2>
            <p className="text-indigo-200 mb-8">
              Reach out to us through any of the following channels or fill out the form, and we'll connect with you soon.
            </p>
            <div className="space-y-6">
              <div className="flex items-center text-lg">
                <PhoneIcon className="h-6 w-6 text-indigo-300 mr-4 flex-shrink-0" />
                <span>+91 8291890060</span> {/* Example Indian number */}
              </div>
              <div className="flex items-center text-lg">
                <EnvelopeIcon className="h-6 w-6 text-indigo-300 mr-4 flex-shrink-0" />
                <span>ishaque9812@gmail.com</span>
              </div>
              <div className="flex items-start text-lg">
                <MapPinIcon className="h-6 w-6 text-indigo-300 mr-4 flex-shrink-0 mt-1" />
                <span>
                  123 SaaS Street, <br />
                  Tech City, Mumbai, <br />
                  Maharashtra 400043, India
                </span>
              </div>
            </div>
          </div>
          
          {/* Social Media Links (Optional) */}
          <div className="mt-12 pt-6 border-t border-indigo-600">
            <h3 className="text-xl font-semibold mb-4 text-indigo-100">Follow Us</h3>
            <div className="flex space-x-6">
              <Link href="#" className="text-indigo-200 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-indigo-200 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.565 2.163-2.721-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.484 0-6.303 2.833-6.303 6.313 0 .493.044.975.132 1.437-5.257-.252-9.922-2.784-13.041-6.611-.545.937-.858 2.039-.858 3.226 0 2.182 1.111 4.103 2.801 5.23-.82-.026-1.59-.253-2.262-.625v.081c0 3.067 2.184 5.632 5.087 6.208-.4.11-.818.169-1.246.169-.307 0-.606-.028-.898-.088.799 2.503 3.127 4.335 5.889 4.385-2.179 1.718-4.925 2.738-7.904 2.738-.51 0-1.01-.03-1.5-.088 2.819 1.815 6.172 2.877 9.776 2.877 11.787 0 18.275-9.764 18.275-18.275 0-.278-.006-.554-.019-.828.79-.571 1.474-1.286 2.016-2.104z" />
                </svg>
              </Link>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>

        {/* Contact Form / Right Section */}
        <div className="p-10 sm:p-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                placeholder="Your Company Inc."
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            {submitMessage && (
              <p className={`text-sm ${submitMessage.includes('successfully') ? 'text-green-600' : 'text-red-600'} mt-2`}>
                {submitMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Optional: Frequently Asked Questions (FAQ) Section */}
      <div className="mt-24 mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
          Looking for Answers?
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10">
          Many common questions are answered in our comprehensive FAQ.
          You might find what you're looking for there!
        </p>
        <Link href="/faq" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-purple-600 hover:bg-purple-700 shadow-lg transform hover:scale-105 transition-all duration-300">
          Visit Our FAQ
          <ChevronRightIcon className="ml-3 h-5 w-5" />
        </Link>
      </div>

      ---

      {/* NEW: Schedule a Call Section */}
      <div className="mt-24 mx-auto max-w-7xl bg-white rounded-2xl shadow-xl p-10 sm:p-14 text-center flex flex-col items-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6 shadow-md">
          <CalendarDaysIcon className="w-10 h-10" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Prefer a Direct Conversation?
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Book a free consultation with our experts to discuss your specific needs and how our SaaS solution can help your business thrive.
        </p>
        <Link
          href="YOUR_CALENDLY_OR_SCHEDULING_LINK_HERE" // IMPORTANT: Replace with your actual scheduling link
          target="_blank" // Opens in a new tab
          rel="noopener noreferrer" // Security best practice for target="_blank"
          className="inline-flex items-center justify-center px-10 py-5 border border-transparent text-lg font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          Schedule a Call
          <ChevronRightIcon className="ml-3 h-6 w-6" />
        </Link>
      </div>
    </div>
  );
}