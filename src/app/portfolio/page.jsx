export default function PortfolioPage() {
  // Sample portfolio projects - in a real implementation, these would come from a CMS or API
  const portfolioItems = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully responsive e-commerce platform with integrated payment gateways and inventory management.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Software Development",
      description: "A comprehensive healthcare management system for hospitals and clinics.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for financial data analysis and reporting.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure and user-friendly mobile banking application with biometric authentication.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Supply Chain Management System",
      category: "Enterprise Solutions",
      description: "End-to-end supply chain management system with real-time tracking and analytics.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Smart Home Automation",
      category: "IoT Solutions",
      description: "IoT-based smart home automation system with mobile app control.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our successful projects and see how we've helped businesses transform their digital presence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div key={item.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Project Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-primary font-medium mb-2">{item.category}</div>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-muted-foreground mb-4">{item.description}</p>
              <a href="#" className="text-primary font-medium inline-flex items-center">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}