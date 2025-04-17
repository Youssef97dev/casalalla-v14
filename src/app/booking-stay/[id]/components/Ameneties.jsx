import React from "react";
import { LiaCocktailSolid, LiaBathSolid } from "react-icons/lia";
import { TbAirConditioning } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { PiRugLight } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";

const amanetiesList = [
  {
    icon: <TbAirConditioning size={35} />,
    title: "Air conditioning",
  },
  {
    icon: <FaShower size={35} />,
    title: "Double Shower",
  },
  {
    icon: <PiRugLight size={35} />,
    title: "Handwoven Beni Rugs",
  },
  {
    icon: <LiaBathSolid size={35} />,
    title: "Bath",
  },
  {
    icon: <RiSofaLine size={35} />,
    title: "Salon with sofa, chairs and coffee table",
  },
  {
    icon: <LiaCocktailSolid size={35} />,
    title: "Tea, Coffee and Cocktail facilities",
  },
];

const Ameneties = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-6 shadow-md rounded-md p-5">
      <h1 className="text-[25px] leading-[40px]  font-beaufortfor uppercase text-secondary_2">
        Ameneties
      </h1>
      {amanetiesList.map((amenetie, i) => (
        <div
          key={i}
          className="w-full flex justify-start items-center gap-3 font-beaufortfor"
        >
          <span className="text-secondary_2">{amenetie.icon}</span>
          <span className="text-secondary_2">{amenetie.title}</span>
        </div>
      ))}
    </div>
  );
};

export default Ameneties;
