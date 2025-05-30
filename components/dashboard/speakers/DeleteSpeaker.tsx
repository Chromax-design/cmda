"use client";

import { closeDeleteSpeakerModal } from "@/lib/features/SpeakerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

const DeleteSpeaker = () => {
  const deleteRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const isDeleteSpeaker = useAppSelector(
    (state) => state.speakerslice.isDeleteSpeakerOpen
  );
  const handleCloseModal = () => {
    dispatch(closeDeleteSpeakerModal());
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (deleteRef.current && !deleteRef.current.contains(target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleCloseModal]);

  return (
    <AnimatePresence mode="wait">
      {isDeleteSpeaker && (
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
              className="bg-primary rounded-xl overflow-auto max-w-md w-full mx-auto max-h-full"
              ref={deleteRef}
            >
              <div className="relative w-full py-4">
                <span
                  className="text-white absolute right-2 top-2 cursor-pointer"
                  onClick={() => handleCloseModal()}
                >
                  <IoCloseOutline className="size-8" />
                </span>
              </div>
              <div className="h-full p-6 rounded-2xl space-y-5">
                <h2 className="text-center font-poppins text-2xl capitalize font-medium">
                  are you sure about this?
                </h2>
                <div className="flex justify-center gap-4">
                  <button className="font-open-Sans capitalize py-2 px-4 rounded-sm bg-red-800 hover:bg-red-900 text-white font-medium cursor-pointer">
                    yes, i am
                  </button>
                  <button
                    className="font-open-Sans capitalize py-2 px-4 rounded-sm text-white font-medium cursor-pointer bg-secondary border-foreground hover:bg-secondary/80"
                    onClick={() => handleCloseModal()}
                  >
                    close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteSpeaker;
