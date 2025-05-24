"use client";

import { speakers } from "@/data/data";
import { Speaker } from "@/data/types";
import React, { useState } from "react";
import Modal from "./Modal";
import SpeakerCard from "./SpeakerCard";
import { AnimatePresence } from "framer-motion";
import Subheading from "./Subheading";
import Heading from "./Heading";

const Speakers = () => {
  const [speakerDetails, showSpeakerDetails] = useState<Speaker | null>(null);

  const showModal = (speaker: Speaker) => {
    showSpeakerDetails(speaker);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    showSpeakerDetails(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="max-w-6xl mx-auto py-20 px-3 space-y-10">
      <div className="flex flex-col gap-4 items-center">
        <Subheading subheading="our speakers" />
        <Heading heading="meet our amazing and learned event speakers" />
      </div>
      <div className="grid grid-cols-12 gap-5">
        {speakers.map((speaker: Speaker) => {
          return (
            <SpeakerCard
              speaker={speaker}
              openModal={() => showModal(speaker)}
              key={speaker.id}
            />
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        {speakerDetails && (
          <Modal
            speaker={speakerDetails}
            onClose={closeModal}
            key={speakerDetails.id}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Speakers;
