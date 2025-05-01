"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, ExternalLink, Code, Layers, Database, Monitor } from "lucide-react"

const ProjectsModern = () => {
  const [activeCategory, setActiveCategory] = useState("mobile")
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const categories = [
    // { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "saas", name: "SaaS" },
    { id: "ecommerce", name: "E-commerce" }
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A comprehensive e-commerce solution with advanced product filtering, payment integration, and inventory management.",
      category: "ecommerce",
      image: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png",
      icon: <Monitor className="w-5 h-5" />,
      technologies: ["React", "Node.js", "MongoDB"],
      link: "/projects/e-commerce-platform"
    },
    {
      id: 2,
      title: "SaaS Integration Platform",
      description: "A cloud-based integration platform that connects various business applications and automates workflows.",
      category: "saas",
      image: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png",
      icon: <Layers className="w-5 h-5" />,
      technologies: ["Angular", "AWS", "Python"],
      link: "/projects/saas-integration"
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "A secure and user-friendly mobile banking application with biometric authentication and real-time transactions.",
      category: "mobile",
      image: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-3.png",
      icon: <Code className="w-5 h-5" />,
      technologies: ["React Native", "Firebase", "Swift"],
      link: "/projects/mobile-banking"
    },
    {
      id: 4,
      title: "Virtual Reality Experience",
      description: "An immersive VR experience for architectural visualization and virtual property tours.",
      category: "web",
      image: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png",
      icon: <Monitor className="w-5 h-5" />,
      technologies: ["Three.js", "WebXR", "Unity"],
      link: "/projects/vr-experience"
    },
    {
      id: 5,
      title: "Custom CRM System",
      description: "A tailored customer relationship management system designed for sales teams with advanced analytics.",
      category: "saas",
      image: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-5-new.png",
      icon: <Database className="w-5 h-5" />,
      technologies: ["Vue.js", "Laravel", "MySQL"],
      link: "/projects/crm-system"
    },
    {
      id: 6,
      title: "Productivity Wearable App",
      description: "A smartwatch application for tracking productivity, time management, and health metrics.",
      category: "mobile",
      image: "https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-6-new.png",
      icon: <Code className="w-5 h-5" />,
      technologies: ["Flutter", "Kotlin", "WatchOS"],
      link: "/projects/wearable-app"
    }
  ]

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          controls.start("visible")
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [controls])

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-40 -right-20 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left content */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-32">
              <span className="inline-block px-4 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-4 border border-indigo-700/50">
                PORTFOLIO
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Showcase of Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Recognized</span> Work
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our collaborative approach ensures that we truly understand our clients' unique requirements and challenges, delivering solutions that exceed expectations.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Managed Services and Products</h3>
                    <p className="text-gray-400">End-to-end solutions that cover the entire development lifecycle.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Flexibility and Adaptability</h3>
                    <p className="text-gray-400">Tailored solutions that adapt to changing business requirements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Competitive Advantage</h3>
                    <p className="text-gray-400">Innovative solutions that help businesses stay ahead of the competition.</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
              >
                View All Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right content - Projects */}
          <div className="w-full lg:w-2/3">
            {/* Category filters */}
            <motion.div 
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </motion.div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 4) }}
                >
                  <Link href={project.link}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col">
                      <div className="relative overflow-hidden h-48">
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 z-20">
                          <span className="px-3 py-1 bg-indigo-900/70 backdrop-blur-sm text-indigo-300 rounded-full text-xs font-medium">
                            {categories.find(c => c.id === project.category)?.name || project.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="w-10 h-10 rounded-full bg-indigo-900/50 flex items-center justify-center">
                            {project.icon}
                          </div>
                        </div>
                        
                        <p className="text-gray-400 mb-4 flex-grow">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                          <span className="text-indigo-400 text-sm font-medium">View Details</span>
                          <ExternalLink className="w-4 h-4 text-indigo-400 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsModern