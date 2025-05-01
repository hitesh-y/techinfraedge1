'use client'
import { siteData } from "@/data/siteData"
import Link from "next/link" 
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Clock, ArrowRight, Send, ChevronUp, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const FooterModern = () => {
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, amount: 0.1 })
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [subscribeStatus, setSubscribeStatus] = useState(null)
  
  const handleSubscribe = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubscribeStatus("success")
      setEmail("")
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubscribeStatus(null)
      }, 3000)
    }, 1000)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  
  return (
    <footer ref={footerRef} className="bg-gray-900 text-white relative">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 text-gray-800">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        {/* Footer Top - Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image 
                src={siteData.logo || "/placeholder.svg"} 
                alt={siteData.companyName} 
                width={150} 
                height={40} 
                className="h-10 w-auto" 
              />
            </Link>
            
            <p className="text-gray-400 mb-6">
              We provide the expertise and support to propel your business forward with cutting-edge IT solutions tailored to your specific needs.
            </p>
            
            <div className="flex space-x-3 mb-8">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-indigo-600 flex items-center justify-center transition-colors duration-300">
                <GitHub className="w-5 h-5" />
              </a> */}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              {siteData.footerLinks.services.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                >
                  <Link 
                    href={link.url}
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              {siteData.footerLinks.company.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.05) }}
                >
                  <Link 
                    href={link.url}
                    className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-6 mt-10 text-white relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></span>
            </h3>
            
            <ul className="space-y-3">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Link 
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.3, delay: 0.45 }}
              >
                <Link 
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center group"
                >
                  <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" />
                  Terms of Service
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold mb-6 text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></span>
            </h3>
            
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive the latest updates and news.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-8">
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address" 
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-200 placeholder-gray-500"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  {!isSubmitting && <Send className="ml-2 w-4 h-4" />}
                </button>
              </div>
              
              {subscribeStatus === "success" && (
                <p className="text-green-400 mt-2 text-sm">
                  Thank you for subscribing!
                </p>
              )}
            </form>
            
            <h3 className="text-xl font-bold mb-4 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-indigo-600 rounded-full"></span>
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-indigo-400 mr-3 mt-1" />
                <span className="text-gray-400">{siteData.address}</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-indigo-400 mr-3" />
                <span className="text-gray-400">{siteData.phoneNumber}</span>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-indigo-400 mr-3" />
                <span className="text-gray-400">{siteData.email}</span>
              </div>
              
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-indigo-400 mr-3" />
                <span className="text-gray-400">www.techinfraedge.com</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Footer Bottom - Copyright & Back to Top */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-center md:text-left mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} {siteData.companyName}. All rights reserved.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transition-colors shadow-lg hover:shadow-indigo-500/30"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        </div>
      </div>
      
      {/* Global Locations */}
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Globe className="w-5 h-5 text-indigo-400 mr-2" />
              <span className="text-gray-400 font-medium">Global Locations:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                <span className="text-gray-400">{siteData.address1.country}: {siteData.address1.number}</span>
              </div>
              
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
                <span className="text-gray-400">{siteData.address2.country}: {siteData.address2.number}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterModern