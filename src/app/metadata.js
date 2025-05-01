// Base URL for canonical links
const baseUrl = 'https://jsbglobalinfotech.com/';

// Company information
const companyInfo = {
  name: 'jsbglobalinfotech',
  tagline: 'Innovative IT Solutions',
  location: 'India & UAE',
  foundingYear: '2018',
};

// Default SEO metadata
export const defaultMetadata = {
  // Basic metadata
  title: `${companyInfo.name} - ${companyInfo.tagline}`,
  description: 'jsbglobalinfotech provides cutting-edge IT solutions, AI automation, and custom software development to transform your business with innovative technology.',
  keywords: 'IT solutions, AI automation, software development, digital transformation, tech infrastructure, web development, mobile app development, cloud services, IT consulting, enterprise solutions',
  
  // Authorship and ownership
  authors: [{ name: `${companyInfo.name} Team` }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  
  // Canonical URL
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'ar-AE': '/ar-AE',
    },
  },
  
  // Open Graph metadata
  openGraph: {
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: 'jsbglobalinfotech provides cutting-edge IT solutions, AI automation, and custom software development to transform your business with innovative technology.',
    siteName: companyInfo.name,
    images: [
      {
        url: '/assets/imgs/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - ${companyInfo.tagline}`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  
  // Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: `${companyInfo.name} - ${companyInfo.tagline}`,
    description: 'jsbglobalinfotech provides cutting-edge IT solutions, AI automation, and custom software development to transform your business with innovative technology.',
    images: ['/assets/imgs/twitter-image.jpg'],
    creator: '@jsbglobalinfotech',
    site: '@jsbglobalinfotech',
  },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Site verification
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    bing: 'bing-verification-code',
  },
  
  // Additional metadata
  category: 'technology',
  applicationName: companyInfo.name,
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Other metadata
  other: {
    'msapplication-TileColor': '#2b5797',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
  
  // Structured data helpers
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: companyInfo.name,
      url: baseUrl,
      logo: `${baseUrl}/assets/imgs/Logo.jpeg`,
      sameAs: [
        'https://www.facebook.com/jsbglobalinfotech',
        'https://www.twitter.com/jsbglobalinfotech',
        'https://www.linkedin.com/company/jsbglobalinfotech',
        'https://www.instagram.com/jsbglobalinfotech',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-92661-36004',
        contactType: 'customer service',
        availableLanguage: ['English', 'Hindi', 'Arabic'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'PLOT NO.I-151 IN KIRT SAGAR-I, Mansarovar',
        addressLocality: 'JAIPUR',
        postalCode: '302020',
        addressCountry: 'IN',
      },
      foundingDate: companyInfo.foundingYear,
    },
  },
};