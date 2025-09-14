"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Enhanced HoverBorderGradient component
type HoverBorderGradientProps = {
  children: React.ReactNode;
  className?: string;
  borderRadius?: string;
};

const HoverBorderGradient = ({
  children,
  className = "",
  borderRadius = "1.75rem",
}: HoverBorderGradientProps) => {
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

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);
  
  // Only run on client-side to prevent hydration mismatch
  useEffect(() => {
    const newParticles = [...Array(20)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 20}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Service Card with better animations
type ServiceCardProps = {
  card: {
    title: string;
    desc: string;
    link: string;
  };
  index: number;
};

const ServiceCard = ({ card, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const icons = {
    "Professional Services": "🎯",
    "Business Services": "📈",
    "Management Services": "⚙️",
    "Cyber Security": "🛡️",
    "Web Development": "🌐",
    "Mobile Development": "📱",
    "Brand Association": "🤝"
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-start justify-between min-h-[220px] border border-gray-100 hover:border-green-200 transform hover:-translate-y-2 hover:scale-105`}
      style={{
        animationDelay: `${index * 100}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative z-10 w-full">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icons[card.title as keyof typeof icons] || "✨"}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-sm text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
          {card.desc}
        </p>
      </div>
      
      <Link href={card.link} className="mt-auto relative z-10">
        <button className={`relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full p-3 w-12 h-12 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${isHovered ? 'shadow-lg' : ''}`}>
          <span className="text-xl transform transition-transform duration-300 group-hover:rotate-45">↗</span>
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
  
  // Initialize scrollY to 0 and only update it on the client side
  useEffect(() => {
    // Set initial scroll position
    setScrollY(window.scrollY);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only run IntersectionObserver on the client side
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
      return;
    }
    
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
                (child as HTMLElement).classList.add('animate-fade-in-up');
              }, index * 100);
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out forwards;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        
        .animate-float {
          animation: float linear infinite;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .parallax-bg {
          background-attachment: fixed;
        }
        
        @media (max-width: 768px) {
          .parallax-bg {
            background-attachment: scroll;
          }
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .text-gradient {
          background: linear-gradient(45deg, #059669, #0d9488, #0891b2);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradient-x 3s ease infinite;
        }
        
        .hover-glow:hover {
          box-shadow: 0 20px 40px rgba(16, 185, 129, 0.3);
        }
      `}</style>
      
      <div>
        {/* Enhanced Hero Section */}
        <div
          className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-cover bg-center bg-no-repeat parallax-bg"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(16, 22, 185, 0) 100%), url('/hero3.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            ...(typeof window !== 'undefined' ? { transform: `translateY(${scrollY * 0.5}px)` } : {}),
          }}
        >
          <FloatingParticles />
          
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-green-900/20 to-black/60 z-0"></div>
          
          <div className="p-4 relative z-10 w-full text-center">
            <div className="animate-fade-in-down">
              <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white-200 to-gray-200 mb-6 tracking-tight">
                Maxis Info Trades Pvt. Ltd.
              </h1>
            </div>
            
            <p className="mt-4 font-normal text-base md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              We Create Custom Web Solutions And Software That Elevate Your
              Brand And Connect You With Your Ideal Clients, Driving Your
              Business To New Heights With Innovation And Excellence.
            </p>
            
            <div className="flex justify-center gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Link href="/about">
                <HoverBorderGradient>
                  About Us
                </HoverBorderGradient>
              </Link>
              <Link href="/Services">
                <HoverBorderGradient>
                  Our Services
                </HoverBorderGradient>
              </Link>
            </div>
          </div>
          
          {/* Scroll indicator - Client-side only */}
          {typeof window !== 'undefined' && (
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Enhanced heading section */}
        <div className="w-full flex justify-center bg-gradient-to-br from-gray-50 to-white py-16">
          <h1
            ref={headingRef}
            data-animation="animate-fade-in-down"
            className="mt-10 md:mt-16 text-3xl md:text-5xl font-bold text-center mb-8 tracking-tight text-gray-900 max-w-5xl px-4 leading-tight"
          >
            SHAPING THE
            <span className="text-gradient font-black"> FUTURE WITH AGILE</span> AND SUSTAINABLE IT SOLUTIONS
          </h1>
        </div>

        {/* Enhanced Feature Section 1 */}
        <div className="py-20 bg-gradient-to-br from-white to-gray-50" ref={features1Ref}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2" data-animation="animate-fade-in-left">
                <div className="text-left mb-12">
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                    ✨ Trusted IT Partner
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Your Trusted Partner in Building
                    <span className="text-gradient"> Agile Solutions</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    MIPL transforms organizations with sustainable, future-ready
                    IT solutions. Every product and service is built with
                    excellence, value, and your success at the center.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4" data-stagger>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                      🎯
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        End-to-End IT Solutions
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        We help businesses build robust IT infrastructures that act as
                        the nervous system of modern organizations, connecting systems
                        and driving efficiency.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-stagger>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl font-bold">
                      ⭐
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        Client-Centered Excellence
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        With a philosophy focused on quality, value, and timelines, we
                        deliver solutions that reinvent and rebuild businesses —
                        making MIPL a trusted partner in the agile world.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8" data-stagger>
                  <Link href="/Services">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover-glow">
                      <span className="relative z-10">See Our Services</span>
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </Link>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2" data-animation="animate-fade-in-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    src="/hero.jpg"
                    alt="Hero Image"
                    className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Section 2 */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={features2Ref}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2" data-animation="animate-fade-in-left">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    src="/service-img.jpg"
                    alt="Service Image"
                    className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2" data-animation="animate-fade-in-right">
                <div className="text-left mb-12">
                  <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                    🚀 Modern Solutions
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Empowering the
                    <span className="text-gradient"> Modern Era</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                    We take pride in our innovation and user experience. Build
                    with confidence, knowing we are here to support you at every
                    step of your journey.
                  </p>
                </div>
                
                <div className="space-y-8">
                  <div className="glass-effect rounded-xl p-6" data-stagger>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
                        👁️
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Our Vision</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      At MIPL, our vision is to be the premier IT solutions
                      company, delivering end-to-end solutions in a
                      sustainable manner.
                    </p>
                  </div>

                  <div className="glass-effect rounded-xl p-6" data-stagger>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
                        💎
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">Our Commitment</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      We are dedicated to providing excellence that transforms
                      businesses for the modern era through digital
                      innovations.
                    </p>
                  </div>
                </div>

                <div className="mt-8" data-stagger>
                  <Link href="/solutions">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover-glow">
                      <span className="relative z-10">See Our Solutions</span>
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Feature Section 3 */}
        <div className="py-20 bg-gradient-to-br from-white to-gray-50" ref={features3Ref}>
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="w-full lg:w-1/2" data-animation="animate-fade-in-left">
                <div className="text-left mb-12">
                  <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
                    ⚡ The MIPL Factor
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    The
                    <span className="text-gradient"> MIPL Factor</span>
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl leading-relaxed mb-8">
                    Building strong and lasting relationships with our clients,
                    strengthened by our continuous pursuit of excellence and
                    dedication.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-6" data-stagger>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Commitment to Excellence
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      We create bonds that endure, fueled by quality, trust, and
                      relentless dedication.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6" data-stagger>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Agility that Empowers
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      The "A-Factor" — a faster, more nimble organization that
                      empowers clients while driving growth.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2" data-animation="animate-fade-in-right">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    src="/hero2.jpg"
                    alt="Hero Image"
                    className="relative rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Solutions Section */}
        <section className="w-full py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden" ref={solutionsRef}>
          <FloatingParticles />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16" data-animation="animate-fade-in-down">
              <div>
                <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  💼 Our Services
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Innovative Solutions for
                  <br />
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Your Business
                  </span>
                </h2>
              </div>
              <Link href="/Services">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 mt-8 lg:mt-0">
                  <span className="relative z-10">Book A Service</span>
                  <span className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform duration-300">📞</span>
                </button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-animation="animate-fade-in-left">
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