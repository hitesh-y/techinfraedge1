import Link from "next/link";

export default function CaseStudieSinglePage() {
  // In a real implementation, this would fetch data for a specific case study
  const caseStudy = {
    id: 1,
    title: "E-Commerce Platform Redesign",
    client: "RetailTech Inc.",
    category: "Web Development",
    description: "Complete redesign and development of an e-commerce platform, resulting in a 45% increase in conversion rates.",
    challenge: "RetailTech Inc. was struggling with an outdated e-commerce platform that had poor user experience, slow loading times, and limited mobile functionality. Their conversion rates were declining, and they were losing market share to competitors with more modern online stores.",
    solution: "We conducted a comprehensive analysis of their existing platform and developed a custom e-commerce solution using modern technologies. The new platform featured a responsive design, optimized checkout process, improved product search and filtering, and integration with their inventory management system.",
    results: [
      "45% increase in conversion rates",
      "60% improvement in page load speed",
      "35% increase in mobile sales",
      "28% reduction in cart abandonment",
      "Seamless integration with existing inventory systems"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe API"],
    testimonial: {
      quote: "The new e-commerce platform has transformed our online business. The user experience is exceptional, and we've seen a significant increase in sales since the launch.",
      author: "Sarah Johnson",
      position: "CTO, RetailTech Inc."
    },
    image: "/placeholder.svg?height=600&width=800",
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <Link href="/case-studie" className="text-sm text-muted-foreground hover:text-primary mb-8 block">
        ← Back to Case Studies
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <div className="mb-6">
            <div className="text-sm text-primary font-medium mb-2">{caseStudy.category}</div>
            <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-lg text-muted-foreground">Client: {caseStudy.client}</p>
          </div>

          <p className="text-lg text-muted-foreground mb-8">{caseStudy.description}</p>
        </div>

        <div className="bg-muted rounded-xl flex items-center justify-center min-h-[300px]">
          <div className="text-muted-foreground">Case Study Image Placeholder</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
          <p className="text-muted-foreground">{caseStudy.challenge}</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
          <p className="text-muted-foreground">{caseStudy.solution}</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Results</h2>
        <ul className="grid md:grid-cols-2 gap-3">
          {caseStudy.results.map((result, index) => (
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
              <span>{result}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, index) => (
            <div key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card p-8 rounded-xl">
        <blockquote className="text-xl italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
            <span className="text-muted-foreground">Photo</span>
          </div>
          <div>
            <p className="font-semibold">{caseStudy.testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
          </div>
        </div>
      </div>
    </div>
  );
}