import PageTemplate from "@/components/page-template";

export default function IndustriesPage() {
  return (
    <PageTemplate
      title="Industries"
      subtitle="Specialized Solutions for Every Sector"
      description="We deliver tailored IT solutions across various industries, helping businesses overcome unique challenges and achieve their goals."
      breadcrumbs={[
        { label: "Industries", href: "/industries" }
      ]}
    />
  );
}