"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20"
    >
      {/* Simple Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="container relative z-10 px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Badge */}

            {/* Main Heading */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bevellierBold leading-relaxed space-y-4 tracking-wider">
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  We Design.
                </span>
                <span className="text-foreground">We Develop.</span>
                <span className="text-muted-foreground">We Deliver.</span>
              </h1>
            </div>

            {/* Description */}
            <div>
              <p className="text-lg md:text-xl font-bevellierLight text-muted-foreground leading-relaxed max-w-2xl">
                At Noirbyte, we specialize in Building cutting-edge web, app and
                AI powered solutions that drive innovation, efficiency, and
                growth. Whether it's a startup or an enterprise, we turn your
                ideas into beautifully engineered realities.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
                style={{ fontFamily: "Bevellier-Semibold, sans-serif" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Our Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <Link href="#contact">
                <button
                  className="px-8 py-4 bg-card border border-border rounded-xl font-semibold text-foreground hover:bg-muted transition-all duration-300 hover:scale-105"
                  style={{ fontFamily: "Bevellier-Semibold, sans-serif" }}
                >
                  Let's Talk
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8">
              <div className="flex items-center gap-8">
                <div>
                  <div
                    className="text-5xl font-bold text-primary"
                    style={{ fontFamily: "Bevellier-Bold, sans-serif" }}
                  >
                    100+
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
                  >
                    Projects Delivered
                  </div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div
                    className="text-5xl font-bold text-accent"
                    style={{ fontFamily: "Bevellier-Bold, sans-serif" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
                  >
                    Happy Clients
                  </div>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <div
                    className="text-5xl font-bold text-secondary"
                    style={{ fontFamily: "Bevellier-Bold, sans-serif" }}
                  >
                    5+
                  </div>
                  <div
                    className="text-sm text-muted-foreground"
                    style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
                  >
                    Years Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              {/* Main image container */}
              <div className="relative w-full max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl blur-2xl transform rotate-6" />
                <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
                  <Image
                    src="/images/Pana1.png"
                    alt="NoirByte AI Development"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
