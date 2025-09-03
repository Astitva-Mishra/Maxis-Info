import OurClients from "@/components/ourclients";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Whychoose from "@/components/whychoose";
import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">
            Why MIPL Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Growth of our customers and employees has always been the centre
            point of all our endeavors and we have been consistently achieving
            this since decades by respecting ethics and bringing out human
            aspect to all our creative accomplishments.
          </p>
        </div>
      </div>

      <Whychoose />
      <OurClients />

      {/* CTA Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Let's discuss how we can help you achieve your goals with innovative
            technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-200"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
