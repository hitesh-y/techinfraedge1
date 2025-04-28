import PageTemplate from "@/components/page-template";

export default function BankingFinancePage() {
  return (
    <PageTemplate
      title="Banking & Finance"
      subtitle="Technology Solutions for Financial Services"
      description="Our specialized IT solutions for the banking and finance sector help institutions enhance security, improve customer experience, and streamline operations."
      breadcrumbs={[
        { label: "Industries", href: "/industries" },
        { label: "Banking & Finance", href: "/industries/banking-finance" }
      ]}
    />
  );
}