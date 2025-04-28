"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HomeBannerTCS() {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const slides = [
        {
            title: "Transforming Businesses with Innovative IT Solutions",
            subtitle: "Empowering your digital journey with cutting-edge technology",
            description: "We help businesses leverage the latest technologies to drive growth, improve efficiency, and stay ahead of the competition.",
            image: "/assets/imgs/banner-1.jpg",
            cta: {
                text: "Explore Our Services",
                link: "/services"
            }
        },
        {
            title: "AI-Powered Automation for the Modern Enterprise",
            subtitle: "Streamline operations and unlock new possibilities",
            description: "Our AI automation solutions help businesses reduce costs, improve accuracy, and free up valuable resources for strategic initiatives.",
            image: "/assets/imgs/banner-2.jpg",
            cta: {
                text: "Discover AI Solutions",
                link: "/services/ai-automation"
            }
        },
        {
            title: "Custom Software Development Tailored to Your Needs",
            subtitle: "Building scalable solutions for complex challenges",
            description: "From concept to deployment, we create custom software solutions that address your unique business requirements and drive results.",
            image: "/assets/imgs/banner-3.jpg",
            cta: {
                text: "View Our Portfolio",
                link: "/portfolio"
            }
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }, 6000)
        
        return () => clearInterval(interval)
    }, [slides.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    return (
        <div className="relative h-[600px] md:h-[700px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <div className="absolute inset-0">
                        <Image 
                            src={slide.image} 
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-20 h-full flex items-center">
                        <div className="container mx-auto px-4">
                            <div className="max-w-3xl">
                                <div className={`transition-all duration-1000 transform ${
                                    index === currentSlide 
                                        ? 'translate-y-0 opacity-100' 
                                        : 'translate-y-10 opacity-0'
                                }`}>
                                    <h2 className="text-primary font-medium mb-4 text-xl md:text-2xl">
                                        {slide.subtitle}
                                    </h2>
                                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                        {slide.title}
                                    </h1>
                                    <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
                                        {slide.description}
                                    </p>
                                    <Link 
                                        href={slide.cta.link}
                                        className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                                    >
                                        {slide.cta.text}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
            {/* Navigation Dots */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? 'bg-primary w-8' 
                                : 'bg-white/50 hover:bg-white'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            
            {/* Scroll Down Indicator */}
            <div className="absolute bottom-8 right-8 z-30 hidden md:block">
                <div className="flex flex-col items-center animate-bounce">
                    <span className="text-white text-sm mb-2">Scroll Down</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-white"
                    >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    )
}