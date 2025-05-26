import { navLinks } from "@/data/data";
import { NavLink } from "@/data/types";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Btn from "./Btn";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

const MobileNav = ({
  isMobile,
  closeMobile,
}: {
  isMobile: boolean;
  closeMobile: () => void;
}) => {
  const mobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (mobileRef.current && !mobileRef.current.contains(target)) {
        closeMobile();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeMobile]);

  return (
    <AnimatePresence>
      {isMobile && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 w-full" />
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="py-2 px-3 fixed inset-0 bg-black z-50 overflow-y-auto max-w-lg"
            ref={mobileRef}
          >
            <div className="flex justify-between items-center h-[60px] border-b border-white/10 shadow">
              <Link href={"#hero"} className="flex gap-2 items-center">
                <img src={"/logo.png"} className="size-6" />
                <span className="font-poppins tracking-widest uppercase font-semibold text-white">
                  logo
                </span>
              </Link>
              <button
                className="outline-none border-none"
                onClick={() => closeMobile()}
              >
                <IoCloseOutline className="size-8" />
              </button>
            </div>
            <div className="flex flex-col items-start">
              {navLinks.map((link: NavLink) => {
                return (
                  <Link
                    href={`#${link.link}`}
                    key={link.id}
                    className="font-open-Sans capitalize tracking-wider text-lg text-white border-b border-white/10 w-full py-5"
                    onClick={closeMobile}
                  >
                    {link.link}
                  </Link>
                );
              })}
              <Btn className={"my-5"}>register now</Btn>
            </div>
            <div className="flex gap-4 ">
              <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                <FaFacebook className="size-5" />
              </span>
              <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                <FaTwitter className="size-5" />
              </span>
              <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                <FaInstagram className="size-5" />
              </span>
              <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                <FaTiktok className="size-5" />
              </span>
              <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                <FaLinkedin className="size-5" />
              </span>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
