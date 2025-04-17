"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Ameneties from "./Ameneties";
import Slide from "./Slide";
import ReservationForm from "./ReservationForm";

const Container = () => {
  const [isClient, setIsClient] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 p-3">
        <Slide id={id} />
        <Ameneties id={id} />
        <ReservationForm />
      </div>
    )
  );
};

export default Container;
