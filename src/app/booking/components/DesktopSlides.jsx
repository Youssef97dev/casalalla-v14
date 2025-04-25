"use client";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const items = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/i7mqgy4ik8mhnsj6iecr",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/a0hsbjyo00f33m7s7xjh",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/lu0oa3az4uglsw5rbtcb",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/casa%20Lalla/yyxizo8d8yun6olceemx",
];

const DesktopSlides = () => {
  return (
    <div className="w-full h-[50vh] hidden lg:block">
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
                  blurDataURL="/images/image-blur.jpg"
                  priority
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
};

export default DesktopSlides;
