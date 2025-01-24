"use client";
import React, { useState } from "react";
import AnimatedPage from "@/components/Animation/PageAnimated";
import CloseButton from "@/components/global/CloseButton";
import InfoRow from "./_components/InfoRow";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { socialLinks } from "@/utils/SocialLinksData/SocialLinks";
import SocialLink from "@/components/global/SocialLink";
import AnimatedInput from "./_components/AnimatedInput";

export default function ContactUs() {
  // State to collect form data
  const handleSubmit = () => {
    setFormData({
      username: "",
      email: "",
      projectDetails: "",
    });
  };
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    projectDetails: "",
  });

  const handleChange = (label, value) => {
    setFormData((prev) => ({ ...prev, [label]: value }));
  };

  const generateMailtoLink = () => {
    const { username, email, projectDetails } = formData;
    if (!username || !email || !projectDetails) {
      return "#";
    }

    const subject = encodeURIComponent(
      `Contact Form Submission from ${username}`
    );
    const body = encodeURIComponent(
      `Username: ${username}\nEmail: ${email}\nProject Details: ${projectDetails}`
    );

    return `mailto:contact@webrangesolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <AnimatedPage title="Contact Us">
      <div className="py-6 px-4 lg:py-10 lg:px-20 bg-white ">
        <div className="flex justify-end">
          <CloseButton />
        </div>

        <div className="flex flex-col  items-center h-[80vh]   lg:flex-row  px-2 gap-8">
          <div className="flex-1 space-y-6">
            <div>
              <p className="font-jakarta font-normal text-greyColour text-sm">
                Let’s start a discussion
              </p>
              <p className="font-jakarta font-bold text-2xl lg:text-3xl py-1">
                CONTACT US NOW
              </p>
            </div>

            <div className="space-y-6">
              <InfoRow
                icon={<FaEnvelope size={20} />}
                heading="Email us at"
                value="Webrangesolutions@company.com"
              />

              <InfoRow
                icon={<FaPhone size={20} />}
                heading="Phone #"
                value="+92 34515 1512"
              />

              <InfoRow
                icon={<CiLocationOn size={20} />}
                heading="Business address"
                value="Address here"
              />
            </div>

            <div>
              <div className="flex items-center mb-6 space-x-4">
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} icon={link.icon} href={link.href} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <AnimatedInput
              label="Username"
              onChange={(e) => handleChange("username", e.target.value)}
            />
            <AnimatedInput
              label="Your email"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <AnimatedInput
              label="Project Details"
              onChange={(e) => handleChange("projectDetails", e.target.value)}
            />

            <div className="flex justify-center">
              <a
                href={generateMailtoLink()}
                className="bg-black text-white px-6 sm:px-10 lg:px-16 xl:px-32 py-3 text-sm font-semibold rounded-full flex items-center justify-center gap-2 w-full max-w-md"
              >
                <span className="font-jakarta truncate text-xs md:text-sm">
                  SUBMIT REQUEST
                </span>
                <FaArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
