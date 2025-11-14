// "use client";
// import React from "react";
// import Image from "next/image";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValue,
//   useSpring,
//   AnimatePresence,
// } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// const FloatingParticles = () => {
//   const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 });
//   const particles = Array.from({ length: 50 }, (_, i) => i);

//   useEffect(() => {
//     // Set window dimensions after component mounts (client-side only)
//     const updateWindowSize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     updateWindowSize();
//     window.addEventListener("resize", updateWindowSize);

//     return () => window.removeEventListener("resize", updateWindowSize);
//   }, []);

//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((particle) => (
//         <motion.div
//           key={particle}
//           className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
//           initial={{
//             x: Math.random() * windowSize.width,
//             y: Math.random() * windowSize.height,
//           }}
//           animate={{
//             x: Math.random() * windowSize.width,
//             y: Math.random() * windowSize.height,
//           }}
//           transition={{
//             duration: Math.random() * 20 + 10,
//             repeat: Infinity,
//             repeatType: "reverse",
//             ease: "linear",
//           }}
//           style={{
//             boxShadow: "0 0 6px #60a5fa",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// const useTypewriter = (text, speed = 50) => {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let i = 0;
//     const typingInterval = setInterval(() => {
//       if (i < text.length) {
//         setDisplayText(text.slice(0, i + 1));
//         i++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, speed);

//     return () => clearInterval(typingInterval);
//   }, [text, speed]);

//   return displayText;
// };

// // Magnetic Button Component
// const MagneticButton = ({ children, className, ...props }) => {
//   const ref = useRef(null);
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);
//   const springX = useSpring(x, { stiffness: 150, damping: 15 });
//   const springY = useSpring(y, { stiffness: 150, damping: 15 });

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!ref.current) return;
//       const rect = ref.current.getBoundingClientRect();
//       const centerX = rect.left + rect.width / 2;
//       const centerY = rect.top + rect.height / 2;
//       x.set((e.clientX - centerX) * 0.1);
//       y.set((e.clientY - centerY) * 0.1);
//     };

//     const handleMouseLeave = () => {
//       x.set(0);
//       y.set(0);
//     };

//     const element = ref.current;
//     if (element) {
//       element.addEventListener("mousemove", handleMouseMove);
//       element.addEventListener("mouseleave", handleMouseLeave);
//       return () => {
//         element.removeEventListener("mousemove", handleMouseMove);
//         element.removeEventListener("mouseleave", handleMouseLeave);
//       };
//     }
//   }, [x, y]);

//   return (
//     <motion.button
//       ref={ref}
//       style={{ x: springX, y: springY }}
//       className={className}
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//       {...props}
//     >
//       {children}
//     </motion.button>
//   );
// };

// const ProjectsPage = ({ project }) => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const {
//     name,
//     subtitle,
//     heroBg,
//     ctaPrimaryText,
//     ctaPrimaryLink,
//     ctaSecondaryText,
//     ctaSecondaryLink,
//     detail,
//     techStack,
//     features,
//     metrics,
//     images,
//   } = project;

//   const typewriterName = useTypewriter(name, 100);
//   const typewriterSubtitle = useTypewriter(subtitle, 50);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full py-20 bg-[#020817] text-white overflow-hidden"
//     >
//       {/* Floating Particles */}
//       <FloatingParticles />

//       {/* Custom Cursor */}
//       {/* <motion.div
//                 className="fixed top-0 left-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 mix-blend-difference"
//                 style={{
//                     x: mousePosition.x - 12,
//                     y: mousePosition.y - 12,
//                 }}
//                 animate={{
//                     scale: isHovering ? 1.5 : 1,
//                 }}
//                 transition={{ type: "spring", stiffness: 500, damping: 28 }}
//             /> */}

//       {/* Morphing Background Shapes */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1, 1.2, 1],
//             rotate: [0, 180, 360],
//             x: [0, 100, 0],
//             y: [0, -50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
//           animate={{
//             scale: [1.2, 1, 1.2],
//             rotate: [360, 180, 0],
//             x: [0, -150, 0],
//             y: [0, 100, 0],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       </div>

