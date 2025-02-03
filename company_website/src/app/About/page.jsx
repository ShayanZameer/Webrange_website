"use client";
import AnimatedPage from "@/components/Animation/PageAnimated";
import Landing from "../../components/global/FocusSection/Landing";
import FocusSection from "@/components/global/FocusSection/FocusSection";
import SuperPower from "@/components/global/SuperPower";
import PartnersSection from "@/components/global/PartnersSection";
import FooterSection from "@/components/global/FooterSection";
import ProfileCard from "./_components/Profile";
import IMAGES from "@/constants/images";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useRef } from "react";
import Worldmap from "@/components/global/Worldmap";
import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";

const profileData = [
  {
    profileImage: IMAGES.saim,
    yearsOfExperience: 5,
    name: "Saim Rahdari",
    title: "CEO",
    description:
      "Saim Rahdari, Founder & CEO of Webrange Solutions—where innovation knows no bounds. Our mission is to empower businesses and individuals with cutting-edge software solutions that streamline operations and enhance productivity.",
    additionalInfo:
      "At Webrange Solutions, we are committed to exceptional customer service and seamless user experiences. We strive to create an innovative environment that simplifies daily tasks and drives business success.",

    expertise: [
      "Business Growth Strategy",
      "AI & Digital Innovation",
      "IT Consulting & Solutions",
      "Enterprise Cloud & Software",
      "Startup & Product Scaling",
      "Leadership & Innovation",
    ],

    socialLinks: [
      {
        href: "https://www.linkedin.com/in/saim-rahdari/",
        icon: <FaLinkedin size={24} />,
      },
      {
        href: "https://www.instagram.com/saim_rahdari/",
        icon: <FaInstagram size={24} />,
      },
      {
        href: "https://www.facebook.com/share/15hrbshFVv/",
        icon: <FaFacebook size={24} />,
      },
    ],
  },

  {
    profileImage: IMAGES.bilal,
    yearsOfExperience: 5,
    name: "Bilal Anwar",
    title: "CTO",
    description:
      "Co-Founder of Webrange Solutions with over five years of experience in building and managing teams for web & mobile apps, DApps, ERPs, CRMs, and enterprise solutions. I specialize in project ideation, execution, and team management, delivering top-tier results for over 50 small businesses.",
    additionalInfo:
      "As a startup leader, I’ve led recruitment, managed teams efficiently, and overseen projects from concept to completion. Passionate about seamless user experiences, I’m always eager to collaborate and drive innovation in the tech space. Let's connect and build something great!",
    expertise: [
      "Tech Strategy",
      "Software Engineering",
      "Cloud Solutions",
      "AI & Automation",
      "Innovation Leadership",
    ],
    socialLinks: [
      {
        href: "https://www.linkedin.com/in/bilal-webrange/",
        icon: <FaLinkedin size={24} />,
      },
      {
        href: "https://www.instagram.com/bilal_anwarr/",
        icon: <FaInstagram size={24} />,
      },
      {
        href: "https://www.facebook.com/share/1D8pivae9m/",
        icon: <FaFacebook size={24} />,
      },
    ],
  },
];
export default function About() {
  const servicesSectionRef = useRef(null);

  const handleExploreAllClick = () => {
    if (servicesSectionRef.current) {
      servicesSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AnimatedPage title="About">
      <div>
        <div>
          <Landing
            title="Who we are"
            subtitle="With 35+ years' expertise, we craft reliable and secure software solutions."
            description="Creating meaningful digital experiences."
            buttonText="Explore All"
            onClick={handleExploreAllClick}
            imageSrc={IMAGES.About}
          />
        </div>

        {/* <AnimatedWrapper> */}
        <div ref={servicesSectionRef} className="flex justify-center px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {profileData.map((profile, index) => (
              <div
                key={index}
                className="flex justify-center  border lg:border-black"
              >
                <ProfileCard {...profile} />
              </div>
            ))}
          </div>
        </div>
        {/* </AnimatedWrapper> */}

        <AnimatedWrapper>
          <div>
            <FocusSection />
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <div>
            <SuperPower />
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper>
          <div>
            <Worldmap />
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div>
            <PartnersSection />
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper>
          <div>
            <FooterSection />
          </div>
        </AnimatedWrapper>
      </div>
    </AnimatedPage>
  );
}
