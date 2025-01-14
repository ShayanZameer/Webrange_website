// "use client";
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import { strategies } from "@/utils/StragetiesData/Strageties";

// const StragetySection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const strategy = strategies[currentIndex];
//   const nextIndex = (currentIndex + 1) % strategies.length;
//   const nextStrategy = strategies[nextIndex];

//   const leftHeadingVariants = {
//     hidden: { y: 50, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
//     exit: { y: -50, opacity: 0, transition: { duration: 0.6 } },
//   };

//   const imageVariants = {
//     hidden: { y: 0, opacity: 1 },
//     visible: { y: -600, opacity: 1, transition: { duration: 0.7 } },
//   };

//   const rightSectionVariants = {
//     hidden: { x: 50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
//     exit: { x: 100, opacity: 0, transition: { duration: 0.6 } },
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === strategies.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex p-8 py-24 relative overflow-hidden">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`heading-${currentIndex}`}
//           className="flex-[0.5] py-24 px-4 flex items-center justify-center"
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           variants={leftHeadingVariants}
//         >
//           <p className="font-jakarta px-12 font-extrabold text-4xl">
//             {strategy.name}
//           </p>
//         </motion.div>
//       </AnimatePresence>

//       <div className="relative flex-[2.2] bottom-12 ">
//         <div className="absolute top-0 left-0  z-0">
//           <Image
//             src={nextStrategy.image}
//             alt={`${nextStrategy.name} Illustration`}
//             width={300}
//             height={300}
//             className="object-cover w-[400px] h-[400px] rounded-[36px]"
//           />
//         </div>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`image-${currentIndex}`}
//             className="absolute top-0 left-0  w-full h-full z-10 "
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={imageVariants}
//           >
//             <Image
//               src={strategy.image}
//               alt={`${strategy.name} Illustration`}
//               width={500}
//               height={500}
//               className="object-cover w-[400px] h-[400px] rounded-[36px]"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.div
//           key={`right-${currentIndex}`}
//           className="flex-[1.5] flex flex-col  "
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           variants={rightSectionVariants}
//         >
//           <p className="font-jakarta text-sm font-normal w-80 mb-4">
//             {strategy.description}
//           </p>
//           <p className="font-jakarta mt-4 text-xl font-semibold mb-4">
//             Technologies Used
//           </p>
//           <div className="flex space-x-6">
//             {strategy.technologiesUsed.map((tech, index) => (
//               <Image
//                 key={index}
//                 src={tech.logo}
//                 alt={tech.name}
//                 width={50}
//                 height={50}
//                 className="object-contain"
//               />
//             ))}
//           </div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default StragetySection;

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { strategies } from "@/utils/StragetiesData/Strageties";

const StragetySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Use the `useInView` hook
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.3, // Trigger animation when 30% of the section is visible
    triggerOnce: true, // Trigger only once
  });

  const strategy = strategies[currentIndex];
  const nextIndex = (currentIndex + 1) % strategies.length;
  const nextStrategy = strategies[nextIndex];

  const leftHeadingVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { y: -50, opacity: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: -600, opacity: 1, transition: { duration: 0.7 } },
  };

  const rightSectionVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
    exit: { x: 100, opacity: 0, transition: { duration: 0.6 } },
  };

  useEffect(() => {
    if (inView) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [inView]);

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === strategies.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  return (
    <div ref={sectionRef} className="flex p-8 py-24 relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`heading-${currentIndex}`}
          className="flex-[0.5] py-24 px-4 flex items-center justify-center"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
          exit="exit"
          variants={leftHeadingVariants}
        >
          <p className="font-jakarta px-12 font-extrabold text-4xl">
            {strategy.name}
          </p>
        </motion.div>
      </AnimatePresence>

      <div className="relative flex-[2.2] bottom-12">
        <div className="absolute top-0 left-0 z-0">
          <Image
            src={nextStrategy.image}
            alt={`${nextStrategy.name} Illustration`}
            width={300}
            height={300}
            className="object-cover w-[400px] h-[400px] rounded-[36px]"
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${currentIndex}`}
            className="absolute top-0 left-0 w-full h-full z-10"
            initial="hidden"
            animate={isAnimating ? "visible" : "hidden"}
            exit="exit"
            variants={imageVariants}
          >
            <Image
              src={strategy.image}
              alt={`${strategy.name} Illustration`}
              width={500}
              height={500}
              className="object-cover w-[400px] h-[400px] rounded-[36px]"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`right-${currentIndex}`}
          className="flex-[1.5] flex flex-col"
          initial="hidden"
          animate={isAnimating ? "visible" : "hidden"}
          exit="exit"
          variants={rightSectionVariants}
        >
          <p className="font-jakarta text-sm font-normal w-80 mb-4">
            {strategy.description}
          </p>
          <p className="font-jakarta mt-4 text-xl font-semibold mb-4">
            Technologies Used
          </p>
          <div className="flex space-x-6">
            {strategy.technologiesUsed.map((tech, index) => (
              <Image
                key={index}
                src={tech.logo}
                alt={tech.name}
                width={50}
                height={50}
                className="object-contain"
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default StragetySection;
