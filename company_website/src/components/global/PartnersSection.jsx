// import Image from "next/image";
// import IMAGES from "@/constants/images";

// const PartnersSection = () => {
//   const partnerImages = [
//     IMAGES.icons.google,
//     IMAGES.icons.google,
//     IMAGES.icons.google,
//     IMAGES.icons.google,
//     IMAGES.icons.google,
//     IMAGES.icons.google,
//   ];

//   return (
//     <div className="p-6 sm:p-8 md:p-12">
//       <p className="text-center font-bold font-jakarta text-xl sm:text-2xl mb-6 sm:mb-8">
//         Our Partners
//       </p>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:justify-center lg:space-x-16 gap-6">
//         {partnerImages.map((src, index) => (
//           <div key={index} className="flex justify-center items-center">
//             <Image
//               src={src}
//               alt={`Partner Logo ${index + 1}`}
//               width={80}
//               height={80}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PartnersSection;
import Image from "next/image";
import Marquee from "react-fast-marquee";
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
      <div className="max-w-6xl mx-auto">
        <p className="text-center font-bold font-jakarta text-xl sm:text-2xl mb-6 sm:mb-8">
          Our Partners
        </p>
        <div className="overflow-hidden w-[400px] md:w-[600px] lg:w-[800px] mx-auto">
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={true}
            className="flex"
          >
            {partnerImages.map((src, index) => (
              <div
                key={index}
                className="flex justify-center items-center mx-4"
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
