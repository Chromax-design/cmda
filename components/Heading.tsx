import React from "react";

const Heading = ({
  heading,
  className,
}: {
  heading: string;
  className?: string;
}) => {
  return (
    <h2
      className={`capitalize font-poppins max-lg:text-center text-3xl lg:text-4xl font-semibold max-w-2xl ${className}`}
    >
      {heading}
    </h2>
  );
};

export default Heading;
