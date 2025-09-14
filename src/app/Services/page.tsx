"use client";
import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./services.css";

const services = [
  {
    id: 1,
    title: "What we Do?",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "When we try to design a mobile application, we keep these two keywords in mind i.e. accessibility and functionality. Mobile applications should be able to amend to the limitations of mobile devices but designers are aware of making texts too small to read",
    icon: "✏️"
  },
  {
    id: 2,
    title: "Our Specialities",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "We are specialize in the following areas:Cloud Based Enterprise Mobility Solutions Integrated Mobility Application Solutions Mobile Applications For surveys and data collection",
    icon: "🔧"
  },
  {
    id: 3,
    title: "What are Benifits?",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Shifting your application to a mobile application helps you to earn better profit and business. We have a promotion wing that makes a hike in access of your mobile application.",
    icon: "🏗️"
  },
  {
    id: 5,
    title: "Technology",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "The mobile application development team at MIPL is capable of building the mobile applications within days that supports new network facilities that cope u with the changing trends in operating system and platforms.",
    icon: "⚙️"
  }
];

const testimonials = [
  {
    id: 1,
    title: "HPE Partner",
    description: "MIPL is an HPE Partner and has HPE certified skills, experience and expertise to successfully architect, deploy and implement HPE solutions and services. HPE solutions like Hybrid IT & Cloud, hyper-converged platform – SimpliVity, Composable Infrastructure – Synergy, All-Flash Hybrid Storage, HPE SAP HANA, HPE Aruba Networking & security are the focus solutions of our business."
  },
  {
    id: 2,
    title: "Microsoft Partner",
    description: "Through our expert IT assessment system, we measure organisation’s critical IT function and identify its strengths and weaknesses so as to invest in the right areas. Our IT analysis and assessment is an expansive area that includes everything from Data storage, server infrastructure, cloud services, business applications and services, disaster recovery, network security, and a lot more."
  },
  {
    id: 3,
    title: "Vmware Partner",
    description: "As Vmware enterprise partner, we offer exceptional sales and service for all our clientele as per their specific requirements. We understand no two scenarios are same and therefore, we offer customised solutions for all out clientele."
  },
  {
    id: 4,
    title: "Cisco Certified partner",
    description: "As Cisco’s certified partner, we help organisations with service delivery management and support key impacts. We are Cisco’s trusted service providers for high-end service and maintenance."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const leftItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const rightItemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        className="relative w-full h-[320px] md:h-[400px] flex items-center overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <img
          src="/hero3.jpg"
          alt="Services Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <motion.div
          className="relative z-10 flex flex-col items-start justify-center h-full pl-12 md:pl-24"
          variants={itemVariants}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-2 text-left">
            Our Services
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/80 italic drop-shadow text-left">
            Comprehensive Digital Solutions Tailored for Your Success
          </h2>
        </motion.div>
      </motion.div>

      {/* Professional Services Section */}
      <motion.div
        className="bg-white from-blue-50 to-indigo-100 py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="flex gap-6 items-start"
              variants={leftItemVariants}
            >
              <div className="grid justify-center align-center grid-cols-1 gap-4 flex-1">
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Business meeting"
                    className="w-full h-35 object-cover"
                  />
                </motion.div>
                <motion.div
                  className="rounded-2xl overflow-hidden shadow-lg"
                  variants={itemVariants}
                >
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Creative workspace"
                    className="w-full h-35 object-cover"
                  />
                </motion.div>
              </div>
              <motion.div
                className="flex-shrink-0"
                variants={itemVariants}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ width: '200px', aspectRatio: '9/16' }}>
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg cursor-pointer hover:bg-opacity-100 transition-all">
                      <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex-1"
              variants={rightItemVariants}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                Professional Services
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Our professional services assist clients in managing their day-to-day IT challenges.
              </p>
              <div className="space-y-6">
                {["Consulting", "Assessment", "Project Managment", "Faculty Management Services", "Multi Vendor Support"].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item}</h3>
                      <p className="text-gray-600 text-sm">MIPL Solutions assists organisations to achieve and sustain business success</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Business Services Section */}
      <motion.div
        className="relative w-full py-24 mt-16 mb-24 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/services2.png"
            alt="Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              className="lg:w-1/2"
              variants={leftItemVariants}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Business Services</h2>
              <h3 className="text-2xl text-white mb-6">Expert execution</h3>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                As a business outsourcing company, it ensures that our customers get delivered properly and satisfied accordingly.
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition duration-300">
                Learn More
              </button>
            </motion.div>
            <motion.div
              className="lg:w-1/2 relative"
              variants={rightItemVariants}
            >
              <div className="relative">
                <motion.div
                  className="rounded-xl overflow-hidden shadow-2xl"
                  variants={itemVariants}
                >
                  <img
                    src="/service-img.jpg"
                    alt="Digital Services"
                    className="w-full h-auto"
                  />
                </motion.div>
                {/* Animated Floating Div 1 - Top Right */}
                <motion.div 
                  className="absolute -top-8 -right-8 bg-white rounded-lg p-4 shadow-xl z-20 w-48" 
                  animate={{ y: [-5, -15, -5] }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }} 
                  initial={{ opacity: 1 }}
                > 
                  <h3 className="font-bold text-blue-900 text-lg mb-2">Business Outsourcing</h3> 
                  <p className="text-gray-600 text-sm">Digital revolution has brought in new avenues for business processes.</p> 
                </motion.div> 

                {/* Animated Floating Div 2 - Bottom Right */} 
                <motion.div 
                  className="absolute -bottom-8 -right-12 bg-white rounded-lg p-4 shadow-xl z-20 w-48" 
                  animate={{ y: [-5, -15, -5] }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut", 
                    delay: 1 
                  }} 
                  initial={{ opacity: 1 }}
                > 
                  <h3 className="font-bold text-blue-900 text-lg mb-2">Outbound Contact Center</h3> 
                  <p className="text-gray-600 text-sm">In a business process, MIPL is one of the best business process outsourcing companie.</p> 
                </motion.div>
                
                {/* Animated Floating Div 3 - Top Left */}
                <motion.div 
                  className="absolute -top-8 -left-8 bg-white rounded-lg p-4 shadow-xl z-20 w-48" 
                  animate={{ y: [-5, -15, -5] }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut" 
                  }} 
                  initial={{ opacity: 1 }}
                > 
                  <h3 className="font-bold text-blue-900 text-lg mb-2">Virtual Assistant</h3> 
                  <p className="text-gray-600 text-sm">Our virtual assistance service is at your disposal.</p> 
                </motion.div> 

                {/* Animated Floating Div 4 - Bottom Left */} 
                <motion.div 
                  className="absolute -bottom-8 -left-12 bg-white rounded-lg p-4 shadow-xl z-20 w-48" 
                  animate={{ y: [-5, -15, -5] }} 
                  transition={{ 
                    repeat: Infinity, 
                    duration: 4, 
                    ease: "easeInOut", 
                    delay: 1 
                  }} 
                  initial={{ opacity: 1 }}
                > 
                  <h3 className="font-bold text-blue-900 text-lg mb-2">Inbound Contact Center</h3> 
                  <p className="text-gray-600 text-sm">As far as a reputed company is concerned, they never tend to leave behind the norm of 'customer is king'.</p> 
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Services Card Section */}
      <motion.div
        className="py-20 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            variants={itemVariants}
          >
            <h3 className="text-yellow-500 font-medium mb-2 uppercase tracking-wider">SERVICES WE OFFER</h3>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Explore Our Comprehensive Range<br />Of Web Development To<br />Elevate Your Online Presence.</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Responsive Website Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "Customizable Shopping Carts", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "Enterprise CRM Solutions", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "High Profile And Quality Websites", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "HTML 5/css/scripting Solutions", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "Web Design & Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "Web Hosting", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "CMS Development", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
              { title: "The Technology", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:bg-yellow-400 transition-all duration-300"
                variants={itemVariants}
              >
                <div className="p-8">
                  <div className="w-12 h-12 bg-yellow-100 group-hover:bg-white rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 group-hover:text-white mb-3">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 mb-6">{service.description}</p>
                  <a href="#" className="inline-flex items-center text-yellow-500 group-hover:text-white font-medium">
                    LEARN MORE
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Managed Services Section */}
      <motion.div
        className="py-16 px-6 relative bg-gradient-to-br from-blue-900 to-indigo-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/backgroundServices.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="flex justify-center"
              variants={leftItemVariants}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ width: '100%', maxWidth: '500px', aspectRatio: '16/9' }}>
                <img
                  src="/solution_left.png"
                  alt="Digital Marketing Solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              variants={rightItemVariants}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Excellent Work From Increased Managed Services.
              </h2>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8 bg-opacity-90 p-6 rounded-xl"
              variants={containerVariants}
            >
              {[
                { title: "Maintenance", description: "With our expert maintenance services, we take care of our client organizations software and hardware infrastructure and ensure that their business run smoothly." },
                { title: "IT Service Continuity", description: "From a large-scale IT resilient planning to disaster recovery options we offer efficient business continuity planning services." },
                { title: "Service Level Management", description: "As service level managers for our clients we undertake service level negotiations and agreement and ensure that they are completed within the time frame and with the desired quality." },
                { title: "Release, Change, Configuration Management", description: "MIPL Solutions excel at building and maintaining logical service configurations of the application and infrastructure domains to support enhanced work scenario." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2 text-lg">{item.title}</h3>
                    <p className="text-white">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="flex justify-center"
              variants={rightItemVariants}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ width: '100%', maxWidth: '500px', aspectRatio: '16/9' }}>
                <div className="relative w-full h-full">
                  <img
                    src="/service-img.jpg"
                    alt="Video Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 shadow-lg cursor-pointer hover:bg-opacity-100 transition-all">
                      <svg className="w-6 h-6 text-blue-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Cyber Security Section */}
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="flex flex-col lg:flex-row overflow-hidden border-0">
          <motion.div
            className="lg:w-2/3 bg-white p-8 text-gray-800"
            variants={leftItemVariants}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">Cyber Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {[
                { title: "Endpoint Security", description: "Endpoints including desktops, laptops, mobile devices, and other wireless gadgets connected with corporate networks create vulnerability paths for security threats." },
                { title: "Data Protection", description: "Data security refers to protective measures applied to prevent unauthorized access, modification, corruption, deletion (accidental or otherwise) and such acts done to databases, fileservers, websites and cloud-based instances where data is at rest, motion or use." },
                { title: "Network Security", description: "Companies adopt network security strategy and provisions for ensuring the security of its assets and of all network traffic." },
                { title: "Identity & Access Management", description: "As the definition goes, identity and access management (IAM) is the way to enable the right individuals to access the right resources at the right times and for the right reasons." }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:bg-orange-500 text-black hover:text-white transition-colors"
                  variants={itemVariants}
                >
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="m-4 bg-white p-4 rounded-lg shadow-md hover:bg-orange-500 text-black hover:text-white transition-colors"
              variants={itemVariants}
            >
              <h3 className="font-semibold text-xl mb-2">Enterprise Risk Management</h3>
              <p className="text-sm">Given the continuously changing landscape of compliance and enterprise risk, the companies must protect themselves against emerging risks, complex contractual obligations, newer legislations and regulations, trans-trade/M&A events, stakeholder expectations, reputation management and better rate of employee retention.</p>
            </motion.div>
          </motion.div>
          <motion.div
            className="lg:w-1/3 relative"
            variants={rightItemVariants}
          >
            <img
              src="/servicesCyber.png"
              alt="Woman working at desk"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Development Section */}
      <motion.div
        className="min-h-screen py-20 px-6 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              variants={leftItemVariants}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12a1 1 0 002 0V8.5a1 1 0 10-2 0V12z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-1.092a4.535 4.535 0 001.676-.662C13.398 12.766 14 11.991 14 11c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 8.092V6.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700 font-medium">Our services</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
                What we can do{' '}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  for Mobile Development
                </span>
              </h1>
            </motion.div>
            <motion.div
              className="text-right"
              variants={rightItemVariants}
            >
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Mobile devices with app built in the cloud are re-defining the computing world. Cloud platform equips developers with compressive solutions without having to manage the infrastructure and help them focus on ease of use and speed.
              </p>
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                <span className="font-semibold">See our services</span>
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </button>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="group perspective-1000"
                variants={itemVariants}
              >
                <div className="relative w-full h-96 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl">
                    <div className="relative w-full h-full">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden shadow-xl">
                    <div className="w-full h-full bg-gradient-to-br from-white to-gray-50 p-6 flex flex-col justify-center items-center text-center border border-gray-200">
                      <div className="text-4xl mb-4 animate-bounce">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mt-6 w-full">
                        <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
        `}</style>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="py-20 px-6"
        style={{ backgroundImage: "url('/backgroundServicesLast.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-block">
              <div className="w-16 h-1 bg-orange-400 mx-auto mb-4"></div>
              <p className="text-orange-400 font-medium text-sm uppercase tracking-wider mb-4">
                service
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Brand Association
            </h2>
            <p className="text-xl text-white">
              Expert execution
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {testimonial.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {testimonial.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
