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
        <section className="project-area bg-gray-900 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="max-w-xl">
                        <h6 className="text-indigo-400 font-medium mb-3 uppercase">PROJECTS</h6>
                        <h2 className="text-4xl font-bold mb-4 text-white">Showcase of our recognized work</h2>
                        <p className="text-gray-300 mb-6">Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges.</p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-center"><i className="las la-check text-indigo-400 mr-2" /> Managed Services and Products</li>
                            <li className="flex items-center"><i className="las la-check text-indigo-400 mr-2" /> Flexibility and Adaptability</li>
                            <li className="flex items-center"><i className="las la-check text-indigo-400 mr-2" /> Competitive Advantage</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5">
                        <Slider {...settings}>
                            {projects.map((project) => (
                                <div key={project.id} className="p-3">
                                    <div className="bg-gray-800 rounded-xl overflow-hidden border border-indigo-500/20">
                                        <div className="p-4">
                                            <h3 className="text-white font-medium text-lg mb-3">{project.title}</h3>
                                            <div className="relative overflow-hidden rounded-lg">
                                                <img 
                                                    src={project.img} 
                                                    alt={project.title} 
                                                    className="w-full h-auto transition-transform duration-500 hover:scale-105"
                                                />
                                            </div>
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
