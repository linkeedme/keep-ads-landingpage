import { Navbar } from "@/components/layout/Navbar";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { BackToTop } from "@/components/layout/BackToTop";

import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Benefits } from "@/components/sections/Benefits";
import { Audience } from "@/components/sections/Audience";
import { Method } from "@/components/sections/Method";
import { Differentials } from "@/components/sections/Differentials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Backstage } from "@/components/sections/Backstage";
import { Instagram } from "@/components/sections/Instagram";
import { FAQ } from "@/components/sections/FAQ";

function SectionDivider() {
  return <div className="section-divider-shimmer" />;
}

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <ClientLogos />
        <TrustedBy />
        <Benefits />
        <SectionDivider />
        <Audience />
        <SectionDivider />
        <Method />
        <SectionDivider />
        <Differentials />
        <Testimonials />
        <Team />
        <SectionDivider />
        <Instagram />
        <Backstage />
        <SectionDivider />
        <FAQ />
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
