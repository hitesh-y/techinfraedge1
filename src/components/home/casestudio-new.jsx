'use client'
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Code, ShoppingCart, ShoppingBag, BarChart3, ArrowRight, Image as ImageIcon } from "lucide-react";

const Casestudio = () => {
    const [activeTab, setActiveTab] = useState("development"); // Default active tab
    const [imageLoaded, setImageLoaded] = useState({
        development: false,
        woo_commerce: false,
        shopify: false,
        marketing: false
    });

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    const handleImageLoad = (tab) => {
        setImageLoaded(prev => ({
            ...prev,
            [tab]: true
        }));
    };

    const handleImageError = (tab) => {
        setImageLoaded(prev => ({
            ...prev,
            [tab]: false
        }));
    };

    const caseStudies = {
        development: {
            icon: <Code className="w-6 h-6" />,
            title: "Web Development Solutions",
            description: "Our web development team creates custom, responsive websites and web applications that are optimized for performance and user experience.",
            features: [
                "Custom Web Applications",
                "Responsive Design",
                "Performance Optimization",
                "API Development & Integration"
            ],
            image: "/assets/imgs/case-study-1.jpg",
            alt: "Web Development"
        },
        woo_commerce: {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "WooCommerce Solutions",
            description: "We build powerful e-commerce stores with WooCommerce that are customized to meet your specific business needs and goals.",
            features: [
                "Custom WooCommerce Themes",
                "Plugin Development",
                "Payment Gateway Integration",
                "Inventory Management"
            ],
            image: "/assets/imgs/case-study-2.jpg",
            alt: "WooCommerce"
        },
        shopify: {
            icon: <ShoppingBag className="w-6 h-6" />,
            title: "Shopify Solutions",
            description: "Our Shopify experts create beautiful, high-converting online stores that help you sell more and grow your business.",
            features: [
                "Custom Shopify Themes",
                "App Development",
                "Store Optimization",
                "Migration Services"
            ],
            image: "/assets/imgs/case-study-3.jpg",
            alt: "Shopify"
        },
        marketing: {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Digital Marketing Solutions",
            description: "Our digital marketing strategies help you reach your target audience, increase brand awareness, and drive conversions.",
            features: [
                "SEO Optimization",
                "Content Marketing",
                "Social Media Management",
                "PPC Campaigns"
            ],
            image: "/assets/imgs/case-study-4.jpg",
            alt: "Digital Marketing"
        }
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-indigo-900 blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-900 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1 bg-indigo-900/50 rounded-full text-indigo-400 font-medium text-sm mb-4 border border-indigo-700/30">
                        CASE STUDIES
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Detailing of our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">products</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg">
                        Explore our successful projects and see how we've helped businesses achieve their goals.
                    </p>
                </motion.div>
                
                <div className="max-w-6xl mx-auto">
                    {/* Tabs */}
                    <motion.div 
                        className="flex flex-wrap justify-center mb-12 gap-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {Object.entries(caseStudies).map(([id, study], index) => (
                            <button
                                key={id}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                                    activeTab === id 
                                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20" 
                                        : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                                }`}
                                onClick={() => handleTabClick(id)}
                            >
                                <span className="w-5 h-5">{study.icon}</span>
                                <span>{id.charAt(0).toUpperCase() + id.slice(1).replace('_', ' ')}</span>
                            </button>
                        ))}
                    </motion.div>
                    
                    {/* Content */}
                    <div className="relative">
                        <AnimatePresence mode="wait">
                            {Object.entries(caseStudies).map(([id, study]) => (
                                activeTab === id && (
                                    <motion.div
                                        key={id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1"
                                    >
                                        <div className="bg-gray-800 rounded-xl overflow-hidden">
                                            <div className="grid md:grid-cols-2 gap-0">
                                                {/* Content Section */}
                                                <div className="p-8 md:p-12 flex flex-col justify-between">
                                                    <div>
                                                        <div className="w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center mb-6 text-indigo-400 border border-indigo-700/30">
                                                            {study.icon}
                                                        </div>
                                                        
                                                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{study.title}</h3>
                                                        
                                                        <p className="text-gray-300 mb-8 text-lg">
                                                            {study.description}
                                                        </p>
                                                        
                                                        <div className="space-y-3 mb-8">
                                                            {study.features.map((feature, index) => (
                                                                <div key={index} className="flex items-start">
                                                                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 mr-3 flex-shrink-0" />
                                                                    <span className="text-gray-200">{feature}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    
                                                    <motion.a 
                                                        href={`/services/development`}
                                                        className="inline-flex items-center gap-2 text-indigo-400 font-medium hover:text-indigo-300 transition-colors w-fit"
                                                        whileHover={{ x: 5 }}
                                                    >
                                                        <span>View case study</span>
                                                        <ArrowRight className="w-4 h-4" />
                                                    </motion.a>
                                                </div>
                                                
                                                {/* Image Section */}
                                                <div className="relative h-full min-h-[300px] bg-gray-900">
                                                    {/* Skeleton */}
                                                    {!imageLoaded[id] && (
                                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 animate-pulse">
                                                            <div className="flex flex-col items-center justify-center text-gray-700">
                                                                <ImageIcon size={48} className="mb-4 opacity-50" />
                                                                <div className="w-32 h-2 bg-gray-800 rounded-full mb-3"></div>
                                                                <div className="w-24 h-2 bg-gray-800 rounded-full"></div>
                                                            </div>
                                                        </div>
                                                    )}
                                                    
                                                    {/* Actual Image */}
                                                    <img 
                                                        src={study.image} 
                                                        alt={study.alt}
                                                        className="w-full h-full object-cover"
                                                        onLoad={() => handleImageLoad(id)}
                                                        onError={() => handleImageError(id)}
                                                        style={{ display: imageLoaded[id] ? 'block' : 'none' }}
                                                    />
                                                    
                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Casestudio;