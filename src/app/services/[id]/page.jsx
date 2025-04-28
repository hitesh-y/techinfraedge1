
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation" 
import { CheckCircle, ArrowRight, Clock, Users, BarChart3, Award, Zap, MessageSquare } from "lucide-react"
import { getServiceById } from "@/data/servicesData"

export default function ServicePage({ params }) {
  const service = getServiceById(params.id)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

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
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          <Link href="/services" className="text-sm text-muted-foreground hover:text-primary mb-8 inline-flex items-center">
            <ArrowRight className="w-4 h-4 mr-1 rotate-180" /> Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white text-primary shadow-sm">
                  {Icon && <Icon className="w-10 h-10" />}
                </div>
                <h1 className="text-4xl font-bold">{service.title}</h1>
              </div>

              <p className="text-xl text-muted-foreground mb-8">{service.fullDescription}</p>

              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
                >
                  Get Started
                </Link>
                <Link 
                  href="#features" 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary bg-transparent text-primary hover:bg-primary/10 h-11 px-8"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our {service.title} service includes a comprehensive set of features designed to meet your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                <p className="text-muted-foreground">
                  {/* In a real implementation, you would have detailed descriptions for each feature */}
                  Our {feature} capability provides comprehensive solutions tailored to your specific business requirements.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expertise & Benefits Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in {service.title}, our team brings deep expertise and knowledge to every project.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {service.expertise.map((item, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg border border-gray-100 text-center hover:border-primary/30 hover:shadow-sm transition-all">
                    <span className="block text-primary font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Benefits</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our {service.title} service delivers tangible benefits that drive business growth and success.
              </p>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-100">
                    <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{benefit}</span>
                      {/* In a real implementation, you would have detailed descriptions for each benefit */}
                      <p className="text-sm text-muted-foreground mt-1">
                        This benefit helps your business achieve greater efficiency and competitive advantage.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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

      {/* Case Studies Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses achieve success with our {service.title} solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="aspect-video relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Link href="/case-studie" className="text-primary font-medium inline-flex items-center">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have benefited from our {service.title} service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-xl border border-gray-100">
                <div className="mb-4 text-primary">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <blockquote className="text-lg italic mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
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

