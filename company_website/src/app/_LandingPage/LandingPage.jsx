import VideoSection from "./_components/VideoSection/VideoSection";

import FocusSection from "@/components/global/FocusSection/FocusSection";
import StragetySection from "./_components/StragetySection/StragetySection";
import ServicesSection from "./_components/ServicesSection/ServicesSection";
import PartnersSection from "../../components/global/PartnersSection";

import BlogsSection from "./_components/BlogsSection/BlogsSection";
import SuperPower from "@/components/global/SuperPower";
import Worldmap from "@/components/global/Worldmap";
import FooterSection from "@/components/global/FooterSection";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";

const LandingPage = () => {
  return (
    <div>
      <div>
        <VideoSection />
      </div>

      <div className=" ">
        <AnimatedWrapper>
          <FocusSection />
        </AnimatedWrapper>
      </div>

      <div>
        <AnimatedWrapper>
          <StragetySection />
        </AnimatedWrapper>
      </div>

      <div>
        <AnimatedWrapper>
          <ServicesSection />
        </AnimatedWrapper>
      </div>

      <div>
        <AnimatedWrapper>
          <PartnersSection />
        </AnimatedWrapper>
      </div>

      <div className="p-8">
        <AnimatedWrapper>
          <BlogsSection />
        </AnimatedWrapper>
      </div>

      <div>
        <AnimatedWrapper>
          <SuperPower />
        </AnimatedWrapper>
      </div>

      <div>
        <AnimatedWrapper>
          <Worldmap />
        </AnimatedWrapper>
      </div>

      <div className="py-8">
        <AnimatedWrapper>
          <FooterSection />
        </AnimatedWrapper>
      </div>
    </div>
  );
};

export default LandingPage;
