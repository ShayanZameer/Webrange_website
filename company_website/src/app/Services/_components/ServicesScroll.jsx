"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@/components/ui/accordian";
import { content } from "@/utils/ServicesData/content";
export const ServicesScroll = () => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const container = ref.current;
    const scrollPosition = container.scrollTop;
    const sectionHeights = Array.from(container.children).map(
      (child) => child.offsetHeight
    );

    let accumulatedHeight = 0;
    for (let i = 0; i < sectionHeights.length; i++) {
      accumulatedHeight += sectionHeights[i];

      if (
        scrollPosition >= accumulatedHeight - sectionHeights[i] &&
        scrollPosition < accumulatedHeight
      ) {
        setActiveSection(i);
        break;
      }
    }
  };

  useEffect(() => {
    const container = ref.current;
    container.addEventListener("scroll", handleScroll);

    setActiveSection(0);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAccordionToggle = (value) => {
    setActiveCard(value);
  };

  return (
    <div className="flex flex-col lg:flex-row  h-[20rem]">
      <div className="lg:w-1/2 pr-4 h-20 ">
        {content.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0 }}
            animate={{
              opacity: activeSection === index ? 1 : 0.3,
            }}
            className={`sticky top-20  transition-opacity duration-500`}
          >
            {activeSection === index && (
              <div>
                <h2 className=" text-2xl lg:text-4xl font-bold -mt-24 lg:-mt-2   font-jakarta">
                  {section.title}
                </h2>

                <p className=" text-4xl lg:text-6xl  font-extrabold  opacity-20 font-jakarta">
                  {section.id}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div
        ref={ref}
        className="w-full lg:w-1/2 overflow-y-auto   max-h-[20rem]"
      >
        {content.map((section, sectionIndex) => (
          <div key={section.id} className="mb-12  ">
            <Accordion
              type="single"
              collapsible
              onToggle={handleAccordionToggle}
            >
              {section.items.map((item, itemIndex) => (
                <AccordionItem
                  key={`${section.id}-${itemIndex}`}
                  value={`${section.id}-${itemIndex}`}
                  title={item.name}
                >
                  {item.description}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};
