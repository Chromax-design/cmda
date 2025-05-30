import { Event } from "@/data/types";
import React from "react";
import { motion } from "framer-motion";

const Eventcard = ({
  event,
  isEven,
  openModal,
}: {
  event: Event;
  isEven: boolean;
  openModal: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="lg:grid lg:grid-cols-12 rounded-3xl overflow-hidden gap-0 shadow"
      key={event.id}
    >
      <div className="bg-[#0E0A17] col-span-9 px-10 py-8 max-lg:space-y-4 lg:grid grid-cols-12">
        <div className=" col-span-8 space-y-3">
          <h3
            className="font-poppins capitalize text-xl font-semibold hover:text-[#B20D5D] hover:cursor-pointer"
            onClick={openModal}
          >
            {event.title}
          </h3>
          <p className="font-open-Sans text-sm line-clamp-2">
            {event.description}
          </p>
          <button
            className="text-sm font-open-Sans uppercase text-[#B20D5D] font-semibold tracking-wider hover:text-white transition-all duration-200 ease-out cursor-pointer"
            onClick={openModal}
          >
            learn more
          </button>
        </div>
        <div className="col-span-4 flex items-center lg:justify-center gap-5">
          <img
            src={event.speakers.images[0]}
            alt={event.speakers.name}
            className=" aspect-square rounded-full size-20 object-cover object-center"
          />
          <img
            src={event.speakers.images[1]}
            alt={event.speakers.name}
            className=" aspect-square rounded-full size-20 object-cover object-center"
          />
        </div>
      </div>
      <div
        className={`col-span-3 p-10 ${
          isEven ? "bg-[#B20D5D]" : "bg-[#1A1623]"
        } flex flex-col justify-center items-center`}
      >
        <p className="tracking-wider flex gap-2 text-sm">
          <span className="font-poppins font-semibold">Time:</span>
          <span className="font-open-Sans">{event.time}</span>
        </p>
        <p className="tracking-wider flex gap-2">
          <span className="font-poppins font-semibold">Date:</span>
          <span className="font-open-Sans">{event.date}</span>
        </p>
      </div>
    </motion.div>
  );
};

export default Eventcard;
