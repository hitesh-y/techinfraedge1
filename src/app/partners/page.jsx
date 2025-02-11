
import ContactSection from "@/components/ContactSection"
import Client from "@/components/home/client" 
import Image from "next/image"

const Partners = () => {

    const partners = [
        { id: 1, logo: "/assets/imgs/partners/client-logo7.svg" },
        { id: 2, logo: "/assets/imgs/partners/client-logo8.svg" },
        { id: 3, logo: "/assets/imgs/partners/client-logo9.svg" },
        { id: 4, logo: "/assets/imgs/partners/client-logo10.svg" },
        { id: 5, logo: "/assets/imgs/partners/client-logo11.svg" },
        { id: 6, logo: "/assets/imgs/partners/client-logo2-1.svg" },
        { id: 7, logo: "/assets/imgs/partners/client-logo12.svg" },
        { id: 8, logo: "/assets/imgs/partners/client-logo13.svg" },
        { id: 9, logo: "/assets/imgs/partners/client-logo14.svg" },
        { id: 10, logo: "/assets/imgs/partners/upwork.svg" },
        { id: 11, logo: "/assets/imgs/partners/client-logo15.svg" },
        { id: 12, logo: "/assets/imgs/partners/client-logo16.svg" },
    ]

    return (
        <main className="main-page partner-page">
            <div className="elementor elementor-1643">
                <div className="elementor-element elementor-element-099d67d e-con-full e-flex e-con e-parent e-lazyloaded">
                    <div className="elementor-element elementor-element-caf49d7 e-con-full e-flex e-con e-child">
                        <div className="elementor-element elementor-element-f638e86 elementor-widget elementor-widget-synckpageshero">
                            <div className="elementor-widget-container">
                                <section className="hero-service-wrap hero-section-wrap hero-partner-wrap">
                                    <div className="hero-section-content-wrap">
                                        <div className="custom-container">
                                            <div className="hero-portfolio-body">
                                                <div className="hero-section-content text-center">
                                                    <h6 className="section-subtitle">Partner</h6>
                                                    <h2 className="section-title fade-in">We have great partners in modern world</h2>
                                                    <p>
                                                        Our partners play a pivotal role in our journey, bringing diverse expertise, resources, and shared
                                                        values to the table.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <Client />
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-d273a33 e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-f1b2587 elementor-widget elementor-widget-synckpagescompanyservice">
                                <div className="elementor-widget-container">
                                    <section className="company-service-area partner-service-area">
                                        <div className="custom-container">
                                            <div className="partner-service-inner">
                                                <div className="hero-service-about">
                                                    <div className="section-header d-flex align-items-center justify-content-between w-full">
                                                        <div className="left">
                                                            <h6 className="section-subtitle">WHAT WE'RE OFFERING</h6>
                                                            <h2 className="section-title">What our partners think about us?</h2>
                                                            <p>We invite you to explore our blog and become part of our journey towards growth.</p>
                                                        </div>
                                                        <a href="/contact" className="theme-btn">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                    <Image
                                                        src="/assets/imgs/partners/hero-partner-about.jpg"
                                                        alt="Partner Service"
                                                        width={1200}
                                                        height={600}
                                                        layout="responsive"
                                                    />
                                                    <div className="hero-service-about-body">
                                                        <p>
                                                            Our team is a collective force of top talents, pros, experts, and visionaries from diverse fields. With
                                                            a passion for excellence, our professionals bring a wealth of experience and knowledge to every project.
                                                            At Slack, we are committed to delivering nothing short of excellence. From concept to implementation, we
                                                            maintain the highest standards of quality and craftsmanship, leaving no room for compromise.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <i className="las la-check" /> Managed Services and Products
                                                            </li>
                                                            <li>
                                                                <i className="las la-check" /> Flexibility and Adaptability
                                                            </li>
                                                            <li>
                                                                <i className="las la-check" /> Competitive Advantage
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-ee5195f e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-c7af7b2 elementor-widget elementor-widget-synckpagespartner">
                                <div className="elementor-widget-container">
                                    <section className="partner-area">
                                        <div className="custom-container">
                                            <div className="custom-row align-items-center">
                                                <div className="partner-left-content">
                                                    <h6 className="section-subtitle">PARTNERS</h6>
                                                    <h2 className="section-title">Trusted by our customers &amp; partners</h2>
                                                    <p>
                                                        Our commitment to excellence extends beyond immediate team. We actively seek out partners who share our
                                                        values, vision and dedication.
                                                    </p>
                                                </div>
                                                <div className="right">
                                                    <div className="partners-list-wrap">
                                                        {[0, 1, 2].map((row) => (
                                                            <div key={row} className="partners-list-inner">
                                                                {partners.slice(row * 4, (row + 1) * 4).map((partner) => (
                                                                    <div key={partner.id} className="partner-box">
                                                                        <Image
                                                                            src={partner.logo || "/placeholder.svg"}
                                                                            alt={`Partner ${partner.id}`}
                                                                            width={150}
                                                                            height={50}
                                                                        />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-a8c5687 e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-13c10b8 elementor-widget elementor-widget-synckpagesaboutservicelight">
                                <div className="elementor-widget-container">
                                    <section className="about-service4-area about-service3-area">
                                        <div className="custom-container">
                                            <div className="about-service4-inner d-flex align-items-center">
                                                <div className="img-box">
                                                    <Image src="/assets/imgs/partners/partner-trusted.jpg" alt="Partner Trusted" width={600} height={400} />
                                                </div>
                                                <div className="content-box">
                                                    <h2>Why our partners trust us?</h2>
                                                    <p>
                                                        We don't believe in a one-size-fit-all approach. Our services are carefully customized to suit your
                                                        specific need, ensuring you to achieve your goals.
                                                    </p>
                                                    <p>
                                                        We believe in delivering value that extends your beyond the immediate project. Our services are designed
                                                        to provide long-term benefits.
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <i className="las la-check" /> PPD Development
                                                        </li>
                                                        <li>
                                                            <i className="las la-check" /> Quick Response
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-fafbacc e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-8d34158 e-con-full e-flex e-con e-child">
                                <div className="elementor-element elementor-element-536ff4d elementor-widget elementor-widget-synckpagescta">
                                    <div className="elementor-widget-container">
                                        <section className="cta-area">
                                            <div className="custom-container">
                                                <div className="cta-body text-center">
                                                    <Image
                                                        src="/assets/imgs/partners/bg-shape-11.svg"
                                                        alt="Shape"
                                                        className="animation-slide-left bg-shape slide-left"
                                                        width={200}
                                                        height={200}
                                                    />
                                                    <div className="our-expert-team-box">
                                                        <div className="our-expert-team-box-inner d-flex align-items-center">
                                                            <div className="imgs d-flex align-items-center">
                                                                {[4, 3, 2, 1].map((num) => (
                                                                    <Image
                                                                        key={num}
                                                                        src={`/assets/imgs/partners/small-img-${num}.png`}
                                                                        alt={`Team member ${num}`}
                                                                        width={50}
                                                                        height={50}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h3>Need any further assistance?</h3>
                                                    <p>Feel free to reach out for any inquiries or assistance.</p>
                                                    <a href="/contact" className="theme-btn">
                                                        Book an appointment now
                                                    </a>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-bfa4213 e-con-full e-flex e-con e-parent e-lazyloaded">
                            <div className="elementor-element elementor-element-f6ccf96 elementor-widget elementor-widget-synckhomev1contact">
                                <div className="elementor-widget-container">
                                    <ContactSection/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Partners

