"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { BtnProps } from "@/data/types";

const BtnIcon = () => {
  return (
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
  );
};

const Btn = ({ children, className, href, type }: BtnProps) => {
  const baseStyles = `rounded-full capitalize text-sm font-medium tracking-wider font-open-Sans cursor-pointer bg-gradient-to-bl from-[#b20d5d] to-[#530AAD] text-white px-6 py-4 flex items-center gap-2 justify-center`;

  if (href) {
    return (
      <motion.a
        whileHover="hover"
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        href={href}
        className={`${baseStyles} ${className}`}
      >
        <span>{children}</span>
        <BtnIcon />
      </motion.a>
    );
  }
  return (
    <motion.button
      whileHover="hover"
      initial={{
        y: 50,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      type={type}
      className={`${baseStyles} ${className}`}
    >
      <span>{children}</span>
      <BtnIcon />
    </motion.button>
  );
};

export default Btn;
