import React, { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Avatar from "./Avatar";
import { IoCloseOutline } from "react-icons/io5";
import { closeSpeakerDetails } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const SpeakerDetails = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const speaker = useAppSelector((state) => state.speakerslice.speaker);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(closeSpeakerDetails());
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleCloseModal]);

  return (
    <AnimatePresence mode="wait">
      {speaker && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 0.9,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
            className="fixed inset-0 z-50 bg-black opacity-90 h-screen"
          />
          <div className="fixed inset-0 flex justify-center items-center z-60">
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
              className="bg-background rounded-xl overflow-auto max-w-6xl mx-auto max-h-full"
              ref={modalRef}
            >
              <div className="relative w-full py-4">
                <span
                  className="text-white absolute right-2 top-2 cursor-pointer"
                  onClick={() => handleCloseModal()}
                >
                  <IoCloseOutline className="size-8" />
                </span>
              </div>
              <div className="lg:grid lg:grid-cols-12 lg:gap-10 max-lg:space-y-10 px-6 pt-2 pb-6">
                <div className="col-span-12 md:col-span-4 bg-[#0E0A17] h-full p-6 rounded-2xl">
                  <Avatar speaker={speaker} />
                </div>
                <div className="col-span-12 lg:col-span-8 h-full space-y-6">
                  <div className="space-y-4">
                    <h2 className=" font-poppins text-2xl font-semibold">
                      Biography
                    </h2>
                    <p className=" font-open-Sans text-sm leading-5.5">
                      {speaker.biography}
                    </p>
                  </div>
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 lg:col-span-7 space-y-2">
                      <h2 className="font-poppins text-2xl font-semibold">
                        Personal Info
                      </h2>
                      <p className=" font-open-Sans text-sm leading-5.5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam ullam voluptas necessitatibus corrupti,
                        praesentium molestias consequuntur hic officiis
                        perferendis rerum.
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
                          mobile number
                        </h3>
                        <p className="font-open-Sans text-sm">
                          {speaker.mobile}
                        </p>
                      </div>
                      <hr className="h-[1px] bg-gray-700 border-none" />
                      <div className="p-4">
                        <h3 className="text-sm capitalize font-poppins text-[#B20D5D]">
                          address
                        </h3>
                        <p className="font-open-Sans text-sm">
                          {speaker.address}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SpeakerDetails;
