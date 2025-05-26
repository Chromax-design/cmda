import { navLinks } from "@/data/data";
import { NavLink } from "@/data/types";
import Link from "next/link";
import React, { useState } from "react";
import Btn from "./Btn";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { IoMenuOutline } from "react-icons/io5";
import MobileNav from "./MobileNav";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);
  const [isBlurred, setIsBlurred] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const openMobile = () => {
    setIsMobile(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobile = () => {
    setIsMobile(false);
    document.body.style.overflow = "auto";
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    setIsBlurred(latest > 10);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        className={`fixed top-0 left-0 w-full z-40 ${
          isBlurred
            ? "backdrop-blur-md bg-[#0E0A17]/60 border-b border-white/10 shadow"
            : ""
        }`}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <nav className="max-w-6xl mx-auto flex justify-between items-center py-2 h-[60px] lg:h-[70px] px-3">
          <Link href={"#hero"} className="flex gap-2 items-center">
            <img src={"/logo.png"} className="size-6" />
            <span className="font-poppins tracking-widest uppercase font-semibold text-white">
              logo
            </span>
          </Link>
          <div className="lg:flex gap-7 hidden">
            {navLinks.map((link: NavLink) => {
              return (
                <Link
                  href={`#${link.link}`}
                  key={link.id}
                  className="font-open-Sans capitalize tracking-wider text-sm text-white"
                >
                  {link.link}
                </Link>
              );
            })}
          </div>
          <Btn className={"max-lg:hidden"}>register now</Btn>
          <button
            className="outline-none border-none lg:hidden cursor-pointer"
            onClick={() => openMobile()}
          >
            <IoMenuOutline className="size-8" />
          </button>
        </nav>
      </motion.header>
      <MobileNav isMobile={isMobile} closeMobile={closeMobile} />
    </>
  );
};

export default Header;
