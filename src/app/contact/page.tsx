import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { WorldMap } from "@/components/ui/world-map";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Contact Us */}
      <section className="w-full bg-white pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="max-w-4xl w-full flex flex-col items-center justify-center text-center mx-auto">
          <span className="text-blue-600 font-semibold mb-2">Contact us</span>
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
            Get in touch with our team
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We have the team and know-how to help you scale 10x faster.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-8">
          <Image
            src="/map.png"
            alt="World Map"
            width={900}
            height={400}
            className="rounded-2xl border border-gray-200 object-contain"
            priority
          />
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="w-full bg-gray-50 py-20 flex justify-center items-center">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-start gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Let The Work Begin! with MIPL
              </h2>
              <p className="text-gray-700 mb-4">
                Whatever the challenge, MIPL is up to it We are happy to discuss
                your Portfolio and answer any questions:
              </p>
              <div className="mb-2 text-gray-800 font-medium">
                sales@MaxisInfo.net
              </div>
              <div className="mb-2 text-gray-800 font-medium">
                +91 1145540318
              </div>
              <a href="#" className="text-blue-600 underline font-medium">
                Customer Support
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Customer Support
                </h3>
                <p className="text-gray-600 text-sm">
                  Our support team is available around the clock to address any
                  concerns or queries you may have.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Feedback and Suggestions
                </h3>
                <p className="text-gray-600 text-sm">
                  We value your feedback and are continuously working to improve
                  Maxis. Your input is crucial in shaping the future of our
                  services.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Media Inquiries
                </h3>
                <p className="text-gray-600 text-sm">
                  For media-related questions or press inquiries, please contact
                  us at sales@MaxisInfo.net.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Any Questions? Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                We are always open to welcome new talents Send your questions
                here
              </p>
              <form className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="flex-1 min-w-0 flex-shrink bg-gray-100 rounded-lg px-4 py-3 text-gray-900 border border-gray-200"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="flex-1 min-w-0 flex-shrink bg-gray-100 rounded-lg px-4 py-3 text-gray-900 border border-gray-200"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-100 rounded-lg px-4 py-3 text-gray-900 border border-gray-200"
                />
                <div className="flex gap-4">
                  {/* <select className="bg-gray-100 rounded-lg px-4 py-3 text-gray-900 border border-gray-200">
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                  </select> */}
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="flex-1 bg-gray-100 rounded-lg px-4 py-3 text-gray-900 border border-gray-200"
                  />
                </div>
                <textarea
                  maxLength={100}
                  placeholder="Your Message"
                  className="bg-gray-100 rounded-lg px-4 py-3 text-gray-900 border border-gray-200 resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold text-lg mt-2 shadow hover:bg-blue-700 transition"
                >
                  Submit
                </button>
                <div className="text-xs text-gray-500 mt-2 text-center">
                  By contacting us, you agree to our{" "}
                  <span className="font-semibold text-gray-700">Terms</span> of
                  service and{" "}
                  <span className="font-semibold text-gray-700">
                    Privacy Policy
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
