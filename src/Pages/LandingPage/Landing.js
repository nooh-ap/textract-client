import React from "react";
import CallToActionWithIllustration from "./Sections/HeroPage";
import SimpleThreeColumns from "./Sections/Features";
import Testimonial from "./Sections/Testimonials";
import ThreeTierPricingHorizontal from "./Sections/Pricing";

const Landing = () => {
  return (
    <div className="">
      <CallToActionWithIllustration />
      <SimpleThreeColumns />
      <Testimonial />
      <br />
      <Testimonial />
      <br />
      <Testimonial />
      <ThreeTierPricingHorizontal />
    </div>
  );
};

export default Landing;
