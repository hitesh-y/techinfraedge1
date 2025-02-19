import Client from "@/components/home/client";

const About = () => {
    return (
        <>
            <section className="hero-service-wrap hero-section-wrap hero-about-wrap">
                <div className="hero-section-content-wrap">
                    <div className="custom-container">
                        <div className="hero-portfolio-body">
                            <div className="hero-section-content text-center">
                                <h6 className="section-subtitle">Company</h6>
                                <h2 className="section-title fade-in">Our company provide a best
                                    horizon tech solutions</h2>            <p>Experience the transformative power of innovation and seamless solutions with
                                        dynamics. Our journey doesn't end with the delivery of a solution.</p>
                            </div>
                            <div className="hero-company-boxes">
                                <div className="hero-company-box simple-shadow">
                                    <h2>210+</h2>
                                    <h4>Projects</h4>                <p>We are spread around the world.</p>
                                </div>
                                <div className="hero-company-box simple-shadow">
                                    <h2>100%</h2>
                                    <h4>Client Satisfaction</h4>                <p>Our clients a happy with our service.</p>
                                </div>
                                <div className="hero-company-box simple-shadow">
                                    <h2>120</h2>
                                    <h4>Legal Customers</h4>                <p>Our customers are from many countries.</p>
                                </div>
                                <div className="hero-company-box simple-shadow">
                                    <h2>2023</h2>
                                    <h4>We Established On</h4>                <p>Our company have a
                                        great history.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Client/>
            <section className="company-service-area ">
                <div className="custom-container">
                    <div className="partner-service-inner">
                        <div className="hero-service-about">
                            <div className="section-header d-flex align-items-center justify-content-between w-full">
                                <div className="left">
                                    <h6 className="section-subtitle">OUR COMPANY</h6>
                                    <h2 className="section-title">Why our company is too popular?</h2>            <p>Contact us today to begin your journey!</p>
                                </div>
                                <a href="/contact" className="theme-btn">Contact Us</a>
                            </div>
                            <img decoding="async" src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-company-about.jpg" />
                            <div className="hero-service-about-body">
                                <p>Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project. At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we maintain the highest standards of quality and craftsmanship, leaving no room for compromise.</p>
                                <ul>
                                    <li>
                                        <i className="las la-check" /> Managed Services and Products          </li>
                                    <li>
                                        <i className="las la-check" /> Flexibility and Adaptability          </li>
                                    <li>
                                        <i className="las la-check" /> Competitive Advantage          </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About;