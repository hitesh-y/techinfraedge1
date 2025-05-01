"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Shimmer, AnimatedHeading, GradientText } from '@/components/CustomReactBits';
 
const services = [
  {
    id: 1,
    icon: "/assets/imgs/service-icon-1.svg",
    title: "Development",
    description: "Our development team creates custom software solutions tailored to your specific business needs. We specialize in web applications, mobile apps, and enterprise software that drive efficiency and growth.",
    features: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "API Development & Integration",
      "Legacy System Modernization"
    ],
    link: "/services/development",
    image: "/assets/imgs/case-studio-1-1.jpg"
  },
  {
    id: 2,
    icon: "/assets/imgs/service-icon-2.svg",
    title: "AI Automation",
    description: "Harness the power of artificial intelligence to automate processes, gain insights from your data, and create intelligent solutions that transform your business operations.",
    features: [
      "Machine Learning Solutions",
      "Process Automation",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision Applications"
    ],
    link: "/services/ai-automation",
    badge: "New!",
    image: "/assets/imgs/ai1.jpg"
  },
  {
    id: 3,
    icon: "/assets/imgs/service-icon-3.svg",
    title: "CRM Solutions",
    description: "Implement and customize customer relationship management systems that help you better understand, serve, and retain your customers while driving sales growth.",
    features: [
      "CRM Implementation & Integration",
      "Sales Pipeline Management",
      "Customer Service Automation",
      "Marketing Automation",
      "Analytics & Reporting"
    ],
    link: "/services/crm-solutions",
    image: "/assets/imgs/case-studio-3.jpg"
  },
  {
    id: 4,
    icon: "/assets/imgs/service-icon-4.svg",
    title: "Web Design",
    description: "Create stunning, responsive websites that not only look beautiful but also deliver exceptional user experiences and drive conversions.",
    features: [
      "Responsive Web Design",
      "UI/UX Design",
      "E-commerce Websites",
      "Landing Page Optimization",
      "Website Maintenance & Support"
    ],
    link: "/services/web-design",
    image: "/assets/imgs/case-studio-4.jpg"
  },
  {
    id: 5,
    icon: "/assets/imgs/service-icon-5.svg",
    title: "IT Support",
    description: "Get reliable, responsive IT support services that keep your systems running smoothly and minimize downtime, allowing you to focus on your core business.",
    features: [
      "24/7 Technical Support",
      "Network Management",
      "Security Monitoring",
      "Hardware & Software Troubleshooting",
      "Preventive Maintenance"
    ],
    link: "/services/it-support",
    badge: "24/7",
    image: "/assets/imgs/case-studio-5.jpg"
  },
  {
    id: 6,
    icon: "/assets/imgs/icons/service-icon-7.svg",
    title: "Cloud Services",
    description: "Leverage the power of cloud computing to increase scalability, reduce costs, and enhance collaboration across your organization.",
    features: [
      "Cloud Migration",
      "Cloud Infrastructure Management",
      "SaaS Implementation",
      "Hybrid Cloud Solutions",
      "Cloud Security"
    ],
    link: "/services/cloud-services",
    image: "/assets/imgs/case-studio-6.jpg"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 bg-white">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full bg-indigo-100/50 -top-20 -left-20 animate-blob"></div>
          <div className="absolute w-96 h-96 rounded-full bg-purple-100/50 bottom-20 -right-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Shimmer className="text-indigo-600 font-medium mb-3 uppercase">
                OUR SERVICES
              </Shimmer>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatedHeading 
                level={1} 
                effect="gradient" 
                from="#4F46E5" 
                to="#EC4899"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Comprehensive IT Solutions for Modern Businesses
              </AnimatedHeading>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We provide a wide range of IT services designed to help your business thrive in the digital age. 
              From custom software development to cloud solutions, our expert team delivers results that drive growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-500/50 shadow-lg transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {service.badge && (
                    <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full z-20">
                      {service.badge}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 mr-4 flex-shrink-0">
                      <img 
                        src={service.icon} 
                        alt={service.title} 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    {service.description.substring(0, 120)}...
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-5 h-5 mr-2 text-indigo-600 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-all duration-300 group-hover:translate-x-2"
                  >
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 rounded-full bg-indigo-100/50 -bottom-20 -right-20 animate-blob"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Ready to transform your business with our IT solutions?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Contact us today to discuss how we can help you achieve your technology goals and drive your business forward.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors inline-flex items-center"
              >
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}