"use client";

import React, { useState, useEffect, useRef } from "react";
import caseStudyData from "@/utils/CaseStudyData/CaseStudyData";
import TitleSection from "./_components/TitleSection";
import DetailsSection from "./_components/DetailsSection";
import Pagination from "./_components/Pagination";
import Tilt from "react-parallax-tilt";
import Image from "next/image";
import { motion } from "framer-motion";

const StragetySection = () => {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [interactionTriggered, setInteractionTriggered] = useState(false);
  const lastScrollY = useRef(0);

  const caseStudy = caseStudyData[currentCaseStudyIndex];

  useEffect(() => {
    let interval;
    if (hovering && caseStudy.CardImages.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % caseStudy.CardImages.length
        );
      }, 700);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [hovering, caseStudy.CardImages.length]);

  const handleScroll = () => {
    handleInteraction();
    const currentScrollY = window.scrollY;
    if (
      currentScrollY > lastScrollY.current &&
      !scrollTriggered &&
      interactionTriggered
    ) {
      setScrollTriggered(true);

      setTimeout(() => {
        setCurrentCaseStudyIndex(
          (prevIndex) => (prevIndex + 1) % caseStudyData.length
        );
        setCurrentImageIndex(0);
        setScrollTriggered(false);
        setInteractionTriggered(false);
      }, 800);
    }
    lastScrollY.current = currentScrollY;
  };

  const handleInteraction = () => {
    setInteractionTriggered(true);
  };

  return (
    <>
      <div
        // onWheel={handleScroll}
        className="flex flex-col  lg:flex-row items-center p-8 py-24 relative overflow-hidden"
      >
        <TitleSection
          caseStudy={caseStudy}
          scrollTriggered={scrollTriggered}
          // onWheel={handleScroll}
        />

        {/* Middle Section - Image */}
        <div className="group relative md:flex-[1.8] lg:flex-[2.6] flex items-center justify-center">
          <motion.div
            initial={{ y: 0 }}
            animate={
              scrollTriggered
                ? { y: -600, opacity: 0, zIndex: 20 }
                : { y: 0, opacity: 1, zIndex: 20 }
            }
            transition={{ duration: 0.4 }}
            className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-3xl"
            key={`image-${currentCaseStudyIndex}`}
            onWheel={handleScroll}
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
              <div className="w-full h-full transform transition-transform duration-700 ease-in-out">
                <Image
                  src={caseStudy?.CardImages[currentImageIndex]}
                  alt={`Case Study Illustration ${currentImageIndex + 1}`}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full rounded-3xl"
                />
              </div>
            </Tilt>
          </motion.div>

          {/* Background Image for Next Object */}
          <div
            className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-3xl z-5"
            key={`bg-image-${
              (currentCaseStudyIndex + 1) % caseStudyData.length
            }`}
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
                src={
                  caseStudyData[
                    (currentCaseStudyIndex + 1) % caseStudyData.length
                  ].CardImages[0]
                }
                alt="Next Case Study Background"
                width={500}
                height={500}
                className="object-cover w-full h-full rounded-3xl"
              />
            </Tilt>
          </div>
        </div>

        <DetailsSection
          caseStudy={caseStudy}
          scrollTriggered={scrollTriggered}
          // onWheel={handleScroll}
        />
      </div>

      <Pagination
        caseStudyData={caseStudyData}
        currentCaseStudyIndex={currentCaseStudyIndex}
      />
    </>
  );
};

export default StragetySection;
