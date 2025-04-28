import Link from "next/link";
import { services } from "@/data/servicesData";
import { ArrowRight, CheckCircle, Zap, Users, BarChart3, Globe } from "lucide-react";

export default function ServicesPage() {
  // Featured service categories
  const categories = [
    { name: "Enterprise Solutions", icon: <BarChart3 className="w-6 h-6" />, description: "Comprehensive solutions for large organizations" },
    { name: "Small Business", icon: <Users className="w-6 h-6" />, description: "Tailored services for growing businesses" },
    { name: "Startups", icon: <Zap className="w-6 h-6" />, description: "Innovative solutions for new ventures" },
    { name: "Global Reach", icon: <Globe className="w-6 h-6" />, description: "Services available worldwide" },
  ];

  // Key benefits
  const benefits = [
    "Customized solutions tailored to your specific needs",
    "Expert team with years of industry experience",
    "Cutting-edge technologies and best practices",
    "Ongoing support and maintenance",
    "Scalable solutions that grow with your business",
    "Competitive pricing and flexible engagement models"
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Innovative IT Services for the <span className="text-primary">Digital Age</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We provide a comprehensive range of IT services to help your business thrive in today's competitive landscape.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium"
              >
                Get Started
              </Link>
              <Link 
                href="#services" 
                className="px-8 py-3 bg-white text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors font-medium"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Services for Every Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a startup, small business, or enterprise, we have the right solutions for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all text-center">
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary rounded-full mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide a wide range of IT services to help your business grow and succeed in the digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="group block p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    {service.icon && <service.icon className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
                <ul className="mb-4 space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <span className="text-primary font-medium inline-flex items-center">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're committed to delivering high-quality IT solutions that drive business growth and innovation. Our team of experts works closely with you to understand your unique needs and challenges.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link 
                  href="/contact" 
                  className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium inline-flex items-center"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-xl p-8 relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white text-lg font-bold py-2 px-4 rounded-md">
                Our Approach
              </div>
              <h3 className="text-2xl font-semibold mb-6">How We Work With You</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Analysis</h4>
                    <p className="text-muted-foreground">We start by understanding your business needs and challenges</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Solution Design</h4>
                    <p className="text-muted-foreground">Our experts design a tailored solution for your specific requirements</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Implementation</h4>
                    <p className="text-muted-foreground">We implement the solution with minimal disruption to your business</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Support</h4>
                    <p className="text-muted-foreground">We provide continuous support and optimization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}