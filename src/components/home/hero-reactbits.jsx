"use client"
import { useState, useEffect, useRef, memo, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion" 
import { 
  Shimmer, 
  Gradient,
  AnimatedHeading, 
  AnimatedParagraph, 
} from "@/components/CustomReactBits"

// Memoized slide component for better performance
const Slide = memo(({ slide, isActive, index }) => {
  // Predefine dimensions to prevent CLS
  const imageHeight = { mobile: 600, desktop: 700 };
  
  return (
    <div 
      className={`absolute inset-0 transition-opacity duration-700 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
      style={{ 
        // Reserve space to prevent CLS
        minHeight: `${imageHeight.mobile}px`,
        height: '100%'
      }}
      aria-hidden={!isActive}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/30 z-10"></div>
      <div 
        className="absolute inset-0"
        style={{ 
          // Set explicit dimensions to prevent CLS
          height: '100%',
          width: '100%',
          // Add background color matching image to prevent flash of unstyled content
          backgroundColor: '#111827'
        }}
      >
        <Image 
          src={slide.image} 
          alt={slide.title}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover"
          priority={index === 0}
          loading={index === 0 ? "eager" : "lazy"}
          quality={index === 0 ? 90 : 75}
          // Add fetchPriority for better LCP
          fetchPriority={index === 0 ? "high" : "auto"}
          // Use width and height instead of fill
          width={1920}
          height={imageHeight.desktop}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
          // Add placeholder to prevent CLS
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFdwI2QFsEhgAAAABJRU5ErkJggg=="
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ 
                y: isActive ? 0 : 30, 
                opacity: isActive ? 1 : 0 
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              // Add layout ID to improve animation performance
              layoutId={`slide-content-${slide._id || slide.id}`}
            >
              <div className="inline-block glass-panel mb-4">
                <Shimmer className="text-sm font-medium text-indigo-600">
                  {slide.subtitle}
                </Shimmer>
              </div>
              
              <AnimatedHeading 
                level={1} 
                effect="gradient"
                from="#4F46E5"
                to="#EC4899"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800"
              >
                {slide.title}
              </AnimatedHeading>
              
              <AnimatedParagraph 
                className="text-gray-700 text-lg md:text-xl mb-8 max-w-2xl"
                effect="none"
              >
                {slide.description}
              </AnimatedParagraph>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-border inline-block"
                // Reduce motion for better TBT
                transition={{ type: "tween", duration: 0.2 }}
              >
                <Link 
                  href={slide.cta?.link || slide.buttonLink || "#"}
                  className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white rounded-md transition-all duration-300 hover:bg-indigo-700"
                  // Preload for better FCP
                  prefetch={index === 0}
                >
                  {slide.cta?.text || slide.buttonText || "Learn More"}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
});

Slide.displayName = 'Slide';

// Memoized navigation controls for better performance
const NavigationControls = memo(({ 
  slides, 
  currentSlide, 
  goToSlide, 
  goToPrevSlide, 
  goToNextSlide 
}) => {
  return (
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
                  ? 'text-indigo-600' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              <Gradient 
                from={index === currentSlide ? "#4F46E5" : "#6B7280"} 
                to={index === currentSlide ? "#EC4899" : "#9CA3AF"}
                className="text-lg font-bold mr-2"
              >
                {String(index + 1).padStart(2, '0')}
              </Gradient>
              <span className={`text-sm text-gray-700 transition-all duration-300 ${
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
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Arrows */}
        <div className="flex space-x-4">
          <button 
            onClick={goToPrevSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 border border-gray-200 hover:bg-gray-50 active:scale-95 transition-transform"
            aria-label="Previous slide"
          >
            <ArrowRight className="w-5 h-5 rotate-180" />
          </button>
          <button 
            onClick={goToNextSlide}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 border border-gray-200 hover:bg-gray-50 active:scale-95 transition-transform"
            aria-label="Next slide"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
});

NavigationControls.displayName = 'NavigationControls';

// Main component with performance optimizations
export default function HeroReactBits() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [autoplayPaused, setAutoplayPaused] = useState(false);
    const [slides, setSlides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const autoplayTimerRef = useRef(null);
    const progressBarRef = useRef(null);
    
    // Fetch banners from API
    useEffect(() => {
      const fetchBanners = async () => {
        try {
          setLoading(true);
          const response = await fetch('/api/banners?page=home');
          
          if (!response.ok) {
            throw new Error('Failed to fetch banners');
          }
          
          const data = await response.json();
          
          // If we have banners, use them
          if (data && data.length > 0) {
            setSlides(data);
          } else {
            // Fallback to default slides if no banners found
            setSlides([
              {
                id: 1,
                title: "Transforming Businesses with Innovative IT Solutions",
                subtitle: "Digital Transformation",
                description: "We help businesses leverage the latest technologies to drive growth, improve efficiency, and stay ahead of the competition.",
                image: "/assets/imgs/ai1.jpg",
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
                image: "/assets/imgs/ai2.jpg",
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
                image: "/assets/imgs/ai3.jpg",
                cta: {
                  text: "View Our Portfolio",
                  link: "/services"
                }
              }
            ]);
          }
        } catch (err) {
          console.error('Error fetching banners:', err);
          setError(err.message);
          
          // Fallback to default slides on error
          setSlides([
            {
              id: 1,
              title: "Transforming Businesses with Innovative IT Solutions",
              subtitle: "Digital Transformation",
              description: "We help businesses leverage the latest technologies to drive growth, improve efficiency, and stay ahead of the competition.",
              image: "/assets/imgs/ai1.jpg",
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
              image: "/assets/imgs/ai2.jpg",
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
              image: "/assets/imgs/ai3.jpg",
              cta: {
                text: "View Our Portfolio",
                link: "/services"
              }
            }
          ]);
        } finally {
          setLoading(false);
        }
      };
      
      fetchBanners();
    }, []);

    // Use useCallback with proper dependencies to memoize functions
    const startAutoplay = useCallback(() => {
        if (autoplayPaused || slides.length === 0) return;
        
        // Use RAF for better performance
        stopAutoplay();
        
        // Reset progress bar animation
        if (progressBarRef.current) {
            progressBarRef.current.style.transition = 'none';
            progressBarRef.current.style.width = '0%';
            
            // Force reflow to restart animation
            void progressBarRef.current.offsetWidth;
            
            progressBarRef.current.style.transition = 'width 6s linear';
            progressBarRef.current.style.width = '100%';
        }
        
        autoplayTimerRef.current = setTimeout(() => {
            requestAnimationFrame(() => {
                goToNextSlide();
            });
        }, 6000);
    }, [autoplayPaused, slides.length]);

    const stopAutoplay = useCallback(() => {
        if (autoplayTimerRef.current) {
            clearTimeout(autoplayTimerRef.current);
            autoplayTimerRef.current = null;
        }
        
        // Pause progress bar animation
        if (progressBarRef.current) {
            const computedStyle = window.getComputedStyle(progressBarRef.current);
            const width = computedStyle.getPropertyValue('width');
            progressBarRef.current.style.transition = 'none';
            progressBarRef.current.style.width = width;
        }
    }, []);

    const pauseAutoplay = useCallback(() => {
        setAutoplayPaused(true);
        stopAutoplay();
    }, [stopAutoplay]);

    const resumeAutoplay = useCallback(() => {
        setAutoplayPaused(false);
        startAutoplay();
    }, [startAutoplay]);

    const goToSlide = useCallback((index) => {
        if (isAnimating || index === currentSlide || slides.length === 0) return;
        
        setIsAnimating(true);
        setCurrentSlide(index);
        
        // Use requestAnimationFrame for smoother animations
        requestAnimationFrame(() => {
            setTimeout(() => {
                setIsAnimating(false);
            }, 700);
        });
        
        // Restart autoplay timer
        startAutoplay();
    }, [currentSlide, isAnimating, startAutoplay, slides.length]);

    const goToNextSlide = useCallback(() => {
        if (slides.length === 0) return;
        goToSlide((currentSlide + 1) % slides.length);
    }, [currentSlide, goToSlide, slides.length]);

    const goToPrevSlide = useCallback(() => {
        if (slides.length === 0) return;
        goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    }, [currentSlide, goToSlide, slides.length]);

    // Optimize effect dependencies
    useEffect(() => {
        if (slides.length === 0) return;
        
        // Start autoplay on mount
        startAutoplay();
        
        // Preload next slide image to prevent jank
        const preloadNextImage = () => {
            const nextIndex = (currentSlide + 1) % slides.length;
            const imgElement = new window.Image();
            imgElement.src = slides[nextIndex].image;
        };
        
        preloadNextImage();
        
        // Clean up on unmount
        return () => {
            stopAutoplay();
        };
    }, [currentSlide, slides, startAutoplay, stopAutoplay]);
    
    // Add intersection observer to pause when not in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        resumeAutoplay();
                    } else {
                        pauseAutoplay();
                    }
                });
            },
            { threshold: 0.1 }
        );
        
        const element = document.querySelector('.hero-slider-container');
        if (element) {
            observer.observe(element);
        }
        
        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [pauseAutoplay, resumeAutoplay]);

    // If loading, show a simple loading state
    if (loading) {
        return (
            <div className="relative h-[600px] md:h-[700px] overflow-hidden hero-slider-container bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading hero banners...</p>
                </div>
            </div>
        );
    }

    // If no slides, show a fallback
    if (slides.length === 0) {
        return (
            <div className="relative h-[600px] md:h-[700px] overflow-hidden hero-slider-container bg-gray-100 flex items-center justify-center">
                <div className="text-center max-w-2xl px-4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Welcome to Our Website</h1>
                    <p className="text-gray-600 mb-6">No hero banners found. Please add some banners in the admin panel.</p>
                    <Link 
                        href="/services" 
                        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                    >
                        Explore Our Services
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="relative h-[600px] md:h-[700px] overflow-hidden hero-slider-container"
            onMouseEnter={pauseAutoplay}
            onMouseLeave={resumeAutoplay}
            // Add explicit width to prevent CLS
            style={{ width: '100%' }}
        >
            {/* Progress bar - optimized for better performance */}
            <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-gray-200">
                <div 
                    ref={progressBarRef}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 to-purple-600"
                    style={{ 
                        width: !autoplayPaused ? '100%' : '0%',
                        transition: !autoplayPaused ? 'width 6s linear' : 'none',
                        willChange: 'width', // Hint to browser for optimization
                        transform: 'translateZ(0)' // Force GPU acceleration
                    }}
                    aria-hidden="true"
                />
            </div>
            
            {/* Slides - using memoized components */}
            <div 
                className="relative h-full"
                style={{ 
                    willChange: 'transform', // Hint to browser for optimization
                    transform: 'translateZ(0)' // Force GPU acceleration
                }}
            >
                {slides.map((slide, index) => (
                    <Slide 
                        key={slide._id || slide.id || index}
                        slide={slide}
                        isActive={index === currentSlide}
                        index={index}
                    />
                ))}
            </div>
            
            {/* Navigation Controls - using memoized component */}
            <NavigationControls 
                slides={slides}
                currentSlide={currentSlide}
                goToSlide={goToSlide}
                goToPrevSlide={goToPrevSlide}
                goToNextSlide={goToNextSlide}
            />
        </div>
    );
}