"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const AboutHero = () => {
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { once: true, amount: 0.1 })
  
  return (
    <section 
      ref={heroRef}
      className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-gradient-to-b from-indigo-50 to-white"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-grid-indigo/[0.03] bg-[length:40px_40px] z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-purple-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
              ABOUT TECHINFRAEDGE
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Transforming Businesses Through <span className="text-indigo-600">Technology</span>
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              We're a team of passionate technologists dedicated to helping businesses thrive in the digital age. 
              With expertise across multiple domains, we deliver innovative solutions that drive growth and efficiency.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Quality Focused</h3>
                  <p className="text-gray-600">Delivering excellence in every project</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Innovation Driven</h3>
                  <p className="text-gray-600">Embracing cutting-edge technologies</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">210+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Projects</h3>
              <p className="text-gray-600">Delivered worldwide</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">100%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Client Satisfaction</h3>
              <p className="text-gray-600">Happy customers</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">120+</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Clients</h3>
              <p className="text-gray-600">From multiple countries</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">2018</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">Established</h3>
              <p className="text-gray-600">Years of excellence</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero