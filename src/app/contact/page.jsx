import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactLocations from "@/components/contact/contact-locations"
import ContactFaq from "@/components/contact/contact-faq"

export const metadata = {
  title: "Contact Us | TechInfraEdge",
  description: "Get in touch with TechInfraEdge. We're always open to talk about your project, answer your questions, or discuss potential collaborations.",
}

const Contact = () => {
  return (
    <main>
      <ContactHero />
      <ContactForm />
      <ContactLocations />
      <ContactFaq />
    </main>
  )
}

export default Contact;