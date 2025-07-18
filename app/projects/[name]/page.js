import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPage from "@/components/ProjectsPage";

const projects = [
  {
    name: "Xtreim",
    slug: "xtreim",
    subtitle: "Powerful SaaS Platform Empowering Businesses with Seamless Digital Solutions",
    heroBg: "/images/xtreimMain.png", // Replace with actual image
    ctaPrimaryText: "Explore Platform",
    ctaPrimaryLink: "#journey",
    ctaSecondaryText: "Our Contribution",
    ctaSecondaryLink: "#tech",
    detail:
      "Xtreim is a cutting-edge platform offering digital solutions tailored for modern business environments. It provides scalable infrastructure and seamless user experiences, enhancing operational efficiency across industries.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: ["/images/xtreimDash.png", "/images/xtreimSup.png"],
  },
  {
    name: "CheapFareTravel",
    slug: "cheapfaretravel",
    subtitle: "Travel Platform That Helps Users Find and Book Affordable Flights with Ease",
    heroBg: "/images/cft-hero.jpg", // Replace with actual image
    ctaPrimaryText: "Discover More",
    ctaPrimaryLink: "#journey",
    ctaSecondaryText: "See Tech Stack",
    ctaSecondaryLink: "#tech",
    detail:
      "CheapFareTravel is a travel service platform that helps users arrange affordable flights quickly and efficiently. It provides travel deals, booking services, and customer support for seamless trip planning.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    images: ["/images/cft1.jpg", "/images/cft2.jpg"],
  },
  {
    name: "Redefine/Zentry",
    slug: "zentry",
    subtitle: "Cross‑Platform Metagame Layer Unifying the Gaming Economy",
    heroBg: "/images/zentry-hero.jpg", // Replace with actual image
    ctaPrimaryText: "Experience Zentry",
    ctaPrimaryLink: "#journey",
    ctaSecondaryText: "Tech Integration",
    ctaSecondaryLink: "#tech",
    detail:
      "Zentry is a cross-platform metagame layer that unifies the play economy across physical and digital games. It enables seamless movement of value, rewards, and player identity across multiple game titles and ecosystems.",
    techStack: [
      "Web3",
      "TypeScript",
      "Next.js",
      "Blockchain Integration",
      "Gaming SDKs",
    ],
    images: ["/images/zentry1.jpg", "/images/zentry2.jpg"],
  },
  {
  name: "Alpine KPK",
  slug: "alpine",
  subtitle: "Tourism Portal for Khyber Pakhtunkhwa to Explore the Beauty of Pakistan",
  heroBg: "/images/alpine1.png", // Replace with the actual image
  ctaPrimaryText: "Explore Destinations",
  ctaPrimaryLink: "#journey",
  ctaSecondaryText: "Tech Behind It",
  ctaSecondaryLink: "#tech",
  detail:
    "Alpine KPK is a government-backed tourism platform designed to showcase the breathtaking destinations of Khyber Pakhtunkhwa, Pakistan. It enables travelers to discover, plan, and experience the region through a digital-first approach.",
  techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
  images: ["/images/alpine4.png", "/images/alpine6.png"], // Replace with actual project screenshots
}

];



// Generate static params for static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    name: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.name);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | NoirByte Projects`,
    description: project.detail,
  };
}

const ProjectPage = ({ params }) => {
  const projectSlug = params.name;
  const project = projects.find((p) => p.slug === projectSlug);

  // Handle 404 for non-existent projects
  if (!project) {
    notFound();
  }

  return (
    <>
      <NavbarDemo />
      <ProjectsPage project={project} />
      <Footer />
    </>
  );
};

export default ProjectPage;
