"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Shimmer, AnimatedHeading } from '@/components/CustomReactBits';

const ServiceAnimatedLight = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await fetch('/api/services');
                if (response.ok) {
                    const data = await response.json();
                    // Only show active services and limit to 5 for the homepage
                    const activeServices = data
                        .filter(service => service.isActive)
                        .sort((a, b) => a.order - b.order)
                        .slice(0, 5);
                    setServices(activeServices);
                }
            } catch (error) {
                console.error('Error fetching services:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        fetchServices();
    }, []);
    
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
                    {isLoading ? (
                        // Loading placeholders
                        Array(5).fill(0).map((_, index) => (
                            <div 
                                key={index}
                                className="service-card p-6 relative overflow-hidden bg-white rounded-xl border border-gray-200 shadow-sm animate-pulse"
                            >
                                <div className="w-16 h-16 bg-gray-200 rounded-md mb-4"></div>
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                            </div>
                        ))
                    ) : Array.isArray(services) && services.length > 0 ? (
                        services.map((service, index) => (
                            <motion.div 
                                key={service._id}
                                className="service-card p-6 relative overflow-hidden group bg-white rounded-xl border border-gray-200 shadow-sm"
                                onMouseEnter={() => setHoveredCard(service._id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10 }}
                            >
                                {/* You can add custom badges based on service properties */}
                                {service.title.toLowerCase().includes('ai') && (
                                    <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full z-20">
                                        New!
                                    </span>
                                )}
                                {service.title.toLowerCase().includes('support') && (
                                    <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-600 text-xs font-medium px-2 py-1 rounded-full z-20">
                                        24/7
                                    </span>
                                )}
                                
                                <motion.div 
                                    className="mb-4 transition-transform duration-500 transform group-hover:scale-110"
                                    whileHover={{ rotate: 5 }}
                                >
                                    <img 
                                        src={service.icon || "/assets/imgs/service-icon-1.svg"} 
                                        alt={service.title} 
                                        className="w-16 h-16" 
                                        onError={(e) => {
                                            e.target.src = "/assets/imgs/service-icon-1.svg";
                                        }}
                                    />
                                </motion.div>
                                
                                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-indigo-600 transition-all duration-300">
                                    <Link href={`/services/${service.slug}`}>{service.title}</Link>
                                </h3>
                                
                                <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                                
                                <Link 
                                    href={`/services/${service.slug}`}
                                    className={`inline-flex items-center text-indigo-600 font-medium transition-all duration-500 ${
                                        hoveredCard === service._id ? 'translate-x-2' : ''
                                    }`}
                                >
                                    Learn more
                                    <ArrowRight className="ml-1 w-4 h-4" />
                                </Link>
                                
                                {/* Decorative element */}
                                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 group-hover:w-full" style={{ width: hoveredCard === service._id ? '100%' : '0%' }}></div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            No services found. Please add services in the admin panel.
                        </div>
                    )}
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