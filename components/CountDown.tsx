"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const targetDate = new Date("2026-08-26T00:00:00");

const getTimeLeft = () => {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const ColoredBorder = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="gradient-border relative rounded-lg py-6 px-8 overflow-hidden">
      {children}
    </div>
  );
};

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!hasMounted || !timeLeft) return null;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "easeOut",
        duration: 1,
      }}
      className="flex gap-4 text-3xl font-bold text-center font-poppins"
    >
      <ColoredBorder>
        <div>{timeLeft.days}</div>
        <div className="text-sm uppercase">Days</div>
      </ColoredBorder>
      <ColoredBorder>
        <div>{timeLeft.hours}</div>
        <div className="text-sm uppercase">Hours</div>
      </ColoredBorder>
      <ColoredBorder>
        <div>{timeLeft.minutes}</div>
        <div className="text-sm uppercase">Min</div>
      </ColoredBorder>
      <ColoredBorder>
        <div>{timeLeft.seconds}</div>
        <div className="text-sm uppercase">Sec</div>
      </ColoredBorder>
    </motion.div>
  );
};

export default CountDown;
