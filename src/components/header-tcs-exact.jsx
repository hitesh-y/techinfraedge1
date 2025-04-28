"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "../data/siteData"
import { Search, X, ChevronDown, ChevronRight, Menu, Globe, User } from "lucide-react"

export default function HeaderTCSExact() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(null)
    const [scrolled, setScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const dropdownRef = useRef(null)

    // TCS-style main navigation items
    const mainNavItems = [
        {
            name: "Services",
            hasDropdown: true,
            dropdownSections: [
                {
                    title: "IT Services",
                    links: [
                        { name: "AI Automation", url: "/services/ai-automation" },
                        { name: "IT Support", url: "/services/it-support" },
                        { name: "Web Design", url: "/services/web-design" },
                        { name: "Development", url: "/services/development" },
                        { name: "Cloud Services", url: "/services/cloud-things" },
                        { name: "E-Commerce", url: "/services/e-commerce" },
                        { name: "CRM Solutions", url: "/services/crm-solutions" },
                    ]
                },
                {
                    title: "Business Solutions",
                    links: [
                        { name: "Digital Transformation", url: "/services/digital-transformation" },
                        { name: "Enterprise Solutions", url: "/services/enterprise-solutions" },
                        { name: "Business Intelligence", url: "/services/business-intelligence" },
                        { name: "Data Analytics", url: "/services/data-analytics" },
                    ]
                },
                {
                    title: "Consulting",
                    links: [
                        { name: "IT Strategy", url: "/services/it-strategy" },
                        { name: "Technology Consulting", url: "/services/technology-consulting" },
                        { name: "Process Optimization", url: "/services/process-optimization" },
                    ]
                }
            ]
        },
        {
            name: "Industries",
            hasDropdown: true,
            dropdownSections: [
                {
                    title: "Industries We Serve",
                    links: [
                        { name: "Banking & Finance", url: "/industries/banking-finance" },
                        { name: "Healthcare", url: "/industries/healthcare" },
                        { name: "Manufacturing", url: "/industries/manufacturing" },
                        { name: "Retail", url: "/industries/retail" },
                        { name: "Education", url: "/industries/education" },
                        { name: "Logistics", url: "/industries/logistics" },
                    ]
                },
                {
                    title: "Industry Solutions",
                    links: [
                        { name: "FinTech Solutions", url: "/industries/fintech-solutions" },
                        { name: "HealthTech", url: "/industries/healthtech" },
                        { name: "EdTech", url: "/industries/edtech" },
                        { name: "Retail Technology", url: "/industries/retail-technology" },
                    ]
                }
            ]
        },
        {
            name: "Products",
            hasDropdown: true,
            dropdownSections: [
                {
                    title: "Software Products",
                    links: [
                        { name: "Enterprise Management", url: "/products/enterprise-management" },
                        { name: "Customer Relationship", url: "/products/customer-relationship" },
                        { name: "Business Analytics", url: "/products/business-analytics" },
                        { name: "Cloud Solutions", url: "/products/cloud-solutions" },
                    ]
                },
                {
                    title: "Product Categories",
                    links: [
                        { name: "SaaS Products", url: "/products/saas" },
                        { name: "Mobile Applications", url: "/products/mobile-applications" },
                        { name: "Custom Software", url: "/products/custom-software" },
                    ]
                }
            ]
        },
        {
            name: "Insights",
            hasDropdown: true,
            dropdownSections: [
                {
                    title: "Knowledge Center",
                    links: [
                        { name: "Blog", url: "/insights/blog" },
                        { name: "Case Studies", url: "/insights/case-studies" },
                        { name: "White Papers", url: "/insights/white-papers" },
                        { name: "Research", url: "/insights/research" },
                    ]
                },
                {
                    title: "Trending Topics",
                    links: [
                        { name: "Artificial Intelligence", url: "/insights/artificial-intelligence" },
                        { name: "Digital Transformation", url: "/insights/digital-transformation" },
                        { name: "Cybersecurity", url: "/insights/cybersecurity" },
                        { name: "Cloud Computing", url: "/insights/cloud-computing" },
                    ]
                }
            ]
        },
        {
            name: "About Us",
            hasDropdown: true,
            dropdownSections: [
                {
                    title: "Company",
                    links: [
                        { name: "Overview", url: "/about/overview" },
                        { name: "Leadership", url: "/about/leadership" },
                        { name: "Our History", url: "/about/history" },
                        { name: "Careers", url: "/about/careers" },
                    ]
                },
                {
                    title: "Corporate",
                    links: [
                        { name: "Investors", url: "/about/investors" },
                        { name: "Partners", url: "/about/partners" },
                        { name: "Sustainability", url: "/about/sustainability" },
                    ]
                }
            ]
        },
        {
            name: "Careers",
            url: "/careers",
            hasDropdown: false
        }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveTab(null);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [scrolled]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleTab = (tabName) => {
        setActiveTab(activeTab === tabName ? null : tabName);
    };

    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    return (
        <>
            {/* Top Bar - TCS Style */}
            <div className="bg-white border-b border-gray-200 py-2 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <Link href="/" className="logo transition-transform duration-300 hover:scale-105">
                                <Image 
                                    src={siteData.logo || "/placeholder.svg"} 
                                    alt={siteData.logoAlt} 
                                    width={siteData.logoWidth} 
                                    height={siteData.logoHeight} 
                                    className="transition-all duration-300" 
                                    style={{ height: '40px', width: 'auto' }} 
                                />
                            </Link>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="group relative">
                                <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors">
                                    <Globe size={16} />
                                    <span>Global</span>
                                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                                </button>
                                <div className="absolute right-0 top-full w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                    <div className="p-3">
                                        <div className="py-1 border-b mb-2">
                                            <span className="text-xs text-gray-500">Select Country</span>
                                        </div>
                                        <ul className="space-y-1">
                                            <li><a href="#" className="block px-2 py-1 hover:bg-gray-50 rounded-md text-sm">India</a></li>
                                            <li><a href="#" className="block px-2 py-1 hover:bg-gray-50 rounded-md text-sm">UAE</a></li>
                                            <li><a href="#" className="block px-2 py-1 hover:bg-gray-50 rounded-md text-sm">United States</a></li>
                                            <li><a href="#" className="block px-2 py-1 hover:bg-gray-50 rounded-md text-sm">United Kingdom</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <button 
                                onClick={toggleSearch}
                                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                <Search size={16} />
                                <span>Search</span>
                            </button>

                            <Link 
                                href="/contact" 
                                className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                                <User size={16} />
                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header - TCS Style */}
            <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white py-3'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Mobile Logo */}
                        <div className="md:hidden">
                            <Link href="/" className="logo">
                                <Image 
                                    src={siteData.logo || "/placeholder.svg"} 
                                    alt={siteData.logoAlt} 
                                    width={100} 
                                    height={40} 
                                    className="transition-all duration-300" 
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:block w-full" ref={dropdownRef}>
                            <ul className="flex space-x-8">
                                {mainNavItems.map((item, index) => (
                                    <li key={index} className="relative group">
                                        {item.hasDropdown ? (
                                            <button 
                                                onClick={() => toggleTab(item.name)}
                                                className={`flex items-center py-2 text-gray-800 hover:text-primary transition-colors font-medium ${activeTab === item.name ? 'text-primary' : ''}`}
                                            >
                                                {item.name}
                                                <ChevronDown 
                                                    size={16} 
                                                    className={`ml-1 transition-transform duration-300 ${activeTab === item.name ? 'rotate-180' : ''}`} 
                                                />
                                            </button>
                                        ) : (
                                            <Link 
                                                href={item.url} 
                                                className="flex items-center py-2 text-gray-800 hover:text-primary transition-colors font-medium"
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                        
                                        {/* TCS-style mega dropdown */}
                                        {item.hasDropdown && (
                                            <div 
                                                className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 transform ${
                                                    activeTab === item.name 
                                                        ? 'opacity-100 visible translate-y-0' 
                                                        : 'opacity-0 invisible translate-y-2'
                                                } z-50`}
                                                style={{ width: '700px' }}
                                            >
                                                <div className="p-6 grid grid-cols-3 gap-6">
                                                    {item.dropdownSections.map((section, sectionIndex) => (
                                                        <div key={sectionIndex}>
                                                            <h3 className="text-lg font-semibold mb-3 text-gray-800">{section.title}</h3>
                                                            <ul className="space-y-2">
                                                                {section.links.map((link, linkIndex) => (
                                                                    <li key={linkIndex}>
                                                                        <Link 
                                                                            href={link.url} 
                                                                            className="flex items-center text-gray-600 hover:text-primary transition-colors hover:translate-x-1 duration-300"
                                                                            onClick={() => setActiveTab(null)}
                                                                        >
                                                                            <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                                            {link.name}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="bg-gray-50 p-4 flex justify-between items-center">
                                                    <div className="text-sm text-gray-500">
                                                        Explore all {item.name.toLowerCase()} solutions
                                                    </div>
                                                    <Link 
                                                        href={`/${item.name.toLowerCase()}`}
                                                        className="text-primary font-medium flex items-center hover:underline"
                                                        onClick={() => setActiveTab(null)}
                                                    >
                                                        View All
                                                        <ChevronRight size={16} className="ml-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                            onClick={toggleMobileMenu}
                            aria-label="Menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Overlay - TCS Style */}
            <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 border-b flex justify-between items-center">
                        <Image src={siteData.logo || "/placeholder.svg"} alt={siteData.logoAlt} width={100} height={40} />
                        <button 
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-full hover:bg-gray-100 transition-transform hover:rotate-90 duration-300"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="overflow-y-auto h-[calc(100%-64px)]">
                        <ul className="p-4">
                            {mainNavItems.map((item, index) => (
                                <li key={index} className="mb-2">
                                    <div className="flex items-center justify-between">
                                        {item.hasDropdown ? (
                                            <button 
                                                onClick={() => toggleTab(item.name)}
                                                className="py-2 block text-gray-800 font-medium hover:text-primary transition-colors w-full text-left"
                                            >
                                                {item.name}
                                            </button>
                                        ) : (
                                            <Link 
                                                href={item.url} 
                                                className="py-2 block text-gray-800 font-medium hover:text-primary transition-colors"
                                                onClick={toggleMobileMenu}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                        
                                        {item.hasDropdown && (
                                            <button 
                                                onClick={() => toggleTab(item.name)}
                                                className="p-2 transition-transform hover:scale-110 duration-300"
                                            >
                                                <ChevronDown 
                                                    size={20} 
                                                    className={`transition-transform duration-300 ${activeTab === item.name ? 'rotate-180' : ''}`} 
                                                />
                                            </button>
                                        )}
                                    </div>
                                    
                                    {item.hasDropdown && (
                                        <div className={`overflow-hidden transition-all duration-300 ${activeTab === item.name ? 'max-h-[500px]' : 'max-h-0'}`}>
                                            <div className="pl-4 py-2 space-y-4">
                                                {item.dropdownSections.map((section, sectionIndex) => (
                                                    <div key={sectionIndex}>
                                                        <h3 className="font-medium text-gray-800 mb-2">{section.title}</h3>
                                                        <ul className="space-y-2 pl-2">
                                                            {section.links.map((link, linkIndex) => (
                                                                <li key={linkIndex}>
                                                                    <Link 
                                                                        href={link.url} 
                                                                        className="py-1 block text-gray-600 hover:text-primary transition-all duration-300 hover:translate-x-2"
                                                                        onClick={toggleMobileMenu}
                                                                    >
                                                                        {link.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="p-4 border-t">
                            <Link 
                                href="/contact" 
                                className="flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                                onClick={toggleMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </div>
                        
                        <div className="p-4 border-t">
                            <div className="flex items-center space-x-2 mb-3 hover:translate-x-1 transition-transform duration-300">
                                <span className="text-sm">{siteData.phoneNumber}</span>
                            </div>
                            <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-300">
                                <span className="text-sm">{siteData.email}</span>
                            </div>
                        </div>
                        
                        <div className="p-4 border-t">
                            <div className="flex space-x-4">
                                {siteData.socialLinks.map((social, index) => (
                                    <a key={index} href={social.url} className="text-gray-600 hover:text-primary transition-all duration-300 hover:scale-125">
                                        <i className={social.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Search Overlay - TCS Style */}
            <div className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white p-6 rounded-lg w-full max-w-2xl mx-4 transform transition-transform duration-500 ${searchOpen ? 'scale-100' : 'scale-95'}`}>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Search</h3>
                        <button 
                            onClick={toggleSearch}
                            className="p-2 rounded-full hover:bg-gray-100 transition-transform hover:rotate-90 duration-300"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search for services, solutions, etc."
                            className="w-full p-4 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 focus:shadow-md"
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary transition-colors duration-300">
                            <Search size={20} />
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-500">Popular searches: Development, AI Automation, Cloud Services</p>
                    </div>
                </div>
            </div>
        </>
    )
}