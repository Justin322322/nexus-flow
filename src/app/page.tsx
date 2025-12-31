import { ContactModal } from "@/components/ContactModal";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Navbar } from "@/section/Navbar";
import { Hero } from "@/section/Hero";
import { IntroSection } from "@/section/IntroSection";
import { ExpertiseCarousel } from "@/section/ExpertiseCarousel";

export default function Home() {
  return (
    <>
      <ScrollToTop />
      <ContactModal />
      <Navbar />
      <div className="relative">
        <div className="overflow-clip">
          <Hero />
          <section>
            <IntroSection />
          </section>
        </div>
        <section className="overflow-visible">
          <ExpertiseCarousel />
        </section>
      </div>
    </>
  );
}
