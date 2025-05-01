"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "../data/siteData"
import { Phone, Mail, ChevronDown, Menu, X } from "lucide-react"

export default function HeaderSimple() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
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

    const toggleDropdown = (name) => {
        setActiveDropdown(activeDropdown === name ? null : name)
    }

    return (
        <>
            {/* Top Bar */}
            <div className="bg-indigo-600 text-white py-2 hidden md:block">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone size={14} className="text-indigo-200" />
                                <span className="text-sm">{siteData.phoneNumber}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail size={14} className="text-indigo-200" />
                                <span className="text-sm">{siteData.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            {siteData.socialLinks.map((social, index) => (
                                <a key={index} href={social.url} className="text-indigo-200 hover:text-white transition-colors">
                                    <i className={social.icon} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white shadow-md py-3' 
                    : 'bg-white py-4'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link href="/" className="mr-8">
                                <Image 
                                    src={siteData.logo || "/placeholder.svg"} 
                                    alt={siteData.title} 
                                    width={150} 
                                    height={40} 
                                    className="h-10 w-auto" 
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:block">
                            <ul className="flex space-x-1">
                                {siteData.navLinks.map((link, index) => (
                                    <li key={index} className="relative dropdown-container">
                                        <Link 
                                            href={link.url} 
                                            className="flex items-center px-4 py-2 text-gray-700 hover:text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors font-medium"
                                        >
                                            {link.name}
                                            {link.megaMenu && (
                                                <ChevronDown size={16} className="ml-1" />
                                            )}
                                        </Link>
                                        
                                        {link.megaMenu && link.subMenu && (
                                            <div className="dropdown-menu absolute left-0 top-full w-max bg-white shadow-xl rounded-md z-50 mt-1 hidden">
                                                <div className="p-4">
                                                    <ul className="grid grid-cols-2 gap-2 min-w-[320px]">
                                                        {link.subMenu.map((subLink, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link 
                                                                    href={subLink.url} 
                                                                    className="block px-4 py-2 hover:bg-indigo-50 rounded-md text-gray-700 hover:text-indigo-600 transition-colors"
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
                            <div className="hidden md:flex items-center space-x-2">
                                <Link 
                                    href="/contact" 
                                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors font-medium"
                                >
                                    Contact Us
                                </Link>
                            </div>
                            
                            <button 
                                className="lg:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                                onClick={toggleMobileMenu}
                                aria-label="Menu"
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden">
                    <div className="absolute right-0 top-0 h-full w-[300px] bg-white shadow-xl overflow-y-auto">
                        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                            <Image 
                                src={siteData.logo || "/placeholder.svg"} 
                                alt={siteData.title} 
                                width={120} 
                                height={30} 
                                className="h-8 w-auto" 
                            />
                            <button 
                                onClick={toggleMobileMenu}
                                className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        
                        <div className="p-4">
                            <ul className="space-y-4">
                                {siteData.navLinks.map((link, index) => (
                                    <li key={index} className="border-b border-gray-200 pb-4">
                                        <div className="flex items-center justify-between">
                                            <Link 
                                                href={link.url} 
                                                className="text-gray-700 font-medium"
                                                onClick={link.megaMenu ? undefined : toggleMobileMenu}
                                            >
                                                {link.name}
                                            </Link>
                                            {link.megaMenu && (
                                                <button 
                                                    onClick={() => toggleDropdown(link.name)}
                                                    className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
                                                >
                                                    <ChevronDown 
                                                        size={20} 
                                                        className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                                                    />
                                                </button>
                                            )}
                                        </div>
                                        
                                        {link.megaMenu && link.subMenu && activeDropdown === link.name && (
                                            <div className="pl-4 pt-4 space-y-2 border-l border-indigo-200 mt-4">
                                                {link.subMenu.map((subLink, subIndex) => (
                                                    <div key={subIndex}>
                                                        <Link 
                                                            href={subLink.url} 
                                                            className="block py-2 text-gray-600 hover:text-indigo-600 transition-colors"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="mt-6">
                                <Link 
                                    href="/contact" 
                                    className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-md transition-colors"
                                    onClick={toggleMobileMenu}
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}