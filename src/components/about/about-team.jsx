"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const teamMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/assets/imgs/team/team-1.jpg",
    bio: "With over 15 years of experience in the tech industry, Alex leads our company with vision and expertise.",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "CTO",
    image: "/assets/imgs/team/team-2.jpg",
    bio: "Sarah oversees our technical strategy and ensures we're always at the cutting edge of technology.",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Lead Developer",
    image: "/assets/imgs/team/team-3.jpg",
    bio: "Michael brings extensive experience in software architecture and leads our development team.",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  },
  {
    id: 4,
    name: "Priya Sharma",
    role: "UX/UI Designer",
    image: "/assets/imgs/team/team-4.jpg",
    bio: "Priya creates beautiful, intuitive interfaces that delight users and drive business results.",
    social: {
      linkedin: "#",
      twitter: "#",
    }
  }
];

const AboutTeam = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-full bg-grid-indigo/[0.03] bg-[length:40px_40px] z-0"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-300 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            OUR TEAM
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Meet the Experts Behind Our Success
          </h2>
          
          <p className="text-lg text-gray-700">
            Our team is a collective force of top talents, experts, and visionaries from diverse fields. 
            With a passion for excellence, our professionals bring a wealth of experience and knowledge to every project.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  width={400} 
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                
                {/* Social overlay */}
                <div className="absolute inset-0 bg-indigo-900/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={member.social.linkedin} 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-600 hover:bg-indigo-100 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-6">
            Want to join our team of talented professionals?
          </p>
          <a 
            href="/careers" 
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            View Career Opportunities
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutTeam