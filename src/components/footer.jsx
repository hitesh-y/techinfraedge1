'use client'
import { siteData } from "@/data/siteData"
import Link from "next/link" 

const Footer = () => {
  return (
    <footer className="footer-area">
      <img src="/assets/imgs/bg-shape-4.svg" alt="Shape" className="animation-slide-right bg-shape" />
      <div className="footer-top">
        <div className="custom-container">
          <div className="custom-row align-items-end justify-content-between">
            <div className="left-content">
              <Link href="/" className="logo w-[195px]">
                <img src={siteData.logo || "/placeholder.svg"} alt={siteData.logoAlt} />
              </Link>
              <p>
                We provide the expertise and support to <br />
                propel your business forward.
              </p>
              <form  method="POST" className="subscribe-form">
                <div className="subscribe-box d-flex">
                  <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                  <button id="submit2" className="theme-btn">
                    Get Started
                  </button>
                </div>
                {/* Alert Message */}
                <div className="input-row">
                  <div className="input-group alert-notification">
                    <div id="alert-message-subscribe" className="alert-msg" />
                  </div>
                </div>
              </form>
              <div className="footer-clients d-flex align-items-center">
                {siteData.clientLogos.map((client, index) => (
                  <div key={index} className="footer-client-img">
                    <img src={client.logo || "/placeholder.svg"} alt={client.name} />
                  </div>
                ))}
              </div>
            </div>
            <div className="right-content">
              <div className="right-content-inner">
                <h2>Let's get started on something great</h2>
                <p>
                  Our team of IT experts looks forward to meeting with you <br />
                  and providing valuable insights tailored to your business.
                </p>
                <Link href="/contact" className="theme-btn">
                  Get an appointment now
                </Link>
                <div className="footer-experience d-flex align-items-center">
                  <div className="footer-experience-item">
                    <h1>
                      2 <span>Mins</span>
                    </h1>
                    <p>Response Time</p>
                  </div>
                  <div className="footer-experience-item">
                    <h1>99%</h1>
                    <p>Client Satisfaction</p>
                  </div>
                  <div className="footer-experience-item">
                    <h1>
                      2+ <span>Years</span>
                    </h1>
                    <p>Field Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="custom-container">
          <div className="custom-row">
            <div className="footer-all-links-wrap justify-content-center d-flex">
              {Object.entries(siteData.footerLinks).map(([category, links]) => (
                <div key={category} className="footer-links">
                  <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                  <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.url}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="footer-contact-info">
              <div className="footer-contact-info-item">
                <h4>Phone</h4>
                <p>
                  <a href={`tel:${siteData.phoneNumber}`}>{siteData.phoneNumber}</a> <br />
                  <a href={`tel:${siteData.phoneNumber}`}>{siteData.phoneNumber}</a>
                </p>
              </div>
              <div className="footer-contact-info-item">
                <h4>Mail</h4>
                <p>
                  <a href={`mailto:${siteData.email}`}>{siteData.email}</a> <br />
                  <a href={`mailto:${siteData.supportEmail}`}>{siteData.supportEmail}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-area">
        <div className="custom-container">
          <div className="custom-row d-flex align-items-center justify-content-between">
            <ul className="social-links d-flex align-items-center">
              {siteData.socialLinks.map((social, index) => (
                <li key={index}>
                  <a href={social.url}>
                    <i className={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
            <p>
              © {new Date().getFullYear()} All rights reserved by <a href="/">{siteData.companyName}</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

