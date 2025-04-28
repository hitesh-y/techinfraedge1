import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PageTemplate({ title, subtitle, description, breadcrumbs = [] }) {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <div className="mb-8">
              <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li className="inline-flex items-center">
                    <Link href="/" className="text-sm text-gray-600 hover:text-primary">
                      Home
                    </Link>
                  </li>
                  {breadcrumbs.map((crumb, index) => (
                    <li key={index}>
                      <div className="flex items-center">
                        <span className="mx-2 text-gray-400">/</span>
                        {index === breadcrumbs.length - 1 ? (
                          <span className="text-sm text-primary">{crumb.label}</span>
                        ) : (
                          <Link href={crumb.href} className="text-sm text-gray-600 hover:text-primary">
                            {crumb.label}
                          </Link>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          )}

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            {subtitle && <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">{subtitle}</h2>}
            {description && <p className="text-lg text-muted-foreground">{description}</p>}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="prose max-w-none">
            <p>This page is under construction. Please check back soon for more information.</p>
            <p>In the meantime, you can explore our other sections or contact us for any inquiries.</p>
          </div>
          
          <div className="mt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}