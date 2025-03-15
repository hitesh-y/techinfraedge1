"use client"

import { useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"

const Heromain= () => {
  const mainSliderRef = useRef(null)
  const thumbSliderRef = useRef(null)

  const sliderData = [
    {
      id: 1,
      title: "Unlock Access to Bespoke",
      boldTitle: "Apps And Product Innovation with Us!",
      description:
        "Step into a digital journey with Jsbglobalinfotech and unlock the gateway to bespoke applications and groundbreaking product innovations. Experience the future of technology at your fingertips!",
      image:
        "https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-265w.webp?id=7dd0d1daf9bf2a7054e6e44f769c5fa8",
      imageSrcSet:
        "https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-265w.webp?id=7dd0d1daf9bf2a7054e6e44f769c5fa8 265w, https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-860w.webp?id=3584123788ef2bb954234ab076cad966 860w, https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-1170w.webp?id=61a5a2f2419fe0f4935d668c0dd886ae 1170w, https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-1520w.webp?id=eab9cd1426ff285f37b9d49d4f11b86e 1520w, https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-1800w.webp?id=effa55c05e90f8c2b55c672c4482693e 1800w, https://www.imgglobalinfotech.com/public/tailwind/img/unlock-access-to-bespoke-apps-and-product-innovation-with-us-2048w.webp?id=2c4d2e7b89d1626d885b71eedfa17f18 2048w",
        gradientColors: {
          shadow: "shadow-yellow-950",
          from: "from-yellow-950",
          via: "via-yellow-900/80",
          to: "to-yellow-900/70",
          thumb: "before:from-yellow-950 before:via-yellow-950/70 before:to-yellow-950/0",
        },
        shadowColor: "shadow-sky-950",
      gradientFrom: "before:from-sky-950",
      gradientVia: "before:via-sky-900/80",
      gradientTo: "before:to-sky-900/70",
      thumbGradient: "before:from-sky-950 before:via-sky-950/70 before:to-sky-950/0",
    },
    {
      id: 2,
      title: "Elevate Your Vision with Robust",
      boldTitle: "And Scalable Mobile App Development!",
      description:
        "Jsbglobalinfotech's robust and scalable app development solutions redefine possibilities, ensuring your ideas soar to new heights. Uplifting innovations, one app at a time!",
      image:
        "https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-265w.webp?id=8d3b599fdcbb4806f4dd37faa5f821af",
      imageSrcSet:
        "https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-265w.webp?id=8d3b599fdcbb4806f4dd37faa5f821af 265w, https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-860w.webp?id=c4600804ad2061d3f469960b2984e214 860w, https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-1360w.webp?id=135012d7dd95e888d3222137edd4032f 1360w, https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-1720w.webp?id=ebf18f609bb397b1b169b3f4c09edb6d 1720w, https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-1890w.webp?id=490293b31092b5b7d326ad73876c55e1 1890w, https://www.imgglobalinfotech.com/public/tailwind/img/elevate-your-vision-with-robust-and-scalable-mobile-app-development1-2048w.webp?id=3fadd349edf9a2631f22b83ea0a3bc55 2048w",
        gradientColors: {
          shadow: "shadow-lime-950",
          from: "from-lime-950",
          via: "via-lime-900/80",
          to: "to-lime-900/70",
          thumb: "before:from-lime-950 before:via-lime-950/70 before:to-lime-950/0",
        },
        shadowColor: "shadow-lime-950",
      gradientFrom: "before:from-lime-950",
      gradientVia: "before:via-lime-900/80",
      gradientTo: "before:to-lime-900/70",
      thumbGradient: "before:from-lime-950 before:via-lime-950/70 before:to-lime-950/0",
    },
    {
      id: 3,
      title: "Level Up Your Business Game",
      boldTitle: "with Fantasy Sports App Development!",
      description:
        "From the thrill of cricket and football to the strategy of kabaddi and fantasy stock, IMG fantasy sports app development assistance can turn your vision into a virtual arena where success is the only goal.",
      image:
        "https://www.imgglobalinfotech.com/public/tailwind/img/level_up_your_business_game_with_fantasy_sports_app_development-256w.webp?id=933bfaed0c8167b1f23976422f8046f2",
      imageSrcSet:
        "https://www.imgglobalinfotech.com/public/tailwind/img/level_up_your_business_game_with_fantasy_sports_app_development-256w.webp?id=933bfaed0c8167b1f23976422f8046f2 256w, https://www.imgglobalinfotech.com/public/tailwind/img/level_up_your_business_game_with_fantasy_sports_app_development-860w.webp?id=b0007313725d4b848299f2778c53c960 860w, https://www.imgglobalinfotech.com/public/tailwind/img/level_up_your_business_game_with_fantasy_sports_app_development-1340w.webp?id=8ae3757077c6b1fd1946eb9d3ac02ae8 1340w, https://www.imgglobalinfotech.com/public/tailwind/img/level_up_your_business_game_with_fantasy_sports_app_development-1690w.webp?id=a3d1c0e61ace6829203ddc442f77d2ac 1690w",
        gradientColors: {
          shadow: "shadow-yellow-950",
          from: "from-yellow-950",
          via: "via-yellow-900/80",
          to: "to-yellow-900/70",
          thumb: "before:from-yellow-950 before:via-yellow-950/70 before:to-yellow-950/0",
        },
        shadowColor: "shadow-yellow-950",
      gradientFrom: "before:from-yellow-950",
      gradientVia: "before:via-yellow-900/80",
      gradientTo: "before:to-yellow-900/70",
      thumbGradient: "before:from-yellow-950 before:via-yellow-950/70 before:to-yellow-950/0",
    },
    {
      id: 4,
      title: "Enhance Your Brand Presence",
      boldTitle: "with Innovative Web Development Solutions!",
      description:
        "Step into the digital spotlight and elevate your brand with our cutting-edge web development solutions. We craft more than websites; we build captivating online experiences that leave a lasting impression.",
      image:
        "https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-265w.webp?id=8e8a9421ba71b5d4e1df989d194665b0",
      imageSrcSet:
        "https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-265w.webp?id=8e8a9421ba71b5d4e1df989d194665b0 265w, https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-860w.webp?id=6e32b9a3fcc1ac5010e2b3e39d761922 860w, https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-1170w.webp?id=42377cf20c3ffb95993c8645be161088 1170w, https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-1520w.webp?id=31aac1fa57ce1836071ae4a0ec797f37 1520w, https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-1800w.webp?id=ab24c26a642033aad7fe95255dc96044 1800w, https://www.imgglobalinfotech.com/public/tailwind/img/enhance-your-brand-presence-with-innovative-web-development-solutions-2048w.webp?id=2ea2e92b6582c212f921bbc57a9dee3d 2048w",
        gradientColors: {
          shadow: "shadow-purple-950",
          from: "from-purple-950",
          via: "via-purple-900/80",
          to: "to-purple-900/70",
          thumb: "before:from-purple-950 before:via-purple-950/70 before:to-purple-950/0",
        },
        shadowColor: "shadow-purple-950",
      gradientFrom: "before:from-purple-950",
      gradientVia: "before:via-purple-900/80",
      gradientTo: "before:to-purple-900/70",
      thumbGradient: "before:from-purple-950 before:via-purple-950/70 before:to-purple-950/0",
    },
    {
      id: 5,
      title: "Hire Dedicated Professionals And",
      boldTitle: "Unleash Business Potential Beyond Borders!",
      description:
        "Welcome to a realm where dedicated professionals converge with boundless expertise. Harness the power of our seasoned team and unlock the full potential of your enterprise.",
      image:
        "https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-265w.webp?id=cfedce29d08de01e97ba23626e55ae0e",
      imageSrcSet:
        "https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-265w.webp?id=cfedce29d08de01e97ba23626e55ae0e 265w, https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-860w.webp?id=5921c43421562e005ad9537cc0c9fa09 860w, https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-1170w.webp?id=1483f9104d6f8b76f9a1f629e5a6a957 1170w, https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-1520w.webp?id=21c023f8ceab98bdd3fb47aa95ad1820 1520w, https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-1800w.webp?id=b05819aae2326a85586b88db1a1ab7b3 1800w, https://www.imgglobalinfotech.com/public/tailwind/img/Hire_dedicated_professionals_and_unleash_business_potential_beyond_borders-2048w.webp?id=615a7328e30a6f929ce7ec804c752846 2048w",
        gradientColors: {
          shadow: "shadow-rose-950",
          from: "from-rose-950",
          via: "via-rose-900/80",
          to: "to-rose-900/70",
          thumb: "before:from-rose-950 before:via-rose-950/70 before:to-rose-950/0",
        },
        shadowColor: "shadow-rose-950",
      gradientFrom: "before:from-rose-950",
      gradientVia: "before:via-rose-900/80",
      gradientTo: "before:to-rose-900/70",
      thumbGradient: "before:from-rose-950 before:via-rose-950/70 before:to-rose-950/0",
    },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    beforeChange: (current, next) => {
      if (thumbSliderRef.current) {
        thumbSliderRef.current.slickGoTo(next)
      }
    },
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: "20px",
          arrows: false,
        },
      },
    ],
  }

  const thumbnailSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    swipe: false,
  }

  return (
    <div className="relative w-full pt-5 overflow-hidden bg-slate-50"> 

      <div className="relative md:min-h-[500px] h-[600px] md:h-[calc(100dvh-80px)] lg:h-[calc(100dvh-128px)] w-full z-10 max-h-[750px]">
        <Slider
          ref={mainSliderRef}
          {...settings}
          className="h-full [&_.slick-list]:overflow-visible [&_.slick-slide]:transition-all [&_.slick-slide]:duration-300"
        >
          {sliderData.map((slide) => (
            <div key={slide.id} className="outline-none px-2.5 md:px-5 h-[550px]">
              <div className={`group relative h-full rounded-2xl overflow-hidden ${slide.gradientColors.shadow}`}>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${slide.gradientColors.from} ${slide.gradientColors.via} ${slide.gradientColors.to} opacity-80 mix-blend-multiply`}
                />

                <Image
                  src={slide.image || "/placeholder.svg"}
                  alt={slide.title}
                  width={1377}
                  height={460}
                  className="absolute inset-0 w-full h-full object-cover object-right rounded-2xl -z-[1]"
                  priority={true}
                />

                <div className="relative p-6 md:p-10 h-full flex flex-col justify-center z-10">
                  <div className="text-white">
                    <span className="block font-light text-2xl md:text-4xl lg:text-5xl leading-tight">
                      {slide.title}
                    </span>
                    <span className="block font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mt-2">
                      {slide.boldTitle}
                    </span>
                  </div>

                  <p className="text-white/80 text-sm md:text-base mt-5 max-w-2xl">{slide.description}</p>
                    <br/>
                  <div className="mt-8 md:mt-10 ">
                    <label
                      htmlFor="leadPopup"
                      className="inline-flex items-center gap-2 px-4 py-2 md:py-3 text-sm font-semibold text-white bg-slate-900 rounded-full ring-2 ring-gray-200 hover:bg-slate-700 transition-colors cursor-pointer"
                    >
                      <span><Link href='/contact'> Consult Our Experts </Link></span>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z" />
                        <circle cx="9" cy="13" r="1" />
                        <circle cx="15" cy="13" r={1} />
                        <path d="M18 11.03A6.04 6.04 0 0012.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 004.86-5.89c1.31 2.63 4 4.44 7.12 4.47z" />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Custom Navigation Arrows */}
        <button
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden lg:flex"
          onClick={() => mainSliderRef.current?.slickPrev()}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors hidden lg:flex"
          onClick={() => mainSliderRef.current?.slickNext()}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Background Thumbnails */}
      <div className="absolute inset-0 pointer-events-none">
        <Slider ref={thumbSliderRef} {...thumbnailSettings}>
          {sliderData.map((slide) => (
            <div key={slide.id} className="relative h-full">
              <div className={`absolute inset-0 bg-gradient-to-b ${slide.gradientColors.thumb}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Heromain;

