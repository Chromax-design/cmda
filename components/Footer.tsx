import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-20 flex flex-col justify-center items-center gap-3 px-3">
      <div className="flex gap-4">
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaFacebook className="size-4" />
        </span>
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaTwitter className="size-4" />
        </span>
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaInstagram className="size-4" />
        </span>
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaTiktok className="size-4" />
        </span>
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaLinkedin className="size-4" />
        </span>
      </div>
      <p className="text-sm text-center font-poppins tracking-wider font-light">
        &copy; {new Date().getFullYear()} CMDA UBTH | Site crafted by Godskey
      </p>
    </footer>
  );
};

export default Footer;
