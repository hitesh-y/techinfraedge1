import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-area">
            <img src="/assets/imgs/bg-shape-4.svg" alt="Shape" className="animation-slide-right bg-shape" />
            <div className="footer-top">
                <div className="custom-container">
                    <div className="custom-row align-items-end justify-content-between">
                        <div className="left-content">
                            <Link href="/" className="logo w-[195px]" >
                                <img src="/assets/imgs/logo.png" alt="Logo" />
                            </Link>
                            <p>We provide the expertise and support to <br />
                                propel your business forward.</p>
                            <form action="assets/mail/subscribe.php" method="POST" className="subscribe-form">
                                <div className="subscribe-box d-flex">
                                    <input type="email" id="email" name="email" placeholder="Enter Your Email" />
                                    <button id="submit2" className="theme-btn">Get Started</button>
                                </div>
                                {/* Alert Message */}
                                <div className="input-row">
                                    <div className="input-group alert-notification">
                                        <div id="alert-message-subscribe" className="alert-msg" />
                                    </div>
                                </div>
                            </form>
                            <div className="footer-clients d-flex align-items-center">
                                <div className="footer-client-img">
                                    <img src="/assets/imgs/youtube.svg" alt="Youtube" />
                                </div>
                                <div className="footer-client-img">
                                    <img src="/assets/imgs/webflow.svg" alt="webflow" />
                                </div>
                                <div className="footer-client-img">
                                    <img src="/assets/imgs/upwork.svg" alt="upwork" />
                                </div>
                                <div className="footer-client-img">
                                    <img src="/assets/imgs/shopify.svg" alt="shopify" />
                                </div>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="right-content-inner">
                                <h2>Let’s get started on something great</h2>
                                <p>Our team of IT experts looks forward to meeting with you <br />
                                    and providing valuable insights tailored to your business.</p>
                                <a href="contact.html" className="theme-btn">Get an appointment now</a>
                                <div className="footer-experience d-flex align-items-center">
                                    <div className="footer-experience-item">
                                        <h1>2 <span>Mins</span></h1>
                                        <p>Response Time</p>
                                    </div>
                                    <div className="footer-experience-item">
                                        <h1>99%</h1>
                                        <p>Client Satisfaction</p>
                                    </div>
                                    <div className="footer-experience-item">
                                        <h1>22+ <span>Years</span></h1>
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
                        <div className="footer-all-links-wrap justify-content-between d-flex">
                            <div className="footer-links">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="service-details.html">IT Support</a></li>
                                    <li><a href="service-details.html">Web Design</a></li>
                                    <li><a href="service-details.html">Development</a></li>
                                    <li><a href="service-details.html">Cloud Things <span className="new">New</span></a></li>
                                    <li><a href="service-details.html">E-Commerce</a></li>
                                    <li><a href="service-details.html">CRM Solutions</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h3>Company</h3>
                                <ul>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="partner.html">Partners</a></li>
                                    <li><a href="career.html">Careers</a></li>
                                    <li><a href="event.html">Events</a></li>
                                    <li><a href="team.html">Team</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <h3>Product</h3>
                                <ul>
                                    <li><a href="case-studie.html">Case Studies </a></li>
                                    <li><a href="pricing.html">Our Pricing</a></li>
                                    <li><a href="feature.html">Features</a></li>
                                    <li><a href="overview.html">Overview</a></li>
                                    <li><a href="new-release.html">New Releases</a></li>
                                    <li><a href="solution.html">Solutions</a></li>
                                </ul>
                            </div>
                            <div className="footer-links">
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
                            <div className="footer-links">
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
                        <div className="footer-contact-info">
                            <div className="footer-contact-info-item">
                                <h4>Phone</h4>
                                <p>
                                    <a href="tel:+91 96538 76904">+91 96538 76904</a> <br />
                                    <a href="tel:+91 96538 76904">+91 96538 76904</a>
                                </p>
                            </div>
                            <div className="footer-contact-info-item">
                                <h4>Mail</h4>
                                <p>
                                    <a href="mailto:hello@techinfraedge.com">hello@techinfraedge.com</a> <br />
                                    <a href="mailto:hello@techinfraedge.com">support@techinfraedge.com</a>
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
                            <li><a href="#">
                                <i className="iconoir-dribbble" />
                            </a></li>
                            <li><a href="#">
                                <i className="iconoir-twitter" />
                            </a></li>
                            <li><a href="#">
                                <i className="iconoir-instagram" />
                            </a></li>
                            <li><a href="#">
                                <i className="iconoir-linkedin" />
                            </a></li>
                        </ul>
                        <p>© 2025 All rights reserved by <a href="/">Techinfraedge </a></p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;