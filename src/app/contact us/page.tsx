import Image from "next/image";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { WorldMap } from "@/components/ui/world-map";

export default function ContactUsPage() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen flex items-center justify-center bg-black px-4 py-16">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Let The Work Begin!<br />with MIPL
            </h1>
            <p className="text-lg md:text-xl text-neutral-200 mb-10 max-w-lg">
              Whatever the challenge, MIPL is up to it<br />
              We’re happy to discuss your Portfolio and answer any question:
            </p>
            <div className="flex flex-col gap-6">
              <HoverBorderGradient containerClassName="w-fit" className="flex items-center gap-4 text-lg font-medium">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border text-black border-white bg-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                For Guest
              </HoverBorderGradient>
              <HoverBorderGradient containerClassName="w-fit" className="flex items-center gap-4 text-lg font-medium">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border text-black border-white bg-white">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                For Existing Customer
              </HoverBorderGradient>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/solutions_img.png"
              alt="Solutions"
              width={500}
              height={500}
              className="shadow-2xl object-contain bg-white/5"
              priority
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-16 bg-black">
        <div className="w-full max-w-6xl">
          <WorldMap />
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="w-full bg-black py-20 px-4 flex justify-center">
        <form className="w-full max-w-4xl mx-auto bg-black text-white rounded-lg">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1 h-px bg-white/30" />
              <span className="uppercase tracking-wider text-sm text-white/70">Investore/Entrepreneurs Questions</span>
              <div className="flex-1 h-px bg-white/30" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 mt-6">Any Questions?</h2>
            <p className="text-white/80 font-medium mb-1">We are always open to welcome new talents</p>
            <p className="text-white/60">Send your questions here</p>
          </div>
          <div className="mb-8">
            <label className="block text-white/80 mb-2" htmlFor="name">Name*</label>
            <input id="name" name="name" type="text" required className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 mb-6 text-white placeholder-white/60" placeholder="" />
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <label className="block text-white/80 mb-2" htmlFor="email">Email address *</label>
                <input id="email" name="email" type="email" required className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 mb-6 text-white placeholder-white/60" placeholder="" />
              </div>
              <div className="flex-1">
                <label className="block text-white/80 mb-2" htmlFor="phone">Phone number *</label>
                <input id="phone" name="phone" type="tel" required className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 mb-6 text-white placeholder-white/60" placeholder="" />
              </div>
            </div>
            <label className="block text-white/80 mb-2" htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={4} className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none py-2 mb-6 text-white placeholder-white/60 resize-none" placeholder="" />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-white text-black rounded-full px-10 py-3 font-medium text-lg shadow hover:bg-neutral-200 transition">Send</button>
          </div>
        </form>
      </div>
      {/* Dual Card Section: What MIPL's Known For & Looking for a Real Career? */}
      <div className="w-full bg-black py-24 flex justify-center items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0  overflow-hidden shadow-2xl border border-white">
          {/* Left Card */}
          <div className="bg-black flex flex-col justify-between p-10 min-h-[500px] relative">
          <h1 className="text-white md:text-4xl text-center mb-6">Our Services</h1>
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">What MIPL’s Known For</h2>
              <img src="/solution_left.png" alt="Business Service" className="rounded-lg mb-8 w-64 h-56 object-cover shadow-lg" />
              <button className="flex items-center gap-3 mt-4 text-lg font-medium text-white px-6 py-3 rounded-full border border-white bg-black hover:bg-white hover:text-black transition">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white bg-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Business Service
              </button>
            </div>
          </div>
          {/* Right Card */}
          <div className="bg-white flex flex-col justify-between p-10 min-h-[500px] relative">
          <h1 className="text-black md:text-4xl text-center mb-6">Build a Career</h1>
            <div className="flex flex-col h-full justify-between">
              <div className="relative mb-8">
                <img src="/solution_right.png" alt="Career" className="rounded-lg w-full h-56 object-cover opacity-60" />
                <h2 className="absolute top-6 left-6 text-3xl md:text-4xl font-bold text-black">Looking for a Real Career?</h2>
                <p className="absolute top-24 left-6 right-6 text-black text-base md:text-lg font-medium max-w-md">Our team is made up of passionate people who love to create. We are constantly on a look out for talented, high-performing, and enthusiastic people to join our team.</p>
              </div>
              <button className="flex items-center gap-3 mt-4 text-lg font-medium text-white px-6 py-3 rounded-full border border-black bg-black hover:bg-white hover:text-black transition">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white bg-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Join now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
