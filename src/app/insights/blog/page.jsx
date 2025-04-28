import PageTemplate from "@/components/page-template";

export default function BlogPage() {
  return (
    <PageTemplate
      title="Blog"
      subtitle="Insights & Updates"
      description="Stay informed with the latest articles, news, and insights from our technology experts."
      breadcrumbs={[
        { label: "Insights", href: "/insights" },
        { label: "Blog", href: "/insights/blog" }
      ]}
    />
  );
}