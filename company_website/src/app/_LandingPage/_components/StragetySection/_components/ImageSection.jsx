import React from "react";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";

const ImageSection = ({
  caseStudy,
  nextCaseStudy,
  currentImageIndex,
  onScroll,
  setHovering,
  handleInteraction,
  scrollTriggered,
}) => {
  return (
    <div className="group relative md:flex-[1.8] lg:flex-[2.6] flex items-center justify-center">
      {/* Next Image in the background (static) */}
      <div
        className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-3xl z-10"
        key={`bg-image-${nextCaseStudy.title}`}
      >
        <Tilt
          className="relative w-full h-full cursor-pointer"
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          scale={1.15}
          perspective={1500}
          speed={1000}
          glareEnable={true}
          glareMaxOpacity={0.2}
        >
          <Image
            src={nextCaseStudy.images[0]} // Show the first image of the next case study
            alt="Next Case Study Background"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-3xl"
          />
        </Tilt>
      </div>

      {/* Current Image (animates upward) */}
      <motion.div
        className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-3xl z-20"
        initial={{ y: 0 }} // Start at its original position
        animate={
          scrollTriggered
            ? { y: -600, opacity: 0 } // Move upward and fade out
            : { y: 0, opacity: 1 } // Reset to original position
        }
        transition={{ duration: 0.4 }}
        onWheel={onScroll}
      >
        <Tilt
          className="relative w-full h-full cursor-pointer"
          tiltMaxAngleX={35}
          tiltMaxAngleY={35}
          scale={1.15}
          perspective={1500}
          speed={1000}
          glareEnable={true}
          glareMaxOpacity={0.2}
          onEnter={() => {
            setHovering(true);
            handleInteraction();
          }}
          onLeave={() => setHovering(false)}
        >
          <Image
            src={caseStudy.images[currentImageIndex]}
            alt={`Case Study Illustration ${currentImageIndex + 1}`}
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-3xl"
          />
        </Tilt>
      </motion.div>
    </div>
  );
};

export default ImageSection;
