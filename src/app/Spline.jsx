import Spline from "@splinetool/react-spline/next";
import { MdOutlineArrowDropDown } from "react-icons/md";

export default function SplineScene() {
  return (
    <div className="relative w-full h-full">
      <Spline scene="https://prod.spline.design/3UFsPs9TuzqJjrKX/scene.splinecode" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 text-white text-[10rem]">
        <MdOutlineArrowDropDown className="animate-slow-bounce" />
      </div>
    </div>
  );
}
