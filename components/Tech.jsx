import React from "react";
import StackComponent from "./TechStack";

export function TechStack() {
  const techStack = [
    {
      name: "React",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 engine.",
    },
    {
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
    },
    {
      name: "Framer Motion",
      description: "A production-ready motion library for React.",
    },
  ];

  return (
    //create grid of 2 columns for content and flaoting tech stack
    <div className="relative">
      <StackComponent />
    </div>
  );
}
