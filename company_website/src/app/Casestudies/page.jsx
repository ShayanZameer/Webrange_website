// import CaseStudy from "./_components/CaseStudy";
// import { FooterSection } from "./_components/FooterSection";

// const Page = () => {
//   return (
//     <div>
//       <p className="pt-4 text-center bg-gradient-custom text-transparent bg-clip-text font-jakarta font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
//         CASE STUDIES
//       </p>

//       <p className="font-jakarta font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
//         Examples of client success, powered by us
//       </p>

//       <div>
//         <CaseStudy />
//         <CaseStudy />
//       </div>

//       <div className="">
//         <FooterSection />
//       </div>
//     </div>
//   );
// };

// export default Page;

import CaseStudy from "./_components/CaseStudy";
import { FooterSection } from "./_components/FooterSection";

const Page = () => {
  // Example static data for case studies
  const caseStudies = [
    { id: 1, title: "Case Study 1" },
    { id: 2, title: "Case Study 2" },
    { id: 3, title: "Case Study 3" },
  ];

  return (
    <div>
      <p className="pt-4 text-center bg-gradient-custom text-transparent bg-clip-text font-jakarta font-normal text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
        CASE STUDIES
      </p>

      <p className="font-jakarta font-medium text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
        Examples of client success, powered by us
      </p>

      <div>
        {/* Pass a unique id to each CaseStudy */}
        {caseStudies.map((caseStudy) => (
          <CaseStudy key={caseStudy.id} id={caseStudy.id} />
        ))}
      </div>

      <FooterSection />
    </div>
  );
};

export default Page;
