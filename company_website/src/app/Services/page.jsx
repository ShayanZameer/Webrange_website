"use client";

import React, { useRef } from "react";
import Landing from "@/components/global/FocusSection/Landing";
import FooterSection from "@/components/global/FooterSection";
import { ServicesScroll } from "./_components/ServicesScroll";
import IMAGES from "@/constants/images";
import AnimatedPage from "@/components/Animation/PageAnimated";

const page = () => {
  const servicesSectionRef = useRef(null);

  const handleExploreAllClick = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AnimatedPage title="Services">
      <div>
        <div>
          <Landing
            title="Our services"
            subtitle="We transform business requirements into high-level App."
            buttonText="Explore All"
            imageSrc={IMAGES.about}
            onClick={handleExploreAllClick}
          />
        </div>

        <div className="p-8" ref={servicesSectionRef}>
          <ServicesScroll />
        </div>

        <div>
          <FooterSection />
        </div>
      </div>
    </AnimatedPage>
  );
};

export default page;