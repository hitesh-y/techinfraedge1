'use client'
import { useState } from "react";

const Casestudio = () => {
    const [activeTab, setActiveTab] = useState("development"); // Default active tab

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className="case-studio-area">
            <div className="custom-container">
                <div className="case-studio-header text-center">
                    <h5 className="section-subtitle">CASE STUDIES</h5>
                    <h1 className="section-title">Detailing of our products</h1>
                </div>
                <div className="case-studio">
                    <ul className="nav nav-pills case-studio-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "development" ? "active" : ""}`}
                                onClick={() => handleTabClick("development")}
                            >
                                Development
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "woo_commerce" ? "active" : ""}`}
                                onClick={() => handleTabClick("woo_commerce")}
                            >
                                Woo Commerce
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "crm_solutions" ? "active" : ""}`}
                                onClick={() => handleTabClick("crm_solutions")}
                            >
                                CRM Solutions
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "web_designing" ? "active" : ""}`}
                                onClick={() => handleTabClick("web_designing")}
                            >
                                Web Designing
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className={`nav-link ${activeTab === "it_support" ? "active" : ""}`}
                                onClick={() => handleTabClick("it_support")}
                            >
                                IT Support
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content case-studio-tab-content">
                        <div
                            className={`tab-pane fade ${activeTab === "development" ? "show active" : ""}`}
                            id="development"
                        >
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Web Development</a>
                                        <img src="/assets/imgs/case-studio-1-1.jpg" alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src="/assets/imgs/case-studio-2-2.jpg" alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src="/assets/imgs/service-icon-1.svg" alt="ICON" />
                                        <h3>Development</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "woo_commerce" ? "show active" : ""}`}
                            id="woo_commerce"
                        >
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">electro.</a>
                                        <img src="/assets/imgs/case-studio-3.jpg" alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Visit Site Now</a>
                                        <img src="/assets/imgs/case-studio-4.jpg" alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src="/assets/imgs/service-icon-2.svg" alt="ICON" />
                                        <h3>Woo Commerce</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "crm_solutions" ? "show active" : ""}`}
                            id="crm_solutions"
                        >
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">CRM Solutions</a>
                                        <img src="/assets/imgs/case-studio-5.jpg" alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src="/assets/imgs/case-studio-6.jpg" alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src="/assets/imgs/service-icon-3.svg" alt="ICON" />
                                        <h3>CRM Solutions</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "web_designing" ? "show active" : ""}`}
                            id="web_designing"
                        >
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Web Designing</a>
                                        <img src="/assets/imgs/case-studio-7.jpg" alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src="/assets/imgs/case-studio-8.jpg" alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src="/assets/imgs/service-icon-4.svg" alt="ICON" />
                                        <h3>Web Designing</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div
                            className={`tab-pane fade ${activeTab === "it_support" ? "show active" : ""}`}
                            id="it_support"
                        >
                            <div className="case-studio-body d-flex">
                                <div className="left d-flex flex-1">
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">IT Support</a>
                                        <img src="/assets/imgs/case-studio-9.jpg" alt="Case Studio" />
                                    </div>
                                    <div className="case-studio-img-card simple-shadow">
                                        <a href="#" className="case-studio-cat">Mobile Development</a>
                                        <img src="/assets/imgs/case-studio-10.jpg" alt="Case Studio" />
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="case-studio-contents service-card card-h">
                                        <img src="/assets/imgs/service-icon-5.svg" alt="ICON" />
                                        <h3>IT Support</h3>
                                        <p>Software development is a dynamic and rapidly evolving field that plays a
                                            pivotal role in shaping the digital landscape we live in today. It
                                            encompasses the processes, methodologies, and practices used to design,
                                            create, deploy, and maintain software applications and systems.</p>
                                        <a href="#" className="theme-btn">
                                            <i className="iconoir-arrow-up-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Casestudio; 