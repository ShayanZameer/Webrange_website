import VideoSection from "./_components/VideoSection/VideoSection";

import FocusSection from "@/components/global/FocusSection/FocusSection";
import StragetySection from "./_components/StragetySection/StragetySection";
import ServicesSection from "./_components/ServicesSection/ServicesSection";
import PartnersSection from "../../components/global/PartnersSection";

import BlogsSection from "./_components/BlogsSection/BlogsSection";
import SuperPower from "@/components/global/SuperPower";
import Worldmap from "@/components/global/Worldmap";
import FooterSection from "@/components/global/FooterSection";

const LandingPage = () => {
  return (
    <div>
      <div>
        <VideoSection />
      </div>

      <div className=" ">
        <FocusSection />
      </div>

      <div>
        <StragetySection />
      </div>

      <div>
        <ServicesSection />
      </div>

      <div>
        <PartnersSection />
      </div>

      <div className="p-8">
        <BlogsSection />
      </div>

      <div>
        <SuperPower />
      </div>

      <div>
        <Worldmap />
      </div>

      <div className="py-8">
        <FooterSection />
      </div>
    </div>
  );
};

export default LandingPage;
