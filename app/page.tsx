import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import WhyChooseUs from "@/components/why-choose-us";
import Process from "@/components/process";
import Industries from "@/components/industries";
import NriPropertyCare from "@/components/nri-property-care";
import CtaBanner from "@/components/cta-banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import JsonLd from "@/components/json-ld";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <WhyChooseUs />
        <Process />
        <Industries />
        <NriPropertyCare />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
