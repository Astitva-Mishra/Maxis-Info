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
    <div className="min-h-screen bg-white">
      {/* Top Hero Banner Section */}
      <div className="relative w-full h-[320px] md:h-[400px] flex items-center  overflow-hidden">
        <img
          src="/hero3.jpg"
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-start justify-center h-full pl-12 md:pl-24">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-2 text-left">
            Our Services
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80 italic drop-shadow text-left">
            Comprehensive Digital Solutions Tailored for Your Success
          </h2>
        </div>
      </div>
      {/* Add top margin to push content below navbar */}

      {/* Services Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl shadow-2xl p-8 w-full max-w-xs flex flex-col items-start justify-between min-h-[220px] bg-white text-gray-900 transition-all duration-300"
          >
            {/* Placeholder icon */}
            <div className="mb-4 text-orange-400">
              <svg
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              {service.title}
            </h3>
            <p className="text-sm mb-4 text-gray-600">
              {service.description[0]}
            </p>
            <a
              href="#"
              className="mt-auto text-xs font-semibold flex items-center gap-1 text-orange-400 hover:text-orange-600 transition-colors duration-200"
            >
              LEARN MORE <span className="ml-1">→</span>
            </a>
          </div>
        ))}
      </div>

      
      {/* Discover the Art Section */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8 relative">
          {/* Background image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img src="/hero3.jpg" alt="Teamwork" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10 py-12 flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-yellow-400 font-bold mb-2">Discover the Art</span>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center max-w-3xl">Expertise: Crafting Results-Driven Campaigns For Digital Marketing</h2>
            <p className="text-white/80 text-center max-w-2xl mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center mt-8">
              {/* Card 1 */}
              <div className="relative w-full max-w-md">
                <img src="/hero.jpg" alt="SEO Mastery" className="rounded-2xl w-full h-48 object-cover" />
                <div className="absolute bottom-4 left-4 bg-blue-900/90 rounded-xl p-6 shadow-lg flex items-center gap-3">
                  <span className="text-yellow-400 text-2xl">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">SEO Mastery</h3>
                    <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="relative w-full max-w-md">
                <img src="/hero.jpg" alt="Marketing Strategy" className="rounded-2xl w-full h-48 object-cover" />
                <div className="absolute bottom-4 left-4 bg-blue-900/90 rounded-xl p-6 shadow-lg flex items-center gap-3">
                  <span className="text-yellow-400 text-2xl">
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" /></svg>
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Marketing Strategy</h3>
                    <p className="text-white/80 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <img
          src="/hero.jpg"
          alt="Team"
          className="rounded-2xl w-full max-w-xs object-cover"
        />
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2">
            How It Works
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Excellent Work From Increased Website Traffic To Higher Conversion
            Rates.
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-orange-400">01.</span>
              <div>
                <span className="font-semibold text-gray-900">
                  Talk With Team
                </span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-orange-400">02.</span>
              <div>
                <span className="font-semibold text-gray-900">Make A Plan</span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold text-orange-400">03.</span>
              <div>
                <span className="font-semibold text-gray-900">
                  Digital Marketing Work
                </span>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <span className="text-xs uppercase tracking-widest text-orange-400 font-bold mb-2">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Discover The Reasons Why Brands Choose Us As Their Digital Marketing
            Partner.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="rounded-2xl bg-gradient-to-br from-yellow-400 via-orange-300 to-yellow-200 text-white p-6 font-semibold shadow">
              Strategic Expertise
              <p className="text-yellow-100 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="rounded-2xl bg-white text-gray-900 p-6 font-semibold shadow">
              Creative Innovation
              <p className="text-gray-500 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="rounded-2xl bg-white text-gray-900 p-6 font-semibold shadow">
              Data-Driven Results
              <p className="text-gray-500 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="rounded-2xl bg-white text-gray-900 p-6 font-semibold shadow">
              Collaborative Partnership
              <p className="text-gray-500 text-sm font-normal mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/hero.jpg"
          alt="Workspace"
          className="rounded-2xl w-full max-w-xs object-cover"
        />
          </div>
        </div>
      </section>
    </div>
  );
}
