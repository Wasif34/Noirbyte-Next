"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ArrowUp,
  Code,
  Zap,
  Heart,
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Mobile Apps",
    "AI/ML Solutions",
    "Cloud Infrastructure",
    "Digital Transformation",
    "UI/UX Design",
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gray-950 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-90" />

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-30"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img
                  src="/images/nb1-cropped.svg"
                  alt="NoirByte Logo"
                  className="h-8 w-8 z-10"
                />
              </div>
              <h3 className="font-TikTok text-2xl font-bold text-white">
                Noir<span className="text-teal-400">Byte</span>
              </h3>
            </div>

            <p className="font-TikTok text-gray-300 mb-6 leading-relaxed">
              Crafting digital experiences that push boundaries and redefine
              possibilities. Where innovation meets excellence.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-teal-400" />
              <span className="font-TikTok">
                Building the future, one byte at a time
              </span>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-TikTok text-lg font-semibold text-white mb-6 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="font-TikTok text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-teal-400 transition-colors duration-200" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-TikTok text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className="font-TikTok text-gray-400 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-teal-400 transition-colors duration-200" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-TikTok text-lg font-semibold text-white mb-6 relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full" />
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <Mail className="w-4 h-4 text-teal-400" />
                </div>
                <a
                  href="mailto:info@noirbyte.com"
                  className="font-TikTok hover:text-teal-400 transition-colors duration-200"
                >
                  info@noirbyte.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <Phone className="w-4 h-4 text-teal-400" />
                </div>
                <a
                  href="tel:+92511234567"
                  className="font-TikTok hover:text-teal-400 transition-colors duration-200"
                >
                  +92 51 1234567
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-8 h-8 bg-gray-800/50 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-teal-400" />
                </div>
                <span className="font-TikTok">Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="font-TikTok text-sm text-gray-400 mb-4">
                Follow us
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-teal-500 hover:to-blue-500 hover:border-transparent transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800/50"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-TikTok text-xl font-semibold text-white mb-2">
                Stay in the loop
              </h4>
              <p className="font-TikTok text-gray-400">
                Get the latest updates on our projects and tech insights.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-TikTok font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gray-400">
            <span className="font-TikTok">
              © {currentYear} NoirByte. Made with
            </span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span className="font-TikTok">by our amazing team</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="font-TikTok text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-TikTok text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm"
            >
              Terms of Service
            </a>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 group"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50" />
    </footer>
  );
};

export default Footer;
