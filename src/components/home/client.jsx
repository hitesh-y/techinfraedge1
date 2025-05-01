"use client" 
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

const Client = () => {
 

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const logos = [
    "/assets/imgs/partners/client-logo1-1.svg",
    "/assets/imgs/partners/client-logo2-1.svg",
    "/assets/imgs/partners/client-logo3-1.svg",
    "/assets/imgs/partners/client-logo4-1.svg",
    "/assets/imgs/partners/client-logo5-1.svg",
    "/assets/imgs/partners/client-logo7.svg",
    "/assets/imgs/partners/client-logo8.svg",
    "/assets/imgs/partners/client-logo9.svg",
    "/assets/imgs/partners/client-logo10.svg",
    "/assets/imgs/partners/client-logo11.svg",
    "/assets/imgs/partners/client-logo12.svg",
    "/assets/imgs/partners/client-logo13.svg",
    "/assets/imgs/partners/client-logo14.svg",
    "/assets/imgs/partners/client-logo15.svg",
    "/assets/imgs/partners/client-logo16.svg",
  ]

  return (
    <section className="py-12 bg-gray-900 border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h5 className="text-indigo-400 font-medium mb-2 uppercase">TRUSTED BY INDUSTRY LEADERS</h5>
          <h2 className="text-2xl font-bold text-white">Our Clients & Partners</h2>
        </div>
        
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-6 flex items-center justify-center h-24">
                <Image
                  src={logo || "/placeholder.svg"}
                  alt={`Client ${index + 1}`}
                  width={120}
                  height={60}
                  className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Client

