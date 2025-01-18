import CaseStudy from "./_components/CaseStudy";
import { FooterSection } from "../../components/global/FooterSection";
import AnimatedPage from "@/components/Animation/PageAnimated";

const Page = () => {
  const caseStudies = [
    { id: 1, title: "Case Study 1" },
    { id: 2, title: "Case Study 2" },
    { id: 3, title: "Case Study 3" },
  ];

  return (
    <AnimatedPage title="Case Studies">
      <div>
        <p className="pt-4 text-center bg-gradient-custom text-transparent bg-clip-text font-jakarta font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          CASE STUDIES
        </p>

        <p className="font-jakarta font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
          Examples of client success, powered by us
        </p>

        <div className="py-6 px-4 lg:py-6 lg:px-20">
          {/* Pass a unique id to each CaseStudy */}
          {caseStudies.map((caseStudy) => (
            <CaseStudy key={caseStudy.id} id={caseStudy.id} />
          ))}
        </div>

        <FooterSection />
      </div>
    </AnimatedPage>
  );
};

export default Page;
