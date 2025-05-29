import React, { useEffect, useRef, useState } from "react";
import Btn from "../Btn";
import DashAvatar from "./DashAvatar";
import { IoCloseOutline } from "react-icons/io5";
import { DashboardLinkTypes } from "@/data/types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const Sidebar = ({
  isOpen,
  pageTab,
  setPageTab,
  dashboardLinks,
  closeSidebar,
}: {
  isOpen: boolean;
  pageTab: number | null;
  setPageTab: (id: number) => void;
  dashboardLinks: DashboardLinkTypes[];
  closeSidebar: () => void;
}) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (sidebarRef.current && !sidebarRef.current.contains(target)) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [closeSidebar]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="lg:hidden">
          <div className="bg-black/40 fixed inset-0 h-screen lg:hidden z-10" />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className=" bg-primary rounded-xl max-lg:max-w-xs max-lg:fixed max-lg:inset-0 max-lg:z-20  space-y-5 overflow-y-auto"
            ref={sidebarRef}
          >
            <button
              className="outline-none border-none cursor-pointer absolute top-2 right-2 lg:hidden"
              onClick={closeSidebar}
            >
              <IoCloseOutline className="size-8" />
            </button>
            <DashAvatar />
            <div className="">
              {dashboardLinks.map((link: DashboardLinkTypes) => {
                const isActive = link.id === pageTab;
                return (
                  <button
                    className={`w-full text-left font-open-Sans capitalize cursor-pointer px-4 py-3 hover:bg-secondary tracking-wider text-sm ${
                      isActive ? "bg-secondary border-r-3 border-pinkish" : ""
                    }`}
                    key={link.id}
                    onClick={() => {
                      setPageTab(link.id);
                      closeSidebar();
                    }}
                  >
                    {link.link}
                  </button>
                );
              })}
              <div className="p-4">
                <Btn type="button" className="!rounded-lg !px-4 !py-3">
                  Log out
                </Btn>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
