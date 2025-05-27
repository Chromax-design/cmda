import React, { useEffect, useState } from "react";
import { HiPaperAirplane } from "react-icons/hi";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className={`${
        showScroll ? "flex" : "hidden"
      } size-10 bg-[#F0F0F0] rounded-full aspect-square  items-center justify-center cursor-pointer hover:bg-[#b20d5d] group transition duration-200 ease-in fixed bottom-15 right-5 z-30`}
      type="submit"
      onClick={handleClick}
    >
      <HiPaperAirplane className="group-hover:text-white text-black transition duration-200 ease-in" />
    </motion.button>
  );
};

export default ScrollToTop;
