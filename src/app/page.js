import AboutLight from "@/components/home/about-light";
import Casestudio from "@/components/home/casestudio-new";
import ClientModern from "@/components/home/client-modern"; 
import HeroReactBits from "@/components/home/hero-reactbits";
import HowwedoModern from "@/components/home/howwedo-modern";
import ProjectsModern from "@/components/home/projects-modern";
import ServiceAnimatedLight from "@/components/home/service-animated-light"; 
import TestimonialsLight from "@/components/home/testimonials-light";

export const metadata = {
  title: 'Jsbglobalinfotech - Innovative IT Solutions for Digital Transformation',
  description: 'Jsbglobalinfotech delivers cutting-edge IT solutions including AI automation, web & mobile development, cloud services, and digital transformation strategies for businesses worldwide.',
  keywords: 'IT solutions, digital transformation, AI automation, web development, mobile app development, cloud services, software development, IT consulting, tech infrastructure',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Jsbglobalinfotech - Innovative IT Solutions for Digital Transformation',
    description: 'Jsbglobalinfotech delivers cutting-edge IT solutions including AI automation, web & mobile development, cloud services, and digital transformation strategies for businesses worldwide.',
    url: '/',
    images: [
      {
        url: '/assets/imgs/home-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'jsbglobalinfotech - Innovative IT Solutions',
      },
    ],
  },
  twitter: {
    title: 'jsbglobalinfotech - Innovative IT Solutions for Digital Transformation',
    description: 'jsbglobalinfotech delivers cutting-edge IT solutions including AI automation, web & mobile development, cloud services, and digital transformation strategies for businesses worldwide.',
  },
  structuredData: {
    webpage: {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'jsbglobalinfotech - Innovative IT Solutions for Digital Transformation',
      description: 'jsbglobalinfotech delivers cutting-edge IT solutions including AI automation, web & mobile development, cloud services, and digital transformation strategies for businesses worldwide.',
      url: 'https://jsbglobalinfotech.com/',
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2', '.speakable'],
      },
    },
  },
}

export default function Home() {
  return (
    <>
      {/* Critical for LCP - load immediately */}
      <HeroReactBits />
      
      {/* Non-critical sections */}
      <ClientModern />
      <HowwedoModern />
      <ServiceAnimatedLight />
      <Casestudio />
      <AboutLight />
      <TestimonialsLight />
      <ProjectsModern />
    </>
  );
}
