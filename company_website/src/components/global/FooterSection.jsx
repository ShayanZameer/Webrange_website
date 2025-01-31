"use client";
import IMAGES from "@/constants/images";
import Image from "next/image";
import SocialLink from "@/components/global/SocialLink";
import { socialLinks } from "@/utils/SocialLinksData/SocialLinks";
import { useRouter } from "next/navigation";
export const FooterSection = () => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/contactus");
  };

  return (
    <footer className="bg-lightblue h-[400px] flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row items-center justify-center flex-grow text-center px-4 sm:px-8">
        <p
          onClick={handleNavigate}
          className=" cursor-pointer font-jakarta font-bold text-2xl sm:text-4xl underline-offset-2 underline"
        >
          Let's start a discussion
        </p>
        <Image
          src={IMAGES.icons.handshake}
          alt="Discussion Placeholder"
          width={48}
          height={48}
          className="object-cover ml-0 sm:ml-3 mt-4 sm:mt-0"
        />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 lg:px-20 py-4 space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} icon={link.icon} href={link.href} />
          ))}
        </div>

        <div>
          <p className="font-jakarta text-[#202124] text-sm text-center sm:text-right">
            © Copyright 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
