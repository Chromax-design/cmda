import { Event } from "@/data/types";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import Avatar from "./Avatar";
import { IoCloseOutline } from "react-icons/io5";

const EventModal = ({
  eventDetails,
  closeModal,
}: {
  eventDetails: Event;
  closeModal: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeModal]);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black opacity-90 h-screen" />
      <div className="fixed z-60 inset-0 flex justify-center items-center">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: 100,
            opacity: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 0.2,
          }}
          className="bg-background rounded-xl w-full max-w-5xl max-h-full mx-auto overflow-auto"
          ref={modalRef}
        >
          <div className="relative w-full py-4">
            <span
              className="text-white absolute right-2 top-2 cursor-pointer"
              onClick={closeModal}
            >
              <IoCloseOutline className="size-8" />
            </span>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 max-lg:space-y-10 px-6 pt-2 pb-6 items-center">
            <div className="col-span-12 md:col-span-7 rounded-2xl space-y-6">
              <div className="space-y-2">
                <h2 className="font-poppins text-3xl lg:text-4xl font-semibold capitalize">
                  {eventDetails.title}
                </h2>
                <div className="flex gap-4">
                  <div className="flex gap-1 items-center">
                    <IoIosTime className="size-5" />
                    <span className="font-open-Sans text-sm capitalize">
                      {eventDetails.time}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <SlCalender className="size-4" />
                    <span className="font-open-Sans text-sm capitalize">
                      {eventDetails.date}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-open-Sans font-normal">
                {eventDetails.description}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-5 space-y-6 bg-[#0E0A17] p-4 rounded-2xl">
              <Avatar speaker={eventDetails.speakers} />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default EventModal;
