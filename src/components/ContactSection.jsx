'use client'
import Image from "next/image"
import { useState } from "react"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
    acceptance: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // You would typically send this data to your server or API
  }



  const experiences = [
    { years: "22+", description: "Field Experience" },
    { projects: "950+", description: "Projects Done Around World" },
    { percentage: "99%", description: "Client Satisfaction" },
    { year: "1995+", description: "Established On" },
    { minutes: "2", description: "Response Time" },
  ]

  return (
    <section className="contact-area">
      <div className="custom-container">
        <div className="custom-row">
          <div className="contact-form-wrap">
            <div className="contact-form-body">
              <h6 className="section-subtitle">Contact</h6>
              <h2 className="section-title">Let's get in touch</h2>
              <p>
                You can reach us anytime via <a href="mailto:bluebase@mail.com">bluebase@mail.com</a>
              </p>
              <div className="contact-form">
                <form onSubmit={handleSubmit} className="wpcf7-form init">
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group phone-number">
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                        placeholder="Your Number"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                        placeholder="Your Country"
                        required
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                        placeholder="Leave us a message...."
                        required
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group input-checkbox">
                      <input
                        type="checkbox"
                        id="acceptance"
                        name="acceptance"
                        checked={formData.acceptance}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="acceptance">
                        You agree to our <a href="#">terms and conditions.</a>
                      </label>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <button type="submit" id="submit" className="theme-btn">
                        Get Started
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-experience">
            <ul>
              {experiences.map((exp, index) => (
                <li key={index}>
                  <h2>
                    {exp.years || exp.projects || exp.percentage || exp.year || exp.minutes}
                    {exp.years && <span>Years</span>}
                    {exp.projects && <span>Projects</span>}
                    {exp.year && <span>Year</span>}
                    {exp.minutes && <span>Mins</span>}
                  </h2>
                  <p>{exp.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-infos">
            <div className="contact-infos-inner">
              <div className="contact-info">
                <Image src="/assets/imgs/partners/support-icon.svg" alt="Support" width={50} height={50} />
                <h4>Contact Info</h4>
                <p>
                  +1 455 1482 236 <br />
                  Bluebase@mail.com
                </p>
              </div>
              <div className="contact-info">
                <Image src="/assets/imgs/partners/map-icon.svg" alt="Map" width={50} height={50} />
                <h4>Visit our office</h4>
                <p>
                  16/9, Down Street
                  <br />
                  Edinburgh, Scotland
                  <br />
                  United Kingdom
                </p>
              </div>
              <ul className="contact-social-links">
                {["dribbble", "twitter", "instagram", "linkedin"].map((social) => (
                  <li key={social}>
                    <a target="_blank" href="#" rel="noopener noreferrer">
                      <i className={`iconoir-${social}`} />
                      {social.charAt(0).toUpperCase() + social.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

