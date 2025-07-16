"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideArrowRight } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiAngular,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiFramer,
} from "react-icons/si";

export default function ServicesClient() {
  return (
    <section className="relative bg-black py-24 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16 pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-500" />

      <div className="relative z-10 text-center mb-20 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent tracking-tight leading-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          From Vision to Execution:
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400">
            Our Process & Technologies
          </span>
        </motion.h2>

        <motion.p
          className="text-neutral-400 text-lg md:text-xl mt-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We don’t just build apps — we craft ecosystems. From intuitive
          interfaces to bulletproof backends, our stack and strategy evolve
          around your growth.
        </motion.p>

        <motion.p
          className="text-neutral-500 text-md mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Powered by industry-leading technologies, scalable architecture, and a
          design-first mindset.
        </motion.p>
      </div>

      {/* Step-by-step Process */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {processSteps.map((step, i) => (
          <motion.div
            key={i}
            className="relative group p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-md hover:shadow-emerald-500/20 transition-shadow"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--mouse-x",
                `${e.clientX - rect.left}px`
              );
              e.currentTarget.style.setProperty(
                "--mouse-y",
                `${e.clientY - rect.top}px`
              );
            }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity"
              style={{
                background:
                  "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.05), transparent 40%)",
              }}
            />
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="text-4xl text-emerald-400">{step.icon}</div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-400 mb-3">{step.description}</p>
                <ul className="flex flex-wrap gap-3 mt-3 text-sm text-neutral-300">
                  {step.technologies.map((tech, idx) => (
                    <li
                      key={idx}
                      className="bg-white/[0.04] border border-white/[0.05] px-3 py-1 rounded-lg backdrop-blur"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const processSteps = [
  {
    title: "1. Discovery & Strategy",
    description:
      "Every great product starts with clarity. We dive deep into your goals, users, and industry to define the right approach — aligning business vision with a rock-solid tech foundation.",
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    icon: <SiReact className="text-emerald-400 w-10 h-10" />,
  },
  {
    title: "2. Design & Prototyping",
    description:
      "With wireframes, interactive prototypes, and pixel-perfect UI systems, we bring ideas to life. Every screen is crafted with intent — sleek, intuitive, and always on-brand.",
    technologies: ["Bootstrap", "Aceternity UI", "Framer Motion"],
    icon: <SiFramer className="text-purple-400 w-10 h-10" />,
  },
  {
    title: "3. Development & Engineering",
    description:
      "From responsive frontends to scalable APIs and bulletproof databases — we engineer solutions that don’t just work, they scale. Clean code. Best practices. Always.",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL"],
    icon: <SiNodedotjs className="text-green-500 w-10 h-10" />,
  },
  {
    title: "4. Mobile & Real-Time Apps",
    description:
      "Whether it’s mobile-first or cross-platform, we create blazing-fast apps powered by real-time data, rich UI, and optimized performance — all tailored for modern users.",
    technologies: ["React Native", "Firebase", "MySQL"],
    icon: <SiFirebase className="text-yellow-400 w-10 h-10" />,
  },
  {
    title: "5. Analytics & Optimization",
    description:
      "Beyond launch lies evolution. We integrate analytics, monitor performance, and continuously fine-tune — ensuring your product grows smarter, faster, and more valuable over time.",
    technologies: ["SQL", "Monitoring", "Data Studio"],
    icon: <span className="text-blue-300 text-3xl">📊</span>,
  },
  {
    title: "6. Frontend Engineering",
    description:
      "Pixel-perfect, dynamic UIs using modern frameworks and design systems — delivering performance and visual consistency across devices.",
    technologies: [
      "React",
      "Angular",
      "State Management",
      "Component Libraries",
    ],
    icon: <span className="text-pink-400 text-3xl">🧩</span>,
  },
  {
    title: "7. Backend Systems",
    description:
      "Secure, scalable server-side architecture built for performance and flexibility — from RESTful APIs to GraphQL endpoints.",
    technologies: ["Node.js", "Django", "GraphQL", "JWT Auth"],
    icon: <span className="text-orange-400 text-3xl">🛠️</span>,
  },
  {
    title: "8. Cloud Infrastructure",
    description:
      "Deploy, scale, and monitor apps on resilient cloud platforms — optimized for uptime, speed, and cost-efficiency.",
    technologies: ["AWS", "Azure", "Load Balancing", "VPC"],
    icon: <span className="text-blue-400 text-3xl">☁️</span>,
  },
  {
    title: "9. DevOps & Automation",
    description:
      "Seamless integration and delivery pipelines with infrastructure as code — ensuring fast, reliable deployments and version control.",
    technologies: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    icon: <span className="text-neutral-300 text-3xl">⚙️</span>,
  },
  {
    title: "10. Cross-Platform Development",
    description:
      "Unified codebases for consistent experiences across mobile, web, and desktop — cutting cost and time-to-market.",
    technologies: ["React Native", "Flutter", "PWA", "Electron"],
    icon: <span className="text-green-400 text-3xl">🔄</span>,
  },
  {
    title: "11. AI Integration",
    description:
      "Integrate machine intelligence into your product — from chat automation to personalized user experiences powered by large language models.",
    technologies: ["OpenAI", "LLMs", "NLP", "Recommendation Engines"],
    icon: <span className="text-indigo-400 text-3xl">🧠</span>,
  },
];
