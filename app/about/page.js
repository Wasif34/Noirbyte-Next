import AboutClient from "@/components/AboutClient"; // moved your content here
import Footer from "@/components/Footer";
import { NavbarDemo } from "@/components/Navbar";

export const metadata = {
  title: "NoirByte - Full-Stack Development & AI Solutions",
  description:
    "Learn about NoirByte, our mission, our expertise, and how we deliver top-tier tech solutions.",
};

export default function AboutPage() {
  return (
    <>
      <NavbarDemo />
      <AboutClient />
      <Footer />
    </>
  );
}
