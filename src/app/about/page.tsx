'use client';

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative w-full min-h-[90vh] flex items-center justify-between overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/aboutHero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Darkened overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 pt-20 md:pt-32">
          {/* Left content */}
          <motion.div
            className="w-full md:w-1/2 text-white"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-6xl font-bold mb-6">
              Why
              MIPL
              Technology</h1>
            <p className="text-lg md:text-xl mb-8">
              We are a leading technology company dedicated to providing innovative solutions
              that help businesses thrive in the digital era. Our team of experts is committed
              to delivering excellence in every project we undertake.
            </p>
            <button className="bg-green-700 hover:bg-green-800 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300">
              Learn More
            </button>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/aboutHeroRight.png"
              alt="About Maxis Info"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl object-contain z-10"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Additional content with animations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Maxis Info, we are committed to delivering cutting-edge technology solutions that empower businesses to achieve their goals and drive innovation in their industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver innovative solutions.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-700">
                We are committed to excellence in everything we do, from the quality of our code to the service we provide to our clients.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-700">
                Growth of our customers and employees has always been the centre point of all our endeavors and we have been consistently achieving this since decades by respecting ethics and bringing out human aspect to all our creative accomplishments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/backgroundAboutDiv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We specialize in end-to-end ICT infrastructure management with 24/7 services and a Pan India presence, ensuring unmatched convenience for our clients.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left side - 4 images in grid */}
            <motion.div 
              className="w-full lg:w-1/2 grid grid-cols-2 gap-4"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/hero.jpg"
                  alt="Data Analysis"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/hero2.jpg"
                  alt="Business Meeting"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/hero3.jpg"
                  alt="Presentation"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/service-img.jpg"
                  alt="Team Collaboration"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right side - Text content */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-white mb-4">Building an Outstanding Portfolio</h3>
              <p className="text-lg text-white mb-6">
                Our comprehensive resources help you create a portfolio that stands out in today's competitive market. We provide tools, templates, and expert guidance to showcase your skills effectively.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">Simplify Account Change</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">Easy to Customize</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">Various Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">Fast working</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">Precise Profit Margins</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-white">Maximize Your Profits</span>
                </div>
              </div>
              
              <button className="bg-green-700 hover:bg-green-800 text-white text-lg font-medium px-8 py-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
                Explore Resources
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio Showcase</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Slider */}
            <div className="relative">
              <div className="w-full overflow-hidden bg-white rounded-lg">
                <div className="relative min-h-[500px] -mx-1">
                      <div className="flex overflow-x-hidden gap-4 pb-4 snap-x snap-mandatory relative">
                        <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                        <div className="flex justify-center h-full p-6 rounded-lg">
                          <Image
                            src="/caraousalImages/caraousal1.png"
                            alt="Project 1"
                            width={300}
                            height={500}
                            className="rounded-md object-cover"
                          />
                        </div>
                      </div>
                     <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                       <div className="flex justify-center h-full p-6 rounded-lg">
                         <Image
                           src="/caraousalImages/caraousal2.png"
                           alt="Project 2"
                           width={300}
                           height={500}
                           className="rounded-md object-cover"
                         />
                       </div>
                     </div>
                     <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                       <div className="flex justify-center h-full p-6 rounded-lg">
                         <Image
                           src="/caraousalImages/caraousal3.png"
                           alt="Project 3"
                           width={300}
                           height={500}
                           className="rounded-md object-cover"
                         />
                       </div>
                     </div>
                     <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                       <div className="flex justify-center h-full p-6 rounded-lg">
                         <Image
                           src="/caraousalImages/caraousal4.png"
                           alt="Project 4"
                           width={300}
                           height={500}
                           className="rounded-md object-cover"
                         />
                       </div>
                     </div>
                     <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                       <div className="flex justify-center h-full p-6 rounded-lg">
                         <Image
                           src="/caraousalImages/caraousal5.png"
                           alt="Project 5"
                           width={300}
                           height={500}
                           className="rounded-md object-cover"
                         />
                       </div>
                     </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                   <button
                     type="button"
                     className="absolute top-1/2 left-4 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full shadow-md text-gray-800 hover:bg-opacity-75 focus:outline-none"
                     onClick={e => {
                       const flex = (e.currentTarget.parentElement?.querySelector('.flex') as HTMLElement | null);
                       flex?.scrollBy({ left: -300, behavior: 'smooth' });
                     }}
                   >
                     <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                   </button>
                   <button
                     type="button"
                     className="absolute top-1/2 right-4 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full shadow-md text-gray-800 hover:bg-opacity-75 focus:outline-none"
                     onClick={e => {
                       const flex = (e.currentTarget.parentElement?.querySelector('.flex') as HTMLElement | null);
                       flex?.scrollBy({ left: 300, behavior: 'smooth' });
                     }}
                   >
                     <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </button>
                </div>
              </div>
            </div>
            {/* End Slider */}
          </motion.div> 
        </div>
      </section>

      {/* Additional Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our latest work and see how we've helped businesses achieve their goals.  
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Slider */}
            <div className="relative">
              <div className="w-full overflow-hidden bg-white rounded-lg">
                <div className="relative min-h-[300px] -mx-1">
                  <div className="flex overflow-hidden gap-4 pb-4 snap-x snap-mandatory relative">
                    <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                      <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/caraousal1.png"
                            alt="Project 1"
                            width={300}
                            height={500}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <span className="self-center text-lg font-medium text-gray-800 transition duration-700">Web Development</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                      <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/caraousal2.png"
                            alt="Project 2"
                            width={300}
                            height={500}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <span className="self-center text-lg font-medium text-gray-800 transition duration-700">Mobile Applications</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                      <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/caraousal3.png"
                            alt="Project 3"
                            width={300}
                            height={500}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <span className="self-center text-lg font-medium text-gray-800 transition duration-700">UI/UX Design</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                      <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/caraousal4.png"
                            alt="Project 4"
                            width={300}
                            height={500}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <span className="self-center text-lg font-medium text-gray-800 transition duration-700">Cloud Solutions</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                      <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/solutions_img.png"
                            alt="Project 5"
                            width={300}
                            height={500}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <span className="self-center text-lg font-medium text-gray-800 transition duration-700">IT Consulting</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 w-full md:w-1/3 snap-center px-1">
                      <div className="flex justify-center h-full bg-gray-100 p-6 rounded-lg shadow-md">
                        <div className="flex flex-col items-center">
                          <Image
                            src="/aboutHero.png"
                            alt="Project 6"
                            width={300}
                            height={500}
                            className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <span className="self-center text-lg font-medium text-gray-800 transition duration-700">Digital Marketing</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    type="button"
                    className="absolute top-1/2 left-4 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full shadow-md text-gray-800 hover:bg-opacity-75 focus:outline-none"
                    onClick={e => {
                      const flex = (e.currentTarget.parentElement?.querySelector('.snap-x') as HTMLElement | null);
                      flex?.scrollBy({ left: -300, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="absolute top-1/2 right-4 -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 bg-white bg-opacity-50 rounded-full shadow-md text-gray-800 hover:bg-opacity-75 focus:outline-none"
                    onClick={e => {
                      const flex = (e.currentTarget.parentElement?.querySelector('.snap-x') as HTMLElement | null);
                      flex?.scrollBy({ left: 300, behavior: 'smooth' });
                    }}
                  >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Slider */}
          </motion.div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-16 relative">
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/backgroundAboutDiv.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Clients</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              We are proud to work with leading organizations across various industries.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/NHAI-logo.png" alt="NHAI" width={150} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/bajaj-motors-logo.png" alt="Bajaj Motors" width={150} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/converge_logo.jpg" alt="Converge" width={150} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/edify-logo.png" alt="Edify" width={150} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/lg-logo.jpg" alt="LG" width={80} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/mi-logo.svg" alt="MI" width={80} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/tecsidel-logo.png" alt="Tecsidel" width={150} height={80} className="object-contain" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-[200px] h-[100px] flex items-center justify-center">
              <Image src="/clients/unify-logo.png" alt="Unify" width={150} height={80} className="object-contain" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dual Card Section: What MIPL's Known For & Looking for a Real Career? */}
      <div className="w-full bg-white py-24 flex justify-center items-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-0  overflow-hidden shadow-2xl border border-black">
          {/* Left Card */}
          <div className="bg-white flex flex-col justify-between p-10 min-h-[500px] relative">
          <h1 className="text-black md:text-4xl text-center mb-6">Our Services</h1>
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">What MIPL's Known For</h2>
              <img src="/solution_left.png" alt="Business Service" className="rounded-lg mb-8 w-64 h-56 object-cover shadow-lg" />
              <button className="flex items-center gap-3 mt-4 text-lg font-medium text-white px-6 py-3 rounded-full border border-white bg-black hover:border-black hover:bg-white hover:text-black transition">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white bg-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className='text-white'>
                    <path d="M5 12h14M13 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Business Service
              </button>
            </div>
          </div>
          {/* Right Card */}
          <div className="bg-black flex flex-col justify-between p-10 min-h-[500px] relative">
          <h1 className="text-white md:text-4xl text-center mb-6">Build a Career</h1>
            <div className="flex flex-col h-full justify-between">
              <div className="relative mb-8">
                <img src="/solution_right.png" alt="Career" className="rounded-lg w-full h-56 object-cover opacity-60" />
                <h2 className="absolute top-6 left-6 text-3xl md:text-4xl font-bold text-white">Looking for a Real Career?</h2>
                <p className="absolute top-24 left-6 right-6 text-white text-base md:text-lg font-medium max-w-md">Our team is made up of passionate people who love to create. We are constantly on a look out for talented, high-performing, and enthusiastic people to join our team.</p>
              </div>
              <button className="flex items-center gap-3 mt-4 text-lg font-medium text-black px-6 py-3 rounded-full border border-white bg-white hover:bg-black hover:text-white transition">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white bg-black">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className='text-white'>
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
  )
}

export default Page