import CaseStudy from "./_components/CaseStudy";
import { FooterSection } from "./_components/FooterSection";

const Page = () => {
  return (
    <div>
      <p className="pt-4 text-center bg-gradient-custom text-transparent bg-clip-text font-jakarta font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        CASE STUDIES
      </p>

      <p className="font-jakarta font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
        Examples of client success, powered by us
      </p>

      {/* This is the data that is comming  */}
      <div>
        <CaseStudy />
        <CaseStudy />
      </div>

      <div className="">
        <FooterSection />
      </div>
    </div>
  );
};

export default Page;
