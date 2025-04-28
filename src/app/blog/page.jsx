export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Stay updated with the latest news, insights, and trends in the tech industry.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Sample blog posts - in a real implementation, these would come from a CMS or API */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all">
            <div className="aspect-video bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Blog Image Placeholder
              </div>
            </div>
            <div className="p-6">
              <div className="text-sm text-muted-foreground mb-2">
                {new Date().toLocaleDateString()} • 5 min read
              </div>
              <h2 className="text-xl font-semibold mb-2">
                How Technology is Transforming Business Operations
              </h2>
              <p className="text-muted-foreground mb-4">
                Discover how modern technology solutions are helping businesses streamline operations and improve efficiency.
              </p>
              <a href="#" className="text-primary font-medium inline-flex items-center">
                Read more
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