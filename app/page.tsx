"use client";

import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Speakers from "@/components/Speakers";
import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";
import Schedule from "@/components/Schedule";

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 50,
        }}
      />
      <HomeContent />
    </>
  );
};

const HomeContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <main className="">
      <Hero />
      <Schedule />
      <Speakers />
    </main>
  );
};

export default Home;
