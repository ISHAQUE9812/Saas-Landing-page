// src/CoreFeatures.jsx
import React from 'react';
import Image from 'next/image';
import { ChartBarIcon, RocketLaunchIcon, PencilSquareIcon, UsersIcon, GlobeAltIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

const featureImages = {
  dashboard: 'https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-6238-61fb-af61-5bf6ef95c933/raw?se=2025-07-10T06%3A52%3A46Z&sp=r&sv=2024-08-04&sr=b&scid=fe5a128f-e157-5467-878d-0aefaf68ea50&skoid=f71d6506-3cac-498e-b62a-67f9228033a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-09T19%3A51%3A35Z&ske=2025-07-10T19%3A51%3A35Z&sks=b&skv=2024-08-04&sig=cGg%2Bpc%2Bz4TNhe3Yh6XOwgwmI2x5jG20oG7akWIU%2BRTg%3D',
  automation: '/placeholder-feature-automation.png',
  reporting: '/placeholder-feature-reporting.png',
  collaboration: '/placeholder-feature-collaboration.png',
  globalAccess: '/placeholder-feature-global-access.png',
  integrations: '/placeholder-feature-integrations.png',
};

const featuresData = [
  {
    
    title: 'Intuitive Analytics Dashboard',
    description: 'Gain real-time insights into your performance with a customizable dashboard. Visualize key metrics, identify trends, and make data-driven decisions instantly.',
    icon: ChartBarIcon,
    image: 'https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-6238-61fb-af61-5bf6ef95c933/raw?se=2025-07-10T06%3A52%3A46Z&sp=r&sv=2024-08-04&sr=b&scid=fe5a128f-e157-5467-878d-0aefaf68ea50&skoid=f71d6506-3cac-498e-b62a-67f9228033a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-09T19%3A51%3A35Z&ske=2025-07-10T19%3A51%3A35Z&sks=b&skv=2024-08-04&sig=cGg%2Bpc%2Bz4TNhe3Yh6XOwgwmI2x5jG20oG7akWIU%2BRTg%3D'
  },
  {
    
    title: 'Smart Workflow Automation',
    description: 'Automate repetitive tasks and complex workflows to boost efficiency. Free up your team to focus on strategic initiatives, reducing manual effort and errors.',
    icon: RocketLaunchIcon,
    image: featureImages.automation,
  },
  {
    
    title: 'Advanced Reporting & Insights',
    description: 'Generate comprehensive, customizable reports that provide actionable intelligence. Deep dive into your data to uncover opportunities and optimize your strategies.',
    icon: PencilSquareIcon,
    image: featureImages.reporting,
  },
  {
    
    title: 'Seamless Team Collaboration',
    description: 'Empower your team with integrated collaboration tools. Share projects, communicate effortlessly, and keep everyone aligned, no matter where they are.',
    icon: UsersIcon,
    image: featureImages.collaboration,
  },
  {
    
    title: 'Global Accessibility & Scalability',
    description: 'Access your powerful tools from anywhere in the world. Our cloud-native architecture ensures your solution scales effortlessly as your business grows.',
    icon: GlobeAltIcon,
    image: featureImages.globalAccess,
  },
  {
    
    title: 'Robust Third-Party Integrations',
    description: 'Connect seamlessly with your existing tech stack. Integrate with your favorite CRM, marketing, and accounting tools to centralize your operations.',
    icon: PuzzlePieceIcon,
    image: 'https://preview.uideck.com/items/saaspal/assets/img/about/about-2.png'
  },
];

export default function CoreFeatures() {
  return (
    <section id='features'  className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Powerful <span className="text-indigo-600">Core Features</span> That Drive Your Growth
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform is meticulously crafted to simplify complexity, enhance productivity, and provide you with the competitive advantage you need.
          </p>
        </div>

        {/* Features Grid - Alternating Layout */}
        <div className="grid grid-cols-1 gap-y-16 md:gap-y-24">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 md:gap-16 lg:gap-20`}
            >
              {/* Feature Image Block */}
              <div className="flex-1 w-full relative group transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl rounded-lg">
                <Image
                  src='https://sdmntprwestcentralus.oaiusercontent.com/files/00000000-6238-61fb-af61-5bf6ef95c933/raw?se=2025-07-10T06%3A52%3A46Z&sp=r&sv=2024-08-04&sr=b&scid=fe5a128f-e157-5467-878d-0aefaf68ea50&skoid=f71d6506-3cac-498e-b62a-67f9228033a9&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-07-09T19%3A51%3A35Z&ske=2025-07-10T19%3A51%3A35Z&sks=b&skv=2024-08-04&sig=cGg%2Bpc%2Bz4TNhe3Yh6XOwgwmI2x5jG20oG7akWIU%2BRTg%3D'
                  alt={feature.title}
                  width={700}
                  height={400}
                  layout="responsive"
                  className="rounded-lg border border-gray-100 shadow-xl"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-indigo-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg"></div>
              </div>

              {/* Feature Content Block */}
              <div className="flex-1 text-center lg:text-left">
                {/* Icon with background */}
                <div className="inline-flex items-center justify-center p-4 rounded-full bg-indigo-100 text-indigo-600 mb-6 text-4xl">
                  <feature.icon className="h-10 w-10" aria-hidden="true" />
                </div>
                {/* Feature Title */}
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}