"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "../data/siteData"
import { Phone, Mail, Menu, X, ChevronDown, Search, Globe, Clock } from "lucide-react"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [scrolled, setScrolled] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrolled])

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const toggleDropdown = (menuName) => {
        setActiveDropdown(activeDropdown === menuName ? null : menuName)
    }

    const toggleSearch = () => {
        setSearchOpen(!searchOpen)
    }

    return (
        <>
            {/* Top Bar */}
            <div className="bg-primary text-white py-2 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone size={16} />
                                <span className="text-sm">{siteData.phoneNumber}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail size={16} />
                                <span className="text-sm">{siteData.email}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock size={16} />
                                <span className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {siteData.socialLinks.map((social, index) => (
                                <a key={index} href={social.url} className="hover:text-gray-200 transition-colors">
                                    <i className={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`header-area sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="logo mr-8">
                                <Image src={siteData.logo || "/placeholder.svg"} alt={siteData.logoAlt} width={siteData.logoWidth} height={siteData.logoHeight} className="transition-all duration-300" style={{ height: scrolled ? '35px' : '40px', width: 'auto' }} />
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <button 
                                onClick={toggleSearch}
                                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                aria-label="Search"
                            >
                                <Search size={20} />
                            </button>
                            
                            <Link 
                                href="/contact" 
                                className="hidden md:flex items-center px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                            >
                                Contact Us
                            </Link>
                            
                            <button 
                                className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
                                onClick={toggleMobileMenu}
                                aria-label="Menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center ml-8">
                            <ul className="flex space-x-6">
                                {siteData.navLinks.map((link, index) => (
                                    <li key={index} className="relative group">
                                        <Link 
                                            href={link.url} 
                                            className="flex items-center py-2 text-gray-800 hover:text-primary transition-colors font-medium"
                                        >
                                            {link.name}
                                            {link.megaMenu && (
                                                <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-300" />
                                            )}
                                        </Link>
                                        {link.megaMenu && (
                                            <div className="absolute left-0 top-full w-max bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="p-4">
                                                    {link.subMenu && (
                                                        <ul className="grid grid-cols-2 gap-2 min-w-[320px]">
                                                            {link.subMenu.map((subLink, subIndex) => (
                                                                <li key={subIndex}>
                                                                    <Link 
                                                                        href={subLink.url} 
                                                                        className="block px-4 py-2 hover:bg-gray-50 rounded-md text-gray-700 hover:text-primary transition-colors"
                                                                    >
                                                                        {subLink.name}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {link.megaMenu && link.name === "Company" && (
                                            <div className={`mega-menu mega-menu-company ${activeDropdown === 'company' ? 'show' : ''}`}>
                                                <div className="mega-menu-inner">
                                                    <div className="custom-container d-flex">
                                                        <div className="left">
                                                            <div className="mega-menu-link-wrap d-flex justify-content-between"> 
                                                                <div className="mega-menu-links d-flex">
                                                                    <div className="mega-menu-link">
                                                                        {/* <h3>Company</h3> */}
                                                                        <ul>
                                                                            {link.subMenu.map((subLink, subIndex) => (
                                                                                <li key={subIndex}><Link href={subLink.url}>{subLink.name}</Link></li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                    {/* <div className="mega-menu-link">
                                                                        <h3>Product</h3>
                                                                        <ul>
                                                                            <li><Link href="overview">Overview</Link></li>
                                                                            <li><a href="pricing">Pricing</a></li>
                                                                            <li><Link href="feature">Features</Link></li>
                                                                            <li><Link href="case-studie">Case Studies</Link></li>
                                                                            <li><Link href="new-release">New Releases</Link></li>
                                                                            <li><Link href="solution">Solutions</Link></li>
                                                                        </ul>
                                                                    </div>  */}
                                                                </div>
                                                            </div>
                                                            <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                                <ul className="mega-menu-social d-flex align-items-center">
                                                                    {siteData.socialLinks.map((social, index) => (
                                                                        <li key={index}><a href={social.url}><i className={social.icon} /></a></li>
                                                                    ))}
                                                                </ul>
                                                                <p>Looking for new career? <Link href="/career">We're hiring</Link></p>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <div className="mega-menu-ads">
                                                                <img src="/assets/imgs/iphone-13-1.jpg" alt="Iphone" />
                                                                <h2>Solution in your hand</h2>
                                                                <p>Develop IT solutions based on the<br /> analysis phase.</p>
                                                                <a href="case-studie-single">View more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {link.megaMenu && link.name === "Portfolio" && (
                                            <div className={`mega-menu mega-menu-portfolio ${activeDropdown === 'portfolio' ? 'show' : ''}`}>
                                                <div className="mega-menu-inner">
                                                    <div className="custom-container d-flex">
                                                        <div className="left">
                                                            <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="/assets/imgs/portfolio-mega-menu-1.jpg" alt="Portfolio" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h3><Link href="/">E-commerce</Link></h3>
                                                                        <p>we undertook a project to <br />migrate their existing.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="/assets/imgs/portfolio-mega-menu-2.jpg" alt="Portfolio" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h3><Link href="/">App Development</Link></h3>
                                                                        <p>The mobile application has <br />significantly improved.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="/assets/imgs/portfolio-mega-menu-3.jpeg" alt="Portfolio" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h3><Link href="/">SAAS Integration</Link></h3>
                                                                        <p>We partnered with DEF to <br />upgrade their outdated IT.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-portfolio-card">
                                                                    <div className="img-box">
                                                                        <img src="/assets/imgs/portfolio-mega-menu-4.jpeg" alt="Portfolio" />
                                                                    </div>
                                                                    <div className="content-box">
                                                                        <h3><Link href="/">Virtual Reality</Link></h3>
                                                                        <p>Enter into the virtual reality <br />world for real experience.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                                <ul className="mega-menu-social d-flex align-items-center">
                                                                    {siteData.socialLinks.map((social, index) => (
                                                                        <li key={index}><a href={social.url}><i className={social.icon} /></a></li>
                                                                    ))}
                                                                </ul>
                                                                <p><Link href="/">View Portfolio <i className="iconoir-arrow-up-right" /></Link></p>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <div className="mega-menu-ads">
                                                                <img src="/assets/imgs/macbook.jpg" alt="iPad" />
                                                                <h2>Mobile app for a new era</h2>
                                                                <p>Download slack in your mobile for <br />your daily usage.</p>
                                                                <a href="case-studie-single">View more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        {link.megaMenu && link.name === "Services" && (
                                            <div className={`mega-menu ${activeDropdown === 'services' ? 'show' : ''}`}>
                                                <div className="mega-menu-inner">
                                                    <div className="custom-container d-flex">
                                                        <div className="left">
                                                            <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                                <div className="mega-menu-service-cards align-items-start">
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="/assets/imgs/hwd-icon-1.svg" alt="Service" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h2><Link href="how-we-do-single">Brainstroming</Link></h2>
                                                                            <p>Ideas</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="/assets/imgs/hwd-icon-4.svg" alt="Service" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h2><Link href="how-we-do-single">Product</Link></h2>
                                                                            <p>Design</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="/assets/imgs/hwd-icon-2.svg" alt="Service" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h2><Link href="how-we-do-single">SEO</Link></h2>
                                                                            <p>Optimization</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mega-menu-service-card">
                                                                        <span className="icon">
                                                                            <img src="/assets/imgs/hwd-icon-3.svg" alt="Service" />
                                                                        </span>
                                                                        <div className="content">
                                                                            <h2><Link href="how-we-do-single">Front-End</Link></h2>
                                                                            <p>Development</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mega-menu-links d-flex">
                                                                    <div className="mega-menu-link">
                                                                        <h3>Services</h3>
                                                                        <ul>
                                                                            {link.subMenu.map((subLink, subIndex) => (
                                                                                <li key={subIndex}><a href={subLink.url}>{subLink.name}</a></li>
                                                                            ))}
                                                                        </ul>
                                                                    </div> 
                                                                </div>
                                                            </div>
                                                            <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                                <ul className="mega-menu-social d-flex align-items-center">
                                                                    {siteData.socialLinks.map((social, index) => (
                                                                        <li key={index}><a href={social.url}><i className={social.icon} /></a></li>
                                                                    ))}
                                                                </ul>
                                                                <p>Looking for new career? <a href="career">We're hiring</a></p>
                                                            </div>
                                                        </div>
                                                        <div className="right">
                                                            <div className="mega-menu-ads">
                                                                <img src="/assets/imgs/ipad.jpg" alt="iPad" />
                                                                <h2>Our product hits</h2>
                                                                <p>Our new best IT product of the <br />year 2023.</p>
                                                                <a href="case-studie-single">View more</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-contact-info d-flex align-items-center">
                            <div className="phone-number">
                                <a href={`tel:${siteData.phoneNumber}`}>
                                    Call Us
                                    <i className="iconoir-arrow-up-right" />
                                </a>
                                {siteData.phoneNumber}
                            </div>
                            <Link href="/contact" className="theme-btn">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
