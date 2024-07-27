import React from "react";
import SplineScene from "./Spline";
import Menu from "./menu";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <>
      <Menu className="z-10" />
      <div className="z-0 overflow-y-auto snap-y snap-mandatory h-screen w-full scroll-smooth">
        <div className="h-screen w-full bg-black snap-start flex items-center justify-center">
          <SplineScene />
        </div>
        <div className="h-screen w-full snap-start flex items-center justify-center">
          <AboutMe />
        </div>
      </div>
    </>
  );
}
