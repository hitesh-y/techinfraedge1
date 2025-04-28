import PageTemplate from "@/components/page-template";

export default function InsightsPage() {
  return (
    <PageTemplate
      title="Insights"
      subtitle="Knowledge & Expertise"
      description="Stay informed with the latest trends, research, and insights from our experts in the technology industry."
      breadcrumbs={[
        { label: "Insights", href: "/insights" }
      ]}
    />
  );
}