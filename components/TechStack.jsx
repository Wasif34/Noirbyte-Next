"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PointerHighlight } from "../ui/point-highlighter";
import { useRouter } from "next/navigation";

const techLogosBase = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    size: 60,
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    size: 55,
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    size: 50,
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    size: 50,
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    size: 55,
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    size: 55,
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    size: 60,
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    size: 55,
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    size: 50,
  },
  {
    name: "Flutter",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    size: 50,
  },
  {
    name: "Express",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    size: 55,
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    size: 45,
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    size: 55,
  },
  {
    name: "PostgreSQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    size: 55,
  },
  {
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    size: 55,
  },
  {
    name: "Kubernetes",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    size: 50,
  },
  {
    name: "GraphQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    size: 50,
  },
  {
    name: "Vue.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    size: 50,
  },
  {
    name: "Angular",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    size: 50,
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    size: 55,
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    size: 55,
  },
  {
    name: "Go",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    size: 55,
  },
];

const iconPositions = [
  { x: "5%", y: "10%" },
  { x: "15%", y: "30%" },
  { x: "25%", y: "15%" },
  { x: "35%", y: "35%" },
  { x: "45%", y: "20%" },
  { x: "55%", y: "40%" },
  { x: "65%", y: "10%" },
  { x: "75%", y: "25%" },
  { x: "85%", y: "35%" },
  { x: "10%", y: "50%" },
  { x: "20%", y: "65%" },
  { x: "30%", y: "55%" },
  { x: "40%", y: "70%" },
  { x: "50%", y: "60%" },
  { x: "60%", y: "75%" },
  { x: "70%", y: "50%" },
  { x: "80%", y: "65%" },
  { x: "90%", y: "55%" },
];

function FloatingIcon({ logo, position, index }) {
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: logo.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className="absolute opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer"
      variants={floatingVariants}
      animate="animate"
      whileHover={{
        scale: 1.2,
        rotate: 10,
        transition: { duration: 0.3 },
      }}
      style={{
        left: position.x,
        top: position.y,
        width: logo.size,
        height: logo.size,
        filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
      }}
    >
      <img
        src={logo.src || "/placeholder.svg"}
        alt={logo.name}
        className="w-full h-full object-contain"
        style={{ imageRendering: "crisp-edges" }}
      />
    </motion.div>
  );
}

export function TechStack() {
  const [containerDimensions, setContainerDimensions] = useState({
    width: 600,
    height: 400,
  });
  const [animatedLogos, setAnimatedLogos] = useState([]);
  const [particles, setParticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setAnimatedLogos(
      techLogosBase.map((logo, index) => ({
        ...logo,
        duration: 4 + Math.random() * 2,
        id: `${logo.name}-${index}`,
        position: iconPositions[index] || {
          x: `${Math.random() * 80}%`,
          y: `${Math.random() * 80}%`,
        },
      }))
    );

    setParticles(
      [...Array(5)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: 6 + Math.random() * 2,
      }))
    );

    const updateDimensions = () => {
      setContainerDimensions({
        width: window.innerWidth > 768 ? 600 : 400,
        height: 400,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <section className="py-20 bg-[#121700] relative overflow-hidden">
      <div className="absolute inset-0" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-10 text-center lg:text-left">
            <div>
              <h2 className="text-4xl font-bevellierBold sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our{" "}
                <span className="font-TikTok bg-accent bg-clip-text text-transparent">
                  Tech Stack
                </span>
              </h2>
              <div className="font-bevellierLight text-gray-300 text-base sm:text-lg leading-relaxed">
                Our tech stack covers the full spectrum of software development,
                including front-end technologies like{" "}
                <PointerHighlight
                  rectangleClassName="bg-primary leading-loose"
                  pointerClassName="text-primary h-3 w-3"
                  containerClassName="inline-block mx-1"
                >
                  <span className="relative z-10 font-bevellierLight text-gray-900">
                    React and Angular, back-end frameworks such as Node.js and
                    Django, cloud solutions with AWS and Azure, and modern tools
                    like Kubernetes, Docker, and CI/CD pipelines.
                  </span>
                </PointerHighlight>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-[#121700] rounded-2xl p-6 border border-thirdary w-[600px] mx-auto lg:mx-0"
            >
              <h3 className="text-white text-lg sm:text-xl font-bevellier mb-4">
                Tailored services to match your needs, see what we offer!
              </h3>
              <button
                className="bg-primary text-white px-6 py-3 rounded-lg font-bevellierLight hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                onClick={() => router.push("/services")}
              >
                Discover Our Services
              </button>
            </motion.div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative mt-12 lg:mt-0">
            <div
              className="relative mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-full"
              style={containerDimensions}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-3xl" />

              {animatedLogos.map((logo, i) => (
                <FloatingIcon
                  key={logo.id}
                  logo={logo}
                  position={logo.position}
                  index={i}
                />
              ))}

              {particles.map((p, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full opacity-40"
                  animate={{
                    x: [0, p.x],
                    y: [0, p.y],
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeInOut",
                  }}
                  style={{ left: p.left, top: p.top }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
