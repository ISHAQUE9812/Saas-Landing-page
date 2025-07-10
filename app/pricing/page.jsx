// Pricing/page.js
'use client'; // Required for using useState in an App Router page

import Link from 'next/link';
import { useState } from 'react'; // Import useState for the billing toggle

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false); // State for monthly/annual toggle

  const pricingPlans = [
    {
      name: 'Basic',
      monthlyPrice: '$19',
      annualPrice: '$199', // Add annual price
      features: [
        '5 Projects',
        '10 GB Storage',
        'Basic Analytics',
        'Community Support',
        'Email Support',
      ],
      buttonText: 'Start Free Trial',
      buttonLink: '/signup',
      isPrimary: false,
    },
    {
      name: 'Pro',
      monthlyPrice: '$49',
      annualPrice: '$499', // Add annual price
      features: [
        'Unlimited Projects',
        '100 GB Storage',
        'Advanced Analytics',
        'Priority Support',
        'Custom Integrations',
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup',
      isPrimary: true,
    },
    {
      name: 'Enterprise',
      monthlyPrice: 'Custom', // Even if custom, keep the structure
      annualPrice: 'Custom',
      features: [
        'All Pro Features',
        'Dedicated Support Manager',
        'On-premise Deployment',
        'SLA Guaranteed Uptime',
        'Custom Development',
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      isPrimary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl leading-tight">
          Flexible Plans for Every Team
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl mx-auto">
          Choose the perfect plan that scales with your growth, offering transparent pricing and no hidden fees.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="mt-10 flex justify-center"> {/* Reduced mt */}
        <div className="inline-flex rounded-full bg-white p-1 shadow-inner ring-1 ring-gray-200">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 ${ // Reduced px and py
              !isAnnual ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 relative ${ // Reduced px and py
              isAnnual ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Annual Billing
            <span className="ml-2 absolute -top-1 -right-1 bg-purple-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full rotate-6 transform origin-top-right"> {/* Adjusted positioning and padding */}
              Save 20%!
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="mt-12 mx-auto max-w-7xl"> {/* Reduced mt */}
        <div className="grid grid-cols-1 gap-y-8 gap-x-6 lg:grid-cols-3 items-stretch"> {/* Reduced gap-y and gap-x */}
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${ // Slightly less aggressive hover scale and shadow
                plan.isPrimary ? 'ring-4 ring-indigo-600 bg-white' : 'ring-1 ring-gray-200 bg-white'
              }`}
            >
              <div className="p-6 sm:p-7 flex-grow flex flex-col justify-between"> {/* Reduced padding */}
                <div>
                  <h3
                    className={`text-2xl leading-7 font-extrabold ${ // Reduced font size
                      plan.isPrimary ? 'text-indigo-700' : 'text-gray-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <div className="mt-4 flex items-baseline"> {/* Reduced mt */}
                    <span className="text-5xl font-extrabold tracking-tight text-gray-900"> {/* Reduced font size */}
                      {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    {plan.frequency && (
                      <span className="ml-1.5 text-xl font-medium text-gray-500"> {/* Reduced ml and font size */}
                        {isAnnual ? '/year' : plan.frequency}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-gray-600"> {/* Reduced mt and font size */}
                    {plan.name === 'Basic' && 'Ideal for individuals and small teams getting started.'}
                    {plan.name === 'Pro' && 'Perfect for growing teams needing advanced features and priority support.'}
                    {plan.name === 'Enterprise' && 'Tailored solutions for large organizations with unique demands.'}
                  </p>
                  <ul role="list" className="mt-6 space-y-3"> {/* Reduced mt and space-y */}
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        {/* Checkmark Icon */}
                        <svg
                          className="flex-shrink-0 h-5 w-5 text-green-500 mt-0.5" // Reduced size and mt
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-2.5 text-sm text-gray-700">{feature}</span> {/* Reduced ml and font size */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 p-5 rounded-b-xl"> {/* Reduced padding */}
                <Link
                  href={plan.buttonLink}
                  className={`block w-full py-3.5 px-5 border border-transparent rounded-lg text-center text-base font-semibold transition-colors duration-300 ${ // Reduced padding and font size
                    plan.isPrimary
                      ? 'text-white bg-indigo-600 hover:bg-indigo-700 shadow-md' // Reduced shadow
                      : 'text-indigo-600 bg-white border-indigo-600 hover:bg-indigo-50 shadow-sm' // Reduced shadow
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What's Included Section (Optional, more detailed breakdown) */}
      <div className="mt-20 mx-auto max-w-7xl"> {/* Reduced mt */}
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10"> {/* Reduced font size and mb */}
          What's Included in Each Plan?
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-7"> {/* Reduced shadow and padding */}
            <h3 className="text-xl font-bold text-gray-800 mb-3">Detailed Feature Comparison</h3> {/* Reduced font size and mb */}
            <p className="text-gray-600 mb-5 text-sm"> {/* Reduced mb and font size */}
                A closer look at the powerful features available across our plans.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-5 py-2.5 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> {/* Reduced px and py */}
                                Feature
                            </th>
                            <th scope="col" className="px-5 py-2.5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Basic
                            </th>
                            <th scope="col" className="px-5 py-2.5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Pro
                            </th>
                            <th scope="col" className="px-5 py-2.5 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Enterprise
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Project Limit</td> {/* Reduced px and py */}
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">5</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Unlimited</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Unlimited</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Storage</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">10 GB</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">100 GB</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Custom</td>
                        </tr>
                        {/* Add more rows for other features */}
                        <tr>
                            <td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Analytics</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Basic</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Advanced</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Custom</td>
                        </tr>
                        <tr>
                            <td className="px-5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">Support</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Community & Email</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Priority</td>
                            <td className="px-5 py-3 whitespace-nowrap text-center text-sm text-gray-500">Dedicated Manager</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>

      {/* Optional: FAQ or Contact Section */}
      <div className="mt-20 mx-auto max-w-7xl text-center"> {/* Reduced mt */}
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Have More Questions?</h2> {/* Reduced font size */}
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"> {/* Reduced mt */}
          We're here to help! Explore our comprehensive <Link href="/faq" className="text-indigo-600 hover:underline font-semibold">FAQ section</Link> or feel free to <Link href="/contact" className="text-indigo-600 hover:underline font-semibold">contact us directly</Link> for personalized assistance.
        </p>
      </div>
    </div>
  );
}