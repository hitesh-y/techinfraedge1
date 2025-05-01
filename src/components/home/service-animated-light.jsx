"use client"
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Shimmer, AnimatedHeading } from '@/components/CustomReactBits';

const ServiceAnimatedLight = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const services = [
        {
            id: 1,
            icon: "/assets/imgs/service-icon-1.svg",
            title: "Development",
            description: "Our development is pixel perfect in all ways.",
            link: "/services/development"
        },
        {
            id: 2,
            icon: "/assets/imgs/service-icon-2.svg",
            title: "AI Automation",
            description: "Intelligent solutions powered by cutting-edge AI.",
            link: "/services/ai-automation",
            badge: "New!"
        },
        {
            id: 3,
            icon: "/assets/imgs/service-icon-3.svg",
            title: "CRM Solutions",
            description: "We enhance customer experiences for success.",
            link: "/services/crm-solutions"
        },
        {
            id: 4,
            icon: "/assets/imgs/service-icon-4.svg",
            title: "Web Design",
            description: "We create vibrant, intuitive and minimalist web.",
            link: "/services/web-design"
        },
        {
            id: 5,
            icon: "/assets/imgs/service-icon-5.svg",
            title: "IT Support",
            description: "We offers expert assistance for your IT issues.",
            link: "/services/it-support",
            badge: "24/7"
        }
    ];
    
    return (
        <section className="service-area py-16 relative bg-gray-50">
            {/* Background elements */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute w-96 h-96 rounded-full bg-indigo-100/50 -top-20 -left-20 animate-blob"></div>
                <div className="absolute w-96 h-96 rounded-full bg-purple-100/50 bottom-20 -right-20 animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="service-section-header section-header flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div className="left mb-6 md:mb-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <Shimmer className="text-indigo-600 font-medium mb-3 uppercase">
                                WHAT WE'RE OFFERING
                            </Shimmer>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <AnimatedHeading 
                                level={1} 
                                effect="gradient" 
                                from="#4F46E5" 
                                to="#EC4899"
                                className="text-4xl md:text-5xl font-bold mb-4 text-gray-800"
                            >
                                Dealing in all professional <br />IT services.
                            </AnimatedHeading>
                        </motion.div>
                    </div>
                    
                    <motion.p 
                        className="max-w-md text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        One fundamental aspect of IT services is infrastructure management. This involves the design,
                        implementation, and maintenance of the hardware, software, networks, and servers.
                    </motion.p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <motion.div 
                            key={service.id}
                            className="service-card p-6 relative overflow-hidden group bg-white rounded-xl border border-gray-200 shadow-sm"
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                        >
                            {service.badge && (
                                <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full z-20">
                                    {service.badge}
                                </span>
                            )}
                            
                            <motion.div 
                                className="mb-4 transition-transform duration-500 transform group-hover:scale-110"
                                whileHover={{ rotate: 5 }}
                            >
                                <img 
                                    src={service.icon} 
                                    alt={service.title} 
                                    className="w-16 h-16" 
                                />
                            </motion.div>
                            
                            <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-all duration-300">
                                <Link href={service.link}>{service.title}</Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            
                            <Link 
                                href={service.link}
                                className={`inline-flex items-center text-indigo-600 font-medium transition-all duration-500 ${
                                    hoveredCard === service.id ? 'translate-x-2' : ''
                                }`}
                            >
                                Learn more
                                <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                            
                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 group-hover:w-full" style={{ width: hoveredCard === service.id ? '100%' : '0%' }}></div>
                        </motion.div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link 
                            href="/services" 
                            className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all duration-300 shadow-md"
                        >
                            View All Services
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAnimatedLight;