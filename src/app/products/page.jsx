import PageTemplate from "@/components/page-template";

export default function ProductsPage() {
  return (
    <PageTemplate
      title="Products"
      subtitle="Innovative Software Solutions"
      description="Explore our range of software products designed to streamline operations, enhance productivity, and drive business growth."
      breadcrumbs={[
        { label: "Products", href: "/products" }
      ]}
    />
  );
}