export default function NewReleasePage() {
  // Sample releases - in a real implementation, these would come from a CMS or API
  const releases = [
    {
      id: 1,
      title: "Cloud Services Platform 2.0",
      date: "June 15, 2023",
      description: "Our latest cloud services platform with enhanced security features, improved performance, and new integration capabilities.",
      features: [
        "Advanced security protocols",
        "Faster data processing",
        "Expanded API integrations",
        "Improved user interface",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Mobile App Framework Update",
      date: "May 22, 2023",
      description: "A major update to our mobile app development framework with new components and performance optimizations.",
      features: [
        "New UI components",
        "Reduced app size",
        "Better battery efficiency",
        "Enhanced offline capabilities",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "E-Commerce Solution 3.5",
      date: "April 10, 2023",
      description: "The latest version of our e-commerce platform with advanced analytics and improved checkout process.",
      features: [
        "Real-time analytics dashboard",
        "Streamlined checkout",
        "Enhanced product recommendations",
        "Improved mobile experience",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "CRM System Enhancement",
      date: "March 5, 2023",
      description: "Significant improvements to our CRM system with AI-powered insights and automation features.",
      features: [
        "AI-driven customer insights",
        "Automated follow-up sequences",
        "Enhanced reporting capabilities",
        "Improved data visualization",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">New Releases</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with our latest product releases and feature updates.
        </p>
      </div>

      <div className="space-y-12">
        {releases.map((release) => (
          <div key={release.id} className="bg-card rounded-xl overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-muted aspect-video md:aspect-auto relative flex items-center justify-center">
                <div className="text-muted-foreground">Release Image Placeholder</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-muted-foreground mb-2">{release.date}</div>
                <h2 className="text-2xl font-semibold mb-3">{release.title}</h2>
                <p className="text-muted-foreground mb-4">{release.description}</p>
                
                <h3 className="text-lg font-medium mb-2">Key Features:</h3>
                <ul className="grid gap-2 mb-4">
                  {release.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
          </div>
        ))}
      </div>
    </div>
  );
}