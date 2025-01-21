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
//     <div className="p-12">
//       <p className="text-center font-bold font-jakarta text-2xl mb-8">
//         Our Partners
//       </p>
//       <div className="flex justify-center space-x-16">
//         {partnerImages.map((src, index) => (
//           <div key={index} className="mx-4 mb-4">
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
    <div className="p-12">
      <p className="text-center font-bold font-jakarta text-2xl mb-8">
        Our Partners
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 ">
        {partnerImages.map((src, index) => (
          <div key={index} className="flex justify-center items-center w-full">
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
