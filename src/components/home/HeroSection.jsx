import React from "react";
import HomeCardComponent from "./HomeCardComponent";

const HeroSection = () => {
  return (
    <div className=" flex flex-col gap-7 font-poppins bg-stone-950 text-white px-48 py-24">
      <div className="  grid grid-cols-2 justify-around items-center py-14">
        <div className="text-left flex flex-col gap-8">
          <p className="text-sm uppercase tracking-widest text-primary mb-2">
            Creative Mind, Creative Works.
          </p>
          <h1 className="text-7xl font-bold mb-4">We are digital agency.</h1>
          <div>
            <button className="bg-transparent border border-primary text-white font-medium py-4 px-6 hover:bg-primary hover:text-black transition duration-300">
              Getting Started
            </button>
          </div>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className=" pt-7 px-5 grid grid-cols-3 gap-10 items-center justify-center">
        <HomeCardComponent />
        <HomeCardComponent />
        <HomeCardComponent />
      </div>
    </div>
  );
};

export default HeroSection;
