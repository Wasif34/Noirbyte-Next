"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/util";

export const HeadingBlock = () => {
  return (
    <div className="h-[75vh] relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className="text-9xl uppercase font-titillium font-light text-center md:text-8xl mb-4 text-white relative z-20">
        <span className="font-black">Explore</span> Our Expertise <br></br>{" "}
        <span className="font-black">Excellence, Efficiency</span> <br></br>
        <span className="font-black">Experience</span> in Sync!{" "}
      </h1>
    </div>
  );

  //   return (
  //     <div className="font-bold w-full h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-20 flex justify-center">
  //
  //     </div>
  //   );
};

function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
