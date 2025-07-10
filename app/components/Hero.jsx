import React from "react";
import Image from "next/image"; // For optimized images
import Link from "next/link"; // For navigation

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-indigo-50 to-white py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center md:text-left z-10">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                Manage Your Business{" "}
                <span className="text-indigo-600">Smarter, Not Harder</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg mx-auto md:mx-0">
                Streamline your workflows, boost productivity, and make
                data-driven decisions with our intuitive SaaS solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                {/* Get Started Free Button - now styled directly */}
                <Link
                  href="/auth/signup"
                  className="font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 px-6 py-3 text-lg"
                >
                  Get Started Free
                </Link>
                {/* Learn More Button - now styled directly */}
                <Link
                  href="/features"
                  className="font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 focus:ring-indigo-500 px-6 py-3 text-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Hero Image / Illustration */}
            <div className="flex-1 relative order-first md:order-last">
              {/* Replace with your actual hero image/illustration (e.g., a dashboard screenshot) */}
              <Image
                src="https://preview.uideck.com/items/blaze/assets/images/hero/hero-image.svg"
                alt="SaaS Dashboard Illustration"
                width={700}
                height={500}
                className="rounded-lg shadow-xl border border-gray-100"
                priority
              />

              {/* Optional: Add some subtle background shapes for visual interest - Requires Tailwind keyframe animations defined in globals.css/tailwind.config.js */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            </div>
          </div>
        </section>
        {/* Brand Logos Section */}
<section className="py-8 bg-white">
  <div className="container mx-auto px-6">
    <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
      <Image
        src="https://preview.uideck.com/items/blaze/assets/images/brands/graygrids.svg"
        alt="GrayGrids Logo"
        width={140}
        height={40}
      />
      <Image
        src="https://preview.uideck.com/items/blaze/assets/images/brands/lineicons.svg"
        alt="LineIcons Logo"
        width={140}
        height={40}
      />
      <Image
        src="https://preview.uideck.com/items/blaze/assets/images/brands/uideck.svg"
        alt="UIdeck Logo"
        width={140}
        height={40}
      />
      <Image
        src="https://preview.uideck.com/items/blaze/assets/images/brands/pagebulb.svg"
        alt="PageBulb Logo"
        width={140}
        height={40}
      /> 
      <Image
       src='https://play-tailwind.tailgrids.com/assets/images/brands/lineicons.svg' alt=""
       width={140}
       height={40}
      />
       <Image
       src='https://play-tailwind.tailgrids.com/assets/images/brands/uideck.svg' alt=""
       width={140}
       height={40}
      />
       <Image
       src='https://play-tailwind.tailgrids.com/assets/images/brands/graygrids.svg' alt=""
       width={140}
       height={40}
      />
      <Image
       src='https://play-tailwind.tailgrids.com/assets/images/brands/ayroui.svg' alt=""
       width={140}
       height={40}
      />
    </div>
  </div>
</section>


        {/* 2. Features Section: Highlight key benefits with icons and short descriptions */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Powerful Features to Elevate Your Business
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Our platform offers a suite of tools designed to simplify your
              operations and amplify your success.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="text-indigo-600 mb-4 inline-block p-3 rounded-full bg-indigo-50">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Intuitive Dashboard
                </h3>
                <p className="text-gray-600">
                  Gain a clear overview of your key metrics and performance at a
                  glance with our customizable dashboard.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="text-green-600 mb-4 inline-block p-3 rounded-full bg-green-50">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c1.333-1.333 2.667-1.333 4 0 1.333 1.333 1.333 2.667 0 4-1.333 1.333-2.667 1.333-4 0-1.333-1.333-1.333-2.667 0-4zM12 12v.01M12 3v1m-4.5 4.5l-.707-.707M3 12h1m4.5 4.5l-.707.707M12 21v-1m4.5-4.5l.707.707M21 12h-1m-4.5-4.5l.707-.707M12 6c-2.209 0-4 1.791-4 4v4h8v-4c0-2.209-1.791-4-4-4z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Automated Workflows
                </h3>
                <p className="text-gray-600">
                  Set up smart automations to handle repetitive tasks, saving
                  you time and reducing manual errors.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-200">
                <div className="text-blue-600 mb-4 inline-block p-3 rounded-full bg-blue-50">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Customizable Reporting
                </h3>
                <p className="text-gray-600">
                  Create detailed reports tailored to your needs, providing
                  actionable insights for growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Testimonials Section: Build trust with customer quotes */}
        <section className="py-16 md:py-24 bg-indigo-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Hear from businesses that have transformed their operations with
              our solution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial Card 1 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <p className="text-lg italic text-gray-700 mb-6">
                  "This app revolutionized how we manage our projects. The
                  dashboard is incredibly intuitive!"
                </p>
                <div className="flex items-center justify-center">
                  {/* Replace with actual user avatar */}
                  <Image
                    src="/placeholder-avatar1.png"
                    alt="User Avatar"
                    width={56}
                    height={56}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">Jane Doe</p>
                    <p className="text-sm text-gray-500">CEO, Tech Solutions</p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 2 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <p className="text-lg italic text-gray-700 mb-6">
                  "The automation features saved us countless hours every week.
                  Highly recommend!"
                </p>
                <div className="flex items-center justify-center">
                  {/* Replace with actual user avatar */}
                  <Image
                    src="/placeholder-avatar2.png"
                    alt="User Avatar"
                    width={56}
                    height={56}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">John Smith</p>
                    <p className="text-sm text-gray-500">
                      Operations Manager, Global Corp
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Card 3 */}
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <p className="text-lg italic text-gray-700 mb-6">
                  "Customer support is top-notch, and the customization options
                  are endless. A game-changer for our small business."
                </p>
                <div className="flex items-center justify-center">
                  {/* Replace with actual user avatar */}
                  <Image
                    src="/placeholder-avatar3.png"
                    alt="User Avatar"
                    width={56}
                    height={56}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-800">Emily White</p>
                    <p className="text-sm text-gray-500">
                      Founder, Creative Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Call to Action (CTA) Section: Final push for conversion */}
        <section className="py-16 md:py-24 bg-indigo-600 text-white text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of satisfied customers who are already boosting
              their efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Start Your Free Trial Button - now styled directly */}
              <Link
                href="/auth/signup"
                className="font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 !bg-white !text-indigo-600 hover:!bg-gray-100 px-6 py-3 text-lg"
              >
                Start Your Free Trial
              </Link>
              {/* Contact Sales Button - now styled directly */}
              <Link
                href="/contact"
                className="font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 !border-white !text-white hover:!bg-white hover:!text-indigo-600 border-2 px-6 py-3 text-lg"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
