"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const ClientModern = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("clients-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

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

  // Group logos into rows for better display
  const groupedLogos = []
  for (let i = 0; i < logos.length; i += 5) {
    groupedLogos.push(logos.slice(i, i + 5))
  }

  return (
    <section id="clients-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
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

        <div className="relative">
          {/* Gradient overlays for infinite scroll effect */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Logos grid with animation */}
          <div className="overflow-hidden py-8">
            {groupedLogos.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex justify-around items-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: rowIndex * 0.1 }}
              >
                {row.map((item, index) => (
                  <motion.div
                    key={index}
                    className="mx-4 group"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-indigo-100 transition-all duration-300 h-32 w-48 flex flex-col items-center justify-center">
                      <Image
                        src={item.logo || "/placeholder.svg"}
                        alt={item.name}
                        width={120}
                        height={60}
                        className="object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 mb-3"
                      />
                      <span className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 bg-indigo-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">100+</h3>
            <p className="text-gray-700">Global Clients</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">15+</h3>
            <p className="text-gray-700">Industries Served</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">95%</h3>
            <p className="text-gray-700">Client Retention</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ClientModern