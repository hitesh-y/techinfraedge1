
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation" 
import { CheckCircle } from "lucide-react"
import { getServerField } from "next/dist/server/lib/render-server"
 

export default function ServicePage({ params }) {
  const service = getServerField(params.id)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/services" className="text-sm text-muted-foreground hover:text-primary mb-8 block">
        ← Back to Services
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold">{service.title}</h1>
          </div>

          <p className="text-lg text-muted-foreground mb-8">{service.fullDescription}</p>

          <div className="grid gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="grid gap-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {service.expertise.map((item, index) => (
                  <div key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
              <ul className="grid gap-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button size="lg" className="w-full md:w-auto">
              Get Started
            </Button>
          </div>
        </div>

        <div className="relative aspect-square lg:aspect-auto">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  )
}

