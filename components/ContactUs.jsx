"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

// Toast Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-gradient-to-r from-green-500/90 to-emerald-500/90",
          border: "border-green-400/50",
          icon: <CheckCircle className="w-5 h-5 text-white" />,
        };
      case "error":
        return {
          bg: "bg-gradient-to-r from-red-500/90 to-rose-500/90",
          border: "border-red-400/50",
          icon: <XCircle className="w-5 h-5 text-white" />,
        };
      case "loading":
        return {
          bg: "bg-gradient-to-r from-blue-500/90 to-indigo-500/90",
          border: "border-blue-400/50",
          icon: <Loader2 className="w-5 h-5 text-white animate-spin" />,
        };
      default:
        return {
          bg: "bg-gradient-to-r from-gray-500/90 to-slate-500/90",
          border: "border-gray-400/50",
          icon: null,
        };
    }
  };

  const styles = getToastStyles();

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ type: "spring", duration: 0.5 }}
      className={`fixed bottom-4 right-4 z-50 ${styles.bg} backdrop-blur-md border ${styles.border} rounded-xl shadow-2xl p-4 max-w-sm`}
    >
      <div className="flex items-center gap-3">
        {styles.icon}
        <div className="flex-1">
          <p className="text-white font-medium text-sm font-TikTok">
            {message}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors duration-200"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [toast, setToast] = useState(null);

  const showToast = (message, type) => {
    setToast({ message, type });
  };

  const hideToast = () => {
    setToast(null);
  };

  const onSubmit = async (data) => {
    showToast("Sending your message...", "loading");

    const formData = new FormData();

    // Add form data
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("access_key", "714287a5-ab90-4c70-b845-75de965b6fe0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        showToast(
          "Message sent successfully! We'll get back to you soon.",
          "success"
        );
        reset();
      } else {
        console.log("Error", responseData);
        showToast("❌ Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.log("Error", error);
      showToast("⚠️ Something went wrong. Please try again later.", "error");
    }
  };

  return (
    <section className="py-20 bg-gray-950 relative overflow-hidden">
      <BackgroundBeamsWithCollision className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />

      {/* Toast Container */}
      <AnimatePresence>
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={hideToast}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-TikTok text-4xl lg:text-5xl font-bold text-white mb-6 mt-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="font-TikTok text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to bring your business idea to life? Get in touch today for a
            free consultation and let's build something that stands out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Remove the action and method attributes */}

              {/* Hidden settings */}
              <input type="hidden" {...register("_captcha")} value="false" />
              <input
                type="hidden"
                {...register("_next")}
                value="https://noirbyte.com/thank-you"
              />
              <input
                type="hidden"
                {...register("_subject")}
                value="New Contact Form Submission"
              />

              {/* Name Field */}
              <div>
                <label className="font-TikTok block text-gray-300 mb-2 text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="font-TikTok block text-gray-300 mb-2 text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  placeholder="your.email@company.com"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label className="font-TikTok block text-gray-300 mb-2 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    pattern: {
                      value: /^[+]?[0-9\s\-\(\)]{10,}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  placeholder="+1 (555) 123-4567"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label className="font-TikTok block text-gray-300 mb-2 text-sm font-medium">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  {...register("company")}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Project Type */}
              <div>
                <label className="font-TikTok block text-gray-300 mb-2 text-sm font-medium">
                  Project Type
                </label>
                <select
                  {...register("projectType")}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select project type</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ai-ml">AI/ML Solutions</option>
                  <option value="cloud-infrastructure">
                    Cloud Infrastructure
                  </option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="font-TikTok block text-gray-300 mb-2 text-sm font-medium">
                  Tell us about your project *
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Describe your project requirements, goals, and any specific details..."
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={toast?.type === "loading"}
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-TikTok font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {toast?.type === "loading" ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                {toast?.type === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>

          {/* ...existing contact information section... */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Main Contact Info */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
              <h3 className="font-TikTok text-2xl font-bold text-white mb-6">
                Get in Touch
              </h3>
              <p className="font-TikTok text-gray-300 mb-8 leading-relaxed">
                We're here to help you transform your ideas into reality.
                Whether you need a simple website or a complex enterprise
                solution, our team is ready to assist.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-TikTok text-gray-300 text-sm">
                      Email us at
                    </p>
                    <a
                      href="mailto:info@noirbyte.com"
                      className="font-TikTok text-white font-semibold hover:text-teal-400 transition-colors duration-200"
                    >
                      info@noirbyte.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-TikTok text-gray-300 text-sm">
                      Call us at
                    </p>
                    <a
                      href="tel:+923366562329"
                      className="font-TikTok text-white font-semibold hover:text-teal-400 transition-colors duration-200"
                    >
                      +92 336 6562329
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700/30">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-TikTok text-gray-300 text-sm">
                      Based in
                    </p>
                    <p className="font-TikTok text-white font-semibold">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-2xl p-6 border border-teal-500/20">
              <h4 className="font-TikTok text-lg font-semibold text-white mb-3">
                ⚡ Quick Response
              </h4>
              <p className="font-TikTok text-gray-300 text-sm">
                We typically respond to all inquiries within 24 hours. For
                urgent matters, feel free to call us directly.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
