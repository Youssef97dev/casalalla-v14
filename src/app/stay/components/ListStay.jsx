"use client";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Stay from "./Stay";

const ListStay = () => {
  const { t } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  const rooms = [
    {
      id: "1",
      imageSrc:
        "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/in4qfsdtdeuoq306ufp1",
      title: t("room_one.title"),
      capacity: t("room_one.capacity"),
      size: t("room_one.size"),
      description: t("room_one.description"),
      price: t("room_one.price"),
    },
    {
      id: "2",
      imageSrc:
        "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/eooe9qae7yd7l5zvutvm",
      title: t("room_two.title"),
      capacity: t("room_two.capacity"),
      size: t("room_two.size"),
      description: t("room_two.description"),
      price: t("room_two.price"),
    },
    {
      id: "3",
      imageSrc:
        "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/dar_ouzguita/md5intok0vpd0awlgq1t",
      title: t("room_three.title"),
      capacity: t("room_three.capacity"),
      size: t("room_three.size"),
      description: t("room_three.description"),
      price: t("room_three.price"),
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    isClient && (
      <div className="w-full h-full flex flex-col justify-center items-center gap-3 text-center">
        <h1 className="text-[38px] leading-[36px]  font-mollyserif uppercase text-primary_2 mt-5">
          {t("rooms.title_2")}
        </h1>
        <div className="w-full h-full flex flex-col justify-center items-center gap-10">
          {rooms.map((room, i) => {
            return (
              <div className="w-full h-full" key={i}>
                <Stay
                  imageSrc={room.imageSrc}
                  capacity={room.capacity}
                  size={room.size}
                  description={room.description}
                  roomTitle={room.title}
                  price={room.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default ListStay;
