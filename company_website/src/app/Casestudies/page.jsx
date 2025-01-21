"use client";

import CaseStudy from "./_components/CaseStudy";

import caseStudyData from "@/utils/CaseStudyData/CaseStudyData";
import { FooterSection } from "../../components/global/FooterSection";
import AnimatedPage from "@/components/Animation/PageAnimated";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";

const Page = () => {
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
          {caseStudyData?.map((caseStudy) => (
            <div key={caseStudy.id}>
              <AnimatedWrapper>
                <CaseStudy key={caseStudy.id} {...caseStudy} />
              </AnimatedWrapper>
            </div>
          ))}
        </div>

        <FooterSection />
      </div>
    </AnimatedPage>
  );
};

export default Page;
