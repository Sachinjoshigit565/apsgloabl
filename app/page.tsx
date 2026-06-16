import HeroSection from "./HeroSection/HeroSection";
import AboutCompany from "./about/page";
import SERVICE from "./services/page";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
import ContactCTA from "./contact/page";
import Footer from "./footer/Footer";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutCompany />
    <SERVICE />
    <TestimonialsSection />
      <ContactCTA />
       <Footer />


    </>
  );
}