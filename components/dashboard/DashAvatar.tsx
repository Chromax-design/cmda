import React from "react";

const DashAvatar = () => {
  return (
    <div className="text-center space-y-4 p-5">
      <img
        src="/speakers/speaker_6.jpg"
        alt=""
        className="aspect-square rounded-full object-cover object-center size-35 border-10 border-secondary mx-auto"
      />
      <div className="space-y-0.5">
        <h2 className="capitalize font-thin text-center text-lg text-white">
          chief Gbolahan
        </h2>
        <p className="font-open-Sans text-sm font-thin tracking-wide text-foreground">
          chiefgbolahan@gmail.com
        </p>
        <p className="font-open-Sans text-sm font-thin tracking-wide text-foreground">
          098 158 7986
        </p>
      </div>
    </div>
  );
};

export default DashAvatar;
