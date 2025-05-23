"use client";

import React from "react";
import CountDown from "./CountDown";
import Btn from "./Btn";
import { motion } from "framer-motion";
import { Parallax, Background } from "react-parallax";

const Hero = () => {
  return (
    <Parallax
      bgImage="/banner.jpg"
      strength={400}
      bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
      className="w-full"
    >
      <section className="relative min-h-screen w-full">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-3 py-20 gap-6">
          <CountDown />
          <div className="max-w-3xl mx-auto space-y-3 text-white">
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-poppins text-4xl font-semibold uppercase text-center"
            >
              CMDA National conference
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-poppins text-center text-2xl font-medium"
            >
              August 26<sup>th</sup> - 30<sup>th</sup>, 2026
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="font-poppins text-center text-2xl font-medium"
            >
              Balm of Gilead city, Edo state, Nigeria.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-sm text-center font-open-Sans tracking-wide"
            >
              The 2026 CMDA National Conference — four life-transforming days of
              worship, wisdom, and mission-minded networking. Let your faith and
              career align for kingdom impact.
            </motion.p>
          </div>
          <Btn className="mt">register now</Btn>
        </div>
      </section>
    </Parallax>
  );
};

export default Hero;
