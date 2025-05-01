'use client'
import { useState } from "react";

const Casestudio = () => {
    const [activeTab, setActiveTab] = useState("development"); // Default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h5 className="text-indigo-400 font-medium mb-3 uppercase">CASE STUDIES</h5>
                    <h1 className="text-4xl font-bold mb-4 text-white">Detailing of our products</h1>
                </div>
                
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap justify-center mb-8 border-b border-gray-700">
                        <button
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === "development" 
                                    ? "text-indigo-400 border-b-2 border-indigo-500" 
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => handleTabClick("development")}
                        >
                            Development
                        </button>
                        <button
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === "woo_commerce" 
                                    ? "text-indigo-400 border-b-2 border-indigo-500" 
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => handleTabClick("woo_commerce")}
                        >
                            Woo Commerce
                        </button>
                        <button
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === "shopify" 
                                    ? "text-indigo-400 border-b-2 border-indigo-500" 
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => handleTabClick("shopify")}
                        >
                            Shopify
                        </button>
                        <button
                            className={`px-6 py-3 font-medium transition-colors ${
                                activeTab === "marketing" 
                                    ? "text-indigo-400 border-b-2 border-indigo-500" 
                                    : "text-gray-400 hover:text-white"
                            }`}
                            onClick={() => handleTabClick("marketing")}
                        >
                            Marketing
                        </button>
                    </div>
                    
                    <div className="tab-content">
                        {activeTab === "development" && (
                            <div className="bg-gray-800 rounded-xl p-8 border border-indigo-500/20">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl font-bold mb-4 text-white">Web Development Solutions</h3>
                                        <p className="text-gray-300 mb-6">
                                            Our web development team creates custom, responsive websites and web applications 
                                            that are optimized for performance and user experience.
                                        </p>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Custom Web Applications
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Responsive Design
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Performance Optimization
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> API Development & Integration
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <img 
                                            src="/assets/imgs/case-study-1.jpg" 
                                            alt="Web Development" 
                                            className="rounded-lg w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === "woo_commerce" && (
                            <div className="bg-gray-800 rounded-xl p-8 border border-indigo-500/20">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl font-bold mb-4 text-white">WooCommerce Solutions</h3>
                                        <p className="text-gray-300 mb-6">
                                            We build powerful e-commerce stores with WooCommerce that are customized to 
                                            meet your specific business needs and goals.
                                        </p>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Custom WooCommerce Themes
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Plugin Development
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Payment Gateway Integration
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Inventory Management
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <img 
                                            src="/assets/imgs/case-study-2.jpg" 
                                            alt="WooCommerce" 
                                            className="rounded-lg w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === "shopify" && (
                            <div className="bg-gray-800 rounded-xl p-8 border border-indigo-500/20">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl font-bold mb-4 text-white">Shopify Solutions</h3>
                                        <p className="text-gray-300 mb-6">
                                            Our Shopify experts create beautiful, high-converting online stores that 
                                            help you sell more and grow your business.
                                        </p>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Custom Shopify Themes
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> App Development
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Store Optimization
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Migration Services
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <img 
                                            src="/assets/imgs/case-study-3.jpg" 
                                            alt="Shopify" 
                                            className="rounded-lg w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                        
                        {activeTab === "marketing" && (
                            <div className="bg-gray-800 rounded-xl p-8 border border-indigo-500/20">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/2">
                                        <h3 className="text-2xl font-bold mb-4 text-white">Digital Marketing Solutions</h3>
                                        <p className="text-gray-300 mb-6">
                                            Our digital marketing strategies help you reach your target audience, 
                                            increase brand awareness, and drive conversions.
                                        </p>
                                        <ul className="space-y-2 text-gray-300">
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> SEO Optimization
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Content Marketing
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> Social Media Management
                                            </li>
                                            <li className="flex items-center">
                                                <i className="las la-check text-indigo-400 mr-2" /> PPC Campaigns
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <img 
                                            src="/assets/imgs/case-study-4.jpg" 
                                            alt="Digital Marketing" 
                                            className="rounded-lg w-full h-auto"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Casestudio;