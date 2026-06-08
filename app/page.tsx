import Hero from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import CtaBand from "./components/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CtaBand />
    </>
  );
}