//       {/* Hero Section */}
//       <motion.div
//         className="container mx-auto px-6 flex flex-col md:flex-row gap-16 items-center justify-between relative z-10"
//         style={{ y }}
//       >
//         <div className="max-w-xl">
//           <motion.h2
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             {typewriterName}
//             <motion.span
//               animate={{ opacity: [1, 0] }}
//               transition={{
//                 duration: 0.8,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//               className="text-blue-400"
//             >
//               |
//             </motion.span>
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="text-lg text-gray-300"
//           >
//             {typewriterSubtitle}
//           </motion.p>
//           <motion.div
//             className="mt-6 flex gap-4"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             {/* <MagneticButton className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium overflow-hidden">
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"
//                 initial={false}
//                 animate={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//               />
//               <span className="relative z-10">{ctaPrimaryText}</span>
//             </MagneticButton>
//             <MagneticButton className="group relative border-2 border-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-medium overflow-hidden">
//               <motion.div
//                 className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
//                 initial={false}
//                 animate={{ opacity: 0 }}
//                 whileHover={{ opacity: 1 }}
//               />
//               <span className="relative z-10">{ctaSecondaryText}</span>
//             </MagneticButton> */}
//           </motion.div>
//         </div>
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="group relative"
//         >
//           <motion.div
//             className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000"
//             animate={{
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//           <div className="relative">
//             <Image
//               src={heroBg}
//               alt={name}
//               width={600}
//               height={400}
//               className="rounded-xl shadow-2xl transform group-hover:scale-105 transition duration-500"
//             />
//             <motion.div
//               className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent"
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             />
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Detail Section */}
//       <motion.div
//         className="container mx-auto px-6 mt-20 relative z-10"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
//           >
//             {detail}
//           </motion.p>
//           <motion.div
//             className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* Tech Stack */}
//       {techStack?.length > 0 && (
//         <motion.div
//           className="container mx-auto px-6 mt-16 relative z-10"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <motion.h3
//             className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
//             initial={{ scale: 0.8 }}
//             whileInView={{ scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Tech Stack
//           </motion.h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
//             {techStack.map((tech, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 initial={{ opacity: 0, y: 20, rotateX: -15 }}
//                 whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 100,
//                 }}
//                 whileHover={{
//                   scale: 1.1,
//                   rotateY: 10,
//                   z: 50,
//                 }}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-sm group-hover:blur-md transition-all"
//                   animate={{
//                     rotate: [0, 360],
//                   }}
//                   transition={{
//                     duration: 20,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 />
//                 <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-white/20 text-white px-4 py-3 rounded-xl text-center group-hover:border-blue-400/50 transition-all">
//                   <span className="text-sm font-medium">{tech}</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {/* Features */}
//       {features?.length > 0 && (
//         <motion.div
//           className="container mx-auto px-6 mt-16 relative z-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           <motion.h3
//             className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
//             initial={{ y: -20 }}
//             whileInView={{ y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//           >
//             Features
//           </motion.h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
//                 whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.6,
//                   delay: index * 0.15,
//                   type: "spring",
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                   rotateX: 5,
//                   y: -10,
//                 }}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl blur-sm group-hover:blur-md transition-all"
//                   animate={{
//                     scale: [1, 1.05, 1],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//                 <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-white/10 p-6 rounded-xl group-hover:border-purple-400/50 transition-all">
//                   <motion.div
//                     className="text-white/90 leading-relaxed"
//                     initial={{ y: 10, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: 0.2 + index * 0.1 }}
//                   >
//                     {feature}
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {/* Metrics */}
//       {metrics && (
//         <div className="container mx-auto px-6 mt-16">
//           <h3 className="text-2xl font-semibold mb-4 text-center">Impact</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//             {Object.entries(metrics).map(([key, value], i) => (
//               <div key={i} className="bg-white/5 p-4 rounded-xl">
//                 <h4 className="text-2xl font-bold text-white">{value}</h4>
//                 <p className="text-gray-400 text-sm capitalize">{key}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Image Showcase */}
//       {images?.length > 0 && (
//         <motion.div
//           className="container mx-auto px-6 mt-20 relative z-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//         >
//           <motion.h3
//             className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
//             initial={{ scale: 0.8, rotateX: -15 }}
//             whileInView={{ scale: 1, rotateX: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             Visual Showcase
//           </motion.h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {images.map((img, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative"
//                 initial={{
//                   opacity: 0,
//                   y: 50,
//                   rotateY: index % 2 === 0 ? -20 : 20,
//                 }}
//                 whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
//                 viewport={{ once: true }}
//                 transition={{
//                   duration: 0.8,
//                   delay: index * 0.2,
//                   type: "spring",
//                   stiffness: 80,
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                   rotateX: 5,
//                   z: 30,
//                 }}
//               >
//                 <motion.div
//                   className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                   animate={{
//                     rotate: [0, 360],
//                   }}
//                   transition={{
//                     duration: 15,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 />
//                 <div className="relative overflow-hidden rounded-2xl border border-white/20 group-hover:border-cyan-400/50 transition-all">
//                   <Image
//                     src={img}
//                     alt={`Project Screenshot ${index + 1}`}
//                     width={800}
//                     height={500}
//                     className="rounded-2xl transform group-hover:scale-110 transition duration-700"
//                   />
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   />
//                   <motion.div
//                     className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
//                     whileHover={{ scale: 1.2, rotate: 180 }}
//                   >
//                     <span className="text-xs font-bold text-white">
//                       {index + 1}
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ProjectsPage;


"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

/* ---------------------------
   Gentle Floating Orbs (Elegant)
   --------------------------- */
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute w-96 h-96 rounded-full"
          initial={{
            x: i === 0 ? "-20%" : i === 1 ? "70%" : "30%",
            y: i === 0 ? "-10%" : i === 1 ? "80%" : "-30%",
            scale: 0.8,
          }}
          animate={{
            x: i === 0 ? "-10%" : i === 1 ? "80%" : "40%",
            y: i === 0 ? "10%" : i === 1 ? "60%" : "-20%",
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 28 + i * 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            background: `radial-gradient(circle at 30% 30%, var(--primary)08, transparent 70%)`,
            filter: "blur(80px)",
            opacity: 0.4,
          }}
        />
      ))}
    </div>
  );
};

/* ---------------------------
   Subtle Typewriter (Natural Pace)
   --------------------------- */
const useTypewriter = (text = "", speed = 70) => {
  const [displayText, setDisplayText] = useState("");
  useEffect(() => {
    if (!text) return;
    let i = 0;
    setDisplayText("");
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else clearInterval(timer);
    }, speed + Math.random() * 40); // natural variation
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayText;
};
/* -------------------------------------------------
   Tiny mouse-position hook – used for tilt & glow
   ------------------------------------------------- */
const useMouse = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return { ref, mouse };
};
/* ---------------------------
   Magnetic Button (Smoother)
   --------------------------- */
const MagneticButton = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.12);
    y.set((e.clientY - cy) * 0.12);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden px-8 py-4 rounded-full font-medium transition-all duration-300 ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

/* ---------------------------
   Main ProjectsPage – Elegant Redesign
   --------------------------- */
