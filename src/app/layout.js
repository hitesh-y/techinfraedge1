 import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Techinfraedge",
  description: "Techinfraedge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* <!-- ========== Start Fonts Style ========== --> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600&family=Syne:wght@400;500;600&family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet" />

        {/* <!-- ========== Start Stylesheet ========== --> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css" />
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}  >
        <main className="main-page homepage">
          {/* <!-- Header Bar --> */}
          {/* <div className="header-bar">
            <div className="custom-container">
              <div className="header-bar-body d-flex align-items-center justify-content-between">
                <div className="left">
                  <select className="country-select" name="country" id="country">
                    <option value="en">EN</option>
                    <option value="uk">UK</option>
                    <option value="dz">DZ</option>
                  </select>
                </div>
                <div className="right">
                  <p>
                    Level up your business with <a href="about.html" data-word="Techinfraedge." id="dataWord">Techinfraedge.</a>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <Header />
          {children}
          <Footer/>
        </main>
        {/* <!-- jQuery Frameworks  ============================================= --> */}
        {/* <Script src="/assets/js/jquery-3.7.0.min.js"></Script>
        <Script src="/assets/js/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/js/gsap.min.js"></Script>
        <Script src="/assets/js/Draggable.min.js"></Script>
        <Script src="/assets/js/swiper-bundle.min.js"></Script>
        <Script src="/assets/js/client-marquee.js"></Script>
        <Script src="/assets/js/theme-custom.js"></Script>
        <Script src="/assets/js/form1.js"></Script>
        <Script src="/assets/js/subscribe-form.js"></Script> */}
      </body>
    </html>
  );
}
