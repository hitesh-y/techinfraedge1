"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"
import { motion, AnimatePresence } from "framer-motion"
import { X, User, Mail, Phone, MessageSquare, ChevronDown, ChevronUp, Send, Shield, Check } from "lucide-react"

const PopupFormModern = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("Mobile App Development")
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)
  const [formStep, setFormStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    trigger,
    watch,
  } = useForm({
    mode: "onChange"
  })

  // Watch form values to enable/disable next button
  const fullName = watch("fullName")
  const email = watch("email")
  const phone = watch("phone")
  const message = watch("message")

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsOpen(false)
    
    // Reset form state after closing
    setTimeout(() => {
      setFormStep(0)
      setIsSubmitted(false)
      reset()
    }, 500)
  }

  const nextStep = async () => {
    // Validate current step fields before proceeding
    const fieldsToValidate = formStep === 0 
      ? ["fullName", "email"] 
      : ["phone", "service"]
    
    const isStepValid = await trigger(fieldsToValidate)
    
    if (isStepValid) {
      setFormStep(formStep + 1)
    }
  }

  const prevStep = () => {
    setFormStep(formStep - 1)
  }

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    try {
      // Here you would typically send the data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log("Form data:", data)
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Reset form after 5 seconds and close popup
      setTimeout(() => {
        reset()
        closePopup()
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
    }
  }

  const services = [
    "Mobile App Development",
    "Web Development",
    "UI/UX Design",
    "E-commerce Solutions",
    "Digital Marketing",
    "Cloud Services",
  ]

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen)
  }

  const selectService = (service) => {
    setSelectedService(service)
    setIsServiceDropdownOpen(false)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-4 px-4 md:py-6 lg:py-10"
        onClick={closePopup} // Close when clicking outside the modal
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden my-auto"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        >
          {/* Close button - improved positioning and size for mobile */}
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors z-20"
            aria-label="Close popup"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600 rounded-full filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="overflow-y-auto max-h-[85vh] md:max-h-[80vh]">
            <div className="flex flex-col md:flex-row">
              {/* Left side content */}
              <div className="p-6 md:p-10 md:w-1/2 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="inline-block px-3 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-xs font-medium mb-4 border border-indigo-700/50">
                    GET A FREE QUOTE
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Have a Project in Mind?</h2>
                  <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-4">Let's Calculate Your Budget!</h3>

                  <p className="text-gray-300 mb-6 text-sm md:text-base">
                    Expert help for your project. Fast, personalized responses. Share your goals – get connected today!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mb-6"
                >
                  <Image
                    src="/assets/imgs/PopupForm/business-meeting.svg"
                    alt="Business Meeting"
                    width={240}
                    height={160}
                    className="max-w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="text-base font-medium text-gray-200 mb-3">A proven track record</h4>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <div className="bg-gray-800/50 p-2 rounded-lg">
                      <Image src="/assets/imgs/PopupForm/badge-1.svg" alt="Award" width={40} height={40} />
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg">
                      <Image src="/assets/imgs/PopupForm/badge-2.svg" alt="Award" width={40} height={40} />
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg">
                      <Image src="/assets/imgs/PopupForm/badge-3.svg" alt="Award" width={40} height={40} />
                    </div>
                    <div className="bg-gray-800/50 p-2 rounded-lg">
                      <Image src="/assets/imgs/PopupForm/badge-4.svg" alt="Award" width={40} height={40} />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right side form */}
              <div className="bg-gray-800/50 backdrop-blur-sm m-2 p-6 md:p-8 md:w-1/2 rounded-2xl border border-gray-700">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full py-8"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <Check className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                    <p className="text-gray-300 text-center mb-6">
                      Your message has been submitted successfully. We'll get back to you shortly.
                    </p>
                    <button
                      onClick={closePopup}
                      className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Form Step Indicator */}
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex space-x-2">
                        <div className={`w-3 h-3 rounded-full ${formStep >= 0 ? 'bg-indigo-500' : 'bg-gray-600'}`}></div>
                        <div className={`w-3 h-3 rounded-full ${formStep >= 1 ? 'bg-indigo-500' : 'bg-gray-600'}`}></div>
                        <div className={`w-3 h-3 rounded-full ${formStep >= 2 ? 'bg-indigo-500' : 'bg-gray-600'}`}></div>
                      </div>
                      <span className="text-gray-400 text-sm">Step {formStep + 1} of 3</span>
                    </div>

                    {/* Step 1: Name and Email */}
                    {formStep === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white mb-4">Let's get to know you</h3>
                        
                        <div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                              <User className="h-5 w-5" />
                            </div>
                            <input
                              type="text"
                              placeholder="Full Name *"
                              className={`w-full pl-10 pr-4 py-3 text-sm bg-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400 ${errors.fullName ? "border-red-500" : "border-gray-600"}`}
                              {...register("fullName", { required: "Full name is required" })}
                            />
                          </div>
                          {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName.message}</p>}
                        </div>

                        <div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                              <Mail className="h-5 w-5" />
                            </div>
                            <input
                              type="email"
                              placeholder="Email Address *"
                              className={`w-full pl-10 pr-4 py-3 text-sm bg-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400 ${errors.email ? "border-red-500" : "border-gray-600"}`}
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                  message: "Invalid email address"
                                }
                              })}
                            />
                          </div>
                          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}
                        </div>
                        
                        <div className="pt-4">
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={!fullName || !email || errors.fullName || errors.email}
                            className={`w-full py-3 px-4 rounded-lg transition-colors text-sm font-medium flex items-center justify-center ${
                              !fullName || !email || errors.fullName || errors.email
                                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                                : "bg-indigo-600 hover:bg-indigo-700 text-white"
                            }`}
                          >
                            Continue
                            <ChevronDown className="ml-2 h-4 w-4 rotate-270" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Phone and Service */}
                    {formStep === 1 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white mb-4">Contact details</h3>
                        
                        <div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                              <div className="flex items-center">
                                <Image
                                  src="/assets/imgs/PopupForm/india-flag.svg"
                                  alt="India"
                                  width={20}
                                  height={15}
                                  className="mr-1"
                                />
                                <span className="text-xs">+91</span>
                              </div>
                            </div>
                            <input
                              type="tel"
                              placeholder="Mobile Number *"
                              className={`w-full pl-16 pr-4 py-3 text-sm bg-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400 ${errors.phone ? "border-red-500" : "border-gray-600"}`}
                              {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{10}$/,
                                  message: "Please enter a valid 10-digit phone number"
                                }
                              })}
                            />
                          </div>
                          {errors.phone && <p className="mt-1 text-xs text-red-400">{errors.phone.message}</p>}
                        </div>

                        <div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div
                              className="w-full pl-10 pr-4 py-3 text-sm bg-gray-700 border border-gray-600 rounded-lg cursor-pointer flex justify-between items-center text-white"
                              onClick={toggleServiceDropdown}
                            >
                              <span>{selectedService}</span>
                              {isServiceDropdownOpen ? (
                                <ChevronUp className="h-4 w-4 text-gray-400" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-gray-400" />
                              )}
                            </div>
                            {isServiceDropdownOpen && (
                              <div className="absolute z-10 mt-1 w-full bg-gray-700 border border-gray-600 rounded-lg shadow-lg">
                                {services.map((service) => (
                                  <div
                                    key={service}
                                    className="px-4 py-2 text-sm hover:bg-gray-600 cursor-pointer text-white"
                                    onClick={() => selectService(service)}
                                  >
                                    {service}
                                  </div>
                                ))}
                              </div>
                            )}
                            <input type="hidden" value={selectedService} {...register("service", { required: true })} />
                          </div>
                        </div>
                        
                        <div className="flex space-x-3 pt-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="w-1/3 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            Back
                          </button>
                          <button
                            type="button"
                            onClick={nextStep}
                            disabled={!phone || errors.phone}
                            className={`w-2/3 py-3 px-4 rounded-lg transition-colors text-sm font-medium ${
                              !phone || errors.phone
                                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                                : "bg-indigo-600 hover:bg-indigo-700 text-white"
                            }`}
                          >
                            Continue
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Message and Submit */}
                    {formStep === 2 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-4"
                      >
                        <h3 className="text-xl font-semibold text-white mb-4">Tell us about your project</h3>
                        
                        <div>
                          <div className="relative">
                            <div className="absolute top-3 left-3 text-gray-400">
                              <MessageSquare className="h-5 w-5" />
                            </div>
                            <textarea
                              placeholder="Write a Message *"
                              rows={4}
                              className={`w-full pl-10 pr-4 py-3 text-sm bg-gray-700 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white placeholder-gray-400 ${errors.message ? "border-red-500" : "border-gray-600"}`}
                              {...register("message", { 
                                required: "Please tell us about your project requirements" 
                              })}
                            ></textarea>
                          </div>
                          {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}
                        </div>
                        
                        <div className="flex space-x-3 pt-4">
                          <button
                            type="button"
                            onClick={prevStep}
                            className="w-1/3 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium"
                          >
                            Back
                          </button>
                          <button
                            type="submit"
                            disabled={isSubmitting || !message || errors.message}
                            className={`w-2/3 py-3 px-4 rounded-lg transition-colors text-sm font-medium flex items-center justify-center ${
                              isSubmitting || !message || errors.message
                                ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                                : "bg-indigo-600 hover:bg-indigo-700 text-white"
                            }`}
                          >
                            {isSubmitting ? (
                              <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                              </>
                            ) : (
                              <>
                                Submit
                                <Send className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )}

                    <div className="pt-2">
                      <div className="flex justify-center items-center text-gray-400">
                        <Shield className="h-4 w-4 text-indigo-400 mr-2" />
                        <span className="text-xs">Your information is secure and will not be shared</span>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PopupFormModern