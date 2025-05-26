import { Event } from "@/data/types";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { SlCalender } from "react-icons/sl";

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
      <div className="fixed inset-0 z-30 bg-black opacity-90 h-screen" />
      <div className="fixed z-40 top-2 md:top-10 left-2 md:left-10 right-2 md:right-10 bottom-2 md:bottom-10">
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
          className="bg-background rounded-xl max-w-7xl mx-auto h-full overflow-scroll"
          ref={modalRef}
        >
          <div className="relative w-full py-4">
            <span
              className="text-white absolute right-2 top-2 cursor-pointer"
              onClick={closeModal}
            >
              <IoMdClose className=" size-7" />
            </span>
          </div>
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 max-lg:space-y-10 px-6 pt-2 pb-6 items-start">
            <div className="col-span-12 md:col-span-8 rounded-2xl space-y-10">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={eventDetails.picture}
                  alt={eventDetails.title}
                  className="aspect-video object-cover object-center"
                />
              </div>
              <div className="space-y-3">
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
                <h2 className="font-poppins text-3xl font-semibold capitalize">
                  {eventDetails.title}
                </h2>
                <p className="font-open-Sans font-normal">
                  {eventDetails.description}
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 space-y-6 bg-[#0E0A17] p-4 rounded-2xl">
              <div className="flex justify-center items-center py-5 flex-col gap-6">
                <img
                  src={eventDetails.speakers.images[0]}
                  alt={eventDetails.speakers.name}
                  className=" rounded-full aspect-square object-center object-cover size-55 border-10 border-[#27232F]"
                />
                <div>
                  <h3 className="font-poppins text-xl capitalize font-semibold text-center">
                    {eventDetails.speakers.name}
                  </h3>
                  <p className="font-open-Sans text-sm text-center">
                    {eventDetails.speakers.profession}
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer hover:bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                    <FaFacebook className="size-5" />
                  </span>
                  <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                    <FaTwitter className="size-5" />
                  </span>
                  <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
                    <FaInstagram className="size-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default EventModal;
