"use client"; // Add this if in a Client Component
import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaGlobe, FaUsers, FaRocket } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import { useRouter } from "next/navigation";

export const Collaboration = () => {
  const features = [
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: "Global Reach",
      description: "International partnerships spanning continents",
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "Expert Team",
      description: "World-class developers and designers",
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Cutting-Edge",
      description: "Latest technologies and best practices",
    },
  ];

  const Router = useRouter();

  const techStack = [
    { icon: SiReact, name: "React", color: "hover:text-cyan-400" },
    { icon: SiNextdotjs, name: "Next.js", color: "hover:text-white" },
    { icon: SiNodedotjs, name: "Node.js", color: "hover:text-green-400" },
    { icon: SiTypescript, name: "TypeScript", color: "hover:text-blue-400" },
    { icon: SiTailwindcss, name: "Tailwind", color: "hover:text-teal-400" },
    { icon: SiMongodb, name: "MongoDB", color: "hover:text-green-500" },
  ];

  return (
    <section className="relative w-full py-20 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex md:flex-row flex-col justify-center items-center mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="p-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mr-4"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 40px rgba(168, 85, 247, 0.4)",
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaHandshake className="text-blue-400 w-8 h-8" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Collaboration Spotlight
            </h2>
          </motion.div>

          <motion.p
            className="text-neutral-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            NoirByte is proud to be the{" "}
            <b>Part of Development Powerhouse Behind </b>{" "}
            <motion.a
              href="https://xtreim.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative underline bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10">Xtreim</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.a>
            , a revolutionary platform transforming industries across the United
            States. Our <b>International Alliance of Elite Developers </b>{" "}
            crafts scalable, future-ready solutions.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                {/* <motion.div
                  className="text-blue-400 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                > */}
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                {/* </motion.div> */}
                <h3 className="text-white text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl font-bold text-white mb-8"
            whileHover={{ scale: 1.05 }}
          >
            Powered by Elite Technology Stack
          </motion.h3>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {techStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative"
                  whileHover={{ scale: 1.2, y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <motion.div
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-sm group-hover:border-white/30"
                    animate={{
                      rotateY: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                  >
                    <IconComponent
                      className={`w-8 h-8 text-neutral-400 transition-colors duration-300 ${tech.color}`}
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-8 left-1/2 transform  text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {tech.name}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => Router.push("/contact")}
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
