import About from "@/components/home/about";
import Casestudio from "@/components/home/casestudio";
import Client from "@/components/home/client";
import Hero from "@/components/home/hero";
import Howwedo from "@/components/home/howwedo";
import Service from "@/components/home/service"; 

export default function Home() {
  return (
  <>
  <Hero/>
  <Client/>
  <Howwedo/>
  <Service/>
  <Casestudio/>
  <About/>
  </>
  );
}
