import React from "react";
import SplineScene from "./Spline";
import Menu from "./menu";

export default function Home() {
  return (
    <>
      <Menu className="z-10"></Menu>
      <SplineScene className="z-0">page</SplineScene>
    </>
  );
}
