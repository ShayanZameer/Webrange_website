import React from "react";
import Image from "next/image";

const ProfileCard = ({
  profileImage,
  yearsOfExperience,
  name,
  title,
  description,
  additionalInfo,
  expertise,
  socialLinks,
}) => {
  return (
    <div className="max-w-xl p-6 border-t border-b border-r border-black mx-auto">
      {/* Profile Image and Experience */}
      <div className="flex flex-col md:flex-row md:space-x-12 items-center md:items-start">
        {/* Profile Image */}
        <div className="relative w-52 h-52 md:w-[250px] md:h-60 overflow-hidden flex-shrink-0">
          <Image
            src={profileImage}
            alt={name}
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        {/* Experience */}
        <div className="mt-4 md:mt-0 flex md:space-x-2 md:items-center">
          <h2 className="text-3xl font-jakarta font-bold text-black">
            {yearsOfExperience}+
          </h2>
          <p className="text-xs font-light font-jakarta mt-1 md:mt-0 md:ml-2">
            Years of Experience
          </p>
        </div>
      </div>

      {/* Name and Title */}
      <div className="mt-6 text-center md:text-left">
        <h1 className="text-2xl font-bold font-jakarta text-black">{name}</h1>
        <p className="font-jakarta text-sm font-semibold">{title}</p>
      </div>

      {/* Description */}
      <div className="mt-4 text-xs font-jakarta text-center md:text-left">
        {description}
      </div>

      {/* Additional Info */}
      <div className="mt-4 text-xs font-jakarta text-center md:text-left">
        {additionalInfo}
      </div>

      {/* Expertise Tags */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold font-jakarta text-black mb-2">
          Expertise:
        </h3>
        <div className="flex flex-wrap justify-center md:justify-start gap-2">
          {expertise.map((item, index) => (
            <span
              key={index}
              className="px-3 font-jakarta py-1 text-sm text-black border border-black rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-6 flex justify-center md:justify-start space-x-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-gray-600 transition"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
