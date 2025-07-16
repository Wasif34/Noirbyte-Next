"use client";

import {
  Code,
  Zap,
  Shield,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollision";
import CountUp from "react-countup";
import Link from "next/link";

function AboutClient() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "3+", label: "Years Experience" },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description:
        "Complete web applications built with modern technologies like React, Node.js, and cloud infrastructure.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description:
        "Lightning-fast applications optimized for speed, scalability, and exceptional user experience.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Reliability",
      description:
        "Enterprise-grade security implementation with robust testing and monitoring systems.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Consulting & Strategy",
      description:
        "Technical guidance and architectural planning to bring your vision to life efficiently.",
    },
  ];

  const values = [
    "Innovation-driven solutions",
    "Transparent communication",
    "Agile development process",
    "Quality-first approach",
    "Continuous learning mindset",
    "Client-centric focus",
  ];

  return (
    <>
      <BackgroundBeamsWithCollisionDemo />
      <div className="min-h-screen bg-black text-white font-titillium">
        {/* Hero Section */}
        {/* <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              NoirByte
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Crafting exceptional digital experiences through cutting-edge full-stack development
            </p>
            <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-700">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Available for new projects</span>
            </div>
          </div>
        </div>
      </div> */}

        {/* Stats Section */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl md:text-4xl font-black text-white mb-2">
                    {stat.number === "24/7" ? (
                      <span>24/7</span>
                    ) : (
                      <CountUp
                        end={parseInt(stat.number)}
                        duration={3}
                        suffix={stat.number.replace(/[0-9]/g, "")}
                      />
                    )}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Building the Future,
                <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  One Line at a Time
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At NoirByte, we're passionate about transforming complex
                business challenges into elegant digital solutions. Our team of
                skilled developers specializes in creating robust, scalable web
                applications that drive growth and innovation.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                From concept to deployment, we leverage the latest technologies
                and best practices to deliver applications that not only meet
                today's requirements but are built to evolve with your business
                needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">
                    Web & Mobile Applications
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">AI Solutions</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-2 border border-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Cloud Solutions</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-2 gap-6">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
                      <span className="text-sm text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive technical services designed to accelerate your
              digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 h-full">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg mb-4 group-hover:bg-purple-600/30 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-12 border border-gray-700 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To empower businesses with innovative web solutions that combine
                technical excellence with strategic thinking. We believe in
                creating digital experiences that not only solve problems but
                inspire growth, foster engagement, and drive measurable results
                for our clients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your ideas into powerful
              digital solutions
            </p>
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              <Link href="/contact">
                <span>Start Your Project</span>
              </Link>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutClient;
