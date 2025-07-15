"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const items = [
  "/images/book-large.webp",
  "/images/book-large-2.webp",
  "/images/book-large-3.webp",
  "/mages/book-large-4.webp",
];

const DesktopSlides = () => {
  return (
    <div className="relative w-full h-[50vh] hidden lg:block">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        speed={1400}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next-ex1",
          prevEl: ".swiper-button-prev-ex1",
        }}
        className="swiper w-full h-full"
        id="slider1"
      >
        <div className="swiper-wrapper">
          {items.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={`${item}`}
                  width={300}
                  height={300}
                  alt="Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla"
                  placeholder="blur"
                  blurDataURL="/images/image-blur.webp"
                  priority
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute z-30 bottom-0 left-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(to top, #00000063, transparent)",
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      <div className="absolute w-full flex justify-center items-center bottom-0 z-20">
        <h1 className="font-azahra text-white text-[50px]">Booking Request</h1>
      </div>
    </div>
  );
};

export default DesktopSlides;
