"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "../ui/about-background-beams-with-collision";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col items-center justify-center h-screen bg-black w-full min-h-screen">
        <div className="text-4xl relative z-20 md:text-4xl lg:text-7xl font-titillium text-center text-white tracking-tight">
          NoirByte
        </div>

        <div className="mt-4 max-w-7xl text-2xl md:text-4xl lg:text-6xl font-bold text-center font-titillium tracking-tight">
          <div className="mx-auto [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-400 via-blue-400 to-emerald-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              {/* <span>Where Innovation Meets Precision.</span> */}
              <span>
                Crafting Intelligent Solutions in the Shadows of Complexity
              </span>
            </div>
          </div>
        </div>
        <div className="inline-flex items-center space-x-2 backdrop-blur-sm rounded-full px-6 py-3 border border-white mt-4 font-titillium">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-white font-sans tracking-tight">
            Available for new projects
          </span>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
