import PageTemplate from "@/components/page-template";

export default function HealthcarePage() {
  return (
    <PageTemplate
      title="Healthcare"
      subtitle="Digital Solutions for Healthcare Providers"
      description="Our healthcare IT solutions help medical institutions improve patient care, enhance operational efficiency, and ensure regulatory compliance."
      breadcrumbs={[
        { label: "Industries", href: "/industries" },
        { label: "Healthcare", href: "/industries/healthcare" }
      ]}
    />
  );
}