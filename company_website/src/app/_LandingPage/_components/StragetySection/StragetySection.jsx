// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import caseStudyData from "@/utils/CaseStudyData/CaseStudyData";
// import { Tilt } from "react-tilt";
// import { motion } from "framer-motion";

// const StragetySection = () => {
//   const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [hovering, setHovering] = useState(false);
//   const [scrollTriggered, setScrollTriggered] = useState(false);
//   const [interactionTriggered, setInteractionTriggered] = useState(false); // New state for user interaction
//   const lastScrollY = useRef(0);

//   const caseStudy = caseStudyData[currentCaseStudyIndex];

//   useEffect(() => {
//     let interval;
//     if (hovering && caseStudy.images.length > 1) {
//       interval = setInterval(() => {
//         setCurrentImageIndex(
//           (prevIndex) => (prevIndex + 1) % caseStudy.images.length
//         );
//       }, 700);
//     } else {
//       clearInterval(interval);
//     }
//     return () => clearInterval(interval);
//   }, [hovering, caseStudy.images.length]);

//   useEffect(() => {
//     lastScrollY.current = window.scrollY;
//   }, []);

//   const handleScroll = (event) => {
//     const currentScrollY = window.scrollY;

//     // Trigger animation only if user has interacted with the image
//     if (
//       currentScrollY > lastScrollY.current && // Ensure scrolling down
//       !scrollTriggered &&
//       interactionTriggered
//     ) {
//       setScrollTriggered(true);
//       setTimeout(() => {
//         setCurrentCaseStudyIndex(
//           (prevIndex) => (prevIndex + 1) % caseStudyData.length
//         );
//         setCurrentImageIndex(0);
//         setScrollTriggered(false);
//         setInteractionTriggered(false); // Reset interaction trigger
//       }, 800);
//     }

//     lastScrollY.current = currentScrollY;
//   };

//   const handleInteraction = () => {
//     // Mark that the user interacted with the image
//     setInteractionTriggered(true);
//   };

//   return (
//     <div
//       className="flex flex-col md:flex-row items-center p-8 py-36 relative overflow-hidden"
//       onWheel={handleScroll}
//     >
//       {/* Left Section - Title */}
//       <motion.div
//         className="md:flex-[0.8] lg:flex-[0.5] py-24 px-4 flex items-center justify-center"
//         key={`left-${currentCaseStudyIndex}`}
//       >
//         <p className="font-jakarta px-12 font-extrabold text-6xl text-center md:text-left">
//           {caseStudy.title}
//         </p>
//       </motion.div>

//       {/* Middle Section - Image */}
//       <div className="group relative md:flex-[1.8] lg:flex-[2.6] flex items-center justify-center">
//         {/* Front Image */}
//         <motion.div
//           initial={{ y: 0 }}
//           animate={
//             scrollTriggered
//               ? { y: -600, opacity: 0, zIndex: 20 }
//               : { y: 0, opacity: 1, zIndex: 20 }
//           }
//           transition={{ duration: 0.4 }}
//           className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-3xl"
//           key={`image-${currentCaseStudyIndex}`}
//         >
//           <Tilt
//             className="relative w-full h-full cursor-pointer"
//             options={{
//               scale: 1.15,
//               max: 80,
//               perspective: 1500,
//               speed: 1000,
//               glare: true,
//               "max-glare": 0.2,
//             }}
//           >
//             <div
//               className="w-full h-full transform transition-transform duration-700 ease-in-out"
//               onMouseEnter={() => {
//                 setHovering(true);
//                 handleInteraction(); // User interaction via hover
//               }}
//               onMouseLeave={() => setHovering(false)}
//             >
//               <Image
//                 src={caseStudy.images[currentImageIndex]}
//                 alt={`Case Study Illustration ${currentImageIndex + 1}`}
//                 width={500}
//                 height={500}
//                 className="object-cover w-full h-full rounded-3xl"
//               />
//             </div>
//           </Tilt>
//         </motion.div>

