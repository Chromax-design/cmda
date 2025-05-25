import { Speaker } from "@/data/types";
import React, { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Modal = ({
  speaker,
  onClose,
}: {
  speaker: Speaker;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 z-30 bg-black opacity-90 h-screen" />
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
        className="fixed z-40 top-2 md:top-10 left-2 md:left-10 right-2 md:right-10 bottom-2 md:bottom-10 bg-background rounded-xl overflow-auto"
        ref={modalRef}
      >
        <div className="relative w-full py-4">
          <span
            className="text-white absolute right-2 top-2 cursor-pointer"
            onClick={onClose}
          >
            <IoMdClose className=" size-7" />
          </span>
        </div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-10 max-lg:space-y-10 px-2 py-4 sm:p-3 md:p-4">
          <div className="col-span-12 md:col-span-4 bg-[#0E0A17] h-full p-4 rounded-2xl">
            <div className="flex justify-center items-center py-5 flex-col gap-6">
              <img
                src={speaker.image}
                alt={speaker.name}
                className=" rounded-full aspect-square object-center object-cover size-55 border-10 border-[#27232F]"
              />
              <div>
                <h3 className="font-poppins text-xl capitalize font-semibold text-center">
                  {speaker.name}
                </h3>
                <p className="font-open-Sans text-sm text-center">
                  {speaker.profession}
                </p>
              </div>
              <div className="flex gap-4">
                <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
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
          <div className="col-span-12 lg:col-span-8 h-full space-y-6">
            <div className="space-y-4">
              <h2 className=" font-poppins text-2xl font-semibold">
                Biography
              </h2>
              <p className=" font-open-Sans">{speaker.biography}</p>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-12 lg:col-span-7 space-y-2">
                <h2 className="font-poppins text-2xl font-semibold">
                  Personal Info
                </h2>
                <p className=" font-open-Sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam ullam voluptas necessitatibus corrupti, praesentium
                  molestias consequuntur hic officiis perferendis rerum.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-5 bg-[#0E0A17] rounded-3xl border border-gray-700">
                <div className="p-4">
                  <h3 className="text-sm capitalize font-poppins text-[#B20D5D]">
                    Date of birth
                  </h3>
                  <p className="font-open-Sans text-sm">{speaker.dob}</p>
                </div>
                <hr className="h-[1px] bg-gray-700 border-none" />
                <div className="p-4">
                  <h3 className="text-sm capitalize font-poppins text-[#B20D5D]">
                    mobile numeber
                  </h3>
                  <p className="font-open-Sans text-sm">{speaker.mobile}</p>
                </div>
                <hr className="h-[1px] bg-gray-700 border-none" />
                <div className="p-4">
                  <h3 className="text-sm capitalize font-poppins text-[#B20D5D]">
                    address
                  </h3>
                  <p className="font-open-Sans text-sm">{speaker.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
