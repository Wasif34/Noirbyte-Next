import { HeadingBlock } from "@/components/HeadingBlock";
import { HeroParallaxDemo } from "@/components/NoirHero";
import { WhyUs } from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import Faqs from "@/components/Faqs";
import { Collaboration } from "@/components/Collaboration";
import ContactForm from "@/components/ContactUs";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <>
      <NavbarDemo />
      <HeroParallaxDemo />
      <WhyUs />
      <Collaboration />
      <HeadingBlock />
      <TechStack />
      <Faqs />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
