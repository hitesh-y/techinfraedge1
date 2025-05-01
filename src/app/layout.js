import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header-simple";
import Footer from "@/components/footer-modern";
import { siteData } from "@/data/siteData";
import PopupFormModern from "@/components/popup-form-modern";
import { defaultMetadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href={siteData.logo || "/placeholder.svg"} />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#4F46E5" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600&family=Syne:wght@400;500;600&family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-800`}>
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        </div>
        <main className="main-page homepage relative z-10">
          <Header />
          {children}
          <Footer />
          <div>
            <PopupFormModern />
          </div>
        </main>
      </body>
    </html>
  );
}
