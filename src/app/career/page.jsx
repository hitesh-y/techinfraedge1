import Link from "next/link";

const Careers = () => {
    return (
        <>
            <section className="hero-service-wrap hero-section-wrap hero-career-wrap">
                <div className="hero-section-content-wrap">
                    <img decoding="async" src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg" className="animation-slide-left bg-shape slide-left" />
                    <div className="custom-container">
                        <div className="hero-portfolio-body">
                            <div className="hero-section-content text-center">
                                <h6 className="section-subtitle">Career</h6>
                                <h2 className="section-title fade-in">You have great opportunities</h2>
                                <p>If you are a talented and ambitious individual looking to make a mark in your career, we invite you to explore our career opportunities.</p>
                                <Link href="/contact" className="theme-btn">Book an appointment now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="career-area">
                <div className="custom-container">
                    <div className="career-body d-flex">
                        <div className="career-left">
                            <h6 className="section-subtitle">OPENING IN OUR COMPANY</h6>
                            <h2 className="section-title">Job openings
                                and career
                                opportunities</h2></div>
                        <div className="career-lists">
                            <div className="career-box">
                                <span className="location">Jaipur, India</span>
                                <h3>MERN Developer - <span>Development</span></h3>
                                <p>Minimum 5 years experience or above</p>
                                <div className="career-time">
                                    <span><i className="iconoir-clock" /> Full Time</span> 
                                </div>
                            </div>
                            <div className="career-box">
                                <span className="location">Jaipur, India</span>
                                <h3>Web Developer - <span>Development</span></h3>
                                <p>Internship and training</p>
                                <div className="career-time">
                                    <span><i className="iconoir-clock" /> Full Time</span> 
                                </div>
                            </div>
                            <div className="career-box">
                                <span className="location">Jaipur, India</span>
                                <h3>SQL Specialist - <span>Database</span></h3>
                                <p>0-5 years experience</p>
                                <div className="career-time">
                                    <span><i className="iconoir-clock" /> Full Time</span> 
                                </div>
                            </div>
                            <div className="career-box">
                                <span className="location">Jaipur, India</span>
                                <h3>Web Designer - <span>Design</span></h3>
                                <p>For all level designers and freshers</p>
                                <div className="career-time">
                                    <span><i className="iconoir-clock" /> Full Time</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Careers;