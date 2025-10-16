import { cn } from "@/lib/util";
import {
  IconTerminal2,
  IconCpu,
  IconCloud,
  IconLayoutDashboard,
  IconDeviceMobileMessage,
  IconTimeline,
  IconShieldCheck,
  IconLifebuoy,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Custom Software Development",
      description:
        "From idea to execution — we craft scalable web and mobile apps tailored to your unique business needs.",
      icon: <IconTerminal2 />,
      gradient: "primary",
    },
    {
      title: "AI-Powered Solutions",
      description:
        "We integrate cutting-edge AI and machine learning to future-proof your digital products and automate workflows.",
      icon: <IconCpu />,
      gradient: "primary",
    },
    {
      title: "Cloud & DevOps Expertise",
      description:
        "Streamline your infrastructure with secure, automated, and efficient DevOps pipelines on leading cloud platforms.",
      icon: <IconCloud />,
      gradient: "primary",
    },
    {
      title: "End-to-End Project Ownership",
      description:
        "From design to deployment, we handle every step with precision, accountability, and unwavering attention to detail.",
      icon: <IconLayoutDashboard />,
      gradient: "primary",
    },
    {
      title: "Cross-Platform Excellence",
      description:
        "Deliver consistent, beautiful experiences across web, iOS, and Android with modern, responsive designs.",
      icon: <IconDeviceMobileMessage />,
      gradient: "primary",
    },
    {
      title: "Agile & Transparent Workflow",
      description:
        "Stay in the loop with agile sprints, full project visibility, regular updates, and collaborative development.",
      icon: <IconTimeline />,
      gradient: "primary",
    },
    {
      title: "Secure by Design",
      description:
        "We build with industry-leading security practices and compliance standards to keep your data and users protected.",
      icon: <IconShieldCheck />,
      gradient: "primary",
    },
    {
      title: "Ongoing Support & Maintenance",
      description:
        "We don't just ship and vanish. Count on us for continuous improvements, updates, and long-term partnership.",
      icon: <IconLifebuoy />,
      gradient: "primary",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#fdfff8] relative overflow-hidden">
      {/* Background decorations designed for thirdary (#b7ce63) background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Darker accent circles for contrast on thirdary bg */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-background/8 rounded-full blur-3xl" />

        {/* Additional overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex font-bevellierBold items-center gap-2 px-4 py-2 rounded-full bg-foreground backdrop-blur-sm border border-primary/30 text-thirdary text-lg mb-6 shadow-sm">
            <span className="w-2 h-2 bg-thirdary rounded-full animate-pulse"></span>
            Our Services
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl  mb-6 bg-primary bg-clip-text text-transparent drop-shadow-sm py-1"
            style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
          >
            Comprehensive Digital Solutions
          </h2>
          <p
            className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
            style={{ fontFamily: "Bevellier-ExtraLight, sans-serif" }}
          >
            We deliver end-to-end technology solutions that transform ideas into
            market-ready products. From AI integration to cloud architecture,
            we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 lg:mt-32">
          <div className="bg-card/90 backdrop-blur-md border border-border/50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 text-foreground"
              style={{ fontFamily: "Bevellier-Bold, sans-serif" }}
            >
              Ready to Transform Your Vision?
            </h3>
            <p
              className="text-foreground/70 mb-8 text-lg"
              style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
            >
              Let's discuss how we can bring your project to life with our
              expertise and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-8 py-4 bg-thirdary text-thirdary-foreground rounded-xl font-semibold hover:bg-thirdary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-thirdary/25"
                style={{ fontFamily: "Bevellier-Semibold, sans-serif" }}
              >
                Start Your Project
              </button>
              <button
                className="px-8 py-4 bg-card/80 backdrop-blur-sm border border-border rounded-xl font-semibold text-foreground hover:bg-card/90 hover:scale-105 transition-all duration-300 shadow-md"
                style={{ fontFamily: "Bevellier-Semibold, sans-serif" }}
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index, gradient }) => {
  return (
    <div className="group relative">
      {/* Card optimized for thirdary background */}
      <div className="relative h-full bg-card/90 backdrop-blur-md border border-border/30 rounded-2xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/15 hover:border-primary/40 hover:bg-card/95 overflow-hidden">
        {/* Gradient background on hover - more visible on thirdary */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-gradient-to-br ${gradient} rounded-2xl`}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div
              className={`w-14 h-14 rounded-xl bg-${gradient} p-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300 border border-white/10`}
            >
              {icon}
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300"
            style={{ fontFamily: "Bevellier-Bold, sans-serif" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300"
            style={{ fontFamily: "Bevellier-Regular, sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Decorative elements - adjusted for thirdary background */}
        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 w-8 h-8 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Additional glow effect for better visibility */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};
