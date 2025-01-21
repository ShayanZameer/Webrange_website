"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
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
        name: "Authentication & Sync",
        description:
          "Implementing secure authentication, real-time data synchronization, and offline capabilities for enhanced user experience.",
      },
      {
        name: "Performance Optimization",
        description:
          "Optimizing app performance, implementing caching strategies, and ensuring smooth data flow between frontend and backend.",
      },
      {
        name: "Testing & Maintenance",
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
      {
        name: "Full-Stack Integration",
        description:
          "Seamlessly integrating front-end and back-end components for a cohesive web experience.",
      },
      {
        name: "Performance Optimization",
        description:
          "Implementing best practices for web performance, including lazy loading, code splitting, and caching strategies.",
      },
    ],
  },
  {
    id: "03",
    title: "Cloud Solutions",
    items: [
      {
        name: "Cloud Architecture",
        description:
          "Designing and implementing scalable, resilient cloud architectures tailored to your business needs.",
      },
      {
        name: "Serverless Computing",
        description:
          "Leveraging serverless technologies to reduce operational overhead and improve scalability.",
      },
      {
        name: "Cloud Migration",
        description:
          "Assisting in seamless migration of existing applications and infrastructure to cloud platforms.",
      },
      {
        name: "DevOps & CI/CD",
        description:
          "Implementing robust DevOps practices and continuous integration/deployment pipelines for efficient development and deployment processes.",
      },
    ],
  },
  {
    id: "04",
    title: "Cloud Solutions",
    items: [
      {
        name: "Cloud Architecture",
        description:
          "Designing and implementing scalable, resilient cloud architectures tailored to your business needs.",
      },
      {
        name: "Serverless Computing",
        description:
          "Leveraging serverless technologies to reduce operational overhead and improve scalability.",
      },
      {
        name: "Cloud Migration",
        description:
          "Assisting in seamless migration of existing applications and infrastructure to cloud platforms.",
      },
      {
        name: "DevOps & CI/CD",
        description:
          "Implementing robust DevOps practices and continuous integration/deployment pipelines for efficient development and deployment processes.",
      },
    ],
  },
  {
    id: "05",
    title: "Cloud Solutions",
    items: [
      {
        name: "Cloud Architecture",
        description:
          "Designing and implementing scalable, resilient cloud architectures tailored to your business needs.",
      },
      {
        name: "Serverless Computing",
        description:
          "Leveraging serverless technologies to reduce operational overhead and improve scalability.",
      },
      {
        name: "Cloud Migration",
        description:
          "Assisting in seamless migration of existing applications and infrastructure to cloud platforms.",
      },
      {
        name: "DevOps & CI/CD",
        description:
          "Implementing robust DevOps practices and continuous integration/deployment pipelines for efficient development and deployment processes.",
      },
    ],
  },
];

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
