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
    "/assets/imgs/client-logo1.svg",
    "/assets/imgs/client-logo2.svg",
    "/assets/imgs/client-logo3.svg",
    "/assets/imgs/client-logo4.svg",
    "/assets/imgs/client-logo5.svg",
    "/assets/imgs/client-logo2.svg",
    "/assets/imgs/client-logo3.svg",
    "/assets/imgs/client-logo4.svg",
    "/assets/imgs/client-logo5.svg",
    "/assets/imgs/client-logo2.svg",
  ]

  return (
    <section className="py-12 bg-gray-100 mt-10">
      <div className="container mx-auto px-4">
        
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="px-4">
                <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-24">
                  <Image
                    src={logo || "/placeholder.svg"}
                    alt={`Client ${index + 1}`}
                    width={120}
                    height={60}
                    className="object-contain"
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

