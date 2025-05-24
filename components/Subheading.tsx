import React from "react";

const Subheading = ({ subheading }: { subheading: string }) => {
  return (
    <h3 className="bg-gradient-to-r from-[#b20d5d] to-[#530AAD] text-transparent bg-clip-text font-poppins uppercase text-center tracking-wider w-fit">
      {subheading}
    </h3>
  );
};

export default Subheading;
