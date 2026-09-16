import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Starfield from "@/components/visual/Starfield";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      {/* Background layer: fixed canvas starfield, sits behind every section */}
      <Starfield />

      <div className="relative bg-orion-gradient">
        <Header />

        <main>
          <Hero />
          <About />
          <Services />
          <Process />
          <FinalCta />
        </main>

        <Footer />
      </div>
    </>
  );
}
