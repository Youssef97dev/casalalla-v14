"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";

const Stay = ({ imageSrc, roomTitle, capacity, size, description, price }) => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-3 px-5">
      <div className="w-full h-full">
        <Image
          src={imageSrc}
          alt="room 1"
          width={1000}
          height={1000}
          className="object-cover w-full h-full rounded-md"
        />
      </div>
      <h1 className="text-[25px] leading-[40px]  font-azahra uppercase text-primary_2">
        {roomTitle}
      </h1>
      <span className="text-[14px] leading-[22px] text-primary_2">
        {capacity} <b>2 persons</b>
      </span>
      <span className="text-[14px] leading-[22px] text-primary_2">
        {size} <b>14m2</b>
      </span>
      <p className="text-[14px] leading-[22px] text-primary_2">{description}</p>
      <span className="text-[14px] leading-[22px] text-primary_2">{price}</span>
      <Link
        href="/stay-booking"
        className="py-2 px-8 w-1/2 uppercase tracking-widest bg-primary_2 rounded-lg text-[12px] leading-[34px] text-white duration-200 transition-all ease-out"
      >
        {t("room_one.book")}
      </Link>
    </div>
  );
};

export default Stay;
