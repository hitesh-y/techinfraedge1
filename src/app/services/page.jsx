"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
// Using dynamic data from API instead of static data
import { ArrowRight, CheckCircle, Zap, Users, BarChart3, Globe, Sparkles } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Fetch services from API
    const fetchServices = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/services');
        if (response.ok) {
          const data = await response.json();
          setServices(data);
        } else {
          console.error('Failed to fetch services');
          setServices([]);
        }
      } catch (error) {
        console.error('Error fetching services:', error);
        setServices([]);
      } finally {
        setLoading(false);
        setIsLoaded(true);
      }
    };
    
    fetchServices();
    
    // Add 3D tilt effect to service cards
    const addTiltEffect = () => {
      const cards = document.querySelectorAll('.service-card');
      
      cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xPercent = x / rect.width - 0.5;
          const yPercent = y / rect.height - 0.5;
          
          card.style.transform = `perspective(1000px) rotateX(${yPercent * -5}deg) rotateY(${xPercent * 5}deg) scale3d(1.02, 1.02, 1.02)`;
          card.style.transition = 'transform 0.1s ease';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
          card.style.transition = 'transform 0.5s ease';
        });
      });
    };
    
    if (containerRef.current) {
      addTiltEffect();
    }
    
    return () => {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach(card => {
        card.removeEventListener('mousemove', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  // Featured service categories with enhanced icons
  const categories = [
    { 
      name: "Enterprise Solutions", 
      icon: <BarChart3 className="w-8 h-8" />, 
      description: "Comprehensive solutions for large organizations",
      image: "/assets/imgs/CRM_solution_2.png"
    },
    { 
      name: "Small Business", 
      icon: <Users className="w-8 h-8" />, 
      description: "Tailored services for growing businesses",
      image: "/assets/imgs/development_1.png"
    },
    { 
      name: "Startups", 
      icon: <Zap className="w-8 h-8" />, 
      description: "Innovative solutions for new ventures",
      image: "/assets/imgs/brainstorming_idea_2.png"
    },
    { 
      name: "Global Reach", 
      icon: <Globe className="w-8 h-8" />, 
      description: "Services available worldwide",
      image: "/assets/imgs/cloud_things_1.png"
    },
  ];

  // Key benefits with enhanced descriptions
  const benefits = [
    {
      title: "Customized solutions tailored to your specific needs",
      description: "We develop solutions that address your unique business challenges and requirements",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Expert team with years of industry experience",
      description: "Our professionals bring deep expertise across multiple technologies and domains",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Cutting-edge technologies and best practices",
      description: "We leverage the latest innovations to deliver superior results",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Ongoing support and maintenance",
      description: "We provide continuous assistance to ensure optimal performance",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Scalable solutions that grow with your business",
      description: "Our solutions adapt to your evolving needs and expanding operations",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Competitive pricing and flexible engagement models",
      description: "We offer cost-effective options that align with your budget and preferences",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      {/* Hero Section with 3D Animation */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 py-20 overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-primary/10 -top-20 -left-20 animate-blob"></div>
          <div className="absolute w-72 h-72 rounded-full bg-primary/10 top-40 right-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-80 h-80 rounded-full bg-primary/10 bottom-10 left-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Innovative IT Services for the <span className="text-primary relative">
                Digital Age
                <span className="absolute bottom-0 left-0 w-full h-1 bg-primary"></span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We provide a comprehensive range of IT services to help your business thrive in today's competitive landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  href="#services" 
                  className="px-8 py-3 bg-white text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors font-medium shadow-sm"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Categories Section with Images */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Services for Every Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a startup, small business, or enterprise, we have the right solutions for you.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" ref={containerRef}>
            {categories.map((category, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all text-center overflow-hidden group service-card"
              >
                <div className="relative h-40 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-0 right-0 text-white font-bold text-xl">{category.name}</div>
                </div>
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 text-primary rounded-full mb-4">
                  {category.icon}
                </div>
                <p className="text-muted-foreground">{category.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section with 3D Cards */}
      <div id="services" className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 bottom-20 -left-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a wide range of IT services to help your business grow and succeed in the digital world.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center min-h-[300px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-muted-foreground">Please check back later for our service offerings.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Link 
                  href={`/services/${service._id || service.id}`}
                  className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 hover:border-primary/20 service-card h-full"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                      {service.icon ? (
                        typeof service.icon === 'string' && service.icon in LucideIcons ? 
                          React.createElement(LucideIcons[service.icon], { className: "w-8 h-8" }) : 
                          <Sparkles className="w-8 h-8" />
                      ) : (
                        <Sparkles className="w-8 h-8" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="relative mb-6 h-40 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || `/assets/imgs/${service._id || service.id}_1.png`}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/assets/imgs/development_1.png";
                      }}
                    />
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                  <ul className="mb-4 space-y-2">
                    {service.features && service.features.length > 0 ? 
                      service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      )) : (
                        <li className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>Professional service delivery</span>
                        </li>
                      )
                    }
                  </ul>
                  <span className="text-primary font-medium inline-flex items-center">
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Benefits Section with Enhanced UI */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to delivering high-quality IT solutions that drive business growth and innovation. Our team of experts works closely with you to understand your unique needs and challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 text-primary rounded-full">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium inline-flex items-center shadow-lg"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 relative shadow-lg"
            >
              <div className="absolute -top-4 -left-4 bg-primary text-white text-lg font-bold py-2 px-4 rounded-md shadow-md">
                Our Approach
              </div>
              <h3 className="text-2xl font-semibold mb-6">How We Work With You</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Analysis</h4>
                    <p className="text-muted-foreground">We start by understanding your business needs and challenges</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Solution Design</h4>
                    <p className="text-muted-foreground">Our experts design a tailored solution for your specific requirements</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Implementation</h4>
                    <p className="text-muted-foreground">We implement the solution with minimal disruption to your business</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Support</h4>
                    <p className="text-muted-foreground">We provide continuous support and optimization</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}