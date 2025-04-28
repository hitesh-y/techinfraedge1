import Link from "next/link";

export default function CompanyPage() {
  const companyLinks = [
    { name: "About Us", url: "/about", description: "Learn about our mission, vision, and values" },
    { name: "Partners", url: "/partners", description: "Discover our strategic partnerships and collaborations" },
    { name: "Careers", url: "/career", description: "Join our team and grow your career with us" },
    { name: "Blog", url: "/blog", description: "Read our latest news, insights, and industry updates" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Company</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Learn more about our company, our values, and how we help businesses succeed in the digital world.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {companyLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.url}
            className="group block p-6 bg-card rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h2 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {link.name}
            </h2>
            <p className="text-muted-foreground mb-4">{link.description}</p>
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