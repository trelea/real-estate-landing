import { AboutUsSection } from "@/components/about-us/about-us";
import { ContactSection } from "@/components/contact-section/contact-section";
import { HotSection } from "@/components/hot/hot";
import { LandingHero } from "@/components/landing-hero";
import { LandingSections } from "@/components/landing-sections";
import { NewsSection } from "@/components/news/news";
import { PartnersSection } from "@/components/partners/partners";
import { ServicesSection } from "@/components/services/services";
import { TeamSection } from "@/components/team/team";
import React from "react";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <React.Fragment>
      <LandingHero />
      <LandingSections>
        <HotSection />
        <AboutUsSection />
        <ServicesSection />
        <TeamSection />
        <PartnersSection />
        <NewsSection />
        <ContactSection />
      </LandingSections>
    </React.Fragment>
  );
};

export default Home;
