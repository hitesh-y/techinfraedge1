import Client from "@/components/home/client";
import AboutHero from "@/components/about/about-hero";
import AboutMission from "@/components/about/about-mission";
import AboutTeam from "@/components/about/about-team";
import AboutApproach from "@/components/about/about-approach";
import AboutCta from "@/components/about/about-cta";

export const metadata = {
  title: 'About Jsbglobalinfotech - Our Company, Mission & Values',
  description: 'Learn about Jsbglobalinfotech, our mission, values, and how we provide innovative IT solutions to businesses worldwide. Discover our team of experts and our approach to digital transformation.',
  keywords: 'about Jsbglobalinfotech, IT company, tech solutions, company history, IT experts, digital transformation company, IT mission and values',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Jsbglobalinfotech - Our Company, Mission & Values',
    description: 'Learn about Jsbglobalinfotech, our mission, values, and how we provide innovative IT solutions to businesses worldwide. Discover our team of experts and our approach to digital transformation.',
    url: '/about',
    type: 'website',
  },
  twitter: {
    title: 'About Jsbglobalinfotech - Our Company, Mission & Values',
    description: 'Learn about Jsbglobalinfotech, our mission, values, and how we provide innovative IT solutions to businesses worldwide. Discover our team of experts and our approach to digital transformation.',
  },
  structuredData: {
    aboutPage: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Jsbglobalinfotech',
      description: 'Learn about Jsbglobalinfotech, our mission, values, and how we provide innovative IT solutions to businesses worldwide.',
      url: 'https://jsbglobalinfotech.com/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'Jsbglobalinfotech',
        foundingDate: '2018',
        description: 'Jsbglobalinfotech provides cutting-edge IT solutions, AI automation, and custom software development to transform businesses with innovative technology.',
        numberOfEmployees: {
          '@type': 'QuantitativeValue',
          value: '50+'
        },
        award: 'Top IT Solutions Provider 2023'
      }
    }
  }
}

const About = () => {
  return (
    <main>
      <AboutHero />
      <Client />
      <AboutMission />
      {/* <AboutTeam /> */}
      <AboutApproach />
      <AboutCta />
    </main>
  )
}

export default About;