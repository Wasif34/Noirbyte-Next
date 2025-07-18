"use client";
import { motion } from "framer-motion";
import { PinIcon } from "lucide-react"; // You can replace this with any other icon

const ThreeDPin = ({ title, subtitle, icon: Icon = PinIcon, className = "" }) => {
  return (
    <motion.div
      whileHover={{ rotateX: 5, rotateY: -5, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`bg-white shadow-2xl rounded-2xl p-4 w-full max-w-xs text-center transform transition-transform duration-300 ${className}`}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="flex flex-col items-center gap-3">
        <Icon className="w-10 h-10 text-purple-600 drop-shadow-md" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </motion.div>
  );
};

export default ThreeDPin;
