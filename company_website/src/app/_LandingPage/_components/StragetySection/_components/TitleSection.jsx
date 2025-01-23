import React from "react";
import { motion } from "framer-motion";

const TitleSection = ({ caseStudy, scrollTriggered, onWheel }) => {
  return (
    <motion.div
      onWheel={onWheel}
      className="md:flex-[0.8] lg:flex-[0.5] py-24 px-4 flex items-center justify-center"
      initial={{ x: 0, opacity: 1 }}
      animate={scrollTriggered ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <p className="font-jakarta px-12 font-extrabold text-6xl text-center md:text-left mb-12 md:mb-20 lg:mb-0">
        {caseStudy.title}
      </p>
    </motion.div>
  );
};

export default TitleSection;
