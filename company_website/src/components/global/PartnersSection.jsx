import Image from "next/image";
import Marquee from "react-fast-marquee";
import IMAGES from "@/constants/images";

const PartnersSection = () => {
  const partnerImages = [
    IMAGES.icons.microsoft365,
    IMAGES.icons.awspartner,
    IMAGES.icons.salesforce,
    IMAGES.icons.ibm,
  ];

  return (
    <div className="p-6 sm:p-8 md:p-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-bold font-jakarta text-xl sm:text-2xl mb-6 sm:mb-8">
          Our Partners
        </p>
        <div className="overflow-hidden w-[350px] md:w-[600px] lg:w-[700px] mx-auto">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="flex"
          >
            {partnerImages.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center mx-4 "
                style={{ flexShrink: 0 }}
              >
                <Image
                  src={src}
                  alt={`Partner Logo ${index + 1}`}
                  width={60}
                  height={60}
                  className="object-contain sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
