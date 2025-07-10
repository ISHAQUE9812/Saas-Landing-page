// Features/page.js
'use client'; // Required for client-side interactions like useState, useEffect, IntersectionObserver

import React, { useEffect, useRef, useCallback } from 'react'; // Import useCallback for memoized function
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component for optimization
import {
  PresentationChartBarIcon,
  ArrowPathIcon,
  ChartPieIcon,
  ChatBubbleLeftRightIcon,
  CloudIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";

// Define your features data here, it's good practice to keep data separate if it grows large
export const featuresData = [
  {
    title: "Analytics Dashboard",
    description: "Get real-time insights with beautiful, customizable dashboards. Make fast, informed decisions.",
    icon: PresentationChartBarIcon,
    image: "/images/features/analytics-dashboard.png",
    alt: "Screenshot of an analytics dashboard showing charts and data", // More descriptive alt text
  },
  {
    title: "Workflow Automation",
    description: "Automate routine tasks and build scalable workflows to increase productivity.",
    icon: ArrowPathIcon,
    image: "/images/features/workflow-automation.png",
    alt: "Illustration of automated workflow with connected tasks",
  },
  {
    title: "Reporting & Insights",
    description: "Generate in-depth reports and extract valuable business insights from your data.",
    icon: ChartPieIcon,
    image: "/images/features/reporting-insights.png",
    alt: "Charts and graphs representing business reports and insights",
  },
  {
    title: "Team Collaboration",
    description: "Built-in tools for real-time team collaboration from anywhere in the world.",
    icon: ChatBubbleLeftRightIcon,
    image: "/images/features/team-collaboration.png",
    alt: "People collaborating on a project screen",
  },
  {
    title: "Cloud Scalability",
    description: "Easily scale your infrastructure globally with blazing fast performance.",
    icon: CloudIcon,
    image: "/images/features/cloud-scalability.png",
    alt: "Cloud computing infrastructure expanding",
  },
  {
    title: "3rd-Party Integrations",
    description: "Connect your CRM, marketing, and accounting tools seamlessly with our robust APIs.",
    icon: CommandLineIcon,
    image: "/images/features/integrations.png",
    alt: "Various app logos connected via API integrations",
  },
];

const Features = () => {
  const featureRefs = useRef([]); // Use ref for direct DOM access for IntersectionObserver

  // Memoize the callback for IntersectionObserver to prevent unnecessary re-creations
  const handleIntersection = useCallback((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInUp');
        entry.target.classList.remove('opacity-0'); // Remove initial opacity
        observer.unobserve(entry.target); // Stop observing once animated
      }
    });
  }, []); // Empty dependency array ensures it's created once

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Trigger when 10% of the item is visible
      rootMargin: '0px 0px -50px 0px', // Optional: Start animation a bit before it's fully in view
    });

    // Ensure we're observing current refs
    featureRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    // Cleanup observer on component unmount
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
      observer.disconnect(); // Disconnect observer when component unmounts
    };
  }, [handleIntersection]); // Dependency on handleIntersection to re-run if it changes (though it's memoized)

  return (
    <main className="bg-gradient-to-br from-gray-50 to-indigo-50 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"> {/* Add overflow-hidden to prevent horizontal scroll from animations */}
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-20 animate-fade-in-up-stagger"> {/* Custom class for staggered animation */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          <span className="block animate-slide-in-left">Unlock Your Potential</span>
          <span className="block animate-slide-in-right delay-200">with Our Advanced Features</span>
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-6 animate-fade-in-up delay-400">
          We've crafted a suite of powerful tools designed to streamline your operations,
          boost productivity, and accelerate your growth journey.
        </p>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto grid gap-10 md:gap-x-8 md:gap-y-14 lg:grid-cols-2 xl:grid-cols-3"> {/* Slightly reduced gaps */}
        {featuresData.map((feature, index) => (
          <div
            key={index} // Using index as key is okay for static lists, but unique IDs are preferred if list changes
            ref={(el) => (featureRefs.current[index] = el)}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 group flex flex-col items-center text-center opacity-0" // Added ease-out for smoother animation curve
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 text-indigo-600 mb-6 shadow-md group-hover:bg-indigo-100 transition-colors duration-300">
              <feature.icon className="w-8 h-8" aria-hidden="true" /> {/* Add aria-hidden for decorative icons */}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
              {feature.title}
            </h3>

            <p className="text-base text-gray-600 leading-relaxed mb-6">
              {feature.description}
            </p>

            {/* Feature Image - Using Next.js Image for optimization */}
            <div className="w-full relative overflow-hidden rounded-xl shadow-lg mt-auto flex-shrink-0 aspect-w-16 aspect-h-9"> {/* Added aspect ratio classes */}
              <Image
                src={feature.image}
                alt={feature.alt}
                fill // Use fill instead of width/height for responsive image within parent with aspect ratio
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimize image loading
                className="transition-transform duration-500 ease-out group-hover:scale-105 object-cover" // Added ease-out
                loading="lazy" // Explicitly set lazy loading (default in Next.js Image)
              />
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action Section */}
      <section className="mt-24 text-center max-w-4xl mx-auto px-4"> {/* Added px-4 for smaller screens */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Ready to Elevate Your Workflow?
        </h2>
        <p className="text-xl text-gray-700 mb-10">
          Explore a personalized demo, start your free trial, or connect with our team to find the perfect fit for your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"> {/* Responsive buttons */}
          <Link href="/demo" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-300 ease-out">
            Request a Demo
          </Link>
          <Link href="/signup" className="inline-flex items-center justify-center px-8 py-4 border border-indigo-600 text-base font-semibold rounded-full text-indigo-600 bg-transparent hover:bg-indigo-50 transform hover:scale-105 transition-all duration-300 ease-out">
            Start Free Trial
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Features;