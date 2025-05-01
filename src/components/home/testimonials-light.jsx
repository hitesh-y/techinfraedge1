"use client"
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialsLight = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const slideRef = useRef(null);
    
    const testimonials = [
        {
            id: 1,
            quote: "TechInfraEdge transformed our business with their innovative IT solutions. Their team's expertise and dedication to our project exceeded our expectations.",
            author: "Sarah Johnson",
            position: "CTO",
            company: "Global Enterprises",
            image: "/assets/imgs/testimonial-1.jpg",
            rating: 5
        },
        {
            id: 2,
            quote: "Working with TechInfraEdge has been a game-changer for our company. Their AI automation solutions have significantly improved our operational efficiency.",
            author: "Michael Chen",
            position: "Director of Operations",
            company: "TechCorp",
            image: "/assets/imgs/testimonial-2.jpg",
            rating: 5
        },
        {
            id: 3,
            quote: "The web design and development services provided by TechInfraEdge are exceptional. They delivered a stunning website that perfectly represents our brand.",
            author: "Emily Rodriguez",
            position: "Marketing Director",
            company: "Innovate Solutions",
            image: "/assets/imgs/testimonial-3.jpg",
            rating: 4
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
        <section className="py-20 bg-gradient-to-b from-white to-indigo-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-indigo-100 opacity-70"></div>
                <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-indigo-100 opacity-50 transform translate-x-1/2"></div>
                <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-indigo-200 opacity-30"></div>
            </div>
            
            <div className="container mx-auto px-4 relative z-10">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block px-4 py-1 bg-indigo-100 rounded-full text-indigo-700 font-medium text-sm mb-4">
                        TESTIMONIALS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Hear from our satisfied clients about their experience working with TechInfraEdge.
                    </p>
                </motion.div>
                
                <div className="relative max-w-5xl mx-auto">
                    {/* Testimonial Cards */}
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                        <div 
                            ref={slideRef}
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="w-full flex-shrink-0">
                                    <div className="grid md:grid-cols-5 bg-white">
                                        {/* Image Section */}
                                        <div className="md:col-span-2 relative h-64 md:h-full">
                                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 mix-blend-multiply"></div>
                                            <div className="w-full h-full">
                                                <img 
                                                    src={testimonial.image} 
                                                    alt={testimonial.author}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div 
                                                    className="w-full h-full bg-gradient-to-r from-indigo-700 to-purple-700 hidden items-center justify-center"
                                                >
                                                    <User size={80} className="text-white/80" strokeWidth={1.5} />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Content Section */}
                                        <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                                            <div className="flex mb-6">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star 
                                                        key={i} 
                                                        size={20} 
                                                        className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`} 
                                                    />
                                                ))}
                                            </div>
                                            
                                            <blockquote className="text-xl md:text-2xl font-light mb-8 text-gray-700 leading-relaxed">
                                                "{testimonial.quote}"
                                            </blockquote>
                                            
                                            <div className="mt-auto">
                                                <div className="font-bold text-xl text-gray-800 mb-1">{testimonial.author}</div>
                                                <div className="text-gray-600">{testimonial.position}, <span className="text-indigo-600">{testimonial.company}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8">
                        <motion.button 
                            onClick={prevSlide}
                            className="group flex items-center gap-2 px-5 py-2 bg-white rounded-lg shadow-md hover:bg-indigo-50 transition-all duration-300"
                            whileHover={{ x: -5 }}
                            disabled={isAnimating}
                        >
                            <ChevronLeft size={20} className="text-indigo-600" />
                            <span className="font-medium text-gray-700">Previous</span>
                        </motion.button>
                        
                        <div className="flex items-center gap-3">
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
                                            ? 'bg-indigo-600 scale-125' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        <motion.button 
                            onClick={nextSlide}
                            className="group flex items-center gap-2 px-5 py-2 bg-white rounded-lg shadow-md hover:bg-indigo-50 transition-all duration-300"
                            whileHover={{ x: 5 }}
                            disabled={isAnimating}
                        >
                            <span className="font-medium text-gray-700">Next</span>
                            <ChevronRight size={20} className="text-indigo-600" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsLight;