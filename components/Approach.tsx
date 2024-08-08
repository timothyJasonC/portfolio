"use client";
import React from "react";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { skills } from "@/data";
import Skills from "./Skills";

const Approach = () => {
  const secRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    //target is the element that we want to track
    target: secRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const xTransform = useTransform(
    scrollYProgress,
    [1, 0.5, 0.1, 0],
    [-1000, 0, 0, 0]
  );

  

  return (
    <div id="stack" className="container mx-auto px-4 py-10">
      <motion.div ref={secRef} style={{
        scale: scale,
        x: xTransform,
      }}>
        <h1 className="text-4xl font-bold mb-4 text-black-100 text-center">My Favorite <span className="text-teal-400">Stack</span></h1>
        <p className="text-lg mb-8 text-black-100 text-center">Mostly using web technologies. <a href="#stack" className="text-teal-400">See complete list</a></p>
      </motion.div>
      <Skills />
    </div>
  );
}

export default Approach
