"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

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
          bg: "bg-primary",
          border: "border-primary/30",
          icon: <CheckCircle className="w-5 h-5 text-white" />,
        };
      case "error":
        return {
          bg: "bg-red-500",
          border: "border-red-400/30",
          icon: <XCircle className="w-5 h-5 text-white" />,
        };
      case "loading":
        return {
          bg: "bg-accent",
          border: "border-accent/30",
          icon: <Loader2 className="w-5 h-5 text-white animate-spin" />,
        };
      default:
        return {
          bg: "bg-muted",
          border: "border-muted/30",
          icon: null,
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div className="flex items-center gap-3">
      {styles.icon}
      <div className="flex-1">
        <p className="text-white font-medium text-sm">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-white/70 hover:text-white transition-colors duration-200"
      >
        <XCircle className="w-4 h-4" />
      </button>
    </div>
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
        showToast("Failed to send message. Please try again.", "error");
      }
    } catch (error) {
      console.log("Error", error);
      showToast("Something went wrong. Please try again later.", "error");
    }
  };

  const getToastStyles = () => {
    if (!toast) return {};

    switch (toast.type) {
      case "success":
        return {
          bg: "bg-primary",
          border: "border-primary/30",
        };
      case "error":
        return {
          bg: "bg-red-500",
          border: "border-red-400/30",
        };
      case "loading":
        return {
          bg: "bg-accent",
          border: "border-accent/30",
        };
      default:
        return {
          bg: "bg-muted",
          border: "border-muted/30",
        };
    }
  };

  return (
    <section className="py-20 bg-[#121700] relative overflow-hidden">
      {/* Dark theme background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 max-w-md">
          <div
            className={`${getToastStyles().bg} ${
              getToastStyles().border
            } backdrop-blur-sm rounded-xl p-4 border shadow-xl`}
          >
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={hideToast}
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            {/* <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/20">
              <Mail className="w-4 h-4" />
              Get in Touch
            </div> */}

            <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6 pt-4">
              Let's <span className="text-primary">Connect</span>
            </h2>

            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Ready to bring your business idea to life? Get in touch today for
              a free consultation and let's build something that stands out!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                  <label className="block text-white mb-2 text-sm font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
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
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
                    Project Type
                  </label>
                  <select
                    {...register("projectType")}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
                  >
                    <option value="" className="bg-[#121700] text-white">
                      Select project type
                    </option>
                    <option
                      value="web-development"
                      className="bg-[#121700] text-white"
                    >
                      Web Development
                    </option>
                    <option
                      value="mobile-app"
                      className="bg-[#121700] text-white"
                    >
                      Mobile App
                    </option>
                    <option value="ai-ml" className="bg-[#121700] text-white">
                      AI/ML Solutions
                    </option>
                    <option
                      value="cloud-infrastructure"
                      className="bg-[#121700] text-white"
                    >
                      Cloud Infrastructure
                    </option>
                    <option
                      value="consulting"
                      className="bg-[#121700] text-white"
                    >
                      Consulting
                    </option>
                    <option value="other" className="bg-[#121700] text-white">
                      Other
                    </option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
                    Tell us about your project *
                  </label>
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                    })}
                    placeholder="Describe your project requirements, goals, and any specific details..."
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={toast?.type === "loading"}
                  className="w-full bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-105"
                >
                  {toast?.type === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {toast?.type === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Main Contact Info */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  We're here to help you transform your ideas into reality.
                  Whether you need a simple website or a complex enterprise
                  solution, our team is ready to assist.
                </p>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Email us at</p>
                      <a
                        href="mailto:info@noirbyte.com"
                        className="text-white font-semibold hover:text-primary transition-colors duration-200"
                      >
                        info@noirbyte.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Call us at</p>
                      <a
                        href="tel:+923366562329"
                        className="text-white font-semibold hover:text-secondary transition-colors duration-200"
                      >
                        +92 336 6562329
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl border border-white/10 hover:bg-white/15 transition-colors duration-300">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Based in</p>
                      <p className="text-white font-semibold">
                        Islamabad, Pakistan
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-primary/10 rounded-3xl p-6 border border-primary/20">
                <h4 className="text-lg font-semibold text-white mb-3">
                  ⚡ Quick Response
                </h4>
                <p className="text-white/70 text-sm">
                  We typically respond to all inquiries within 24 hours. For
                  urgent matters, feel free to call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