//         {/* Background Image for Next Object */}
//         <div
//           className="absolute w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-3xl z-5"
//           key={`bg-image-${(currentCaseStudyIndex + 1) % caseStudyData.length}`}
//         >
//           <Tilt
//             className="relative w-full h-full cursor-pointer"
//             options={{
//               scale: 1.15,
//               max: 80,
//               perspective: 1500,
//               speed: 1000,
//               glare: true,
//               "max-glare": 0.2,
//             }}
//           >
//             <Image
//               src={
//                 caseStudyData[
//                   (currentCaseStudyIndex + 1) % caseStudyData.length
//                 ].images[0]
//               }
//               alt="Next Case Study Background"
//               width={500}
//               height={500}
//               className="object-cover w-full h-full rounded-3xl"
//             />
//           </Tilt>
//         </div>
//       </div>

//       {/* Right Section - About Project */}
//       <motion.div
//         className="md:flex-[1.3] lg:flex-[1.5] flex flex-col items-center md:items-start"
//         key={`right-${currentCaseStudyIndex}`}
//       >
//         <p className="font-jakarta text-sm font-normal w-full md:w-80 text-center md:text-left mb-4">
//           {caseStudy.aboutProject}
//         </p>
//         <p className="font-jakarta mt-4 text-xl font-semibold mb-4">
//           Technologies Used
//         </p>
//         <div className="flex flex-wrap justify-center md:justify-start space-x-6">
//           {caseStudy.technologyIcons.map((icon, index) => (
//             <Image
//               key={index}
//               src={icon}
//               alt={`Technology ${index + 1}`}
//               width={50}
//               height={50}
//               className="object-contain"
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default StragetySection;

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import caseStudyData from "@/utils/CaseStudyData/CaseStudyData";
import Tilt from "react-parallax-tilt"; // Updated import
import { motion } from "framer-motion";

const StragetySection = () => {
  const [currentCaseStudyIndex, setCurrentCaseStudyIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [scrollTriggered, setScrollTriggered] = useState(false);
  const [interactionTriggered, setInteractionTriggered] = useState(false); // New state for user interaction
  const lastScrollY = useRef(0);

  const caseStudy = caseStudyData[currentCaseStudyIndex];

  useEffect(() => {
    let interval;
    if (hovering && caseStudy.images.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % caseStudy.images.length
        );
      }, 700);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [hovering, caseStudy.images.length]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
  }, []);

  const handleScroll = (event) => {
    const currentScrollY = window.scrollY;

    // Trigger animation only if user has interacted with the image
    if (
      currentScrollY > lastScrollY.current && // Ensure scrolling down
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
        setInteractionTriggered(false); // Reset interaction trigger
      }, 800);
    }

    lastScrollY.current = currentScrollY;
  };

  const handleInteraction = () => {
    // Mark that the user interacted with the image
    setInteractionTriggered(true);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center p-8 py-36 relative overflow-hidden"
      onWheel={handleScroll}
    >
      {/* Left Section - Title */}
      <motion.div
        className="md:flex-[0.8] lg:flex-[0.5] py-24 px-4 flex items-center justify-center"
        key={`left-${currentCaseStudyIndex}`}
      >
        <p className="font-jakarta px-12 font-extrabold text-6xl text-center md:text-left">
          {caseStudy.title}
        </p>
      </motion.div>

      {/* Middle Section - Image */}
      <div className="group relative md:flex-[1.8] lg:flex-[2.6] flex items-center justify-center">
        {/* Front Image */}
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
              handleInteraction(); // User interaction via hover
            }}
            onLeave={() => setHovering(false)}
          >
            <div className="w-full h-full transform transition-transform duration-700 ease-in-out">
              <Image
                src={caseStudy.images[currentImageIndex]}
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
          key={`bg-image-${(currentCaseStudyIndex + 1) % caseStudyData.length}`}
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
                ].images[0]
              }
              alt="Next Case Study Background"
              width={500}
              height={500}
              className="object-cover w-full h-full rounded-3xl"
            />
          </Tilt>
        </div>
      </div>

      {/* Right Section - About Project */}
      <motion.div
        className="md:flex-[1.3] lg:flex-[1.5] flex flex-col items-center md:items-start"
        key={`right-${currentCaseStudyIndex}`}
      >
        <p className="font-jakarta text-sm font-normal w-full md:w-80 text-center md:text-left mb-4">
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
    </div>
  );
};

export default StragetySection;
