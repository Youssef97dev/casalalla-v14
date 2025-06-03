"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Call on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col-reverse p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          src={
            isMobile ? "/images/events-large.jpg" : "/images/events-small.jpg"
          }
          height={1000}
          width={1000}
          alt="lalla takerkoust lake, barrage lalla takerkoust, lalla takerkoust weather, lalla takerkoust activités"
          priority
          className="object-cover w-full h-full rounded-md md:block hidden"
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center shadow-md rounded-lg lg:p-20 p-8">
          <h1 className="text-[20px] leading-[36px]  font-azahra tracking-[2px] uppercase text-primary_2 mb-5">
            {t("events.title")}
          </h1>
          <p className="text-[16px] leading-[34px] ">{t("events.content")}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
