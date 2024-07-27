"use client";

import React from "react";
import Link from "next/link";
import { Turn as Hamburger } from "hamburger-react";

export default function Menu() {
  return (
    <div className="w-full p-8 z-50 fixed top-0 flex flex-row justify-end gap-10 text-white text-sm font-bold tracking-widest">
      <div className="hidden md:flex gap-10">
        <Link href="#">Resume</Link>
        <Link href="#">Contact</Link>
        <Link href="#">Projects</Link>
      </div>
      <div className="md:hidden">
        <Hamburger />
      </div>
    </div>
  );
}
