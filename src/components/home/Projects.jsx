"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        id: 1,
        title: "E-commerce platform development",
        img: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png",
    },
    {
        id: 2,
        title: "Software as a Service integration",
        img: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png",
    },
    {
        id: 3,
        title: "Mobile Platform Development",
        img: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-3.png",
    },
    {
        id: 4,
        title: "Enter into a Virtual Reality World",
        img: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png",
    },
    {
        id: 5,
        title: "Custom CRM system for a sales team",
        img: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-5-new.png",
    },
    {
        id: 6,
        title: "Wrist App For Your Productivity",
        img: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-6-new.png",
    },
];

const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="project-area">
            <div className="custom-container">
                <div className="custom-row justify-content-between">
                    <div className="project-left-details">
                        <h6 className="section-subtitle">PROJECTS</h6>
                        <h2 className="section-title">Showcase of our recognized work</h2>
                        <p>Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges.</p>
                        <ul>
                            <li><i className="las la-check" /> Managed Services and Products</li>
                            <li><i className="las la-check" /> Flexibility and Adaptability</li>
                            <li><i className="las la-check" /> Competitive Advantage</li>
                        </ul>
                    </div>
                    <div className="project-right-slider">
                        <Slider {...settings}>
                            {projects.map((project) => (
                                <div className="P-3">
                                <div key={project.id} className="project-item" style={{ padding: '20px' }}>
                                    <div className="project-item-inner">
                                        <h3 className="section-subtitle p-2">{project.title}</h3>
                                        <img src={project.img} alt={project.title} />
                                    </div>
                                </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
