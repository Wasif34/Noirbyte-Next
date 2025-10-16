"use client";

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
  Facebook,
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
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/15dLaeJLgr/",
      label: "Facebook",
    },
    { icon: Twitter, href: "#", label: "Twitter" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/noirbyte_techsolutions?igsh=MTRlaW1ieWVmdGltbA==",
      label: "Instagram",
    },
  ];

  return (
    <footer className="relative bg-[#121700] border border-t-2 border-white/10 overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/8 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/6 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/4 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <img
                  src="/images/nb1-cropped.svg"
                  alt="NoirByte Logo"
                  className="h-8 w-8 z-10"
                />
              </div>
              <h3 className="font-black text-2xl text-white">
                Noir<span className="text-primary">Byte</span>
              </h3>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed">
              Crafting digital experiences that push boundaries and redefine
              possibilities. Where innovation meets excellence.
            </p>

            <div className="flex items-center gap-2 text-sm text-white/60">
              <Zap className="w-4 h-4 text-primary" />
              <span>Building the future, one byte at a time</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Services
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-white/60 hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-primary transition-colors duration-200" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-secondary transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-white/40 rounded-full group-hover:bg-secondary transition-colors duration-200" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Get in Touch
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
            </h4>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a
                  href="mailto:info@noirbyte.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  info@noirbyte.com
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4 text-secondary" />
                </div>
                <a
                  href="tel:+923366562329"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  +92 336 6562329
                </a>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span>Islamabad, Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <p className="text-sm text-white/60 mb-4">Follow us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter section */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold text-white mb-2">
                Stay in the loop
              </h4>
              <p className="text-white/60">
                Get the latest updates on our projects and tech insights.
              </p>
            </div>

            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-lg hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-2 text-white/60 text-sm text-center justify-center">
            <span>© {currentYear} NoirByte. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by our amazing team</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-white/60 hover:text-primary transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white/60 hover:text-secondary transition-colors duration-200 text-sm"
            >
              Terms of Service
            </a>

            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 hover:shadow-lg transition-all duration-300 group hover:scale-110"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-primary/30" />
    </footer>
  );
};

export default Footer;
