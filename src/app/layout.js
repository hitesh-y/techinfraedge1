import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animations.css"; 
import { defaultMetadata } from "./metadata";
import SessionProvider from "@/components/auth/session-provider";
import LayoutWrapper from "@/components/layout-wrapper";

// Optimize font loading with display: swap and preload
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Only preload primary font
  fallback: ['monospace'],
  adjustFontFallback: true,
});

// Add DM Sans font with Next.js font optimization
import { DM_Sans } from "next/font/google";
const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ['400', '500', '600', '700'],
  variable: "--font-dm-sans",
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

export const metadata = {
  ...defaultMetadata,
  // Add viewport settings to improve mobile experience
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable}`}>
      <head>
        {/* Preconnect to external domains - improved for better FCP */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maxst.icons8.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://maxst.icons8.com" />
        
        {/* Basic meta tags */} 
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#4F46E5" />
        
        {/* Load icon fonts asynchronously with resource hints */}
        <link 
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css"
        />
        
        <link 
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        
        {/* Preload critical assets for better LCP */}
        <link rel="preload" href="/assets/imgs/ai1.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="/assets/imgs/ai2.jpg" as="image" />
        <link rel="preload" href="/assets/imgs/ai3.jpg" as="image" />
        
        {/* Add preload for critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />
        
        {/* Add resource hints for better performance */}
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
      </head>
      <body className="antialiased bg-white text-gray-800">
        {/* Simplified background for better performance */}
        <div className="fixed inset-0 z-[-1] bg-white"></div>
        
        <SessionProvider>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </SessionProvider>
        
        {/* Add minimal inline script for performance monitoring */}
        <script dangerouslySetInnerHTML={{ __html: `
          // Monitor CLS
          let cls = 0;
          new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                cls += entry.value;
              }
            }
          }).observe({type: 'layout-shift', buffered: true});
          
          // Report to analytics or console
          window.addEventListener('visibilitychange', () => {
            if (document.visibilityState === 'hidden') {
              console.log('CLS:', cls);
              // Send to analytics if needed
            }
          });
        `}} />
      </body>
    </html>
  );
}
