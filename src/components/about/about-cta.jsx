"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const AboutCta = () => {
  const ctaRef = useRef(null)
  const isInView = useInView(ctaRef, { once: true, amount: 0.1 })
  
  return (
    <section 
      ref={ctaRef}
      className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.05] bg-[length:40px_40px] z-0"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
          >
            Ready to Transform Your Business with Technology?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-indigo-100 mb-10"
          >
            Partner with TechInfraEdge to leverage cutting-edge technology solutions that drive growth, efficiency, and innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-indigo-700 hover:bg-indigo-50 rounded-lg transition-colors font-medium text-lg shadow-lg"
            >
              Get Started
            </Link>
            
            <Link 
              href="/services" 
              className="px-8 py-4 bg-indigo-700/30 hover:bg-indigo-700/50 text-white border border-indigo-200/30 rounded-lg transition-colors font-medium text-lg"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutCta