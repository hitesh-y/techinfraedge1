"use client"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { ArrowRight, Code, Search, Database, CheckCircle } from "lucide-react"
import Image from "next/image"

const HowwedoModern = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const sectionRef = useRef(null)

  const steps = [
    {
      id: 1,
      title: "Brainstorming",
      subtitle: "Ideas & Strategy",
      description: "We collaborate with you to understand your goals and develop innovative solutions that align with your business objectives.",
      icon: <Image src="/assets/imgs/icons/lightbulb-icon.svg" width={24} height={24} alt="Brainstorming" />,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Product Design",
      subtitle: "UX/UI Excellence",
      description: "Our design team creates intuitive, engaging interfaces that deliver exceptional user experiences and reflect your brand identity.",
      icon: <Image src="/assets/imgs/icons/palette-icon.svg" width={24} height={24} alt="Product Design" />,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 3,
      title: "Front-End Development",
      subtitle: "Responsive & Interactive",
      description: "We build responsive, interactive front-end solutions using the latest technologies to ensure optimal performance across all devices.",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      title: "SEO Optimization",
      subtitle: "Visibility & Growth",
      description: "Our SEO experts implement strategies to improve your search engine rankings and drive organic traffic to your digital platforms.",
      icon: <Search className="w-6 h-6" />,
      color: "from-pink-500 to-red-600"
    },
    {
      id: 5,
      title: "Back-End Development",
      subtitle: "Robust & Scalable",
      description: "We develop secure, scalable back-end systems that power your applications and handle complex business logic efficiently.",
      icon: <Database className="w-6 h-6" />,
      color: "from-red-500 to-orange-600"
    },
    {
      id: 6,
      title: "Testing & Deployment",
      subtitle: "Quality Assurance",
      description: "Our rigorous testing processes ensure your solution is bug-free, secure, and ready for successful deployment to production.",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-orange-500 to-yellow-600"
    }
  ]

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

  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full filter blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-4 border border-indigo-700/50">
                OUR METHODOLOGY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                How We Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Ideas</span> Into Reality
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Our proven six-step process ensures we deliver exceptional results that exceed expectations and drive business growth.
              </p>
              <Link 
                href="/how-we-do" 
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1"
              >
                Explore Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right content - Process visualization */}
          <div className="w-full lg:w-3/5">
            <div className="relative">
              {/* Step indicators */}
              <motion.div 
                className="flex justify-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex space-x-2">
                  {steps.map((step, index) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-indigo-500 w-10' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to step ${index + 1}: ${step.title}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Active step content */}
              <div className="relative h-[400px] bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 overflow-hidden">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="absolute inset-0 p-8 flex flex-col"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ 
                      opacity: activeStep === index ? 1 : 0,
                      x: activeStep === index ? 0 : 50,
                      pointerEvents: activeStep === index ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${step.color} mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-indigo-300">{step.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                    
                    <div className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-indigo-400 font-medium">Step {step.id} of {steps.length}</span>
                        <div className="flex items-center">
                          <button 
                            onClick={() => setActiveStep(index === 0 ? steps.length - 1 : index - 1)}
                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors mr-2"
                          >
                            <ArrowRight className="w-5 h-5 transform rotate-180" />
                          </button>
                          <button 
                            onClick={() => setActiveStep(index === steps.length - 1 ? 0 : index + 1)}
                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full h-1 bg-gray-700 rounded-full mt-6 overflow-hidden">
                        <motion.div 
                          className={`h-full bg-gradient-to-r ${step.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5, repeat: activeStep === index ? Infinity : 0 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Step cards - small screens only */}
              <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border ${
                      activeStep === index ? 'border-indigo-500' : 'border-gray-700'
                    } cursor-pointer`}
                    whileHover={{ y: -5 }}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className={`flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} mb-3 mx-auto`}>
                      {step.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="text-base font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-indigo-300 text-xs">{step.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowwedoModern