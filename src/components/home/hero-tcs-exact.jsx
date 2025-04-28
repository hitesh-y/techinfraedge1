"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HeroTCSExact() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [autoplayPaused, setAutoplayPaused] = useState(false)
    const autoplayTimerRef = useRef(null)
    
    const slides = [
        {
            id: 1,
            title: "Transforming Businesses with Innovative IT Solutions",
            subtitle: "Digital Transformation",
            description: "We help businesses leverage the latest technologies to drive growth, improve efficiency, and stay ahead of the competition.",
            image: "/assets/imgs/ai.webp",
            cta: {
                text: "Explore Our Services",
                link: "/services"
            }
        },
        {
            id: 2,
            title: "AI-Powered Automation for the Modern Enterprise",
            subtitle: "AI Solutions",
            description: "Our AI automation solutions help businesses reduce costs, improve accuracy, and free up valuable resources for strategic initiatives.",
            image: "/assets/imgs/ai1.jpg",
            cta: {
                text: "Discover AI Solutions",
                link: "/services/ai-automation"
            }
        },
        {
            id: 3,
            title: "Custom Software Development Tailored to Your Needs",
            subtitle: "Software Development",
            description: "From concept to deployment, we create custom software solutions that address your unique business requirements and drive results.",
            image: "/assets/imgs/ai.webp",
            cta: {
                text: "View Our Portfolio",
                link: "/portfolio"
            }
        }
    ]

    const startAutoplay = () => {
        if (autoplayPaused) return;
        
        autoplayTimerRef.current = setTimeout(() => {
            goToNextSlide();
        }, 6000);
    };

    const stopAutoplay = () => {
        if (autoplayTimerRef.current) {
            clearTimeout(autoplayTimerRef.current);
            autoplayTimerRef.current = null;
        }
    };

    const pauseAutoplay = () => {
        setAutoplayPaused(true);
        stopAutoplay();
    };

    const resumeAutoplay = () => {
        setAutoplayPaused(false);
        startAutoplay();
    };

    useEffect(() => {
        startAutoplay();
        
        return () => {
            stopAutoplay();
        };
    }, [currentSlide, autoplayPaused]);

    const goToSlide = (index) => {
        if (isAnimating || index === currentSlide) return;
        
        setIsAnimating(true);
        setCurrentSlide(index);
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    const goToNextSlide = () => {
        goToSlide((currentSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <div 
            className="relative h-[600px] md:h-[700px] overflow-hidden"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
        >
            {/* TCS-style progress bar */}
            <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-gray-200">
                {slides.map((_, index) => (
                    <div 
                        key={index}
                        className={`absolute top-0 left-0 h-full bg-primary transition-all duration-300 ease-linear ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                            width: index === currentSlide && !autoplayPaused ? '100%' : '0%',
                            transition: index === currentSlide && !autoplayPaused ? 'width 6s linear' : 'none'
                        }}
                    />
                ))}
            </div>
            
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div 
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                    >
                        {/* Background Image with Gradient Overlay - TCS Style */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"></div>
                        <div className="absolute inset-0">
                            <Image 
                                src={slide.image} 
                                alt={slide.title}
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                        
                        {/* Content - TCS Style */}
                        <div className="relative z-20 h-full flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-3xl">
                                    <div className={`transition-all duration-1000 transform ${
                                        index === currentSlide 
                                            ? 'translate-y-0 opacity-100' 
                                            : 'translate-y-10 opacity-0'
                                    }`}>
                                        <div className="inline-block bg-primary/90 text-white px-4 py-1 text-sm font-medium mb-4">
                                            {slide.subtitle}
                                        </div>
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
            </div>
            
            {/* TCS-style Navigation Controls */}
            <div className="absolute bottom-8 left-0 right-0 z-30 container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Slide Numbers and Titles */}
                    <div className="hidden md:flex items-center space-x-6">
                        {slides.map((slide, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`group flex items-center transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'text-white' 
                                        : 'text-white/50 hover:text-white/80'
                                }`}
                            >
                                <span className="text-lg font-bold mr-2">{String(index + 1).padStart(2, '0')}</span>
                                <span className={`text-sm transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'max-w-[120px] opacity-100' 
                                        : 'max-w-0 opacity-0 group-hover:max-w-[120px] group-hover:opacity-100'
                                } overflow-hidden whitespace-nowrap`}>
                                    {slide.subtitle}
                                </span>
                            </button>
                        ))}
                    </div>
                    
                    {/* Mobile Dots */}
                    <div className="flex md:hidden justify-center space-x-3">
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
                    
                    {/* Arrows */}
                    <div className="flex space-x-4">
                        <button 
                            onClick={goToPrevSlide}
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="Previous slide"
                        >
                            <ArrowRight className="w-5 h-5 rotate-180" />
                        </button>
                        <button 
                            onClick={goToNextSlide}
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
                            aria-label="Next slide"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}