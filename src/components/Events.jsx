"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div
      id="events"
      className="w-full h-full lg:h-screen flex md:flex-row flex-col-reverse p-3 gap-3"
    >
      <div className="relative w-full">
        <Image
          src="/images/events-large.jpg"
          height={1000}
          width={1000}
          alt="lalla takerkoust lake, barrage lalla takerkoust, lalla takerkoust weather, lalla takerkoust activités"
          priority
          className="object-cover w-full h-full rounded-md md:block hidden"
        />
        <Image
          src="/images/events-small.jpg"
          height={1000}
          width={1000}
          alt="casalalla, barrage lalla takerkoust activités, lac lalla takerkoust, lalla takerkoust marrakech"
          priority
          className="object-cover w-full h-full rounded-md md:hidden block"
        />
        {/* Filter */}
      </div>
      <div className=" w-full">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center shadow-md rounded-lg lg:p-20 p-8">
          <h1 className="text-[20px] leading-[36px]  font-azahra tracking-[2px] uppercase text-primary_2 mb-5">
            <TypeAnimation
              sequence={[t("events.title"), 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[16px] leading-[34px] ">{t("events.content")}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
