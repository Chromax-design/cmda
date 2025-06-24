"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

const ModalContainer = ({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        onClose();
      }
    };
    const handleKeyboardEvent = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyboardEvent);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyboardEvent);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
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
            className="fixed inset-0 z-50 bg-black/80 h-screen"
          />
          <div className="fixed inset-0 flex justify-center items-center z-60 p-2">
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
              className={`bg-primary rounded-xl overflow-auto w-full mx-auto max-h-full ${className} shadow-xl `}
              ref={modalRef}
            >
              <div className="relative w-full py-4">
                <span
                  className="text-white absolute right-2 top-2 cursor-pointer"
                  onClick={() => onClose()}
                >
                  <IoCloseOutline className="size-8" />
                </span>
              </div>
              <div className="h-full rounded-2xl space-y-5">{children}</div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ModalContainer;
