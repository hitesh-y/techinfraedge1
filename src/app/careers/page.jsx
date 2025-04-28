import PageTemplate from "@/components/page-template";

export default function CareersPage() {
  return (
    <PageTemplate
      title="Careers"
      subtitle="Join Our Team"
      description="Explore exciting career opportunities at our company and be part of a team that's shaping the future of technology."
      breadcrumbs={[
        { label: "Careers", href: "/careers" }
      ]}
    />
  );
}