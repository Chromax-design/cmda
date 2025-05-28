import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin",
  description: "CMDA Admin",
};

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="py-10 px-5 lg:px-10 min-h-screen flex justify-center lg:justify-end items-center bg-[url('/banner.jpg')] bg-no-repeat bg-cover bg-center">
      {children}
    </section>
  );
};

export default authLayout;
