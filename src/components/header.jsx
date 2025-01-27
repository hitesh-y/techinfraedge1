"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const toggleDropdown = (menuName) => {
        setActiveDropdown(activeDropdown === menuName ? null : menuName)
    }

    return (
        <header className="header-area">
            <div className="custom-container">
                <div className="custom-row align-items-center justify-content-between">
                    <div className="header-left d-flex align-items-center">
                        <Link href="/" className="logo">
                            <Image src="/assets/imgs/logo.png" alt="Logo" width={150} height={40} />
                        </Link>

                        <div className="header-left-right">
                            <Link href="/contact" className="theme-btn">
                                Contact Us
                            </Link>
                            <span className="menu-bar" onClick={toggleMobileMenu}>
                                <i className="iconoir-menu" />
                            </span>
                        </div>

                        <nav className={`navbar-wrapper ${isMobileMenuOpen ? "active" : ""}`}>
                            <span className="close-menu-bar" onClick={toggleMobileMenu}>
                                <i className="iconoir-xmark" />
                            </span>
                            <ul>
                                <li className={`dropdown-menu-item ${activeDropdown === "home" ? "active" : ""}`}>
                                    <Link href="/">Home</Link>
                                    <span className="dropdown-menu-item-icon" onClick={() => toggleDropdown("home")}>
                                        <i className="iconoir-plus" />
                                    </span>
                                    <ul className={`dropdown-menu ${activeDropdown === "home" ? "show" : ""}`}>
                                        <li>
                                            <Link href="/">IT Services</Link>
                                        </li>
                                        <li>
                                            <Link href="/home2">Business Consulting</Link>
                                        </li>
                                    </ul>
                                </li>
                                {/* Company Mega Menu */}
                                <li className={`mega-menu-item ${activeDropdown === "company" ? "active" : ""}`}>
                                    <Link href="/company">Company</Link>
                                    <span className="dropdown-menu-item-icon" onClick={() => toggleDropdown("company")}>
                                        <i className="iconoir-plus" />
                                    </span>
                                    <div className={`mega-menu mega-menu-company ${activeDropdown === "company" ? "show" : ""}`}>
                                        <div class="mega-menu-inner">
                                            <div className="custom-container d-flex">
                                                <div className="left">
                                                    <div className="mega-menu-link-wrap d-flex justify-content-between">
                                                        <div className="mega-menu-link">
                                                            <h3>Get Started</h3>
                                                            <ul>
                                                                <li><a href="#">Setup 101</a></li>
                                                                <li><a href="#">Adding users</a></li>
                                                                <li><a href="#">Video tutorials</a></li>
                                                                <li><a href="#">Libraries and SDKs</a></li>
                                                                <li><a href="#">Plugins</a></li>
                                                                <li><a href="#">Templates</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="mega-menu-links d-flex">
                                                            <div className="mega-menu-link">
                                                                <h3>Company</h3>
                                                                <ul>
                                                                    <li><a href="about.html">About Us</a></li>
                                                                    <li><a href="partner.html">Partners</a></li>
                                                                    <li><a href="career.html">Careers</a></li>
                                                                    <li><a href="event.html">Events</a></li>
                                                                    <li><a href="team.html">Team</a></li>
                                                                    <li><a href="blog.html">Blog</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-link">
                                                                <h3>Product</h3>
                                                                <ul>
                                                                    <li><a href="overview.html">Overview</a></li>
                                                                    <li><a href="pricing.html">Pricing</a></li>
                                                                    <li><a href="feature.html">Features</a></li>
                                                                    <li><a href="case-studie.html">Case Studies</a></li>
                                                                    <li><a href="new-release.html">New Releases</a></li>
                                                                    <li><a href="solution.html">Solutions</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-link">
                                                                <h3>Legal</h3>
                                                                <ul>
                                                                    <li><a href="#">Licenses</a></li>
                                                                    <li><a href="#">Settings</a></li>
                                                                    <li><a href="#">Cookies</a></li>
                                                                    <li><a href="#">Document</a></li>
                                                                    <li><a href="#">Terms</a></li>
                                                                    <li><a href="#">Privacy</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                        <ul className="mega-menu-social d-flex align-items-center">
                                                            <li><a href="#"><i className="iconoir-dribbble" /></a></li>
                                                            <li><a href="#"><i className="iconoir-twitter" /></a></li>
                                                            <li><a href="#"><i className="iconoir-instagram" /></a></li>
                                                            <li><a href="#"><i className="iconoir-linkedin" /></a></li>
                                                        </ul>
                                                        <p>Looking for new career? <a href="career.html">We're hiring</a></p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="mega-menu-ads">
                                                        <img src="/assets/imgs/iphone-13-1.jpg" alt="Iphone" />
                                                        <h2>Solution in your hand</h2>
                                                        <p>Develop IT solutions based on the<br /> analysis phase.</p>
                                                        <a href="case-studie-single.html">View more</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </li>
                                {/* Portfolio Mega Menu */}
                                <li className={`mega-menu-item ${activeDropdown === "portfolio" ? "active" : ""}`}>
                                    <Link href="/portfolio">Portfolio</Link>
                                    <span className="dropdown-menu-item-icon" onClick={() => toggleDropdown("portfolio")}>
                                        <i className="iconoir-plus" />
                                    </span>
                                    <div className={`mega-menu mega-menu-portfolio ${activeDropdown === "portfolio" ? "show" : ""}`}>
                                        <div className="mega-menu-inner">
                                            <div className="custom-container d-flex">
                                                <div className="left">
                                                    <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                        <div className="mega-menu-portfolio-card">
                                                            <div className="img-box">
                                                                <img src="/assets/imgs/portfolio-mega-menu-1.jpg" alt="Portfolio" />
                                                            </div>
                                                            <div className="content-box">
                                                                <h3><a href="portfolio-details.html">E-commerce</a></h3>
                                                                <p>we undertook a project to <br />migrate their existing.
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-portfolio-card">
                                                            <div className="img-box">
                                                                <img src="/assets/imgs/portfolio-mega-menu-2.jpg" alt="Portfolio" />
                                                            </div>
                                                            <div className="content-box">
                                                                <h3><a href="portfolio-details.html">App Development</a></h3>
                                                                <p>The mobile application has <br />significantly
                                                                    improved.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-portfolio-card">
                                                            <div className="img-box">
                                                                <img src="/assets/imgs/portfolio-mega-menu-3.jpeg" alt="Portfolio" />
                                                            </div>
                                                            <div className="content-box">
                                                                <h3><a href="portfolio-details.html">SAAS Integration</a></h3>
                                                                <p>We partnered with DEF to <br />upgrade their outdated
                                                                    IT.</p>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-portfolio-card">
                                                            <div className="img-box">
                                                                <img src="/assets/imgs/portfolio-mega-menu-4.jpeg" alt="Portfolio" />
                                                            </div>
                                                            <div className="content-box">
                                                                <h3><a href="portfolio-details.html">Virtual Reality</a></h3>
                                                                <p>Enter into the virtual reality <br />
                                                                    world for real experience.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                        <ul className="mega-menu-social d-flex align-items-center">
                                                            <li><a href="#"><i className="iconoir-dribbble" /></a></li>
                                                            <li><a href="#"><i className="iconoir-twitter" /></a></li>
                                                            <li><a href="#"><i className="iconoir-instagram" /></a></li>
                                                            <li><a href="#"><i className="iconoir-linkedin" /></a></li>
                                                        </ul>
                                                        <p>
                                                            <a href="portfolio.html">View Portfolio <i className="iconoir-arrow-up-right" /></a>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="mega-menu-ads">
                                                        <img src="/assets/imgs/macbook.jpg" alt="iPad" />
                                                        <h2>Mobile app for a new era</h2>
                                                        <p>Download slack in your mobile for <br />
                                                            your daily usage.</p>
                                                        <a href="case-studie-single.html">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                {/* Services Mega Menu */}
                                <li className={`mega-menu-item ${activeDropdown === "services" ? "active" : ""}`}>
                                    <Link href="/service">Services</Link>
                                    <span className="dropdown-menu-item-icon" onClick={() => toggleDropdown("services")}>
                                        <i className="iconoir-plus" />
                                    </span>
                                    <div className={`mega-menu ${activeDropdown === "services" ? "show" : ""}`}>
                                        <div class="mega-menu-inner">
                                            <div className="custom-container d-flex">
                                                <div className="left">
                                                    <div className="mega-menu-link-wrap d-flex align-items-start justify-content-between">
                                                        <div className="mega-menu-service-cards align-items-start">
                                                            <div className="mega-menu-service-card">
                                                                <span className="icon">
                                                                    <img src="/assets/imgs/hwd-icon-1.svg" alt="Service" />
                                                                </span>
                                                                <div className="content">
                                                                    <h2><a href="how-we-do-single.html">Brainstroming</a></h2>
                                                                    <p>Ideas</p>
                                                                </div>
                                                            </div>
                                                            <div className="mega-menu-service-card">
                                                                <span className="icon">
                                                                    <img src="/assets/imgs/hwd-icon-4.svg" alt="Service" />
                                                                </span>
                                                                <div className="content">
                                                                    <h2><a href="how-we-do-single.html">Product</a></h2>
                                                                    <p>Design</p>
                                                                </div>
                                                            </div>
                                                            <div className="mega-menu-service-card">
                                                                <span className="icon">
                                                                    <img src="/assets/imgs/hwd-icon-2.svg" alt="Service" />
                                                                </span>
                                                                <div className="content">
                                                                    <h2><a href="how-we-do-single.html">SEO</a></h2>
                                                                    <p>Optimization</p>
                                                                </div>
                                                            </div>
                                                            <div className="mega-menu-service-card">
                                                                <span className="icon">
                                                                    <img src="/assets/imgs/hwd-icon-3.svg" alt="Service" />
                                                                </span>
                                                                <div className="content">
                                                                    <h2><a href="how-we-do-single.html">Front-End</a></h2>
                                                                    <p>Development</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mega-menu-links d-flex">
                                                            <div className="mega-menu-link">
                                                                <h3>Services</h3>
                                                                <ul>
                                                                    <li><a href="service-details.html">Development</a></li>
                                                                    <li><a href="service-details.html">Web Design</a></li>
                                                                    <li><a href="service-details.html">IT Support</a></li>
                                                                    <li><a href="service-details.html">E-Commerce</a></li>
                                                                    <li><a href="service-details.html">Cloud Things</a></li>
                                                                    <li><a href="service-details.html">CRM Solutions</a></li>
                                                                </ul>
                                                            </div>
                                                            <div className="mega-menu-link">
                                                                <h3>Our Fields</h3>
                                                                <ul>
                                                                    <li><a href="our-field-details.html">Healthcare</a></li>
                                                                    <li><a href="our-field-details.html">Banks</a></li>
                                                                    <li><a href="our-field-details.html">Logistics</a></li>
                                                                    <li><a href="our-field-details.html">Supermarkets</a></li>
                                                                    <li><a href="our-field-details.html">Industries</a></li>
                                                                    <li><a href="our-field-details.html">Hotels</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mega-meu-footer d-flex align-items-center justify-content-between w-full">
                                                        <ul className="mega-menu-social d-flex align-items-center">
                                                            <li><a href="#"><i className="iconoir-dribbble" /></a></li>
                                                            <li><a href="#"><i className="iconoir-twitter" /></a></li>
                                                            <li><a href="#"><i className="iconoir-instagram" /></a></li>
                                                            <li><a href="#"><i className="iconoir-linkedin" /></a></li>
                                                        </ul>
                                                        <p>Looking for new career? <a href="career.html">We're hiring</a></p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="mega-menu-ads">
                                                        <img src="/assets/imgs/ipad.jpg" alt="iPad" />
                                                        <h2>Our product hits</h2>
                                                        <p>Our new best IT product of the <br />year 2023.</p>
                                                        <a href="case-studie-single.html">View more</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/faq">FAQ</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="header-right">
                        <div className="header-contact-info d-flex align-items-center">
                            <div className="phone-number">
                                <a href="tel:+919653876904">
                                    Call Us
                                    <i className="iconoir-arrow-up-right" />
                                </a>
                                +91 96538 76904
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

