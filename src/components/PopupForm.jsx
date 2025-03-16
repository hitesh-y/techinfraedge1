"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useForm } from "react-hook-form"

const PopupForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("Mobile App Development")
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsOpen(false)
  }

  const onSubmit = async (data) => {
    console.log(data)
    // Here you would typically send the data to your backend
    try {
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });

      // if (response.ok) {
      //   alert('Form submitted successfully!');
      //   reset();
      //   closePopup();
      // }
      alert("Form submitted successfully!")
      reset()
      closePopup()
    } catch (error) {
      console.error("Error submitting form:", error)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto py-6 sm:py-10 md:py-16 lg:py-20 px-4">
      <div className=" relative w-full max-w-4xl bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl overflow-hidden my-auto max-h-[70vh]">
        <button
          onClick={closePopup}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-gray-500 hover:text-gray-700 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div className="overflow-y-auto max-h-[70vh] ">
          <div className="flex flex-col md:flex-row">
            {/* Left side content */}
            <div className="p-6 md:p-8 md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-500 mb-2">Have a Project in Mind?</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3">Let's Calculate Your Budget!</h3>

              <p className="text-gray-600 mb-5 text-sm md:text-base">
                Expert help for your project. Fast, personalized responses. Share your goals – get connected today!
              </p>

              <div className="flex justify-center mb-5">
                <Image
                  src="/assets/imgs/PopupForm/business-meeting.svg"
                  alt="Business Meeting"
                  width={240}
                  height={160}
                  className="max-w-full h-auto"
                />
              </div>

              <div className="mb-4">
                <h4 className="text-base font-medium text-gray-700 mb-3">A proven track record</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Image src="/assets/imgs/PopupForm/badge-1.svg" alt="Award" width={50} height={50} />
                  <Image src="/assets/imgs/PopupForm/badge-2.svg" alt="Award" width={50} height={50} />
                  <Image src="/assets/imgs/PopupForm/badge-3.svg" alt="Award" width={50} height={50} />
                  <Image src="/assets/imgs/PopupForm/badge-4.svg" alt="Award" width={50} height={50} />
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-white m-2 p-6 md:p-8 md:w-1/2 rounded-2xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
                      {...register("fullName", { required: true })}
                    />
                  </div>
                  {errors.fullName && <p className="mt-1 text-xs text-red-500">Full name is required</p>}
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
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      placeholder="Email ID *"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                  </div>
                  {errors.email?.type === "required" && <p className="mt-1 text-xs text-red-500">Email is required</p>}
                  {errors.email?.type === "pattern" && (
                    <p className="mt-1 text-xs text-red-500">Invalid email address</p>
                  )}
                </div>

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
                      className={`w-full pl-16 pr-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                      {...register("phone", {
                        required: true,
                        pattern: /^[0-9]{10}$/,
                      })}
                    />
                  </div>
                  {errors.phone?.type === "required" && (
                    <p className="mt-1 text-xs text-red-500">Phone number is required</p>
                  )}
                  {errors.phone?.type === "pattern" && (
                    <p className="mt-1 text-xs text-red-500">Please enter a valid 10-digit phone number</p>
                  )}
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
                      className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg cursor-pointer flex justify-between items-center"
                      onClick={toggleServiceDropdown}
                    >
                      <span>{selectedService}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {isServiceDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                        {services.map((service) => (
                          <div
                            key={service}
                            className="px-4 py-2 text-sm hover:bg-blue-50 cursor-pointer"
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

                <div>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-gray-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <textarea
                      placeholder="Write a Message *"
                      rows={3}
                      className={`w-full pl-10 pr-4 py-2.5 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none ${errors.message ? "border-red-500" : "border-gray-300"}`}
                      {...register("message", { required: true })}
                    ></textarea>
                  </div>
                  {errors.message && <p className="mt-1 text-xs text-red-500">Message is required</p>}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors text-sm"
                >
                  Submit
                </button>
              </form>

              <div className="mt-4">
                <div className="flex justify-center items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-blue-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-xs">Your Information will be safe with us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopupForm

