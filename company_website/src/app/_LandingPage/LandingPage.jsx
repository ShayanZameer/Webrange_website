import VideoSection from "./_components/VideoSection/VideoSection";

import FocusSection from "./_components/FocusSection/FocusSection";
import StragetySection from "./_components/StragetySection/StragetySection";
import ServicesSection from "./_components/ServicesSection/ServicesSection";

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
    </div>
  );
};

export default LandingPage;
