"use client";

import React from "react";
import Btn from "../Btn";
import Link from "next/link";
import { DashboardLinkTypes } from "@/data/types";
import { dashboardLinks } from "@/data/data";
import { usePathname } from "next/navigation";

const SidebarNav = () => {
  const pathname = usePathname();
  return (
    <div>
      {dashboardLinks.map((link: DashboardLinkTypes) => {
        const isActive =
          link.link === "/"
            ? pathname === "/admin"
            : pathname === `/admin${link.link}`;
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
  );
};

export default SidebarNav;
