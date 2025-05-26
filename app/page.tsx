"use client";

import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Speakers from "@/components/Speakers";
import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";
import Schedule from "@/components/Schedule";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
          zIndex: 60,
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
      <Header />
      <Hero />
      <Schedule />
      <hr className="h-[0.5px] bg-gray-900 border-none" />
      <Speakers />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Home;
