import { HeadingBlock } from "@/components/HeadingBlock";
import { HeroSection } from "@/components/NoirHero";
import { WhyUs } from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Faqs from "@/components/Faqs";
import { Collaboration } from "@/components/Collaboration";
import ContactForm from "@/components/ContactUs";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FeaturesSectionDemo } from "@/components/Features";
const Home = () => {
  return (
    <>
      <NavbarDemo />
      <HeroSection />

      <FeaturesSectionDemo />

      {/* <Collaboration /> */}
      <HeadingBlock />
      <TechStack />
      <Faqs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
