import * as React from "react";
import { cn } from "@/lib/util";

function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-gray-900 text-white hover:bg-gray-800",
    secondary: "border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300",
    destructive: "border-transparent bg-red-500 text-white hover:bg-red-600",
    outline: "text-gray-900 border-gray-300 bg-transparent hover:bg-gray-100",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export { Badge };
