'use client'
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OpeningAnimation from "@/components/Opening";
import RecentProjects from "@/components/RecentProjects";

export default function Home() {
  return (
    <>
      <OpeningAnimation />
      <main className="relative bg-white overflow-clip flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Navbar />
          <Approach />
          <RecentProjects />
          <Footer />
        </div>
      </main>
    </>
  );
}
