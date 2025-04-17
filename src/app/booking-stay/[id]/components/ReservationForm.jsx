"use client";

const ReservationForm = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-3 shadow-md rounded-md p-5">
      <h1 className="text-[25px] leading-[40px]  font-beaufortfor uppercase text-secondary_2">
        Your reservation
      </h1>
      <div className="w-full flex flex-col justify-center items-start gap-1 font-beaufortfor">
        <label htmlFor="checkin">CHECK IN</label>
        <input
          type="date"
          name="checkin"
          id="checkin"
          className="w-full rounded-md p-2 border border-border_color focus:outline-none"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1 font-beaufortfor">
        <label htmlFor="checkout">CHECK OUT</label>
        <input
          type="date"
          name="checkout"
          id="checkout"
          className="w-full rounded-md p-2 border border-border_color focus:outline-none"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-start gap-1 font-beaufortfor">
        <label htmlFor="adults">ADULTS</label>
        <input
          type="number"
          name="adults"
          id="adults"
          className="w-full rounded-md p-2 border border-border_color focus:outline-none"
        />
      </div>
      <button className="py-4 px-6 border border-secondary_2 mr-auto uppercase font-beaufortfor text-secondary_2">
        BOOK NOW
      </button>
    </div>
  );
};

export default ReservationForm;
