import PageTemplate from "@/components/page-template";

export default function HistoryPage() {
  return (
    <PageTemplate
      title="Our History"
      subtitle="The Journey So Far"
      description="Learn about our company's journey, milestones, and evolution over the years."
      breadcrumbs={[
        { label: "About Us", href: "/about" },
        { label: "Our History", href: "/about/history" }
      ]}
    />
  );
}