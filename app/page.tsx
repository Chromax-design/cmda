"use client";

import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Speakers from "@/components/Speakers";
import { useEffect, useState } from "react";

const Home = () => {
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
      <Speakers />
    </main>
  );
};

export default Home;
