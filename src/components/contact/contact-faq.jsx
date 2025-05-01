"use client"
import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

const ContactFaq = () => {
  const faqRef = useRef(null)
  const isInView = useInView(faqRef, { once: true, amount: 0.1 })
  
  const faqs = [
    {
      question: "What services does TechInfraEdge offer?",
      answer: "TechInfraEdge offers a comprehensive range of IT services including web development, mobile app development, cloud solutions, AI automation, IT support, e-commerce solutions, and CRM implementation. We tailor our services to meet the specific needs of your business."
    },
    {
      question: "How quickly can you respond to my inquiry?",
      answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we strive to get back to you even sooner. Our team is committed to providing prompt and efficient communication."
    },
    {
      question: "Do you offer support after project completion?",
      answer: "Yes, we provide comprehensive post-project support and maintenance services. We believe in building long-term relationships with our clients and ensuring that your digital solutions continue to perform optimally after launch."
    },
    {
      question: "Can you work with clients internationally?",
      answer: "Absolutely! We have offices in India and UAE, and we work with clients globally. Our team is experienced in remote collaboration and we use efficient communication tools to ensure smooth project execution regardless of geographical location."
    },
    {
      question: "What is your typical project timeline?",
      answer: "Project timelines vary depending on the scope and complexity of the work. During our initial consultation, we'll discuss your requirements in detail and provide you with a realistic timeline. We pride ourselves on delivering projects on schedule without compromising quality."
    }
  ]
  
  const [openIndex, setOpenIndex] = useState(null)
  
  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  
  return (
    <section 
      ref={faqRef}
      className="py-20 bg-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium mb-4 border border-indigo-700/50">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Got Questions? We've Got Answers
            </h2>
            <p className="text-gray-300 text-lg">
              Find answers to common questions about our services and processes.
            </p>
          </motion.div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-2">
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-indigo-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-indigo-400" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <a 
              href="#contact-form" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactFaq