import { siteData } from "@/data/siteData";

const Contact = () => {
    return (
        <main className="main-page contact-page">
            <div data-elementor-type="wp-page" data-elementor-id={3182} className="elementor elementor-3182">
                <div className="elementor-element elementor-element-bb958b3 e-con-full e-flex e-con e-parent e-lazyloaded" data-id="bb958b3" data-element_type="container">
                    <div className="elementor-element elementor-element-34f66a4 e-con-full e-flex e-con e-child" data-id="34f66a4" data-element_type="container">
                        <div className="elementor-element elementor-element-6e7e2bc elementor-widget elementor-widget-synckpageshero" data-id="6e7e2bc" data-element_type="widget" data-widget_type="synckpageshero.default">
                            <div className="elementor-widget-container">
                                {/* About Hero */}
                                <section className="hero-service-wrap hero-section-wrap hero-portfolio-wrap">
                                    <div className="hero-section-content-wrap">
                                        <div className="custom-container">
                                            <div className="hero-portfolio-body">
                                                <div className="hero-section-content text-center">
                                                    <h6 className="section-subtitle">Contact Us</h6>
                                                    <h2 className="section-title fade- in">We are always open to talk</h2>            <p>We have offices and teams all around the world</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section></div>
                            <div className="elementor-element elementor-element-3a5c785 e-con-full e-flex e-con e-parent e-lazyloaded" data-id="3a5c785" data-element_type="container">
                                <div className="elementor-element elementor-element-8b46714 elementor-widget elementor-widget-synckpagescontactmapstyle2" data-id="8b46714" data-element_type="widget" data-widget_type="synckpagescontactmapstyle2.default">
                                    <div className="elementor-widget-container">
                                        {/* Contact */}
                                        <section className="contact-area2">
                                            <div className="custom-container">
                                                <div className="contact-inner">
                                                    {/* <div className="contact-map-wrap"> 
                                                    </div> */}
                                                    <div className="contact-inner-info-box d-flex align-items-center">
                                                        <div className="contact-info-box simple-shadow">
                                                            <div className="icon"><i className="iconoir-headset" /></div>
                                                            <h5>Support</h5>
                                                            <p>Contact our fast support team</p>
                                                            <h7>
                                                                <a href={`mailto:${siteData.email}`}>{siteData.email}</a>
                                                            </h7>
                                                        </div>
                                                        <div className="contact-info-box simple-shadow">
                                                            <div className="icon"><i className="iconoir-phone" /></div>
                                                            <h5>Phone</h5>
                                                            <p>Mon-Fri from 9am to 6pm.</p>
                                                            <h7>
                                                                <a href={`tel:${siteData.phoneNumber}`}>{siteData.phoneNumber}</a>
                                                            </h7>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-8a67edc e-con-full e-flex e-con e-parent e-lazyloaded" data-id="8a67edc" data-element_type="container">
                                <div className="elementor-element elementor-element-7eb065a elementor-widget elementor-widget-synckpagescontactlocation" data-id="7eb065a" data-element_type="widget" data-widget_type="synckpagescontactlocation.default">
                                    <div className="elementor-widget-container">
                                        {/* Location */}
                                        <section className="contact-location-area">
                                            <img decoding="async" className="animation-slide-left bg-shape slide-left" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/bg-shape-7.svg" />
                                            <div className="custom-container">
                                                <div className="custom-row justify-content-between align-items-center">
                                                    <div className="contact-location-left-content">
                                                        <div className="contact-location-left-body">
                                                            <h6 className="section-subtitle">Locations</h6>
                                                            <h2 className="section-title">Visit our store all
                                                                around the
                                                                world</h2>            <p>Our location is strategically situated at the heart of City, making it an ideal destination for businesses and visitors alike.</p>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="contact-locations-list">
                                                            <div className="contact-location-box">
                                                                <div className="number">
                                                                    #1              </div>
                                                                <div className="content">
                                                                    <p>{siteData.address1}</p>
                                                                </div>
                                                            </div>
                                                            <div className="contact-location-box">
                                                                <div className="number">
                                                                    #2              </div>
                                                                <div className="content">
                                                                    <p>{siteData.address2}</p>
                                                                </div>
                                                            </div>
                                                            <div className="contact-location-box">
                                                                <div className="number">
                                                                    #3              </div>
                                                                <div className="content">
                                                                    <p>{siteData.address2}</p>
                                                                </div>
                                                            </div>
                                                            <div className="contact-location-box">
                                                                <div className="number">
                                                                    #4              </div>
                                                                <div className="content">
                                                                    <p>{siteData.address2}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>

    )
}

export default Contact;