import Image from "next/image";
import IMAGES from "@/constants/images";

const Worldmap = () => {
  return (
    <div className="relative w-full h-64 sm:h-96 lg:h-[500px]">
      <Image
        src={IMAGES.worldmap}
        alt="World Map"
        fill
        className=""
        priority={true}
      />
    </div>
  );
};

export default Worldmap;
