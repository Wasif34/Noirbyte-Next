import React from "react";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsPage from "@/components/ProjectsPage";

const projects = [
  {
  name: "Xtreim",
  slug: "xtreim",
  subtitle: "Modern Fleet Management Platform Revolutionizing Limousine Dispatch and Customer Experience",
  heroBg: "/images/xtreimMain.png",
  ctaPrimaryText: "Explore Platform",
  ctaPrimaryLink: "#journey",
  ctaSecondaryText: "Our Contribution",
  ctaSecondaryLink: "#tech",
  detail:
    "Xtreim is an advanced yet intuitive software platform tailored for the limousine industry, simplifying every aspect of fleet management. From real-time reservations and invoicing to customer support and dispatch, Xtreim brings operational efficiency and reliability to limo companies of all sizes. The system includes a modern analytics dashboard for business owners, a user-friendly booking tool for clients, and dedicated mobile apps for both drivers and customers. Built on a robust tech stack, Xtreim integrates seamlessly with third-party services like Google, ensuring smooth scheduling, communication, and tracking. With a focus on performance, scalability, and user satisfaction, Xtreim empowers leading limo businesses to deliver impeccable service at every touchpoint.",
  techStack: ["Next.js", "React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion", "3rd-party APIs (Google, etc.)"],
  features: [
    "Real-time limo booking system",
    "Driver and customer mobile apps",
    "Modern analytics dashboard",
    "Integrated invoicing & dispatching",
    "Multi-role access control",
    "Third-party API integrations"
  ],
  metrics: {
    users: "10,000+ rides processed",
    uptime: "99.9%",
    performance: "Fast & responsive UX",
    scalability: "Supports growing fleets"
  },
  images: ["/images/xtreimDash.png", "/images/xtreimSup.png"],
  },
 {
  name: "CheapFareTravel",
  slug: "cheapfaretravel",
  subtitle: "Affordable Travel Made Easy — Flights, Hotels, Tours & Umrah Packages at the Best Prices",
  heroBg: "/images/cft.png",
  ctaPrimaryText: "Discover More",
  ctaPrimaryLink: "#journey",
  ctaSecondaryText: "See Tech Stack",
  ctaSecondaryLink: "#tech",
  detail:
    "CheapFareTravel is a trusted travel booking platform helping users find and reserve flights, hotels, tours, and Umrah packages at the most competitive rates. Backed by a smart pricing engine and real-time API integrations, the platform ensures users can compare and book affordable options with ease. Whether you're looking for international flights from Western Australia, accommodation worldwide, or custom tour packages, CheapFareTravel offers a seamless experience with expert support. Users can take advantage of personalized recommendations, multi-currency payments, and 24/7 multilingual assistance. We are also proud to specialize in tailored Umrah packages for a spiritually fulfilling journey.",
  techStack: [
    "React", "Node.js", "Express.js", "MongoDB",
    "Tailwind CSS", "Stripe API", "Amadeus API", "Socket.io"
  ],
  features: [
    "Live flight and hotel price comparison",
    "Multi-airline & travel agency integration",
    "Umrah & custom tour package booking",
    "Secure payments with multi-currency support",
    "Booking management dashboard",
    "24/7 multilingual support chat",
    "Mobile-optimized experience",
    "Real-time fare alerts and notifications"
  ],
  metrics: {
    bookings: "50,000+ travel bookings",
    savings: "Up to 30% on average",
    airlines: "200+ global airline partners",
    coverage: "Worldwide destinations"
  },
  images: ["/images/cft1.png", "/images/cheapAirBoth.svg"]
},
 {
  name: "Redefine/Zentry",
  slug: "zentry",
  subtitle: "The Metagame Layer Powering the World's Largest Play Economy",
  heroBg: "/images/zentry.png",
  ctaPrimaryText: "Experience Zentry",
  ctaPrimaryLink: "#journey",
  ctaSecondaryText: "Tech Integration",
  ctaSecondaryLink: "#tech",
  detail:
    "Zentry is pioneering the Metagame—a cross-platform, AI-powered, blockchain-enabled play layer that connects virtual worlds and gaming communities into a single unified economy. As the foundation of the emerging 'Play Economy', Zentry empowers players to carry identity, rewards, and digital assets across multiple games and ecosystems. Every interaction within the Metagame generates valuable data, feeding into a universal data layer that fuels new protocols, applications, and autonomous AI agents. Built on Web3 principles, Zentry features omnichain data aggregation, smart contract-driven coordination, NFT marketplace infrastructure, and decentralized governance. From indie developers to AAA studios, Zentry equips creators with SDKs, analytics, and monetization tools to craft gamified experiences that are persistent, interoperable, and economically rewarding.",
  techStack: [
    "Web3",
    "TypeScript",
    "Next.js",
    "Solidity",
    "Ethereum",
    "Blockchain Integration",
    "IPFS",
    "GraphQL",
    "AI Agents",
    "Gaming SDKs"
  ],
  features: [
    "Cross-platform asset and identity portability",
    "Omnichain data and event aggregation",
    "NFT marketplace and smart contract automation",
    "AI-driven player interactions and agent coordination",
    "Decentralized identity and governance",
    "Multi-game tournament & reward system",
    "Developer SDKs and monetization APIs",
    "Universal Metagame data layer"
  ],
  metrics: {
    games: "100+ integrated games",
    players: "1M+ active players",
    transactions: "$10M+ in asset trades",
    developers: "500+ supported developers"
  },
  images: ["/images/zentry2.png", "/images/redefineBoth.png"]
},
  {
  name: "Alpine Resort",
  slug: "alpine",
  subtitle: "Digital Tourism & Resort Management Platform for Khyber Pakhtunkhwa",
  heroBg: "/images/alpine1.png",
  ctaPrimaryText: "Explore Destinations",
  ctaPrimaryLink: "#journey",
  ctaSecondaryText: "Tech Behind It",
  ctaSecondaryLink: "#tech",
  detail:
    "Alpine KPK is a government-backed digital tourism and resort management platform created to promote the natural beauty, culture, and adventure of Khyber Pakhtunkhwa, Pakistan. It features a stunning public-facing tourism portal with interactive maps, destination guides, weather updates, and 360° virtual tours. Behind the scenes, Alpine includes a full-featured SaaS dashboard for resort owners and tourism operators to manage bookings, listings, and customer engagement. With multilingual content (Urdu, English, regional dialects), PWA support for offline access, and seamless integration with hotels, guides, and transport services, Alpine enables both travelers and operators to explore and manage travel with ease. The platform fosters community through user-contributed photos, reviews, and travel tips.",
  techStack: [
    "React", "Tailwind CSS", "Node.js", "Express.js",
    "MongoDB", "Mapbox API", "Cloudinary", "PWA"
  ],
  features: [
    "Interactive destination exploration",
    "Resort & booking management dashboard",
    "Virtual tours & 360° views",
    "Multilingual content & accessibility",
    "Tour guide and local service integration",
    "Community-driven media sharing",
    "Real-time weather & travel updates",
    "Offline access with PWA support",
    "Local business and activity directory",
    "Secure and scalable architecture"
  ],
  metrics: {
    destinations: "200+ featured locations",
    visitors: "500K+ monthly users",
    bookings: "25,000+ tour and resort bookings",
    languages: "Supports Urdu, English, and regional languages"
  },
  images: ["/images/alpine4.png", "/images/alpine6.png"]
}

];




// Generate static params for static generation
export async function generateStaticParams() {
  return projects.map((project) => ({
    name: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata(props) {
  const params = await props.params;
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

const ProjectPage = async props => {
  const params = await props.params;
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
