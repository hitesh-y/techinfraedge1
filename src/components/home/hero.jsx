import Link from "next/link";

const Hero = () => {
    return (
        <section className="hero-empowerment-area">
            <div className="custom-container">
                <div className="custom-row align-items-center">
                    <div className="hero-empowerment-left-content">
                        <h5 className="section-subtitle">INNOVATION</h5>
                        <h1 className="section-title fade-in">Streamlined DevOps and Development, driving your success.</h1>
                        <p>We specialize in delivering cutting-edge DevOps solutions and development expertise to accelerate your business in the digital age.</p>

                        <div className="btns-group d-flex">
                            <a href="#" className="theme-btn">Learn More</a>
                            <Link href="/contact" className="theme-btn2">Let's Talk
                                <i className="iconoir-arrow-up-right" />
                            </Link>
                        </div>
                    </div>
                    <div className="hero-empowerment-right-content">
                        <div className="top-content">
                            <img className="desktop fade-in" src="/assets/imgs/bg1-1.png" alt="Empowerment" />
                            <img className="mobile" src="/assets/imgs/bg1.png" alt="Empowerment" />
                            <div className="experience-box simple-shadow bounce-in">
                                <div className="experience-body d-flex align-items-center">
                                    <img src="/assets/imgs/icon1.svg" alt="Icon" />
                                    <div className="experience-content d-flex align-items-center">
                                        <h1>+2</h1>
                                        <p>
                                            Years
                                            <span>Experience</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-content d-flex">
                            <Link href="/" className="our-expert-team-box simple-shadow bounce-in delay-2">
                                <div className="our-expert-team-box-inner d-flex align-items-center">
                                    <div className="imgs imgs1 d-flex align-items-center">
                                        <img src="/assets/imgs/small-img-4.png" alt="team" />
                                        <img src="/assets/imgs/small-img-3.png" alt="team" />
                                        <img src="/assets/imgs/small-img-2.png" alt="team" />
                                        <img src="/assets/imgs/small-img-1.png" alt="team" />
                                    </div>
                                    <p>
                                        Meet
                                        <span>Our Experts</span>
                                    </p>
                                </div>
                            </Link>
                            <div className="google-reviews-box simple-shadow bounce-in delay-3">
                                <div className="left">
                                    <span>Verified by</span>
                                    <img src="/assets/imgs/icon2.svg" alt="Google" />
                                </div>
                                <div className="right">
                                    <div className="stars d-flex align-items-center">
                                        <i className="las la-star" />
                                        <i className="las la-star" />
                                        <i className="las la-star" />
                                        <i className="las la-star" />
                                        <i className="las la-star" />
                                    </div>
                                    <p>
                                        3245
                                        <span>Reviews</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero;