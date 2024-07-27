// components/AboutMe.js
"use client";

import React, { useRef } from "react";
import Typewriter from "typewriter-effect";

export default function AboutMe() {
  const typewriterRef = useRef(null);

  return (
    <div
      id="about-me"
      className="w-full h-screen bg-white flex items-center justify-center p-8"
    >
      <div className="text-center thunder text-[20rem]">
        <Typewriter
          ref={typewriterRef}
          options={{
            strings: ["HI!", "ABOUT ME."],
            autoStart: true,
            loop: true,
            delay: 350,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}
