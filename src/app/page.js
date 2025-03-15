import About from "@/components/home/about";
import Casestudio from "@/components/home/casestudio";
import Client from "@/components/home/client";
import Hero from "@/components/home/hero";
import Heromain from "@/components/home/heromain";
import Howwedo from "@/components/home/howwedo";
import Projects from "@/components/home/Projects";
import Service from "@/components/home/service"; 
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
  <>
  <Heromain/>
  <Hero/>
  <Client/>
  <Howwedo/>
  <Service/>
  <Casestudio/>
  <About/>
  <Testimonials/>
  <Projects/>
  </>
  );
}
