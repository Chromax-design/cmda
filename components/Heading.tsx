import React from "react";

const Heading = ({ heading }: { heading: string }) => {
  return (
    <h2 className="capitalize font-poppins text-3xl md:text-4xl font-semibold max-w-2xl text-center">
      {heading}
    </h2>
  );
};

export default Heading;
