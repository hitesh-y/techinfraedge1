import PageTemplate from "@/components/page-template";

export default function EnterpriseManagementPage() {
  return (
    <PageTemplate
      title="Enterprise Management Solutions"
      subtitle="Comprehensive Business Management"
      description="Our enterprise management solutions provide integrated tools for managing all aspects of your business operations efficiently."
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: "Enterprise Management", href: "/products/enterprise-management" }
      ]}
    />
  );
}