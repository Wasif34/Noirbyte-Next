"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What services does NoirByte offer?",
    answer:
      "NoirByte specializes in full-stack web development, mobile app development, AI/ML solutions, cloud infrastructure, and digital transformation services. We work with modern technologies to deliver cutting-edge solutions for businesses of all sizes.",
  },
  {
    id: 2,
    question: "How do I get started with a project?",
    answer:
      "Getting started is easy! Simply contact us through our contact form or email. We'll schedule a consultation to discuss your project requirements, timeline, and budget. From there, we'll provide a detailed proposal and project roadmap.",
  },
  {
    id: 3,
    question: "What technologies do you work with?",
    answer:
      "We work with a comprehensive tech stack including React, Next.js, Node.js, Python, TypeScript, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, and many more modern technologies to ensure your project is built with the best tools available.",
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. Simple websites may take 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    id: 5,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We provide various maintenance packages to suit different needs and budgets.",
  },
  {
    id: 6,
    question: "Can you help with existing projects?",
    answer:
      "Absolutely! We can help optimize, modernize, or add new features to existing applications. Our team is experienced in working with legacy codebases and can seamlessly integrate with your current development workflow.",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-900/50 transition-colors duration-200 group"
      >
        <h3 className="font-TikTok text-white text-lg font-medium pr-4 group-hover:text-teal-400 transition-colors duration-200">
          {faq.question}
        </h3>
        <motion.div
          className="flex-shrink-0"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-teal-400" />
          ) : (
            <Plus className="w-5 h-5 text-teal-400" />
          )}
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
          opacity: { duration: 0.25, delay: isOpen ? 0.1 : 0 },
        }}
        className="overflow-hidden"
        style={{
          willChange: "height, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <div className="pb-6 pr-8">
          <p className="font-TikTok text-gray-400 text-base leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

const FaqsUi = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const toggleItem = (id) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Title */}
          <div className="lg:sticky lg:top-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-TikTok text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              Frequently asked{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                questions
              </span>
              <p className="font-light mt-10 text-gray-300 text-sm">
                We are here to help you with any questions you may have. If you
                don't find what you need, please contact us at{" "}
                <a
                  href="mailto:info@noirbyte.co"
                  className="text-teal-400 underline"
                >
                  info@noirbyte.co
                </a>{" "}
                and we'll be happy to assist you.
              </p>
            </motion.h2>
          </div>

          {/* Right - FAQ Items */}
          <div className="space-y-0">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                layout="position"
              >
                <FaqItem
                  faq={faq}
                  isOpen={openItems.has(faq.id)}
                  onToggle={() => toggleItem(faq.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsUi;
