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
  return (
    <AnimatedPage title="Contact Us">
      <div className="py-6 px-4 lg:py-10 lg:px-20 ">
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
            <AnimatedInput label="Username" />
            <AnimatedInput label="Your email" />
            <AnimatedInput label="Project Details" />

            <div className="flex justify-center">
              <button className="bg-black text-white px-6 sm:px-10 lg:px-16 xl:px-32 py-3 text-sm font-semibold rounded-full flex items-center justify-center gap-2 w-full max-w-md">
                <span className="font-jakarta truncate text-xs md:text-sm">
                  SUBMIT REQUEST
                </span>
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
