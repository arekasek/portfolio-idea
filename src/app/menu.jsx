import React from "react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="w-full p-8 z-50 fixed top-0 flex flex-row justify-end gap-10 text-white text-sm font-bold tracking-widest ">
      <Link href="#">Resume</Link>
      <Link href="#">Contact</Link>
      <Link href="#">Projects</Link>
    </div>
  );
}
