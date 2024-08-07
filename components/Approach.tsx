"use client";
import React from "react";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

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
    <motion.div ref={secRef} style={{
      scale: scale,
      x: xTransform,
    }} id="stack" className="container mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-black-100 text-center">My Favorite <span className="text-teal-400">Stack</span></h1>
      <p className="text-lg mb-8 text-black-100 text-center">Mostly using web technologies. <a href="#stack" className="text-teal-400">See complete list</a></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold ml-4">General Stack</h2>
          </div>
          <p>JavaScript, TypeScript, Node.js, npm/yarn/pnpm, Python, PHP</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold ml-4">Full Stack, Web API, Testing, CI/CD</h2>
          </div>
          <p>Remix, Next.js, Astro, REST API, Vitest, testing-library, GitHub Actions</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold ml-4">Frontend and UI Components</h2>
          </div>
          <p>Figma, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, React, React Router, Vue, Vue Router, Redux/RTK</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold ml-4">Backend and Database</h2>
          </div>
          <p>Express, NestJS, Prisma, MySQL/MariaDB, PostgreSQL/Neon, Firebase, Mongoose, MongoDB</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold ml-4">Deployment, Infra, Services</h2>
          </div>
          <p>Vercel, Netlify, Amazon Web Services (AWS)</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v6a9 9 0 0018 0V7m-9 9a9 9 0 009-9m0 0a9 9 0 00-9-9 9 9 0 00-9 9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold ml-4">Management, Repo, Misc</h2>
          </div>
          <p>VS Code, Git, GitHub, Vite, Turborepo</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Approach
