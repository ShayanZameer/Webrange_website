import Image from "next/image";
import IMAGES from "@/constants/images";

const PartnersSection = () => {
  const partnerImages = [
    IMAGES.icons.google,
    IMAGES.icons.google,
    IMAGES.icons.google,
    IMAGES.icons.google,
    IMAGES.icons.google,
    IMAGES.icons.google,
  ];

  return (
    <div className="p-6 sm:p-8 md:p-12">
      <p className="text-center font-bold font-jakarta text-xl sm:text-2xl mb-6 sm:mb-8">
        Our Partners
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:space-x-16 gap-6">
        {partnerImages.map((src, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={src}
              alt={`Partner Logo ${index + 1}`}
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
