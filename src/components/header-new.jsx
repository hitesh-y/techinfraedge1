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
            <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="logo mr-8">
                                <Image src={siteData.logo || "/placeholder.svg"} alt={siteData.logoAlt} width={siteData.logoWidth} height={siteData.logoHeight} className="transition-all duration-300" style={{ height: scrolled ? '45px' : '50px', width: 'auto' }} />
                            </Link>
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
                                        {link.megaMenu && link.subMenu && (
                                            <div className="absolute left-0 top-full w-max bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                                <div className="p-4">
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
                                                </div>
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>

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
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className={`absolute right-0 top-0 h-full w-[300px] bg-white shadow-xl transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-4 border-b flex justify-between items-center">
                        <Image src={siteData.logo || "/placeholder.svg"} alt={siteData.logoAlt} width={100} height={40} />
                        <button 
                            onClick={toggleMobileMenu}
                            className="p-2 rounded-full hover:bg-gray-100"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    
                    <div className="overflow-y-auto h-[calc(100%-64px)]">
                        <ul className="p-4">
                            {siteData.navLinks.map((link, index) => (
                                <li key={index} className="mb-2">
                                    <div className="flex items-center justify-between">
                                        <Link 
                                            href={link.url} 
                                            className="py-2 block text-gray-800 font-medium"
                                            onClick={link.megaMenu ? undefined : toggleMobileMenu}
                                        >
                                            {link.name}
                                        </Link>
                                        {link.megaMenu && (
                                            <button 
                                                onClick={() => toggleDropdown(link.name.toLowerCase())}
                                                className="p-2"
                                            >
                                                <ChevronDown 
                                                    size={20} 
                                                    className={`transition-transform duration-300 ${activeDropdown === link.name.toLowerCase() ? 'rotate-180' : ''}`} 
                                                />
                                            </button>
                                        )}
                                    </div>
                                    
                                    {link.megaMenu && link.subMenu && (
                                        <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.name.toLowerCase() ? 'max-h-96' : 'max-h-0'}`}>
                                            <ul className="pl-4 py-2 space-y-2">
                                                {link.subMenu.map((subLink, subIndex) => (
                                                    <li key={subIndex}>
                                                        <Link 
                                                            href={subLink.url} 
                                                            className="py-2 block text-gray-600 hover:text-primary transition-colors"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                        
                        <div className="p-4 border-t">
                            <Link 
                                href="/contact" 
                                className="flex items-center justify-center w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
                                onClick={toggleMobileMenu}
                            >
                                Contact Us
                            </Link>
                        </div>
                        
                        <div className="p-4 border-t">
                            <div className="flex items-center space-x-2 mb-3">
                                <Phone size={16} className="text-primary" />
                                <span className="text-sm">{siteData.phoneNumber}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail size={16} className="text-primary" />
                                <span className="text-sm">{siteData.email}</span>
                            </div>
                        </div>
                        
                        <div className="p-4 border-t">
                            <div className="flex space-x-4">
                                {siteData.socialLinks.map((social, index) => (
                                    <a key={index} href={social.url} className="text-gray-600 hover:text-primary transition-colors">
                                        <i className={social.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Search Overlay */}
            <div className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${searchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="bg-white p-6 rounded-lg w-full max-w-2xl mx-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">Search</h3>
                        <button 
                            onClick={toggleSearch}
                            className="p-2 rounded-full hover:bg-gray-100"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search for services, solutions, etc."
                            className="w-full p-4 border rounded-lg pr-12 focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                        <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary">
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