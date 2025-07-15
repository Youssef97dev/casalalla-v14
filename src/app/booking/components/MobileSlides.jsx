"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const itemsMobile = [
  "/images/activities-slide-2.webp",
  "/images/gallery-2.webp",
  "/images/gallery-3.webp",
  "/image/book-mobile.webp",
];

const MobileSlides = () => {
  return (
    <div className="w-full h-[50vh] relative block lg:hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
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
          {itemsMobile.map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={`${item}`}
                  width={300}
                  height={300}
                  alt="Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla"
                  priority
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute z-10 top-0 left-0 w-full h-full"
                  style={{
                    background:
                      "linear-gradient(to bottom, #00000063, transparent)",
                  }}
                ></div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
      <div className="absolute w-full flex justify-center items-center top-3 z-20">
        <Image
          src={`/logo-6.png`}
          width={300}
          height={300}
          alt="Restaurants à Lalla takerkoust, Restaurants à Marrakech, Restaurants à Agafay, Restaurants à Imlil, Restaurants Désert Agafay, Restaurants Montagnes Atlas, Riad Marrakech, Hotel Riad Casa Lalla"
          placeholder="blur"
          blurDataURL="/images/image-blur.webp"
          priority
          className="w-[40%] max-h-full object-cover"
        />
      </div>
      <div className="absolute w-full flex justify-center items-center top-1/3 z-20">
        <h1 className="font-azahra text-white text-[30px]">Booking Request</h1>
      </div>
    </div>
  );
};

export default MobileSlides;
