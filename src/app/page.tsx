import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ServicesSection } from "@/components/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main id="top" className="min-h-svh overflow-x-clip">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 sm:px-8 lg:px-12">
        <HeroSection />

        <AboutSection />

        <ServicesSection />

        <PortfolioSection />

        <ContactSection />

        <SiteFooter />
      </div>
    </main>
  );
}
