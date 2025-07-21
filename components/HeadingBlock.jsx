"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/util";

export const HeadingBlock = () => {
  return (
    <div className="h-[100vh] sm:h-[90vh] md:h-[85vh] lg:h-[75vh] relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase font-titillium font-light text-center mb-4 sm:mb-6 md:mb-8 text-white relative z-20 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        <span className="font-black">NoirByte</span> 
        <span className="block sm:inline"> Crafts Code</span>
        <br className="hidden sm:block" />
        <span className="block sm:inline">
          <span className="font-black">Delivers</span> Impact
        </span>
        <br className="hidden sm:block" />
        <span className="block sm:inline">
          <span className="font-black">Drives</span> the Future
        </span>
      </h1>

      {/* Optional Subtitle for better mobile experience */}
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 text-center max-w-2xl mx-auto relative z-20 px-4 mt-4 sm:mt-6 md:mt-8 leading-relaxed">
        Innovative solutions that transform ideas into powerful digital experiences
      </p>
    </div>
  );
};

function BackgroundBoxesDemo() {
  return (
    <div className="h-64 sm:h-80 md:h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg px-4">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white relative z-20 text-center")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 sm:mt-4 text-sm sm:text-base text-neutral-300 relative z-20 px-4 max-w-md">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
