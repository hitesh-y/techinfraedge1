import PageTemplate from "@/components/page-template";

export default function LeadershipPage() {
  return (
    <PageTemplate
      title="Leadership"
      subtitle="Meet Our Team"
      description="Get to know the experienced professionals who lead our company and drive our vision forward."
      breadcrumbs={[
        { label: "About Us", href: "/about" },
        { label: "Leadership", href: "/about/leadership" }
      ]}
    />
  );
}