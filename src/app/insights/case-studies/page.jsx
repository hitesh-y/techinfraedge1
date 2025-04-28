import PageTemplate from "@/components/page-template";

export default function CaseStudiesPage() {
  return (
    <PageTemplate
      title="Case Studies"
      subtitle="Success Stories"
      description="Explore real-world examples of how our solutions have helped businesses overcome challenges and achieve their goals."
      breadcrumbs={[
        { label: "Insights", href: "/insights" },
        { label: "Case Studies", href: "/insights/case-studies" }
      ]}
    />
  );
}