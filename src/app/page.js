import About from "@/components/home/about";
import Casestudio from "@/components/home/casestudio";
import Client from "@/components/home/client"; 
import HeroTCSExact from "@/components/home/hero-tcs-exact";
import Howwedo from "@/components/home/howwedo";
import Projects from "@/components/home/Projects";
import ServiceAnimated from "@/components/home/service-animated"; 
import TestimonialsAnimated from "@/components/home/testimonials-animated";

export default function Home() {
  return (
  <>
  <HeroTCSExact/>
  <Client/>
  <Howwedo/>
  <ServiceAnimated/>
  <Casestudio/>
  <About/>
  <TestimonialsAnimated/>
  <Projects/>
  </>
  );
}
