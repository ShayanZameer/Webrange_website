"use client";

import React, { useRef } from "react";
import Landing from "@/components/global/FocusSection/Landing";
import FooterSection from "@/components/global/FooterSection";
import { ServicesScroll } from "./_components/ServicesScroll";
import IMAGES from "@/constants/images";
import AnimatedPage from "@/components/Animation/PageAnimated";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";

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
      <div className="bg-white">
        <div>
          <Landing
            title="Our services"
            subtitle="We transform business requirements into high-level App."
            buttonText="Explore All"
            imageSrc={IMAGES.about}
            onClick={handleExploreAllClick}
          />
        </div>

        {/* <AnimatedWrapper> */}
        <div className="px-8 py-4 " ref={servicesSectionRef}>
          <ServicesScroll />
        </div>
        {/* </AnimatedWrapper> */}

        <AnimatedWrapper>
          <div>
            <FooterSection />
          </div>
        </AnimatedWrapper>
      </div>
    </AnimatedPage>
  );
};

export default page;
