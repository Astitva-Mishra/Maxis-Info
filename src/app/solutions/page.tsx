"use client";
import { useState } from "react";
import Image from "next/image";

type FlipCardProps = {
  front: React.ReactNode;
  back: React.ReactNode;
};

function FlipCard({ front, back }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className="relative cursor-pointer min-h-[340px] md:min-h-[420px] perspective flex"
      onClick={() => setFlipped((f) => !f)}
      style={{ width: "100%" }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="w-full h-full [backface-visibility:hidden]">
          {front}
        </div>
        <div className="w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] absolute top-0 left-0 flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-100 to-white p-8 shadow">
          {back}
        </div>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <div className="bg-white min-h-screen pb-20 pt-24">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Step into the Future with our <br />
            <span className="text-blue-500">Branding &amp; Identity</span>{" "}
            Solutions
            <br />
            and Stay Ahead of the Curve!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your Digital Journey Starts Here at Maixs.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition w-fit">
            Explore &rarr;
          </button>
        </div>
        <div
          className="flex-1 grid grid-cols-2 grid-rows-2 gap-6 relative"
          style={{ minHeight: "400px" }}
        >
          {/* Top Left Block */}
          <div className="bg-indigo-100 rounded-3xl flex items-center justify-center p-6 col-span-1 row-span-1">
            <Image
              src="/caraousal2.png"
              alt="Digital Strategy"
              width={180}
              height={120}
            />
            <div className="absolute top-8 left-8 text-xs font-semibold text-indigo-600 space-x-2"></div>
          </div>
          {/* Top Right Block */}
          <div className="bg-green-100 rounded-3xl flex items-center justify-center p-6 col-span-1 row-span-1">
            <Image
              src="/caraousal3.png"
              alt="Branding"
              width={140}
              height={100}
            />
            <div className="absolute top-8 right-8 text-xs font-semibold text-green-600 space-x-2"></div>
          </div>
          {/* Bottom Left Block */}
          <div className="bg-pink-200 rounded-3xl flex items-center justify-center p-6 col-span-1 row-span-1">
            <Image
              src="/caraousal4.png"
              alt="Social Media"
              width={140}
              height={100}
            />
            <div className="absolute bottom-8 left-8 text-xs font-semibold text-pink-700 space-x-2"></div>
          </div>
          {/* Bottom Right Block */}
          <div className="bg-orange-100 rounded-3xl flex items-center justify-center p-6 col-span-1 row-span-1">
            <Image
              src="/caraousal5.png"
              alt="App Design"
              width={140}
              height={100}
            />
            <div className="absolute bottom-8 right-8 text-xs font-semibold text-orange-600 space-x-2"></div>
          </div>
          {/* Center Block (person image) - absolutely positioned
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Image src="/aboutHero.png" alt="Person" width={180} height={180} className="rounded-2xl shadow-xl" />
            </div> */}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-cyan-500 mb-12">
          Why choose us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-blue-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2v20M2 12h20" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              Creative Expertise
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Our team boasts unparalleled creativity and expertise in crafting
              branding and identity solutions that resonate with your target
              audience, setting your brand apart from the competition.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-cyan-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div className="bg-cyan-200 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              Seamless Collaboration
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Experience seamless collaboration with our team throughout the
              design and interaction process, ensuring your vision is brought to
              life with precision and excellence, every step of the way.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-blue-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div className="bg-blue-200 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <rect x="6" y="6" width="12" height="12" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              Tech-forward Solutions
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Stay ahead of the curve with our technology-driven approach,
              leveraging cutting-edge tools and techniques to develop bespoke
              software solutions tailored to your unique business needs.
            </p>
          </div>
          {/* Card 4 */}
          <div className="bg-cyan-50 rounded-2xl shadow p-8 flex flex-col items-center">
            <div className="bg-cyan-200 rounded-full p-3 mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M4 17l6-6 4 4 6-6" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">
              Result Oriented Approach
            </h3>
            <p className="text-gray-600 text-center text-sm">
              Drive tangible results with our data-driven digital marketing
              strategies, meticulously crafted to boost your online presence,
              increase brand visibility, and ultimately, drive conversions and
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Focus on the Details Block */}
      <section className="max-w-6xl mx-auto px-4 mt-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Large Text */}
          <div className="flex items-center justify-center h-full">
            <h2 className="text-5xl md:text-7xl font-extrabold text-blue-700 leading-tight tracking-tight whitespace-pre-line">
              WE
              <br />
              FOCUS
              <br />
              ON THE
              <br />
              DETAILS
            </h2>
          </div>
          {/* Right: Description */}
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-700 text-base md:text-lg mb-6">
              We're on a mission to redefine the digital landscape through
              innovative solutions and unparalleled expertise. Being the leading
              provider of IT services in Kerala, we're professionals at
              providing cutting-edge solutions that are customized to each and
              every customer's requirements. We're focused on assisting
              organizations to thrive in the rapidly changing digital landscape.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              We have a team of talented individuals who are committed to
              quality. From custom software development to robust IT
              infrastructure solutions, we're here to empower your business and
              drive success.
            </p>
            <span className="text-blue-900 font-bold text-lg">Team Maxis</span>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="max-w-6xl mx-auto px-4 mb-20 grid grid-cols-1 gap-10 relative z-10">
        <FlipCard
          front={
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-white p-8 flex flex-col md:flex-row items-center justify-between shadow min-h-[340px] md:min-h-[420px]">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
                  Data Center
                </h3>
                <p className="text-gray-700 mb-4">
                  If you are planning to construct a new data center facility or
                  retrofit an existing building for data center operations, it
                  is highly advisable to engage the services of a professional
                  data center consultant.
                </p>
                <div className="mt-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-blue-200 transition">
                    Tap to see more details
                  </span>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <img
                  src="/caraousal5.png"
                  alt="Branding & Identity"
                  className="w-64 h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          }
          back={
            <div className="flex flex-col h-full p-8 justify-between">
              <div className="flex flex-row justify-between w-full mb-8">
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Designing & Consulting
                  </h4>
                  <p className="text-gray-700 text-sm">
                    For any data center project beyond a basic server room,
                    engaging a professional data center consultant is essential
                    to ensure a facility that is properly designed, built, and
                    capable of maintaining consistent uptime.
                  </p>
                </div>
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Power & Cooling
                  </h4>
                  <p className="text-gray-700 text-sm">
                    As data centers become more consolidated and generate higher
                    heat, balancing performance with cooling costs and uptime
                    becomes critical. At MIPL, we design tailored solutions that
                    align with your infrastructure while ensuring optimal
                    resiliency.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full mt-8">
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Business Continuity
                  </h4>
                  <p className="text-gray-700 text-sm">
                    MIPL India’s Business Continuity Services identify critical
                    dependencies and ensure uninterrupted operations under any
                    circumstances. With our expertise, we deliver maximum uptime
                    for both cloud-based solutions and physical infrastructures.
                  </p>
                </div>
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Consolidation
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Every organization strives to enhance speed and agility
                    while minimizing the risk to its data center assets. A
                    consolidation system that leverages advanced cloud and
                    virtualization technologies is essential to prevent
                    underperformance and reduce the incremental costs of asset
                    maintenance.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <FlipCard
          front={
            <div className="rounded-2xl bg-gradient-to-r from-white to-blue-50 p-8 flex flex-col md:flex-row items-center justify-between shadow min-h-[340px] md:min-h-[420px]">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-600 mb-2">
                  Network Integration
                </h3>
                <p className="text-gray-700 mb-4">
                  Comprehensive network design and structuring are fundamental
                  to ensuring seamless connectivity. From planning and
                  development to installation and ongoing support, we provide
                  end-to-end, reliable services to clients across diverse
                  industries.
                </p>
                <div className="mt-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-blue-200 transition">
                    Tap to see more details
                  </span>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <img
                  src="/caraousal4.png"
                  alt="Design & Interaction"
                  className="w-64 h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          }
          back={
            <div className="flex flex-col h-full p-8 justify-between">
              <div className="flex flex-row justify-between w-full mb-8">
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    Network Designing Active & Passive
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Comprehensive network design and structuring are crucial for
                    seamless connectivity. From design and development to
                    installation and ongoing support, we deliver reliable,
                    end-to-end services to clients across industries.
                  </p>
                </div>
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    IP Telephony
                  </h4>
                  <p className="text-gray-700 text-sm">
                    In today’s business landscape, IP networks play a vital
                    role, with speed, capacity, and reliability directly
                    influencing daily operations. Choosing the right partner for
                    network design and installation is therefore critical to
                    long-term success.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-between w-full mt-8">
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    WAN Solution
                  </h4>
                  <p className="text-gray-700 text-sm">
                    We specialize in seamlessly integrating diverse network
                    services, with a strong focus on security, efficiency, and
                    comprehensive resource management. Our end-to-end solutions
                    are designed to align with current business environments
                    while ensuring readiness for future upgrades.
                  </p>
                </div>
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    Wireless Network
                  </h4>
                  <p className="text-gray-700 text-sm">
                    A seamless wireless network is no longer a luxury but a
                    necessity for organizations across industries. A reliable
                    wireless infrastructure ensures secure, widespread access to
                    enterprise network resources, enabling greater connectivity
                    and productivity.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <FlipCard
          front={
            <div className="rounded-2xl bg-gradient-to-r from-blue-50 to-white p-8 flex flex-col md:flex-row items-center justify-between shadow min-h-[340px] md:min-h-[420px]">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
                  Cloud Side Computing
                </h3>
                <p className="text-gray-700 mb-4">
                  For every organization, IT hardware represents a significant
                  investment. Our approach focuses on delivering a comprehensive
                  range of solutions, including end-user infrastructure
                  planning, deployment, and migration, to maximize value and
                  efficiency.
                </p>
                <div className="mt-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-blue-200 transition">
                    Tap to see more details
                  </span>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <img
                  src="/caraousal3.png"
                  alt="Technology"
                  className="w-64 h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          }
          back={
            <div className="flex flex-col h-full p-8 justify-between">
              <div className="flex flex-row justify-between w-full mb-8">
                <div className="w-1/3 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Desktops & Workstations
                  </h4>
                  <p className="text-gray-700 text-sm">
                    IT hardware is a major investment for any organization. We
                    provide end-to-end services—including planning, deployment,
                    migration, and management—to simplify and optimize IT
                    operations.
                  </p>
                </div>
                <div className="w-1/3 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Mobility Solutions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Our mobility solutions use leading global brands to meet
                    modern business needs, continuously optimizing IT
                    infrastructure and providing top-tier support from HP,
                    Microsoft, EMC, NetApp, and more, ensuring seamless
                    operations without mobility limitations.
                  </p>
                </div>
                <div className="w-1/3 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Remote Client Solutions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Our remote client solutions enhance compliance and security
                    while effectively supporting offshore and outsourced teams.
                    By centralizing computing resources in the data center, they
                    provide improved security, streamlined manageability, and a
                    seamless user experience.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-8">
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Thin Clients
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Our Thin Clients empower you to take full control of the
                    cloud with ease. They enable centralized setup, monitoring,
                    and management of any number of Thin Clients remotely from a
                    single point.
                  </p>
                </div>
                <div className="w-1/2 px-2 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-blue-900 mb-1">
                    Printers
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Our printer solutions encompass a wide range of leading
                    global brands, designed to meet the growing demands of
                    modern businesses. We continuously optimize your IT
                    infrastructure to ensure seamless operations without being
                    hindered by resource limitations.
                  </p>
                </div>
              </div>
            </div>
          }
        />
        <FlipCard
          front={
            <div className="rounded-2xl bg-gradient-to-r from-white to-blue-50 p-8 flex flex-col md:flex-row items-center justify-between shadow min-h-[340px] md:min-h-[420px]">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-extrabold text-cyan-600 mb-2">
                  Cloud Solution
                </h3>
                <p className="text-gray-700 mb-4">
                  Challenges are an inherent part of everyday business for all
                  organizations. One of the most effective ways to address both
                  business and technology challenges is by leveraging the
                  expertise of cloud computing solution providers.
                </p>
                <div className="mt-6">
                  <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium text-sm shadow hover:bg-blue-200 transition">
                    Tap to see more details
                  </span>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <img
                  src="/caraousal2.png"
                  alt="Digital Marketing"
                  className="w-64 h-40 object-cover rounded-xl"
                />
              </div>
            </div>
          }
          back={
            <div className="flex flex-col h-full p-8 justify-between">
              <h3 className="text-xl font-bold text-cyan-600 mb-6 text-center">
                More About Cloud Solution
              </h3>
              <div className="flex flex-row justify-between w-full mb-6">
                <div className="w-1/2 px-4 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    Private Cloud Solutions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    A private cloud is a specialized cloud computing model that
                    provides a secure, dedicated environment accessible only to
                    a specific client. Like other cloud models, it delivers
                    computing power as a service within a virtualized
                    environment, leveraging an underlying pool of physical
                    computing resources.
                  </p>
                </div>
                <div className="w-1/2 px-4 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    Public Cloud Solutions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    The public cloud is the most familiar cloud computing model
                    for many users, where services are delivered in a
                    virtualized environment built on shared physical resources
                    and accessed over a public network, such as the internet.
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-center w-full mt-6 pb-4">
                <div className="w-2/3 px-4 flex flex-col items-center text-center">
                  <h4 className="text-base font-semibold text-cyan-600 mb-1">
                    Hybrid Cloud Solutions
                  </h4>
                  <p className="text-gray-700 text-sm">
                    A hybrid cloud integrates dedicated physical servers and
                    network equipment, including existing collocated IT
                    infrastructure, with a cloud hosting platform. This approach
                    offers businesses the flexibility, scalability, and
                    efficiency of both private and public cloud environments.
                  </p>
                </div>
              </div>
            </div>
          }
        />
      </section>
    </div>
  );
}
