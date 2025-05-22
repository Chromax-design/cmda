"use client";

import React from "react";
import CountDown from "./CountDown";
import Btn from "./Btn";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=' min-h-[120vh] w-full bg-[url("/banner.jpg")] bg-no-repeat bg-cover bg-center bg-fixed relative'>
      <div className="bg-black/70 absolute top-0 bottom-0 left-0 w-full h-full z-10" />
      <div className="absolute top-0 left-0 bottom-0 w-full h-full z-20 flex flex-col justify-center items-center gap-4 px-3 py-20">
        <CountDown />
        <div className="max-w-3xl mx-auto space-y-3">
          <motion.h1
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="font-poppins text-4xl font-semibold uppercase text-center"
          >
            CMDA National conference
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="font-poppins text-center text-2xl font-medium"
          >
            August 26<sup>th</sup> -30<sup>th</sup>, 2026
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            className="font-poppins text-center text-2xl font-medium"
          >
            Balm of Gilead city, Edo state, Nigeria.
          </motion.p>
          <motion.p
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              ease: "easeOut",
              duration: 1,
            }}
            className="text-sm text-center font-open-Sans tracking-wide"
          >
            The 2026 CMDA National Conference — four life-transforming days of
            worship, wisdom, and mission-minded networking. Let your faith and
            career align for kingdom impact.
          </motion.p>
        </div>
        <Btn className={"mt-5"}>register now</Btn>
      </div>
    </section>
  );
};

export default Hero;
