"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ArrowLeft } from 'lucide-react';
import { Shimmer, AnimatedHeading, GradientText } from '@/components/CustomReactBits';
 

const serviceData = {
  id: 1,
  icon: "/assets/imgs/service-icon-1.svg",
  title: "Development",
  description: "Our development team creates custom software solutions tailored to your specific business needs. We specialize in web applications, mobile apps, and enterprise software that drive efficiency and growth.",
  longDescription: "At TechInfraEdge, we offer comprehensive development services that transform your ideas into powerful, scalable software solutions. Our experienced team of developers works closely with you to understand your business requirements and create custom applications that solve real problems and drive growth. Whether you need a complex enterprise system, a customer-facing web application, or a mobile app, we have the expertise to deliver high-quality solutions on time and within budget.",
  features: [
    "Custom Software Development",
    "Web Application Development",
    "Mobile App Development",
    "API Development & Integration",
    "Legacy System Modernization",
    "E-commerce Solutions",
    "Database Design & Development",
    "Quality Assurance & Testing"
  ],
  benefits: [
    {
      title: "Tailored Solutions",
      description: "Custom software built specifically for your business needs and workflows."
    },
    {
      title: "Scalable Architecture",
      description: "Solutions designed to grow with your business and handle increasing demands."
    },
    {
      title: "Enhanced Efficiency",
      description: "Streamlined processes and automation that save time and reduce errors."
    },
    {
      title: "Competitive Advantage",
      description: "Unique software that differentiates your business from competitors."
    }
  ],
  process: [
    {
      title: "Discovery & Analysis",
      description: "We begin by understanding your business goals, requirements, and challenges."
    },
    {
      title: "Planning & Design",
      description: "Creating detailed specifications and designing the architecture and user experience."
    },
    {
      title: "Development",
      description: "Building the solution using modern technologies and best practices."
    },
    {
      title: "Testing & QA",
      description: "Rigorous testing to ensure quality, performance, and security."
    },
    {
      title: "Deployment",
      description: "Smooth implementation with minimal disruption to your business."
    },
    {
      title: "Ongoing Support",
      description: "Continuous maintenance, updates, and enhancements as needed."
    }
  ],
  technologies: [
    "React", "Node.js", "Python", "Java", "Angular", 
    "Vue.js", "PHP", "Laravel", "Django", ".NET",
    "React Native", "Flutter", "Swift", "Kotlin",
    "MongoDB", "PostgreSQL", "MySQL", "AWS", "Azure", "Google Cloud"
  ],
  caseStudies: [
    {
      title: "E-commerce Platform Overhaul",
      description: "Redesigned and rebuilt an outdated e-commerce platform, resulting in a 45% increase in conversion rates and a 30% reduction in cart abandonment.",
      image: "/assets/imgs/case-studio-1-1.jpg"
    },
    {
      title: "Custom CRM Implementation",
      description: "Developed a tailored CRM system for a financial services company, improving customer service response times by 60% and increasing sales team productivity by 35%.",
      image: "/assets/imgs/case-studio-2-2.jpg"
    }
  ],
  faqs: [
    {
      question: "How long does it typically take to develop a custom software solution?",
      answer: "The timeline varies depending on the complexity of the project. Simple applications may take 2-3 months, while more complex enterprise solutions can take 6-12 months. We provide detailed timelines during the planning phase."
    },
    {
      question: "Do you provide ongoing support after the development is complete?",
      answer: "Yes, we offer various support and maintenance packages to ensure your software continues to run smoothly and can be updated as your business needs evolve."
    },
    {
      question: "How do you ensure the security of the applications you develop?",
      answer: "Security is built into our development process from the ground up. We follow industry best practices, conduct regular security audits, implement encryption, and perform penetration testing to identify and address vulnerabilities."
    },
    {
      question: "Can you integrate new software with our existing systems?",
      answer: "Absolutely. We specialize in creating seamless integrations between new applications and existing systems through APIs and other integration methods."
    }
  ],
  image: "/assets/imgs/case-studio-1-1.jpg",
  heroImage: "/assets/imgs/hero-overview-about.jpg"
};

export default function DevelopmentServicePage() {
  return (
    <div className="pt-32 pb-20 bg-gray-900">
      {/* Hero Section */}
      <section className="relative mb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
          <img 
            src={serviceData.heroImage} 
            alt={serviceData.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/services" className="inline-flex items-center px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors mb-6 shadow-lg">
                <ArrowLeft className="mr-2 w-5 h-5" />
                Back to Services
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center mb-6"
            >
              <img 
                src={serviceData.icon} 
                alt={serviceData.title} 
                className="w-16 h-16 mr-4" 
              />
              <Shimmer className="text-indigo-400 font-medium uppercase">
                {serviceData.title} SERVICES
              </Shimmer>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AnimatedHeading 
                level={1} 
                effect="gradient" 
                from="#4F46E5" 
                to="#EC4899"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                Custom Software Development Solutions
              </AnimatedHeading>
            </motion.div>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {serviceData.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
              >
                Request a Consultation
              </Link>
              <a 
                href="#features" 
                className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                Learn More
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Overview</h2>
              <p className="text-gray-300 mb-6">
                {serviceData.longDescription}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {serviceData.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src={serviceData.image} 
                  alt={serviceData.title} 
                  className="w-full h-auto" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/60 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shimmer className="text-indigo-400 font-medium mb-3 uppercase">
              KEY FEATURES
            </Shimmer>
            <h2 className="text-3xl font-bold text-white">What We Offer</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 p-6 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shimmer className="text-indigo-400 font-medium mb-3 uppercase">
              BENEFITS
            </Shimmer>
            <h2 className="text-3xl font-bold text-white">Why Choose Our Development Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shimmer className="text-indigo-400 font-medium mb-3 uppercase">
              OUR PROCESS
            </Shimmer>
            <h2 className="text-3xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our structured development process ensures quality, transparency, and successful outcomes for every project.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-900/50 hidden md:block"></div>
            
            <div className="space-y-12">
              {serviceData.process.map((step, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="relative">
                      <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2 w-12 h-12 bg-indigo-600 rounded-full z-10 left-0 md:left-auto md:right-0">
                        <div className="w-full h-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                  
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-24 h-24 bg-indigo-900/30 rounded-full flex items-center justify-center md:hidden">
                      <span className="text-3xl font-bold text-indigo-400">{index + 1}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shimmer className="text-indigo-400 font-medium mb-3 uppercase">
              TECHNOLOGIES
            </Shimmer>
            <h2 className="text-3xl font-bold text-white">Tools & Technologies We Use</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {serviceData.technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, borderColor: 'rgba(99, 102, 241, 0.5)' }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shimmer className="text-indigo-400 font-medium mb-3 uppercase">
              CASE STUDIES
            </Shimmer>
            <h2 className="text-3xl font-bold text-white">Our Success Stories</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.caseStudies.map((caseStudy, index) => (
              <motion.div 
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-white">{caseStudy.title}</h3>
                  <p className="text-gray-300 mb-4">{caseStudy.description}</p>
                  <Link 
                    href="/case-studies"
                    className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    Read full case study
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Shimmer className="text-indigo-400 font-medium mb-3 uppercase">
              FAQ
            </Shimmer>
            <h2 className="text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {serviceData.faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-bold mb-4 text-white">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-indigo-900/20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute w-96 h-96 rounded-full bg-indigo-900/30 -bottom-20 -right-20 animate-blob"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to start your development project?
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss your project requirements and get a free consultation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors inline-flex items-center"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}