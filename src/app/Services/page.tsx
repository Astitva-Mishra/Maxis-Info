"use client";
import React from "react";

// Example service data with descriptions
const services = [
  {
    title: "Professional Services",
    id: "professional-details",
    description: [
      "Expert execution and strategic guidance for your business needs.",
      "Manage day-to-day IT challenges while driving efficiency and enhancing service levels.",
      "Measurable results delivered by experienced professionals.",
    ],
  },
  {
    title: "Business Services",
    id: "business-details",
    description: [
      "Comprehensive business solutions tailored to your goals.",
      "Process optimization, workflow automation, and operational support.",
      "Drive growth and maximize productivity.",
    ],
  },
  {
    title: "Management Services",
    id: "management-details",
    description: [
      "End-to-end management for projects and teams.",
      "Strategic planning, resource allocation, and performance monitoring.",
      "Achieve objectives efficiently and effectively.",
    ],
  },
  {
    title: "Cyber Security",
    id: "cyber-details",
    description: [
      "Protect your digital assets with advanced security solutions.",
      "Threat detection, risk assessment, and incident response.",
      "Safeguard your business from cyber threats.",
    ],
  },
  {
    title: "Web Development",
    id: "webdev-details",
    description: [
      "Custom websites and web applications built for performance.",
      "Modern design, responsive layouts, and seamless user experience.",
      "Grow your online presence with expert development.",
    ],
  },
  {
    title: "Mobile Development",
    id: "mobile-details",
    description: [
      "Native and cross-platform mobile apps for all devices.",
      "User-centric design and robust functionality.",
      "Expand your reach with mobile solutions.",
    ],
  },
  {
    title: "Brand Association",
    id: "brand-details",
    description: [
      "Strategic partnerships to elevate your brand.",
      "Brand positioning, co-marketing, and reputation management.",
      "Build trust and recognition in your market.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Add top margin to push content below navbar */}
      <main className="px-8 pt-32 pb-16">
        <h2 className="text-6xl font-bold text-white mb-12 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {services.map((service, idx) => (
            <button
              key={service.id}
              className="bg-gray-800 rounded-lg shadow-lg w-32 h-32 flex items-center justify-center text-base font-bold text-white hover:bg-gray-700 transition-colors duration-200"
              onClick={() => {
                document
                  .getElementById(service.id)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Details Sections */}
        <div className="mt-24 flex flex-col gap-16 items-center w-full">
          {services.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="flex justify-center items-center px-4 w-full"
            >
              <div className="bg-gray-800 text-white p-12 rounded-2xl w-full max-w-4xl flex flex-col items-center shadow-xl">
                <h3 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  {service.title}
                </h3>
                <ul className="list-disc pl-6 text-base md:text-lg space-y-2 text-left w-full max-w-2xl mx-auto">
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
