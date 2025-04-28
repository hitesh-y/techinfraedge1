import PageTemplate from "@/components/page-template";

export default function DigitalTransformationPage() {
  return (
    <PageTemplate
      title="Digital Transformation"
      subtitle="Reimagine Your Business"
      description="Our digital transformation services help businesses evolve by integrating digital technology into all areas of their operations."
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Digital Transformation", href: "/services/digital-transformation" }
      ]}
    />
  );
}