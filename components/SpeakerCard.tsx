import React, { useState } from "react";
import { motion } from "framer-motion";
import { Speaker } from "@/data/types";

const SpeakerCard = ({
  speaker,
  openModal,
}: {
  speaker: Speaker;
  openModal: () => void;
}) => {
  const [hoveredSpeakerId, setHoveredSpeakerId] = useState<string | null>(null);
  const isHovered = hoveredSpeakerId === speaker.id;
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
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
      onMouseEnter={() => setHoveredSpeakerId(speaker.id)}
      onMouseLeave={() => setHoveredSpeakerId(null)}
    >
      <motion.img
        src={speaker.images[0]}
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
        className="absolute bottom-5 left-5 right-5 bg-[#0E0A17] text-white rounded-3xl p-5 space-y-1"
      >
        <div className="font-poppins text-xl font-semibold">{speaker.name}</div>
        <div className="font-open-Sans text-sm">{speaker.profession}</div>
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
        className="absolute bottom-5 left-5 right-5 bg-gradient-to-r from-[#b20d5d] to-[#530AAD] text-white rounded-3xl p-5 space-y-3 font-open-Sans text-sm line-clamp-5"
      >
        <div>
          <div
            className="font-poppins text-xl font-semibold hover:underline hover:cursor-pointer"
            onClick={openModal}
          >
            {speaker.name}
          </div>
          <div className="font-open-Sans text-xs font-semibold">
            {speaker.profession}
          </div>
        </div>
        <div className="font-open-Sans text-sm line-clamp-5">
          {speaker.biography}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SpeakerCard;
