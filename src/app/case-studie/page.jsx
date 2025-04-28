export default function CaseStudiePage() {
  // Sample case studies - in a real implementation, these would come from a CMS or API
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      client: "RetailTech Inc.",
      category: "Web Development",
      description: "Complete redesign and development of an e-commerce platform, resulting in a 45% increase in conversion rates.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      client: "MediCare Group",
      category: "Software Development",
      description: "Development of a comprehensive healthcare management system that improved operational efficiency by 60%.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Financial Analytics Dashboard",
      client: "FinTech Solutions",
      category: "Data Visualization",
      description: "Creation of an interactive dashboard for financial data analysis that reduced reporting time by 75%.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      client: "Global Bank",
      category: "Mobile Development",
      description: "Development of a secure and user-friendly mobile banking application with a 92% user satisfaction rate.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Supply Chain Management System",
      client: "Logistics Pro",
      category: "Enterprise Solutions",
      description: "Implementation of an end-to-end supply chain management system that reduced costs by 30%.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Smart Home Automation",
      client: "HomeConnect",
      category: "IoT Solutions",
      description: "Development of an IoT-based smart home automation system with mobile app control.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our successful projects and see how we've helped businesses transform their digital presence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div key={study.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Case Study Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-primary font-medium mb-2">{study.category}</div>
              <h2 className="text-xl font-semibold mb-2">{study.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">Client: {study.client}</p>
              <p className="text-muted-foreground mb-4">{study.description}</p>
              <a href={`/case-studie/${study.id}`} className="text-primary font-medium inline-flex items-center">
                View Case Study
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