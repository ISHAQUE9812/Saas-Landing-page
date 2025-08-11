import React from 'react';
import Image from 'next/image';
import { ChartBarIcon, RocketLaunchIcon, PencilSquareIcon, UsersIcon, GlobeAltIcon, PuzzlePieceIcon } from '@heroicons/react/24/outline';

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
    image: 'https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U21hcnQlMjBXb3JrZmxvdyUyMEF1dG9tYXRpb258ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Advanced Reporting & Insights',
    description: 'Generate comprehensive, customizable reports that provide actionable intelligence. Deep dive into your data to uncover opportunities and optimize your strategies.',
    icon: PencilSquareIcon,
    image: 'https://plus.unsplash.com/premium_photo-1691223714409-b0cb1629f0f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWR2YW5jZWQlMjBSZXBvcnRpbmclMjAlMjYlMjBJbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D'
  },
  {
    title: 'Seamless Team Collaboration',
    description: 'Empower your team with integrated collaboration tools. Share projects, communicate effortlessly, and keep everyone aligned, no matter where they are.',
    icon: UsersIcon,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dbe-EcBtlT4lZHz4FW8Pp5k5Qc4VcM45ew&s'
  },
  {
    title: 'Global Accessibility & Scalability',
    description: 'Access your powerful tools from anywhere in the world. Our cloud-native architecture ensures your solution scales effortlessly as your business grows.',
    icon: GlobeAltIcon,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bCOrOSGrhWPTP56kw7LqYZHJY9eZMHM2mg&s'
  },
  {
    title: 'Robust Third-Party Integrations',
    description: 'Connect seamlessly with your existing tech stack. Integrate with your favorite CRM, marketing, and accounting tools to centralize your operations.',
    icon: PuzzlePieceIcon,
    image: 'data:image/png;base64,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'
  },
];

export default function Features() {
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
                  src={feature.image}
                  alt={feature.title}
                  width={700}
                  height={400}
                  className="rounded-lg border border-gray-100 shadow-xl w-full h-auto"
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
