import Landing from "@/components/global/FocusSection/Landing";
import FooterSection from "@/components/global/FooterSection";
import { ServicesScroll } from "./_components/ServicesScroll";
import IMAGES from "@/constants/images";

const page = () => {
  return (
    <div>
      <div>
        <Landing
          title="Our services"
          subtitle="We transform business requirements into 
high-level App."
          buttonText="Explore All Services"
          imageSrc={IMAGES.about}
        />
      </div>

      <div className="p-8">
        <ServicesScroll />
      </div>

      <div>
        <FooterSection />
      </div>
    </div>
  );
};

export default page;