const ProjectsPage = ({ project }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0.7]);

  const {
    name,
    subtitle,
    heroBg,
    ctaPrimaryText,
    ctaPrimaryLink,
    ctaSecondaryText,
    ctaSecondaryLink,
    detail,
    techStack,
    features,
    metrics,
    images,
  } = project || {};

  const typewriterName = useTypewriter(name || "", 80);
  const typewriterSubtitle = useTypewriter(subtitle || "", 60);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <FloatingOrbs />

      {/* Hero Section – Clean & Breathable */}
      <motion.section
        style={{ y: yHero, opacity: opacityHero }}
        className="relative z-10 pt-32 pb-24 px-6"
      >
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span className="bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] bg-clip-text text-transparent">
                    {typewriterName}
                  </span>
                  <motion.span
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block ml-2 text-[var(--primary)]"
                  >
                    _
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mt-6 text-xl md:text-2xl text-[var(--muted-foreground)] leading-relaxed"
                >
                  {typewriterSubtitle}
                </motion.p>
              </div>

              {(ctaPrimaryText || ctaSecondaryText) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap gap-4"
                >
                  {ctaPrimaryText && (
                    <MagneticButton
                      className="bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg"
                      onClick={() => ctaPrimaryLink && window.open(ctaPrimaryLink, "_blank")}
                    >
                      {ctaPrimaryText}
                    </MagneticButton>
                  )}
                  {ctaSecondaryText && (
                    <MagneticButton
                      className="bg-transparent border border-[var(--border)] backdrop-blur-sm"
                    >
                      {ctaSecondaryText}
                    </MagneticButton>
                  )}
                </motion.div>
              )}
            </div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={heroBg}
                  alt={name}
                  width={800}
                  height={540}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Detail */}
      {detail && (
        <section className="container mx-auto px-6 max-w-4xl py-20">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl leading-relaxed text-[var(--muted-foreground)] text-center"
          >
            {detail}
          </motion.p>
        </section>
      )}

      {/* Tech Stack – Minimal Cards */}
     {techStack?.length > 0 && (
  <section className="container mx-auto px-6 py-20">
    <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
      Built With
    </h3>

    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-6">
      {techStack.map((tech, i) => {
        const { ref, mouse } = useMouse();

        const tiltX = useTransform(
          useMotionValue(mouse.current.y),
          (v) => ((v - 60) / 120) * -12
        );
        const tiltY = useTransform(
          useMotionValue(mouse.current.x),
          (v) => ((v - 60) / 120) * 12
        );

        return (
          <motion.div
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 120 }}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformPerspective: 800,
            }}
            className="group relative h-28"
          >
            {/* Glow border that follows cursor */}
            <motion.div
              className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `radial-gradient(200px circle at ${mouse.current.x}px ${mouse.current.y}px, var(--primary)20, transparent 70%)`,
                filter: "blur(12px)",
              }}
            />

            <div className="relative h-full flex flex-col items-center justify-center gap-2 bg-[var(--card)]/90 backdrop-blur-md border border-[var(--border)] rounded-2xl p-4 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[var(--primary)]/40">
              {/* Replace with your own SVG icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                {tech[0]}
              </div>
              <span className="text-sm font-medium text-[var(--foreground)]">
                {tech}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
)}

      {/* Features – Clean Grid */}
      {features?.length > 0 && (
  <section className="container mx-auto px-6 py-20">
    <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] bg-clip-text text-transparent">
      Key Features
    </h3>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {features.map((f, i) => {
        const { ref, mouse } = useMouse();

        const tiltX = useTransform(
          useMotionValue(mouse.current.y),
          (v) => ((v - 100) / 200) * -10
        );
        const tiltY = useTransform(
          useMotionValue(mouse.current.x),
          (v) => ((v - 100) / 200) * 10
        );

        return (
          <motion.div
            key={i}
            ref={ref}
            initial={{ opacity: 0, y: 40, rotateX: -12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 100 }}
            style={{
              rotateX: tiltX,
              rotateY: tiltY,
              transformPerspective: 1000,
            }}
            className="group relative"
          >
            {/* Subtle glow under the card */}
            <motion.div
              className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `radial-gradient(300px circle at ${mouse.current.x}px ${mouse.current.y}px, var(--primary)15, transparent 70%)`,
                filter: "blur(20px)",
              }}
            />

            <div className="relative p-8 bg-[var(--card)]/80 backdrop-blur-md border border-[var(--border)] rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:border-[var(--primary)]/30">
              {/* Icon placeholder – replace with real icons */}
              <div className="mb-4 w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] rounded-xl flex items-center justify-center text-white text-xl">
                {String(i + 1).padStart(2, "0")}
              </div>

              <p className="text-lg leading-relaxed text-[var(--foreground)]">
                {f}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
)}

      {/* Visual Showcase */}
      {images?.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <h3 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
            Visual Showcase
          </h3>
          <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <Image
                  src={img}
                  alt={`Screenshot ${i + 1}`}
                  width={900}
                  height={600}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectsPage;