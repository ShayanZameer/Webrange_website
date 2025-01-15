"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/ui/accordian";

const content = [
  {
    id: "01",
    title: "Mobile App Development",
    items: [
      {
        name: "Front-End",
        description:
          "Creating responsive and intuitive user interfaces using modern frameworks like React Native and Flutter. We focus on delivering seamless user experiences across all mobile platforms.",
      },
      {
        name: "Back-End",
        description:
          "Building robust and scalable server-side solutions with Node.js, Python, and cloud services. We ensure your mobile app has a strong foundation.",
      },
      {
        name: "Lorem",
        description:
          "Implementing secure authentication, real-time data synchronization, and offline capabilities for enhanced user experience.",
      },
      {
        name: "Lorem",
        description:
          "Optimizing app performance, implementing caching strategies, and ensuring smooth data flow between frontend and backend.",
      },
      {
        name: "Lorem",
        description:
          "Providing comprehensive testing, debugging, and maintenance services to ensure your app runs flawlessly.",
      },
    ],
  },
  {
    id: "02",
    title: "Web Development",
    items: [
      {
        name: "Front-End",
        description:
          "Building modern, responsive websites using React, Next.js, and other cutting-edge technologies.",
      },
      {
        name: "Back-End",
        description:
          "Developing scalable server architectures and APIs to power your web applications.",
      },
    ],
  },
  {
    id: "03",
    title: "Cloud Solutions",
    items: [
      {
        name: "Front-End",
        description:
          "Implementing cloud-native architectures and serverless computing solutions.",
      },
    ],
  },
];

export function ServicesScroll() {
  const [activeSection, setActiveSection] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const sectionLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const sectionsBreakpoints = content.map(
      (_, index) => index / sectionLength
    );
    const closestBreakpointIndex = sectionsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - sectionsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveSection(closestBreakpointIndex);
  });

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-[40rem]">
      {/* Left section (scrollable content) */}
      <div
        ref={ref}
        className="w-full lg:w-1/2 overflow-y-auto pr-4 scrollbar-none"
      >
        {content.map((section, index) => (
          <div key={section.id} className="min-h-screen py-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: activeSection === index ? 1 : 0.3,
              }}
              className="sticky top-20"
            >
              <h2 className="text-5xl font-bold font-jakarta ">
                {section.title}
              </h2>

              <p className="text-6xl mt-4 font-extrabold opacity-20 font-jakarta">
                {section.id}
              </p>

              <button className=" mt-6 px-6 py-2 text-sm font-medium text-black border border-black rounded-full hover:bg-gray-200 transition">
                Explore all
              </button>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Right section (accordion items) */}
      <div className="w-full lg:w-1/2 pt-20 lg:block hidden">
        <motion.div
          initial={false}
          animate={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.5 }}
          key={activeSection}
          className="sticky top-20"
        >
          <Accordion>
            {content[activeSection].items.map((item, index) => (
              <AccordionItem key={index} title={item.name}>
                {item.description}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
