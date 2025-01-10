"use client";

import IMAGES from "@/constants/images";
import Image from "next/image";
import { useParams } from "next/navigation";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import Platform from "../_components/Platform";
import ProblemSection from "./_components/ProblemSection";
import Ticon from "../_components/Ticon";
import CaseStudy from "../_components/CaseStudy";
import FooterSection from "../_components/FooterSection";

const CaseStudyDetails = () => {
  //   const { CaseID } = useParams();

  return (
    <div className="py-6 px-4 lg:py-10 lg:px-20">
      <div className="flex justify-end">
        <button
          className="bg-navcolor text-white rounded-full p-2 flex items-center justify-center hover:bg-gray-800 transition duration-200"
          aria-label="Close"
        >
          <FaTimes size={16} />
        </button>
      </div>

      {/* heading */}

      <div>
        <p className="pt-4 text-center bg-gradient-custom text-transparent bg-clip-text font-jakarta font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          Workiam
        </p>

        <p className="font-jakarta font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
          Telemedicine web
        </p>
        <p className="font-jakarta font-semibold text-2xl sm:text-3xl md:text-3xl lg:text-5xl text-center mt-1 sm:mt-2 md:mt-4 text-black">
          application
        </p>

        <div className="flex flex-wrap gap-3 justify-center mt-8">
          <Image
            src={IMAGES.casestudy}
            alt="Project"
            width={1300}
            height={500}
            className="w-full  mx-auto object-cover transition-all duration-300 group-hover:scale-[0.99]  group-hover:rounded-lg"
          />
        </div>

        {/* For about me section */}

        <div className="flex mt-6 justify-between">
          <div className="lg:w-1/3 w-full py-6 flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold pt-2 mb-4">
              About Project
            </h1>

            <p className="text-sm lg:text-base leading-relaxed font-jakarta font-light">
              We transformed months of design into a matter of weeks, saving the
              client's budget significantly. Our approach involved upfront
              design validation and the selection.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <Platform text="Business" />
              <Platform text="SaaS" />
              <Platform text="Cloud Platform" />
            </div>
          </div>
          <div className="flex-col flex-1">
            <div className="flex">
              <ProblemSection
                imageSrc={IMAGES.icons.smily}
                heading="Problem Statement"
                description="We transformed months of design into a matter of weeks, saving the client's budget significantly. Our approach involved upfront design validation and the selection. We transformed months of design into a matter of weeks, saving the client's budget significantly. Our approach involved upfront."
              />

              <ProblemSection
                imageSrc={IMAGES.icons.sad}
                heading="Problem Statement"
                description="We transformed months of design into a matter of weeks, saving the client's budget significantly. Our approach involved upfront design validation and the selection. We transformed months of design into a matter of weeks, saving the client's budget significantly. Our approach involved upfront."
              />
            </div>

            <div className="lg:w-1/3 w-full ml-4">
              <h2 className="text-lg lg:text-xl mt-1 font-semibold mb-2 font-jakarta">
                Technologies Used
              </h2>
              <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                <Ticon url={IMAGES.icons.flutter} text="Flutter" />
                <Ticon url={IMAGES.icons.dart} text="Dart" />
                <Ticon url={IMAGES.icons.c} text="C" />
              </div>
            </div>
          </div>
        </div>
        {/* Discover More Section */}
        <div className="flex py-2 justify-between items-center ">
          {" "}
          <p className="font-jakarta font-bold text-3xl">Discover More</p>
          <div>
            <button className="  border  border-black px-4 py-3 text-sm font-semibold rounded-full    flex items-center justify-center gap-2">
              <span className="font-jakarta text-xs">
                View All Case Studies
              </span>
              <FaArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="py-6 px-4 lg:py-6">
          <CaseStudy />
        </div>

        <div>
          <FooterSection />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;
