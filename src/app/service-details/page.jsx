import Link from "next/link";
import { services } from "@/data/servicesData";

export default function ServiceDetailsPage() {
  // This is a fallback page that redirects to the services page
  // In a real implementation, you might want to handle this differently
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Please select a specific service from our offerings below.
        </p>
        <Link 
          href="/services" 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
        >
          View All Services
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link 
            key={service.id} 
            href={`/services/${service.id}`}
            className="group block p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                {service.icon && <service.icon className="w-6 h-6" />}
              </div>
              <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                {service.title}
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">{service.shortDescription}</p>
            <span className="text-primary font-medium inline-flex items-center">
              Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}