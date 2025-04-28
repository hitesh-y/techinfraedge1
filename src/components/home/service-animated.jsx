"use client"
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ServiceAnimated = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const services = [
        {
            id: 1,
            icon: "/assets/imgs/service-icon-1.svg",
            title: "Development",
            description: "Our development is pixel perfect in all ways.",
            link: "/services/development"
        },
        {
            id: 2,
            icon: "/assets/imgs/service-icon-2.svg",
            title: "AI Automation",
            description: "Intelligent solutions powered by cutting-edge AI.",
            link: "/services/ai-automation",
            badge: "New!"
        },
        {
            id: 3,
            icon: "/assets/imgs/service-icon-3.svg",
            title: "CRM Solutions",
            description: "We enhance customer experiences for success.",
            link: "/services/crm-solutions"
        },
        {
            id: 4,
            icon: "/assets/imgs/service-icon-4.svg",
            title: "Web Design",
            description: "We create vibrant, intuitive and minimalist web.",
            link: "/services/web-design"
        },
        {
            id: 5,
            icon: "/assets/imgs/service-icon-5.svg",
            title: "IT Support",
            description: "We offers expert assistance for your IT issues.",
            link: "/services/it-support",
            badge: "24/7"
        }
    ];
    
    return (
        <section className="service-area py-16">
            <div className="custom-container">
                <div className="service-section-header section-header flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div className="left mb-6 md:mb-0">
                        <h5 className="section-subtitle text-primary font-medium mb-3">WHAT WE'RE OFFERING</h5>
                        <h1 className="section-title text-4xl md:text-5xl font-bold mb-4">Dealing in all professional <br />IT services.</h1>
                    </div>
                    <p className="max-w-md text-muted-foreground">
                        One fundamental aspect of IT services is infrastructure management. This involves the design,
                        implementation, and maintenance of the hardware, software, networks, and servers.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {services.map((service) => (
                        <div 
                            key={service.id}
                            className="service-card bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 relative overflow-hidden group"
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {service.badge && (
                                <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold py-1 px-2 rounded-full">
                                    {service.badge}
                                </span>
                            )}
                            
                            <div className="mb-4 transition-transform duration-500 transform group-hover:scale-110">
                                <img 
                                    src={service.icon} 
                                    alt={service.title} 
                                    className="service-icon w-16 h-16" 
                                />
                            </div>
                            
                            <h3 className="text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-primary">
                                <Link href={service.link}>{service.title}</Link>
                            </h3>
                            
                            <p className="text-muted-foreground mb-4">{service.description}</p>
                            
                            <Link 
                                href={service.link}
                                className={`inline-flex items-center text-primary font-medium transition-all duration-500 ${
                                    hoveredCard === service.id ? 'translate-x-2' : ''
                                }`}
                            >
                                Learn more
                                <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                            
                            {/* Decorative element */}
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></div>
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-12">
                    <Link 
                        href="/services" 
                        className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                    >
                        View All Services
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceAnimated;