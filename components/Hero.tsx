"use client";

import React from "react";
import CountDown from "./CountDown";
import Btn from "./Btn";
import { motion } from "framer-motion";
import { Parallax } from "react-parallax";

const Hero = () => {
  return (
    <Parallax
      bgImage="/banner.jpg"
      strength={400}
      bgImageStyle={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "center top",
      }}
      className="w-full object-center"
    >
      <section className="relative min-h-screen w-full" id="hero">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center min-h-[calc(100vh+70px)] px-3 py-20 gap-6">
          <CountDown />
          <div className="max-w-3xl mx-auto space-y-2 text-white">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{
                once: true,
              }}
              className="font-poppins text-3xl md:text-4xl font-semibold uppercase text-center"
            >
              CMDA National conference
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{
                once: true,
              }}
              className="font-poppins text-center md:text-xl"
            >
              August 26<sup>th</sup> - 30<sup>th</sup>, 2026
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{
                once: true,
              }}
              className="font-poppins text-center md:text-xl"
            >
              Balm of Gilead city, Edo state, Nigeria.
            </motion.p>
          </div>
          <Btn href="https://www.google.com">register now</Btn>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;
