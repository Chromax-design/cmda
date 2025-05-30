"use client";

import { speakers } from "@/data/data";
import { Speaker } from "@/data/types";
import React from "react";
import SpeakerDetails from "./SpeakerDetails";
import SpeakerCard from "./SpeakerCard";
import Subheading from "./Subheading";
import Heading from "./Heading";

const Speakers = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-3 space-y-10" id="speakers">
      <div className="flex flex-col gap-4 items-center">
        <Subheading subheading="our speakers" />
        <Heading
          heading="meet our amazing and learned event speakers"
          className="text-center"
        />
      </div>
      <div className="grid grid-cols-12 gap-5">
        {speakers.map((speaker: Speaker) => {
          return <SpeakerCard speaker={speaker} key={speaker.id} />;
        })}
      </div>
      <SpeakerDetails />
    </section>
  );
};

export default Speakers;
