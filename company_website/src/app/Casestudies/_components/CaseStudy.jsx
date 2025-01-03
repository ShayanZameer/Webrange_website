"use client";

import Image from "next/image";
import IMAGES from "@/constants/images";
import Ticon from "./Ticon";
import Platform from "./Platform";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const CaseStudy = ({ id }) => {
  const router = useRouter();

  const handleReadMoreClick = () => {
    router.push(`/Casestudies/${id}`);
  };
  return (
    <section className="py-6 px-4 lg:py-6 lg:px-20">
      <div className="w-full relative group ">
        <div className="overflow-hidden mx-auto relative group ">
          <Image
            src={IMAGES.casestudy}
            alt="Project"
            width={1300}
            height={400}
            className="w-full h-auto mx-auto object-cover transition-all duration-300 group-hover:scale-[0.99]  group-hover:rounded-lg"
          />
          <button
            onClick={handleReadMoreClick}
            className="absolute bottom-4 right-4 transform translate-y-2 bg-black text-white px-4 py-3 text-sm font-semibold rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 flex items-center justify-center gap-2"
          >
            <span className="font-jakarta text-xs">Read More</span>
            <FaArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-evenly space-y-8 lg:space-y-0 mt-8">
        <div className="lg:w-1/3 w-full">
          <h1 className="text-3xl lg:text-4xl font-bold pt-2 mb-4">Wokiam</h1>
          <div className="flex flex-wrap gap-3">
            <Platform text="Business" />
            <Platform text="SaaS" />
            <Platform text="Cloud Platform" />
          </div>
        </div>

        <div className="lg:w-1/3 w-full">
          <h2 className="text-lg lg:text-xl font-semibold mb-2 font-jakarta">
            About Wokiam
          </h2>
          <p className="text-sm lg:text-base leading-relaxed font-jakarta font-light">
            We transformed months of design into a matter of weeks, saving the
            client's budget significantly. Our approach involved upfront design
            validation and the selection.
          </p>
        </div>

        <div className="lg:w-1/3 w-full ml-4">
          <h2 className="text-lg lg:text-xl font-semibold mb-2 font-jakarta">
            Technologies Used
          </h2>
          <div className="flex flex-wrap items-center gap-4 lg:gap-6">
            <Ticon url={IMAGES.icons.flutter} text="Flutter" />
            <Ticon url={IMAGES.icons.dart} text="Dart" />
            <Ticon url={IMAGES.icons.c} text="C" />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-300"></div>
    </section>
  );
};

export default CaseStudy;
