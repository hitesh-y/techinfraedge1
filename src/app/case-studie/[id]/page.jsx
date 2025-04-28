import Link from "next/link";
import { redirect } from "next/navigation";

export default function CaseStudieDetailPage({ params }) {
  // In a real implementation, this would fetch data for a specific case study based on the ID
  // For now, we'll redirect to the case-studie-single page
  redirect("/case-studie-single");
}