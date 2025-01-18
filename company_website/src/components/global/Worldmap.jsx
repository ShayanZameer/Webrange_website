import Image from "next/image";
import IMAGES from "@/constants/images";

const Worldmap = () => {
  return (
    <div className="relative w-full h-auto max-w-full">
      <Image
        src={IMAGES.worldmap}
        alt="World Map"
        layout="responsive"
        width={1200}
        height={600}
        priority={true}
      />
    </div>
  );
};

export default Worldmap;
