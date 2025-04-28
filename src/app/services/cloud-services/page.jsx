import PageTemplate from "@/components/page-template";

export default function CloudServicesPage() {
  return (
    <PageTemplate
      title="Cloud Services"
      subtitle="Scalable & Secure Cloud Solutions"
      description="Our cloud services help businesses leverage the power of cloud computing for improved scalability, flexibility, and cost-efficiency."
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Cloud Services", href: "/services/cloud-services" }
      ]}
    />
  );
}