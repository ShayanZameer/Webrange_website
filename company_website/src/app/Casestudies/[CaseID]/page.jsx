"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import Image from "next/image";
import Platform from "../_components/Platform";
import Ticon from "../_components/Ticon";
import FooterSection from "@/components/global/FooterSection";
import CloseButton from "@/components/global/CloseButton";
import ProblemSection from "./_components/ProblemSection";
import IMAGES from "@/constants/images";

const CaseStudyDetails = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const caseStudy = searchParams.get("caseStudy")
    ? JSON.parse(decodeURIComponent(searchParams.get("caseStudy")))
    : null;

  console.log("Hello this is casestudy", caseStudy);

  if (!caseStudy) {
    return <p>Case Study not found.</p>;
  }

  const {
    title,
    images,
    aboutProject,
    platform,
    problemStatement,
    solution,
    technologyIcons,
    category,
  } = caseStudy;

  return (
    <>
      <div className="py-6 px-4 lg:py-10 lg:px-20">
        <div className="flex justify-end">
          <CloseButton
            onClick={() => {
              router.back();
            }}
          />
        </div>

        <div>
          <p className="pt-4 text-center bg-gradient-custom text-transparent bg-clip-text font-jakarta font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            {title}
          </p>

          <p className="font-jakarta font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
            {category}
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <Image
              src={images[0]}
              alt={title}
              width={1300}
              height={500}
              className="w-full mx-auto object-cover transition-all duration-300 group-hover:scale-[0.99] group-hover:rounded-lg"
            />
          </div>

          {/* About Project Section */}

          <div className="flex flex-col lg:flex-row mt-6 justify-between gap-8">
            {/* About Project Section */}
            <div className="lg:w-1/3 w-full py-6 flex-1">
              <h1 className="text-2xl lg:text-4xl font-bold pt-2 mb-4">
                About Project
              </h1>

              <p className="text-sm lg:text-base leading-relaxed font-jakarta font-light">
                {aboutProject}
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                {platform.map((p, index) => (
                  <Platform key={index} text={p} />
                ))}
              </div>
            </div>

            {/* Problem Statement and Solution Section */}
            <div className="flex flex-col flex-1 gap-6">
              <div className="flex flex-col sm:flex-row ">
                <ProblemSection
                  imageSrc={IMAGES.icons.smily}
                  heading="Problem Statement"
                  description={problemStatement}
                />
                <ProblemSection
                  imageSrc={IMAGES.icons.sad}
                  heading="Solution"
                  description={solution}
                />
              </div>

              {/* Technologies Used Section */}
              <div className="lg:w-1/3 w-full">
                <h2 className="text-lg lg:text-lg mt-1 font-semibold mb-2 font-jakarta">
                  Technologies Used
                </h2>

                <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                  {technologyIcons.map((icon, index) => (
                    <Ticon key={index} url={icon} text={`Tech ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" py-4">
            {images.slice(1).map((src, index) => (
              <div
                key={index}
                className="flex flex-wrap gap-3 justify-center mt-8"
              >
                <Image
                  src={src}
                  alt="images"
                  width={1300}
                  height={500}
                  className="w-full mx-auto object-cover transition-all duration-300 group-hover:scale-[0.99] group-hover:rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default CaseStudyDetails;
