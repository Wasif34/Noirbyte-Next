"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import faqs from "../public/images/Questions-bro.png";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "What services does NoirByte offer?",
    answer:
      "NoirByte specializes in full-stack web development, mobile app development, AI/ML solutions, cloud infrastructure, and digital transformation services. We work with modern technologies to deliver cutting-edge solutions for businesses of all sizes.",
    category: "Services",
  },
  {
    id: 2,
    question: "How do I get started with a project?",
    answer:
      "Getting started is easy! Simply contact us through our contact form or email. We'll schedule a consultation to discuss your project requirements, timeline, and budget. From there, we'll provide a detailed proposal and project roadmap.",
    category: "Process",
  },
  {
    id: 3,
    question: "What technologies do you work with?",
    answer:
      "We work with a comprehensive tech stack including React, Next.js, Node.js, Python, TypeScript, AWS, Docker, Kubernetes, MongoDB, PostgreSQL, and many more modern technologies to ensure your project is built with the best tools available.",
    category: "Technical",
  },
  {
    id: 4,
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on complexity and scope. Simple websites may take 2-4 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
    category: "Timeline",
  },
  {
    id: 5,
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive post-launch support including bug fixes, security updates, performance optimization, and feature enhancements. We provide various maintenance packages to suit different needs and budgets.",
    category: "Support",
  },
  {
    id: 6,
    question: "Can you help with existing projects?",
    answer:
      "Absolutely! We can help optimize, modernize, or add new features to existing applications. Our team is experienced in working with legacy codebases and can seamlessly integrate with your current development workflow.",
    category: "Services",
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="group">
      <div className="bg-primary/10 shadow-sm border border-secondary/20 rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:border-primary/40">
        <button
          onClick={onToggle}
          className="w-full flex items-start justify-between text-left group"
        >
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-bevellierMedium tracking-wide text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                {faq.category}
              </span>
            </div>
            <h3 className="font-bevellierMedium text-foreground text-lg leading-relaxed group-hover:text-primary transition-colors duration-300">
              {faq.question}
            </h3>
          </div>

          <div
            className={`flex-shrink-0 mt-1 transform transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 border border-primary/20">
              <Plus className="w-4 h-4 text-primary" />
            </div>
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          }`}
        >
          <div className="border-t border-secondary/20 pt-4">
            <p className="text-foreground/80 font-bevellierLight leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqsUi = () => {
  const [openItems, setOpenItems] = useState(1); // Default open first item

  const toggleItem = (id) => {
    setOpenItems((prev) => {
      if (prev === id) {
        return null;
      } else {
        return id;
      }
    });
  };

  return (
    <section className="py-20 relative overflow-hidden bg-background">
      {/* Light theme background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side - Illustration and Title - Fixed position */}
            <div className="text-center lg:text-left lg:sticky lg:top-20">
              <div className="flex justify-center lg:justify-start mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
                  <Image
                    src={faqs}
                    alt="FAQs Illustration"
                    className="w-80 h-80 relative z-10 drop-shadow-lg"
                  />
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
                <HelpCircle className="w-4 h-4" />
                Got Questions?
              </div>

              <h2 className="text-4xl lg:text-6xl font-bevellierBold text-foreground leading-tight mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>

              <p className="text-foreground/70 font-bevellierLight text-lg leading-relaxed mb-8">
                Everything you need to know about our services and process.
                Can't find what you're looking for?
              </p>

              <a
                href="mailto:info@noirbyte.co"
                className="inline-flex items-center gap-2 bg-foreground text-secondary px-4 py-2 rounded-full text-sm font-medium border border-secondary/20 hover:bg-secondary/20 transition-colors duration-300"
              >
                <HelpCircle className="w-4 h-4" />
                Get in Touch
              </a>
            </div>

            {/* Right side - FAQ Items */}
            <div className="space-y-5">
              {faqData.map((faq) => (
                <FaqItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openItems === faq.id}
                  onToggle={() => toggleItem(faq.id)}
                />
              ))}
            </div>
          </div>

          {/* Bottom section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 border border-primary/20 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
              <h3 className="text-2xl font-bevellierBold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-foreground/70 font-bevellierLight mb-6">
                Our team is here to help you succeed. Let's discuss your project
                and find the perfect solution.
              </p>
              <button className="px-8 font-bevellierLight py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqsUi;
