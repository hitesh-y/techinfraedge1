"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsAnimated = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slideRef = useRef(null);
    
    const testimonials = [
        {
            id: 1,
            quote: "JSB Global Infotech transformed our business with their innovative IT solutions. Their team's expertise and dedication to our project exceeded our expectations.",
            author: "Sarah Johnson",
            position: "CTO, Global Enterprises",
            company: "Global Enterprises",
            image: "/assets/imgs/testimonial-1.jpg"
        },
        {
            id: 2,
            quote: "Working with JSB Global Infotech has been a game-changer for our company. Their AI automation solutions have significantly improved our operational efficiency.",
            author: "Michael Chen",
            position: "Director of Operations",
            company: "TechCorp",
            image: "/assets/imgs/testimonial-2.jpg"
        },
        {
            id: 3,
            quote: "The web design and development services provided by JSB Global Infotech are exceptional. They delivered a stunning website that perfectly represents our brand.",
            author: "Emily Rodriguez",
            position: "Marketing Director",
            company: "Innovate Solutions",
            image: "/assets/imgs/testimonial-3.jpg"
        }
    ];
    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000);
        
        return () => clearInterval(interval);
    }, [currentSlide]);
    
    const nextSlide = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };
    
    const prevSlide = () => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        
        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };
    
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h5 className="text-primary font-medium mb-3">TESTIMONIALS</h5>
                    <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experience working with JSB Global Infotech.
                    </p>
                </div>
                
                <div className="relative max-w-4xl mx-auto">
                    {/* Testimonial Slider */}
                    <div className="overflow-hidden">
                        <div 
                            ref={slideRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                                    <div className="bg-white rounded-xl p-8 shadow-sm">
                                        <div className="text-primary mb-6">
                                            <Quote size={48} />
                                        </div>
                                        <blockquote className="text-xl italic mb-8">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="flex items-center">
                                            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <div className="font-bold text-lg">{testimonial.author}</div>
                                                <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                                                <div className="text-sm text-primary">{testimonial.company}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 z-10"
                        disabled={isAnimating}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110 z-10"
                        disabled={isAnimating}
                    >
                        <ChevronRight size={24} />
                    </button>
                    
                    {/* Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    if (!isAnimating) {
                                        setIsAnimating(true);
                                        setCurrentSlide(index);
                                        setTimeout(() => setIsAnimating(false), 500);
                                    }
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-primary w-8' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsAnimated;