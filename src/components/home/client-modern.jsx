"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"

const ClientModern = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  const [activeCategory, setActiveCategory] = useState("All")

  const logos = [
    {
      name: "Microsoft",
      logo: "/assets/imgs/partners/microsoft.svg",
      category: "Technology"
    },
    {
      name: "Amazon",
      logo: "/assets/imgs/partners/amazon.svg",
      category: "E-commerce"
    },
    {
      name: "Google",
      logo: "/assets/imgs/partners/google.svg",
      category: "Technology"
    },
    {
      name: "IBM",
      logo: "/assets/imgs/partners/client-logo4-1.svg",
      category: "Technology"
    },
    {
      name: "Oracle",
      logo: "/assets/imgs/partners/client-logo5-1.svg",
      category: "Technology"
    },
    {
      name: "Salesforce",
      logo: "/assets/imgs/partners/client-logo7.svg",
      category: "CRM"
    },
    {
      name: "Adobe",
      logo: "/assets/imgs/partners/client-logo8.svg",
      category: "Software"
    },
    {
      name: "Shopify",
      logo: "/assets/imgs/partners/client-logo9.svg",
      category: "E-commerce"
    },
    {
      name: "Slack",
      logo: "/assets/imgs/partners/client-logo10.svg",
      category: "Communication"
    },
    {
      name: "Zoom",
      logo: "/assets/imgs/partners/client-logo11.svg",
      category: "Communication"
    },
    {
      name: "Atlassian",
      logo: "/assets/imgs/partners/client-logo12.svg",
      category: "Software"
    },
    {
      name: "Stripe",
      logo: "/assets/imgs/partners/client-logo13.svg",
      category: "Finance"
    },
    {
      name: "Twilio",
      logo: "/assets/imgs/partners/client-logo14.svg",
      category: "Communication"
    },
    {
      name: "Dropbox",
      logo: "/assets/imgs/partners/client-logo15.svg",
      category: "Storage"
    },
    {
      name: "Asana",
      logo: "/assets/imgs/partners/client-logo16.svg",
      category: "Productivity"
    }
  ]

  // Get unique categories
  const categories = ["All", ...new Set(logos.map(logo => logo.category))];

  // Filter logos based on active category
  const filteredLogos = activeCategory === "All" 
    ? logos 
    : logos.filter(logo => logo.category === activeCategory);

  return (
    <section id="clients-section" ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
              TRUSTED WORLDWIDE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Clients & Partners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're proud to collaborate with leading organizations across industries, 
              delivering innovative solutions that drive business success.
            </p>
          </motion.div>
        </div>

        {/* Category filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Logos grid with responsive layout */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filteredLogos.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.4, 
                delay: 0.1 + (index * 0.05),
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300 h-full flex flex-col items-center justify-center">
                <div className="relative w-full h-16 md:h-20 mb-3">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-800 mb-1">{item.name}</h3>
                  <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section with improved responsiveness */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-indigo-100/50 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">100+</h3>
            <p className="text-gray-700">Global Clients</p>
          </div>
          
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-indigo-100/50 shadow-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">15+</h3>
            <p className="text-gray-700">Industries Served</p>
          </div>
          
          <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-indigo-100/50 shadow-sm sm:col-span-2 md:col-span-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">95%</h3>
            <p className="text-gray-700">Client Retention</p>
          </div>
        </motion.div>
 
      </div>
    </section>
  )
}

export default ClientModern;