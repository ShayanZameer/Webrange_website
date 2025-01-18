import Image from "next/image";
// import IMAGES from "@/constants/images";

const Worldmap = () => {
  return (
    <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
      <Image
        src="/Images/Worldmap/Worldmap.png"
        alt="World Map"
        fill
        className="object-cover"
        priority={true}
      />
    </div>
  );
};

export default Worldmap;
