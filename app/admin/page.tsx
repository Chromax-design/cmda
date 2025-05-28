"use client";

import BreadCrumb from "@/components/BreadCrumb";
import Btn from "@/components/Btn";
import DashAvatar from "@/components/dashboard/DashAvatar";
import Sidebar from "@/components/dashboard/Sidebar";
import Footer from "@/components/Footer";
import { dashboardLinks } from "@/data/data";
import { DashboardLinkTypes } from "@/data/types";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const page = () => {
  const [pageTab, setPageTab] = useState<number | null>(dashboardLinks[0].id);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const activePage = dashboardLinks.find(
    (dashboardLink: DashboardLinkTypes) => dashboardLink.id === pageTab
  );

  const closeSidebar = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const openSidebar = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const ActiveComponent = activePage?.component;

  return (
    <>
      <section className="max-w-3xl lg:max-w-6xl mx-auto py-10 px-4 space-y-4">
        <BreadCrumb />
        <button
          className="outline-none border border-primary bg-secondary hover:bg-primary hover:border-secondary rounded-md px-4 py-2 cursor-pointer top-2 right-2 text-sm font-open-Sans lg:hidden capitalize"
          onClick={() => openSidebar()}
        >
          open menu
        </button>
        <div className="lg:grid lg:grid-cols-12 gap-5">
          <Sidebar
            isOpen={isOpen}
            pageTab={pageTab}
            setPageTab={setPageTab}
            dashboardLinks={dashboardLinks}
            closeSidebar={closeSidebar}
          />
          <div className="col-span-12 lg:col-span-3 bg-primary rounded-xl space-y-5 max-lg:hidden">
            <button className="outline-none border-none cursor-pointer absolute top-2 right-2 lg:hidden">
              <IoCloseOutline className="size-8" />
            </button>
            <DashAvatar />
            <div>
              {dashboardLinks.map((link: DashboardLinkTypes) => {
                const isActive = link.id === pageTab;
                return (
                  <button
                    className={`w-full text-left font-open-Sans capitalize cursor-pointer px-4 py-3 hover:bg-secondary tracking-wider text-sm ${
                      isActive ? "bg-secondary border-r-3 border-pinkish" : ""
                    }`}
                    key={link.id}
                    onClick={() => setPageTab(link.id)}
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
          </div>
          {ActiveComponent && <ActiveComponent />}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
