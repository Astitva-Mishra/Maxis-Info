import Link from "next/link";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

import Footer from "./Footer";

function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        {/* Hero Section */}
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
        {/* Intro Text Above Features Section */}
        <div className="w-full flex justify-center bg-white">
          <h1 className="text-5xl md:text-5xl font-bold text-black text-center mb-8 mt-8 tracking-tight">
            Shaping the Future with Agile and Sustainable IT Solutions
          </h1>
        </div>

        {/* Features1 Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Your Trusted Partner in Building Agile,
                    <br /> Client-Centered IT Solutions
                  </h2>
                  <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    MIPL transforms organizations with sustainable, future-ready
                    IT solutions. Every product and service is built with
                    excellence, value, and your success at the center.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  End-to-End IT Solutions
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We help businesses build robust IT infrastructures that act as
                  the nervous system of modern organizations, connecting systems
                  and driving efficiency.
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  Client-Centered Excellence
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  With a philosophy focused on quality, value, and timelines, we
                  deliver solutions that reinvent and rebuild businesses —
                  making MIPL a trusted partner in the agile world.
                </p>
                <Link href="/fleet">
                  <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
                    <Link href="/Services">See Our Services</Link>
                  </button>
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/hero.jpg"
                  alt="Hero Image"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features2 Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <img
                  src="/service-img.jpg"
                  alt="Service Image"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 r">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-800 mb-4">
                    Empowering the Modern Era with Premier IT Solutions
                  </h2>
                  <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    We take pride in our innovation and user experience. Build
                    with confidence, knowing we are here to support you at every
                    step of your journey.
                  </p>
                </div>
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start space-x-3">
                    {/* <div className="bg-green-600 p-2 rounded-full">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div> */}
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800">
                        Our Vision
                      </h3>
                      <p className="text-gray-600 text-sm">
                        At MIPL, our vision is to be the premier IT solutions
                        company, delivering end-to-end solutions in a
                        sustainable manner.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    {/* <div className="bg-green-600 p-2 rounded-full">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div> */}
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-gray-800">
                        Our Commitment
                      </h3>
                      <p className="text-gray-600 text-sm">
                        We are dedicated to providing excellence that transforms
                        businesses for the modern era through digital
                        innovations.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
                      <Link href="/solutions">See Our Solutions</Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features3 Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="w-full md:w-1/2">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    The MIPL Factor
                  </h2>
                  <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    Building strong and lasting relationships with our clients,
                    strengthened by our continuous pursuit of excellence and
                    dedication.
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  Commitment to Excellence
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  We create bonds that endure, fueled by quality, trust, and
                  relentless dedication.
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  Agility that Empowers
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  The “A-Factor” — a faster, more nimble organization that
                  empowers clients while driving growth.
                </p>
                {/* <Link href="/fleet">
                  <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
                    <Link href="/Services">See Our Services</Link>
                  </button>
                </Link> */}
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/hero2.jpg"
                  alt="Hero Image"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/** Solutions Section **/}
        <section className="w-full py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0">
                Innovative Solutions for
                <br />
                Your Business
              </h2>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                <Link href="/Services">Book A Service</Link>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {/* Card Data */}
              {[
                {
                  icon: "",
                  title: "Professional Services",
                  desc: "Expert IT solutions that boost efficiency and deliver results.",
                  link: "/Services",
                },
                {
                  icon: "",
                  title: "Business Services",
                  desc: "Streamlined business services to boost growth and performance.",
                  link: "/Services",
                },
                {
                  icon: "",
                  title: "Management Services",
                  desc: "Seamless management solutions for your business needs.",
                  link: "/Services",
                },
                {
                  icon: "",
                  title: "Cyber Security",
                  desc: "Cybersecurity solutions for detection, protection, and response.",
                  link: "/Services",
                },
                {
                  icon: "",
                  title: "Web Development",
                  desc: "Seamless web experiences tailored to your business.",
                  link: "/Services",
                },
                {
                  icon: "",
                  title: "Mobile Development",
                  desc: "Native and cross-platform mobile apps that expand your reach.",
                  link: "/Services",
                },
                {
                  icon: "",
                  title: "Brand Association",
                  desc: "Strategic partnerships that strengthen trust and elevate your brand.",
                  link: "/Services",
                },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl shadow p-6 flex flex-col items-start justify-between min-h-[180px]"
                >
                  <div className="text-4xl mb-4">{card.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                  <Link href={card.link} className="mt-auto">
                    <button className="bg-black text-white rounded-full p-2 w-8 h-8 flex items-center justify-center">
                      <span className="text-xl">↗</span>
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
