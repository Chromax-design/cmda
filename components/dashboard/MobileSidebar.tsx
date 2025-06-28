"use client";

import React, { useEffect, useRef } from "react";
import Btn from "../Btn";
import DashAvatar from "./DashAvatar";
import { IoCloseOutline } from "react-icons/io5";
import { DashboardLinkTypes } from "@/data/types";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { dashboardLinks } from "@/data/data";
import { usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { closeMobileNav } from "@/lib/features/MobileNavSlice";
import Link from "next/link";

const MobileSideBar = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();
  const { isOpen } = useAppSelector((state) => state.mobileslice);

  const dispatch = useAppDispatch();

  const closeSidebar = () => {
    dispatch(closeMobileNav());
  };

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
          <div className="bg-black/40 fixed inset-0 h-screen lg:hidden z-30" />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className=" bg-card rounded-xl max-lg:max-w-xs max-lg:fixed max-lg:inset-0 max-lg:z-30  space-y-5 overflow-y-auto"
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
                const isActive = pathName === `/admin${link.link}`;
                return (
                  <Link
                    href={`/admin${link.link}`}
                    className={`w-full text-left font-open-Sans capitalize cursor-pointer px-4 py-3 hover:bg-secondary tracking-wider text-sm inline-block ${
                      isActive ? "bg-secondary border-r-3 border-primary" : ""
                    }`}
                    key={link.id}
                  >
                    {link.title}
                  </Link>
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

export default MobileSideBar;
