import { Speaker } from "@/data/types";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Avatar = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div className="flex justify-center items-center py-5 flex-col gap-6">
      <img
        src={speaker.images[0]}
        alt={speaker.name}
        className=" rounded-full aspect-square object-center object-cover size-55 border-10 border-[#27232F]"
      />
      <div>
        <h3 className="font-poppins text-xl capitalize font-semibold text-center">
          {speaker.name}
        </h3>
        <p className="font-open-Sans text-sm text-center">
          {speaker.profession}
        </p>
      </div>
      <div className="flex gap-4">
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaFacebook className="size-5" />
        </span>
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaTwitter className="size-5" />
        </span>
        <span className=" bg-[#04000A] size-9 rounded-full flex justify-center items-center cursor-pointer bg-gradient-to-br hover:from-[#B20D5D] hover:to-[#540AAC] transition-all duration-500 ease-in-out">
          <FaInstagram className="size-5" />
        </span>
      </div>
    </div>
  );
};

export default Avatar;
