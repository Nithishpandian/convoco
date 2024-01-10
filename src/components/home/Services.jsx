import React from "react";
import LineHorizontal from "../common/LineHorizantal";
import LineVertical from "../common/LineVertical";
import ServiceCardComponent from "./ServiceCardComponent";

const Services = () => {
  return (
    <div className=" pt-20 pb-12 px-48 bg-[#0B0C10] text-white font-poppins">
      <h1 className=" flex items-center gap-5">
        <LineHorizontal />
        <h1 className=" text-5xl font-bold">Services.</h1>
      </h1>
      <p className="text uppercase tracking-widest text-primary mt-4">
        Creative Mind, Creative Works.
      </p>
      <div className=" pt-20 pb-10 px-5 grid grid-cols-3 gap-y-5 gap-x-12 items-center justify-center">
        <ServiceCardComponent />
        <ServiceCardComponent />
        <ServiceCardComponent />
        <ServiceCardComponent />
        <ServiceCardComponent />
        <ServiceCardComponent />
      </div>
      <div className=" py-4 flex items-center justify-center">
        <LineVertical />
      </div>
    </div>
  );
};

export default Services;
