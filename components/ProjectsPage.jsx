"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.6 },
  }),
};

const ProjectsPage = ({ project }) => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-screen text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1, transition: { duration: 1.2, ease: "easeOut" } }}
        >
          <Image
            src={project.heroBg}
            alt={`${project.name} Hero Background`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        <div className="relative z-10 px-4 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-10"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            {project.subtitle}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            <a
              href={project.ctaPrimaryLink}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.ctaPrimaryText}
            </a>
            <a
              href={project.ctaSecondaryLink}
              className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition-colors font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.ctaSecondaryText}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section id="journey" className="container mx-auto px-6 py-16 space-y-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Project Images */}
          <motion.div className="space-y-6" variants={fadeInUp}>
            {project.images.map((img, i) => (
              <motion.div
                key={i}
                className="relative h-80 w-full overflow-hidden rounded-xl shadow-lg"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Details */}
          <motion.div className="space-y-12" variants={fadeInUp}>
            <div>
              <h2 className="text-3xl font-semibold mb-4 border-b-4 border-blue-600 inline-block pb-1">
                Project Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.detail}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold mb-4 border-b-4 border-purple-600 inline-block pb-1">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;
