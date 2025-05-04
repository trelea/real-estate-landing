import { AboutUs } from "@/components/about-us/about-us";
import { HeroBanner } from "@/components/hero/hero";
import { HotOffers } from "@/components/hot/hot";
import React from "react";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  return (
    <React.Fragment>
      <HeroBanner />
      <HotOffers />
      <AboutUs />
    </React.Fragment>
  );
};

export default Home;
