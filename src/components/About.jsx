"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="w-full h-full lg:h-screen flex md:flex-row-reverse flex-col-reverse p-3"
    >
      <div className="relative w-full">
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ufl2ch4ywyaomin9gaf5"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md md:block hidden"
        />
        <Image
          src="https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/f66rpshuoroemocbpbeg"
          height={1000}
          width={1000}
          className="object-cover w-full h-full rounded-md md:hidden block"
        />
        {/* Filter */}
      </div>
      <div className=" w-full py-5 p-0 lg:p-10">
        <div className="w-full h-full flex flex-col justify-center items-center gap-1 text-center shadow-md rounded-lg lg:p-20 p-8">
          <h1 className="text-[20px] leading-[36px]  font-azahra uppercase text-primary_2 mb-5">
            <TypeAnimation
              sequence={[t("about.title"), 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[16px] leading-[34px] px-0 2xl:px-12 ">
            {t("about.content_1")}
          </p>
          <p className="text-[16px] leading-[34px] px-0 2xl:px-12 ">
            {t("about.content_2")}
          </p>
          <p className="text-[16px] leading-[34px] px-0 2xl:px-12 ">
            {t("about.content_3")}
          </p>
          <p className="text-[16px] leading-[34px] px-0 2xl:px-12 ">
            {t("about.content_4")}
          </p>
          <Link
            href="/booking"
            className="mt-4 py-2 px-8 uppercase tracking-widest border border-primary_2 text-primary_2 rounded-lg text-[12px] leading-[34px] hover:bg-primary_2 hover:text-white duration-200 transition-all ease-out font-azahra"
          >
            {t("about.button_book")}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
