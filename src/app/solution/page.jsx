export default function SolutionPage() {
  // Sample solutions - in a real implementation, these would come from a CMS or API
  const solutions = [
    {
      id: 1,
      title: "Enterprise Resource Planning",
      description: "Streamline your business operations with our comprehensive ERP solutions that integrate all aspects of your business.",
      industries: ["Manufacturing", "Retail", "Healthcare"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Customer Relationship Management",
      description: "Enhance customer relationships and drive sales growth with our tailored CRM solutions.",
      industries: ["Retail", "Financial Services", "Hospitality"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Business Intelligence",
      description: "Transform your data into actionable insights with our powerful BI tools and analytics solutions.",
      industries: ["Finance", "Healthcare", "Retail"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Supply Chain Management",
      description: "Optimize your supply chain operations with our end-to-end SCM solutions for improved efficiency and reduced costs.",
      industries: ["Manufacturing", "Retail", "Logistics"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Digital Transformation",
      description: "Navigate your digital transformation journey with our strategic consulting and implementation services.",
      industries: ["All Industries"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure and applications to the cloud for improved scalability and cost efficiency.",
      industries: ["All Industries"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Solutions</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Comprehensive solutions tailored to address your specific business challenges and drive growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <div key={solution.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Solution Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{solution.title}</h2>
              <p className="text-muted-foreground mb-4">{solution.description}</p>
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Industries:</h3>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((industry, index) => (
                    <div key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
              <a href="#" className="text-primary font-medium inline-flex items-center">
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
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}