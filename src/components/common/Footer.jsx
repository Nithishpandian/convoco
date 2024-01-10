import React from "react";
import LineHorizontal from "./LineHorizantal";
import { FiPhone } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B0C10] text-white font-poppins">
      <div className=" px-52 py-20 flex items-start justify-between gap-10">
        <div className=" flex flex-col gap-5">
          <h1 className=" text-4xl font-bold">Convoco</h1>
          <p className=" text-sm">We are more than a digital agency</p>
          <LineHorizontal />
        </div>
        <div className=" flex items-center justify-center gap-20">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold">CONTACT US</h1>
            <p className=" flex items-center gap-2">
              <FiPhone /> <p>+1234567890</p>
            </p>
            <p className=" flex items-center gap-2">
              <FiPhone /> <p>+1234567890</p>
            </p>
            <p className=" flex items-center gap-2">
              <FiPhone /> <p>+1234567890</p>
            </p>
            <p className=" flex items-center gap-2">
              <FiPhone /> <p>+1234567890</p>
            </p>
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold">CONTACT US</h1>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold">CONTACT US</h1>
            <p>About</p>
            <p>About</p>
            <p>About</p>
            <p>About</p>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center border-t border-stone-800 py-6 px-52">
        <div className=" flex flex-col gap-4">
            <div className=" text-xs text-stone-300 font-medium flex items-center gap-10">
                <h2>Copyright 2020 All rights reserved</h2>
                <h2>PRIVACY POLICY</h2>
                <h2>TERMS OF USE</h2>
            </div>
            <p className=" text-xs text-stone-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse modi nam suscipit accusamus. Hic dolorum qui velit, voluptas magnam recusandae.</p>
        </div>
        <div className=" flex items-center justify-center gap-5">
            <FaFacebook className="text-2xl" />
            <FaTwitter className="text-2xl" />
            <FaInstagram className="text-2xl" />
            <FaYoutube className="text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
