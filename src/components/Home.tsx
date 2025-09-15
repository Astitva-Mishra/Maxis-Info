"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Enhanced HoverBorderGradient component (keeping original)
const HoverBorderGradient = ({ 
  children, 
  className = "", 
  borderRadius = "1.75rem" 
}: {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
}) => {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none"></div>
      <button 
        className={`relative px-8 py-3 bg-black text-white font-medium transition-all duration-300 group-hover:bg-gray-900 group-hover:scale-105`}
        style={{ borderRadius }}
      >
        {children}
      </button>
    </div>
  );
};

// Subtle light-themed particles
const LightParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gray-300/40 rounded-full animate-float-gentle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 15}s`,
            animationDuration: `${20 + Math.random() * 25}s`,
          }}
        />
      ))}
    </div>
  );
};

// Professional light-themed Service Card
const ServiceCard = ({ card, index }: { card: { title: string; desc: string; link: string }; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const icons = {
    "Professional Services": "⚡",
    "Business Services": "📊",
    "Management Services": "⚙️",
    "Cyber Security": "🔒",
    "Web Development": "🌐",
    "Mobile Development": "📱",
    "Brand Association": "🤝"
  };

  return (
    <div
      className={`group relative bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-xl transition-all duration-500 p-8 flex flex-col justify-between min-h-[240px] transform hover:-translate-y-2 hover:scale-[1.02]`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="text-3xl mb-6 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 transform group-hover:scale-110">
          {icons[card.title as keyof typeof icons] || "✦"}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
          {card.desc}
        </p>
      </div>
      
      <Link href={card.link} className="relative z-10 mt-6">
        <button className={`relative overflow-hidden bg-gray-900 hover:bg-gray-800 text-white rounded-xl p-3 w-12 h-12 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${isHovered ? 'shadow-lg shadow-gray-900/20' : ''}`}>
          <span className="text-lg transform transition-transform duration-300 group-hover:rotate-45">↗</span>
        </button>
      </Link>
    </div>
  );
};

function Home() {
  const headingRef = useRef(null);
  const features1Ref = useRef(null);
  const features2Ref = useRef(null);
  const features3Ref = useRef(null);
  const solutionsRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animation = target.dataset.animation;
            if (animation) {
              target.classList.add(animation);
            }
            // Add stagger animation to children
            const children = target.querySelectorAll('[data-stagger]');
            children.forEach((child, index) => {
              setTimeout(() => {
                (child as HTMLElement).classList.add('animate-slide-up');
              }, index * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    
    [headingRef, features1Ref, features2Ref, features3Ref, solutionsRef].forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    
    return () => {
      [headingRef, features1Ref, features2Ref, features3Ref, solutionsRef].forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <style jsx global>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          25% { transform: translateY(-8px) translateX(3px); opacity: 0.8; }
          50% { transform: translateY(4px) translateX(-3px); opacity: 0.4; }
          75% { transform: translateY(-4px) translateX(3px); opacity: 0.8; }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-float-gentle {
          animation: float-gentle linear infinite;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-down {
          animation: slide-down 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-left {
          animation: slide-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-slide-right {
          animation: slide-right 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        
        .glass-light {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        
        .text-gradient-light {
          background: linear-gradient(135deg, #059669, #0d9488, #0891b2);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .shadow-elegant {
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
        
        .border-gradient-light {
          position: relative;
        }
        
        .border-gradient-light::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 1px;
          background: linear-gradient(135deg, #e5e7eb, #f3f4f6, #e5e7eb);
          border-radius: inherit;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask-composite: exclude;
        }
      `}</style>
      
      <div>
        {/* ORIGINAL HERO SECTION - KEEPING EXACTLY AS PROVIDED */}
        <div
          className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/hero3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          <div className="p-4 relative z-10 w-full text-center">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Maxis Info Trades Pvt. Ltd.
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
              We Create Custom Web Solutions And Software That Elevate Your
              Brand And Connect You With Your Ideal Clients, Driving Your
              Business To New Heights With Innovation And Excellence.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <div>
                <Link href="/about">
                  <HoverBorderGradient border-radius="1.75rem">
                    About
                  </HoverBorderGradient>
                </Link>
              </div>
              <div>
                <Link href="/Services">
                  <HoverBorderGradient border-radius="1.75rem">
                    Services
                  </HoverBorderGradient>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Light Theme Heading Section */}
        <div className="w-full py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
          <LightParticles />
          <div className="container mx-auto px-6 relative z-10">
            <h1
              ref={headingRef}
              data-animation="animate-slide-down"
              className="text-3xl md:text-6xl font-bold text-center mb-8 tracking-tight text-gray-900 max-w-6xl mx-auto leading-tight"
            >
              SHAPING THE
              <span className="text-gradient-light font-black block mt-2"> FUTURE WITH AGILE</span> 
              <span className="text-gray-700">AND SUSTAINABLE IT SOLUTIONS</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-12 rounded-full"></div>
          </div>
        </div>

        {/* Professional Light Feature Section 1 */}
        <div className="py-28 bg-white relative" ref={features1Ref}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8" data-animation="animate-slide-left">
                <div>
                  <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-full text-sm font-semibold text-green-700 mb-8">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Trusted IT Partner
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Your Trusted Partner in Building
                    <span className="text-gradient-light block mt-2"> Agile Solutions</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    MIPL transforms organizations with sustainable, future-ready
                    IT solutions. Every product and service is built with
                    excellence, value, and your success at the center.
                  </p>
                </div>

                <div className="space-y-8 mt-12">
                  <div className="group p-6 rounded-2xl hover:bg-gray-50 transition-all duration-500 border border-transparent hover:border-gray-200" data-stagger>
                    <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shrink-0">
                        🎯
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                          End-to-End IT Solutions
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          We help businesses build robust IT infrastructures that act as
                          the nervous system of modern organizations, connecting systems
                          and driving efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group p-6 rounded-2xl hover:bg-gray-50 transition-all duration-500 border border-transparent hover:border-gray-200" data-stagger>
                    <div className="flex items-start space-x-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-lg shrink-0">
                        ⭐
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                          Client-Centered Excellence
                        </h3>
                        <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                          With a philosophy focused on quality, value, and timelines, we
                          deliver solutions that reinvent and rebuild businesses —
                          making MIPL a trusted partner in the agile world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8" data-stagger>
                  <Link href="/Services">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <span className="relative z-10 flex items-center">
                        See Our Services
                        <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="relative" data-animation="animate-slide-right">
                <div className="absolute -inset-6 bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gray-200">
                  <img
                    src="/hero.jpg"
                    alt="Professional IT Solutions"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Professional Light Feature Section 2 */}
        <div className="py-28 bg-gray-50 relative" ref={features2Ref}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1" data-animation="animate-slide-left">
                <div className="absolute -inset-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gray-200">
                  <img
                    src="/service-img.jpg"
                    alt="Modern Enterprise Solutions"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              
              <div className="space-y-8 order-1 lg:order-2" data-animation="animate-slide-right">
                <div>
                  <div className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-sm font-semibold text-blue-700 mb-8">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Modern Solutions
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Empowering the
                    <span className="text-gradient-light block mt-2"> Modern Era</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-12">
                    We take pride in our innovation and user experience. Build
                    with confidence, knowing we are here to support you at every
                    step of your journey.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="glass-light rounded-2xl p-8 border-l-4 border-green-500 shadow-lg" data-stagger>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                        👁️
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      At MIPL, our vision is to be the premier IT solutions
                      company, delivering end-to-end solutions in a
                      sustainable manner.
                    </p>
                  </div>

                  <div className="glass-light rounded-2xl p-8 border-l-4 border-blue-500 shadow-lg" data-stagger>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-lg font-bold">
                        💎
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Our Commitment</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      We are dedicated to providing excellence that transforms
                      businesses for the modern era through digital
                      innovations.
                    </p>
                  </div>
                </div>

                <div className="pt-8" data-stagger>
                  <Link href="/solutions">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                      <span className="relative z-10 flex items-center">
                        See Our Solutions
                        <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Section Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        {/* Professional Light Feature Section 3 */}
        <div className="py-28 bg-white relative" ref={features3Ref}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8" data-animation="animate-slide-left">
                <div>
                  <div className="inline-flex items-center px-6 py-3 bg-purple-50 border border-purple-200 rounded-full text-sm font-semibold text-purple-700 mb-8">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    The MIPL Factor
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    The
                    <span className="text-gradient-light"> MIPL Factor</span>
                  </h2>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mb-12">
                    Building strong and lasting relationships with our clients,
                    strengthened by our continuous pursuit of excellence and
                    dedication.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-8 py-4 hover:bg-green-50 transition-all duration-300 rounded-r-xl" data-stagger>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Commitment to Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We create bonds that endure, fueled by quality, trust, and
                      relentless dedication.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-8 py-4 hover:bg-blue-50 transition-all duration-300 rounded-r-xl" data-stagger>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Agility that Empowers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The "A-Factor" — a faster, more nimble organization that
                      empowers clients while driving growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative" data-animation="animate-slide-right">
                <div className="absolute -inset-6 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-3xl blur-2xl opacity-60"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-elegant border border-gray-200">
                  <img
                    src="/hero2.jpg"
                    alt="MIPL Excellence"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Light Solutions Section */}
        <section className="w-full py-32 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" ref={solutionsRef}>
          <LightParticles />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20" data-animation="animate-slide-up">
              <div className="inline-flex items-center px-6 py-3 bg-gray-100 border border-gray-200 rounded-full text-sm font-semibold text-gray-700 mb-8">
                <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                Our Services Portfolio
              </div>
              
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Innovative Solutions for
                <br />
                <span className="text-gradient-light">Your Business</span>
              </h2>
              
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-12 rounded-full"></div>
              
              <Link href="/Services">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  <span className="relative z-10 flex items-center">
                    Book A Service
                    <span className="ml-3 transform group-hover:translate-x-1 transition-transform duration-300">📞</span>
                  </span>
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" data-animation="animate-slide-left">
              {[
                {
                  title: "Professional Services",
                  desc: "Expert IT solutions that boost efficiency and deliver results.",
                  link: "/Services",
                },
                {
                  title: "Business Services",
                  desc: "Streamlined business services to boost growth and performance.",
                  link: "/Services",
                },
                {
                  title: "Management Services",
                  desc: "Seamless management solutions for your business needs.",
                  link: "/Services",
                },
                {
                  title: "Cyber Security",
                  desc: "Cybersecurity solutions for detection, protection, and response.",
                  link: "/Services",
                },
                {
                  title: "Web Development",
                  desc: "Seamless web experiences tailored to your business.",
                  link: "/Services",
                },
                {
                  title: "Mobile Development",
                  desc: "Native and cross-platform mobile apps that expand your reach.",
                  link: "/Services",
                },
                {
                  title: "Brand Association",
                  desc: "Strategic partnerships that strengthen trust and elevate your brand.",
                  link: "/Services",
                },
              ].map((card, idx) => (
                <ServiceCard key={idx} card={card} index={idx} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;