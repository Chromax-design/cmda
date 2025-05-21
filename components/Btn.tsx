"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Btn = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String;
}) => {
  return (
    <motion.button
      whileHover="hover"
      className={`rounded-full capitalize text-sm font-semibold tracking-wider font-open-Sans cursor-pointer bg-white text-black px-6 py-3 flex items-center gap-2 ${className}`}
    >
      <span>{children}</span>
      <motion.span
        variants={{
          hover: {
            x: [0, 10],
            transition: {
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          },
        }}
      >
        <FaArrowRight />
      </motion.span>
    </motion.button>
  );
};

export default Btn;
