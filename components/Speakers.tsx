"use client";

import { speakers } from "@/data/data";
import { Speaker } from "@/data/types";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Speakers = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-3 space-y-10">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="bg-gradient-to-r from-[#b20d5d] to-[#530AAD] text-transparent bg-clip-text font-poppins uppercase text-center tracking-wider w-fit">
          our speakers
        </h3>
        <h2 className="capitalize font-poppins text-3xl md:text-4xl font-semibold max-w-2xl text-center">
          meet our amazing and learned event speakers
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-5">
        {speakers.map((speaker: Speaker) => {
          const [isHovered, setIsHovered] = useState(false);

          return (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="overflow-hidden rounded-3xl h-[400px] col-span-12 md:col-span-6 lg:col-span-4 relative"
              key={speaker.id}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className=" h-full w-full object-cover"
                initial={{ scale: 1 }}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
              />
              <motion.div
                initial={{
                  y: 0,
                  opacity: 1,
                }}
                animate={{
                  y: isHovered ? 100 : 0,
                  opacity: isHovered ? 0 : 1,
                }}
                className="absolute bottom-5 left-5 right-5 bg-white text-black rounded-3xl p-5 space-y-1"
              >
                <div className="font-poppins text-xl font-semibold">
                  {speaker.name}
                </div>
                <div className="font-open-Sans text-sm">
                  {speaker.profession}
                </div>
              </motion.div>
              <motion.div
                initial={{
                  y: 100,
                  opacity: 0,
                }}
                animate={{
                  y: isHovered ? 0 : 100,
                  opacity: isHovered ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeIn",
                }}
                className="absolute bottom-5 left-5 right-5 bg-white text-black rounded-3xl p-5 space-y-1 font-open-Sans text-sm line-clamp-5"
              >
                <div className="font-open-Sans text-sm line-clamp-5">
                  {speaker.biography}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Speakers;
