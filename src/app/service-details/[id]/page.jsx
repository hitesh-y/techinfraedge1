import { redirect } from "next/navigation";
import { getServiceById } from "@/data/servicesData";

export default function ServiceDetailsRedirect({ params }) {
  const service = getServiceById(params.id);
  
  // Redirect to the new service page structure
  redirect(`/services/${params.id}`);
}