"use client"
import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { MapPin, Phone, Globe } from "lucide-react"

const ContactLocations = () => {
  const locationsRef = useRef(null)
  const isInView = useInView(locationsRef, { once: true, amount: 0.1 })
  const [activeLocation, setActiveLocation] = useState("india")
  const [siteSettings, setSiteSettings] = useState({
    address1: {
      country: "India",
      address: "123 Street, City, State, India",
      number: "+91 1234567890"
    },
    address2: {
      country: "UAE",
      address: "456 Street, City, UAE",
      number: "+971 1234567890"
    }
  })
  
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings');
        if (response.ok) {
          const data = await response.json();
          setSiteSettings(data);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };
    
    fetchSettings();
  }, []);
  
  const locations = [
    {
      id: "india",
      country: siteSettings.address1?.country || "India",
      address: siteSettings.address1?.address || "123 Street, City, State, India",
      phone: siteSettings.address1?.number || "+91 1234567890",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.1757538408585!2d75.7667!3d26.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5bca6295ad5%3A0x9d8d243dd5212da8!2sMansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
    },
    {
      id: "uae",
      country: siteSettings.address2?.country || "UAE",
      address: siteSettings.address2?.address || "456 Street, City, UAE",
      phone: siteSettings.address2?.number || "+971 1234567890",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.4629876543217!2d55.3456!3d25.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c2a5d9a3b0b%3A0x1234567890abcdef!2sDeira%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1623456789012!5m2!1sen!2sae"
    }
  ]
  
  return (
    <section 
      id="locations"
      ref={locationsRef}
      className="py-20 bg-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Left content */}
            <motion.div 
              className="w-full lg:w-1/3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="sticky top-32">
                <span className="inline-block px-4 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-4 border border-indigo-700/50">
                  GLOBAL PRESENCE
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Visit Our Offices <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Around the World</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Our locations are strategically situated, making them ideal destinations for businesses and visitors alike.
                </p>
                
                <div className="space-y-4 mb-8">
                  {locations.map((location) => (
                    <motion.div
                      key={location.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeLocation === location.id 
                          ? 'bg-indigo-900/30 border border-indigo-700/50' 
                          : 'bg-gray-800/50 border border-gray-700 hover:border-gray-600'
                      }`}
                      onClick={() => setActiveLocation(location.id)}
                    >
                      <div className="flex items-center mb-2">
                        <Globe className="w-5 h-5 text-indigo-400 mr-2" />
                        <h3 className="text-xl font-bold text-white">{location.country}</h3>
                      </div>
                      <div className="pl-7">
                        <div className="flex items-start mb-2">
                          <MapPin className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0 mt-1" />
                          <p className="text-gray-300">{location.address}</p>
                        </div>
                        <div className="flex items-center">
                          <Phone className="w-4 h-4 text-indigo-400 mr-2" />
                          <p className="text-gray-300">{location.phone}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Right content - Map */}
            <motion.div 
              className="w-full lg:w-2/3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl h-[500px]">
                {locations.map((location) => (
                  <div 
                    key={location.id}
                    className={`w-full h-full ${activeLocation === location.id ? 'block' : 'hidden'}`}
                  >
                    <iframe 
                      src={location.mapUrl}
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.country} office`}
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactLocations