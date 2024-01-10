import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";
import LineHorizontal from "../common/LineHorizantal";

const HomeCardComponent = () => {
  return (
    <div className=" border-2 border-[#121212] hover:border-primary duration-500 bg-[#121212] text-white py-10 pl-10 pr-16 w-96 rounded-sm cursor-pointer">
      <div className="flex justify-start mb-10">
        <LiaTelegramPlane className="text-6xl text-primary" />
      </div>

      <div className=" text-left mb-6">
        <h2 className="text-2xl font-bold">Future Concept.</h2>
        <div className=" text-left mt-3">
          <LineHorizontal />
        </div>
      </div>

      <p className="text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.
      </p>
    </div>
  );
};

export default HomeCardComponent;
