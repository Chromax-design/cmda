"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { Button } from "../ui/button";
import { TbMenu3 } from "react-icons/tb";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAppDispatch } from "@/lib/hooks";
import { openMobileNav } from "@/lib/features/MobileNavSlice";

const Header = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<boolean>(false);
  const [isBlurred, setIsBlurred] = useState<boolean>(false);
  const dispatch = useAppDispatch();

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
        className={`fixed top-0 left-0 w-full z-20 border-b border-muted ${
          isBlurred
            ? "backdrop-blur-md bg-[#0E0A17]/60 border-b border-white/10 shadow"
            : ""
        }`}
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center max-w-3xl lg:max-w-6xl mx-auto py-2 px-4">
          <Button
            size={"icon"}
            variant={"destructive"}
            className="!rounded-full size-10 lg:hidden"
            onClick={() => dispatch(openMobileNav())}
          >
            <TbMenu3 className="size-5" />
          </Button>
          <Link href={"/"} className="flex gap-2 items-center">
            <img src={"/logo.png"} className="size-6" />
            <span className="font-poppins tracking-widest uppercase font-semibold text-white">
              logo
            </span>
          </Link>
          <Button
            size={"icon"}
            variant={"destructive"}
            className="!rounded-full size-10"
          >
            <RiLogoutCircleRLine className="size-5" />
          </Button>
        </div>
      </motion.header>
    </>
  );
};

export default Header;
