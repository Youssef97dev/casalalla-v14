"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const roomImages = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/in4qfsdtdeuoq306ufp1",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/hmlf6navcvftlggxwuzd",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/qapkxhjh3gd36ymkdc94",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/y19ka66shutlhgjvcj0d",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/n2hsl8qslezhsedhvrl8",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/xinfw893f4bfmkswvkon",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/hhzphmae3rx2d4nojkkg",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/culalff5rxpbfqwdry7l",
];

const Slide = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="w-full h-[80vh] p-5 md:hidden block">
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
            {roomImages.map((image, i) => {
              return (
                <SwiperSlide key={i}>
                  <Image
                    src={`${image}`}
                    alt="casa lalla image"
                    height={1000}
                    width={1000}
                    className="object-cover w-full h-full rounded-md"
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    )
  );
};

export default Slide;
