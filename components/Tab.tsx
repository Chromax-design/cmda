import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Tab = ({
  day,
  date,
  isActiveTab,
  onClick,
}: {
  day: string;
  date: string;
  isActiveTab: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`rounded-full border border-gray-700 px-6 py-2 hover:cursor-pointer relative overflow-hidden`}
      onClick={onClick}
    >
      <AnimatePresence>
        {isActiveTab && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full bg-gradient-to-br from-[#b20d5d] to-[#530AAD] z-0"
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-1 items-center relative z-10">
        <span className="font-semibold text-sm font-poppins tracking-wider capitalize">
          {day}
        </span>
        <span className=" text-xs font-open-Sans capitalize">{date}</span>
      </div>
    </div>
  );
};

export default Tab;
