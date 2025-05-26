import React from "react";
import { FaRegPaperPlane } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <section
      className="py-20 px-3 bg-gradient-to-l from-[#b20d5d] to-[#530AAD]"
      id="subscribe"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        <h3 className="capitalize text-3xl md:text-4xl lg:text-5xl font-semibold text-center font-poppins">
          Get latest updates, subscribe to our newsletter
        </h3>
        <div className="flex max-w-2xl mx-auto gap-4 items-center border rounded-full border-white/20 p-2">
          <input
            type="email"
            className="w-full pl-4 border-none outline-none font-open-Sans placeholder:text-white"
            placeholder="Enter your email"
          />
          <button className=" size-10 bg-[#F0F0F0] rounded-full aspect-square flex items-center justify-center cursor-pointer hover:bg-[#b20d5d] group transition duration-200 ease-in">
            <FaRegPaperPlane className="group-hover:text-white text-black transition duration-200 ease-in" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
