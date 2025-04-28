import PageTemplate from "@/components/page-template";

export default function SaaSPage() {
  return (
    <PageTemplate
      title="SaaS Products"
      subtitle="Software as a Service Solutions"
      description="Our cloud-based SaaS products offer flexible, scalable solutions that can be accessed from anywhere, reducing IT overhead and improving collaboration."
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "SaaS Products", href: "/products/saas" }
      ]}
    />
  );
}