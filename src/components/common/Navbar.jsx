import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-stone-950 text-white py-10 px-16 font-poppins">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-4xl font-bold">Convoco</span>
        </div>

        <div className="flex items-center space-x-5 font-medium">
          <span className="hover:text-teal-400 cursor-pointer">HOME</span>
          <span className="hover:text-teal-400 cursor-pointer">SERVICES</span>
          <span className="hover:text-teal-400 cursor-pointer">WORKS</span>
          <span className="hover:text-teal-400 cursor-pointer">ABOUT</span>
          <span className="hover:text-teal-400 cursor-pointer">BLOG</span>
          <span className=" border-2 border-primary rounded-sm py-[10px] px-4 hover:text-teal-400 cursor-pointer">CONTACT</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
