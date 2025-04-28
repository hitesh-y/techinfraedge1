"use client"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "../data/siteData"
import { ChevronRight, ArrowUp, Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"
import { useState, useEffect } from "react"

export default function FooterTCSFinal() {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true)
            } else {
                setShowScrollTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // Footer links based on actual project structure
    const footerLinks = [
        {
            title: "Services",
            links: [
                { name: "Service Overview", url: "/service" },
                { name: "Service Details", url: "/service-details" },
                { name: "Cloud Services", url: "/services/cloud-services" },
                { name: "E-Commerce", url: "/services/e-commerce" },
                { name: "Digital Transformation", url: "/services/digital-transformation" },
                { name: "Solutions", url: "/solution" },
            ]
        },
        {
            title: "Company",
            links: [
                { name: "About Us", url: "/about" },
                { name: "Overview", url: "/overview" },
                { name: "Company", url: "/company" },
                { name: "Leadership", url: "/about/leadership" },
                { name: "Our History", url: "/about/history" },
                { name: "Careers", url: "/careers" },
            ]
        },
        {
            title: "Resources",
            links: [
                { name: "Blog", url: "/blog" },
                { name: "Case Studies", url: "/case-studie" },
                { name: "FAQ", url: "/faq" },
                { name: "Portfolio", url: "/portfolio" },
                { name: "Partners", url: "/partners" },
            ]
        },
        {
            title: "Industries",
            links: [
                { name: "Industries Overview", url: "/industries" },
                { name: "Banking & Finance", url: "/industries/banking-finance" },
                { name: "Healthcare", url: "/industries/healthcare" },
                { name: "How We Do", url: "/how-we-do" },
            ]
        },
        {
            title: "Contact",
            links: [
                { name: "Contact Us", url: "/contact" },
                { name: "Support", url: "/contact" },
            ]
        }
    ]

    return (
        <>
            {/* TCS-style Footer */}
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="container mx-auto px-4">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-12 pb-12 border-b border-gray-700">
                        {/* Logo and Contact Info */}
                        <div className="md:col-span-2">
                            <Link href="/" className="inline-block mb-6">
                                <Image 
                                    src={siteData.logoWhite || siteData.logo || "/placeholder.svg"} 
                                    alt={siteData.logoAlt} 
                                    width={150} 
                                    height={60} 
                                    className="transition-all duration-300 hover:opacity-90" 
                                />
                            </Link>
                            <p className="text-gray-400 mb-6">
                                Delivering innovative IT solutions to help businesses transform, grow, and succeed in the digital age.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <div className="text-primary mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">{siteData.phoneNumber}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-primary mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">{siteData.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="text-primary mr-3 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-gray-300">{siteData.address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer Links - TCS Style */}
                        {footerLinks.map((column, index) => (
                            <div key={index} className="md:col-span-1 lg:col-span-1">
                                <h3 className="text-lg font-semibold mb-4 text-white">{column.title}</h3>
                                <ul className="space-y-2">
                                    {column.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link 
                                                href={link.url} 
                                                className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group"
                                            >
                                                <ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -ml-5 group-hover:ml-0" />
                                                <span>{link.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section - TCS Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 pb-12 border-b border-gray-700">
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h3>
                            <p className="text-gray-400 mb-6">
                                Stay updated with our latest news, insights, and offers.
                            </p>
                        </div>
                        <div>
                            <form className="flex flex-col sm:flex-row gap-3">
                                <input 
                                    type="email" 
                                    placeholder="Your email address" 
                                    className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white"
                                    required
                                />
                                <button 
                                    type="submit" 
                                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Bottom Section - TCS Style */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <p className="text-gray-400">
                                &copy; {new Date().getFullYear()} {siteData.companyName}. All rights reserved.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 transform">
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button - TCS Style */}
            <button 
                onClick={scrollToTop}
                className={`fixed right-6 bottom-6 p-3 rounded-full bg-primary text-white shadow-lg transition-all duration-300 ${
                    showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </button>
        </>
    )
}