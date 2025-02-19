"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteData } from "../data/siteData"

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
                            <Image src={siteData.logo || "/placeholder.svg"} alt={siteData.logoAlt} width={siteData.logoWidth} height={siteData.logoHeight} />
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
                                {siteData.navLinks.map((link, index) => (
                                    <li key={index} className={`${link.megaMenu ? 'mega-menu-item' : ''} ${activeDropdown === link.name.toLowerCase() ? 'active' : ''}`}>
                                        <Link href={link.url}>{link.name}</Link>
                                        {link.megaMenu && (
                                            <span className="dropdown-menu-item-icon" onClick={() => toggleDropdown(link.name.toLowerCase())}>
                                                <i className="iconoir-plus" />
                                            </span>
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
