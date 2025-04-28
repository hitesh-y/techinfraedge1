import PageTemplate from "@/components/page-template";

export default function ECommercePage() {
  return (
    <PageTemplate
      title="E-Commerce Solutions"
      subtitle="Digital Retail Excellence"
      description="Transform your business with our comprehensive e-commerce solutions designed to enhance customer experience and drive sales."
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "E-Commerce", href: "/services/e-commerce" }
      ]}
    />
  );
}