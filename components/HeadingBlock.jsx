"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/util";

export const HeadingBlock = () => {
  return (
    <div className="h-[100vh] sm:h-[90vh] md:h-[85vh] lg:h-[75vh] relative w-full overflow-hidden bg-background flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0 w-full h-full bg-card z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl uppercase font-bevellierLight text-center mb-4 sm:mb-6 md:mb-8 text-foreground relative z-20 leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
        <span className="font-bevellierBlack text-primary">NoirByte</span>
        <span className="block sm:inline"> Crafts Code</span>
        <br className="hidden sm:block" />
        <span className="block sm:inline">
          <span className="font-bevellierBlack text-accent">Delivers</span>{" "}
          Impact
        </span>
        <br className="hidden sm:block" />
        <span className="block sm:inline">
          <span className="font-bevellierBlack text-secondary">Drives</span> the
          Future
        </span>
      </h1>
    </div>
  );
};
