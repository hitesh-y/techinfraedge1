
"use client"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation" 
import { CheckCircle, ArrowRight, ArrowLeft, Clock, Users, BarChart3, Award, Zap, MessageSquare, Sparkles } from "lucide-react" 
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

export default function ServicePage({ params }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const serviceId = params?.id; // Safely access id property
  
  useEffect(() => {
    if (!serviceId) return; // Guard against undefined params
    
    // Fetch service data from API
    const fetchService = async () => {
      try {
        const response = await fetch(`/api/services?id=${serviceId}`);
        if (response.ok) {
          const data = await response.json();
          setService(data);
        } else { 
          setService(null);
        }
      } catch (error) {
        console.error('Error fetching service:', error);
        // No fallback to static data
        setService(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchService();
    setIsLoaded(true);
    
    // Add 3D tilt effect to feature cards
    const addTiltEffect = () => {
      const cards = document.querySelectorAll('.feature-card');
      
      cards.forEach(card => {
        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const xPercent = x / rect.width - 0.5;
          const yPercent = y / rect.height - 0.5;
          
          card.style.transform = `perspective(1000px) rotateX(${yPercent * -5}deg) rotateY(${xPercent * 5}deg) scale3d(1.02, 1.02, 1.02)`;
          card.style.transition = 'transform 0.1s ease';
        };
        
        const handleMouseLeave = () => {
          card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
          card.style.transition = 'transform 0.5s ease';
        };
        
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        
        // Store event handlers for proper cleanup
        card._tiltHandlers = {
          move: handleMouseMove,
          leave: handleMouseLeave
        };
      });
    };
    
    if (isLoaded) {
      addTiltEffect();
    }
    
    return () => {
      const cards = document.querySelectorAll('.feature-card');
      cards.forEach(card => {
        if (card._tiltHandlers) {
          card.removeEventListener('mousemove', card._tiltHandlers.move);
          card.removeEventListener('mouseleave', card._tiltHandlers.leave);
        }
      });
    };
  }, [serviceId, isLoaded]);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!service) {
    notFound()
  }

  // Handle dynamic icon from string name
  let Icon = LucideIcons.Sparkles;
  if (service.icon) {
    if (typeof service.icon === 'string') {
      Icon = LucideIcons[service.icon] || LucideIcons.Sparkles;
    } else if (typeof service.icon === 'object') {
      Icon = service.icon;
    }
  }

  // Sample case studies - in a real implementation, these would be filtered based on the service
  const caseStudies = [
    {
      title: "Enterprise Solution for Financial Services",
      description: "How we helped a leading financial institution transform their digital infrastructure",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "E-commerce Platform Optimization",
      description: "Increasing conversion rates and improving user experience for an online retailer",
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  // Sample testimonials
  const testimonials = [
    {
      quote: "The team delivered exceptional results that exceeded our expectations. Their expertise in this area is unmatched.",
      author: "Sarah Johnson",
      position: "CTO, Global Enterprises",
    },
    {
      quote: "Working with this team has transformed our business operations. The ROI has been incredible.",
      author: "Michael Chen",
      position: "Director of Operations, TechCorp",
    },
  ];

  // Sample FAQ
  const faqs = [
    {
      question: `How long does the ${service.title} implementation typically take?`,
      answer: "Implementation timelines vary based on project scope and complexity. Our team works efficiently to deliver results as quickly as possible while maintaining quality. A typical implementation ranges from 4-12 weeks.",
    },
    {
      question: `What makes your ${service.title} service different from competitors?`,
      answer: "Our approach combines cutting-edge technology with deep industry expertise. We focus on delivering customized solutions that address your specific business challenges, not one-size-fits-all packages.",
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally. Our support team is available to address any issues and provide regular updates.",
    },
  ];

  return (
    <>
      {/* Hero Section with 3D Animation */}
      <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-64 h-64 rounded-full bg-primary/10 -top-20 -left-20 animate-blob"></div>
          <div className="absolute w-72 h-72 rounded-full bg-primary/10 top-40 right-10 animate-blob animation-delay-2000"></div>
          <div className="absolute w-80 h-80 rounded-full bg-primary/10 bottom-10 left-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link href="/services" className="inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors mb-8 shadow-lg">
              <ArrowLeft className="mr-2 w-5 h-5" /> Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white text-primary shadow-md">
                  {Icon && <Icon className="w-10 h-10" />}
                </div>
                <h1 className="text-4xl font-bold">{service.title}</h1>
              </div>

              <p className="text-xl text-muted-foreground mb-8">{service.fullDescription || service.description || service.shortDescription}</p>

              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 shadow-lg"
                  >
                    Get Started
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    href="#features" 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-transparent text-primary hover:bg-primary/10 h-11 px-8"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden shadow-xl"
            >
              <div className="aspect-video relative">
                <Image
                  src={`/assets/imgs/AI_automation_1.png`}
                  alt={service.title}
                  width={1200}
                  height={675}
                  className="object-cover w-full h-full absolute inset-0"
                  onError={(e) => {
                    e.target.src = "/assets/imgs/development_1.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-bold">{service.title} Solutions</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section with 3D Cards */}
      <div id="features" className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 -top-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 bottom-20 -left-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our {service.title} service includes a comprehensive set of features designed to meet your business needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features && service.features.length > 0 ? (
              service.features.map((feature, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all feature-card"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <span className="font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-muted-foreground">
                  {/* In a real implementation, you would have detailed descriptions for each feature */}
                  Our {feature} capability provides comprehensive solutions tailored to your specific business requirements.
                </p>
                
                {/* Feature icon based on index */}
                <div className="mt-4 flex justify-end">
                  {index % 6 === 0 && <Sparkles className="w-6 h-6 text-primary/60" />}
                  {index % 6 === 1 && <Users className="w-6 h-6 text-primary/60" />}
                  {index % 6 === 2 && <Zap className="w-6 h-6 text-primary/60" />}
                  {index % 6 === 3 && <BarChart3 className="w-6 h-6 text-primary/60" />}
                  {index % 6 === 4 && <Award className="w-6 h-6 text-primary/60" />}
                  {index % 6 === 5 && <CheckCircle className="w-6 h-6 text-primary/60" />}
                </div>
              </motion.div>
            ))
            ) : (
              // Default features if none are provided
              [
                "Customized Solutions", 
                "Expert Implementation", 
                "Ongoing Support"
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition-all feature-card"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                  <p className="text-muted-foreground">
                    Our {feature} capability provides comprehensive solutions tailored to your specific business requirements.
                  </p>
                  
                  <div className="mt-4 flex justify-end">
                    {index % 3 === 0 && <Sparkles className="w-6 h-6 text-primary/60" />}
                    {index % 3 === 1 && <Users className="w-6 h-6 text-primary/60" />}
                    {index % 3 === 2 && <Zap className="w-6 h-6 text-primary/60" />}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Expertise & Benefits Section with 3D Effects */}
      <div className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 -bottom-20 -right-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 top-20 -left-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in {service.title}, our team brings deep expertise and knowledge to every project.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.expertise && service.expertise.length > 0 ? (
                  service.expertise.map((item, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "rgba(var(--primary-rgb), 0.05)" 
                    }}
                    className="p-5 bg-white rounded-lg border border-gray-100 text-center hover:border-primary/30 transition-all feature-card"
                  >
                    <span className="block text-primary font-medium">{item}</span>
                  </motion.div>
                ))
                ) : (
                  // Default expertise if none are provided
                  ["Industry Knowledge", "Technical Proficiency", "Project Management", "Quality Assurance", "Client Communication", "Continuous Learning"].map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ 
                        y: -5, 
                        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "rgba(var(--primary-rgb), 0.05)" 
                      }}
                      className="p-5 bg-white rounded-lg border border-gray-100 text-center hover:border-primary/30 transition-all feature-card"
                    >
                      <span className="block text-primary font-medium">{item}</span>
                    </motion.div>
                  ))
                )}
              </div>
              
              {/* 3D Floating Image */}
              <div className="mt-8 relative h-40 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/assets/imgs/development_1.png`}
                  alt={`${service.title} Expertise`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/imgs/development_2.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-bold">Expert {service.title} Team</div>
                  <div className="text-sm">Years of industry experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our {service.title} service delivers tangible benefits that drive business growth and success.
              </p>
              
              <ul className="space-y-4">
                {service.benefits && service.benefits.length > 0 ? (
                  service.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="p-2 bg-primary/10 text-primary rounded-full flex-shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-medium">{benefit}</span>
                      {/* In a real implementation, you would have detailed descriptions for each benefit */}
                      <p className="text-sm text-muted-foreground mt-1">
                        This benefit helps your business achieve greater efficiency and competitive advantage.
                      </p>
                    </div>
                  </motion.li>
                ))
                ) : (
                  // Default benefits if none are provided
                  [
                    "Increased Efficiency", 
                    "Cost Reduction", 
                    "Improved Quality", 
                    "Enhanced Customer Satisfaction",
                    "Competitive Advantage"
                  ].map((benefit, index) => (
                    <motion.li 
                      key={index} 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 bg-white p-5 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="p-2 bg-primary/10 text-primary rounded-full flex-shrink-0">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-medium">{benefit}</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          This benefit helps your business achieve greater efficiency and competitive advantage.
                        </p>
                      </div>
                    </motion.li>
                  ))
                )}
              </ul>
              
              {/* 3D Floating Image */}
              <div className="mt-8 relative h-40 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={`/assets/imgs/Cloud_things_3.png`}
                  alt={`${service.title} Benefits`}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.target.src = "/assets/imgs/development_3.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-bold">Measurable Results</div>
                  <div className="text-sm">Driving business growth and success</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a structured approach to deliver exceptional {service.title} solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">We start by understanding your business needs and challenges</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Analysis</h3>
              <p className="text-muted-foreground">Our experts analyze your requirements and develop a strategic plan</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-muted-foreground">We implement the solution with minimal disruption to your business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-muted-foreground">We continuously monitor and optimize for peak performance</p>
            </div>
          </div>
        </div>
      </div>
 

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our {service.title} service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Contact us today to learn how our {service.title} service can help your business succeed.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  )
}

