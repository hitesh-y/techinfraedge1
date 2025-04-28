import { redirect } from "next/navigation";

export default function ServicePage() {
  // Redirect to the services page (plural)
  redirect("/services");
}