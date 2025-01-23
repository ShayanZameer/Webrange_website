import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const DetailsSection = ({ caseStudy, scrollTriggered }) => {
  return (
    <motion.div
      className="md:flex-[1.3] lg:flex-[1.5] flex flex-col items-center md:items-start"
      initial={{ x: 0, opacity: 1 }}
      animate={scrollTriggered ? { x: 300, opacity: 0 } : { x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <p className="font-jakarta text-sm md:text-lg lg:text-sm font-normal w-full md:w-80 text-center md:text-left mb-4 mt-40 md:mt-44 lg:mt-0">
        {caseStudy.aboutProject}
      </p>
      <p className="font-jakarta mt-4 text-xl font-semibold mb-4">
        Technologies Used
      </p>
      <div className="flex flex-wrap justify-center md:justify-start space-x-6">
        {caseStudy.technologyIcons.map((icon, index) => (
          <Image
            key={index}
            src={icon}
            alt={`Technology ${index + 1}`}
            width={50}
            height={50}
            className="object-contain"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default DetailsSection;
