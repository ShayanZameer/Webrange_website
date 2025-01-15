import { StickyScrollRevealDemo } from "@/components/StickyScroll/StickyScroll";
import IMAGES from "@/constants/images";

const ServicesSection = () => {
  const content = [
    {
      icon: "./Images/icons/emoji3.png",
      title: "ERP Solutions",
      description:
        "Simplifying your business processes, one solution at a time.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.Strategy1}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
    {
      icon: "./Images/icons/emoji3.png",
      title: "Data & AI",
      description: "Turning data into decisions with intelligent insights.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src={IMAGES.Strategy2}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Real-time Changes"
          />
        </div>
      ),
    },
    {
      icon: "./Images/icons/emoji3.png",
      title: "Cloud",
      description:
        "Effortless scaling and seamless integration for your digital journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.Strategy1}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control"
          />
        </div>
      ),
    },

    {
      icon: "./Images/icons/emoji3.png",
      title: "Cloud",
      description:
        "Effortless scaling and seamless integration for your digital journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.Strategy2}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control"
          />
        </div>
      ),
    },

    {
      icon: "./Images/icons/emoji3.png",
      title: "Cloud",
      description:
        "Effortless scaling and seamless integration for your digital journey.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.casestudy}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#080808] rounded-3xl my-24">
      <h2 className="text-3xl font-jakarta font-bold text-center pt-8 text-white">
        Basic Services Overview{" "}
      </h2>

      <p className="text-lg font-thin font-jakarta text-center py-4 text-white ">
        Our approach allows us to deliver exceptional experiences <br /> that
        drive growth and success.
      </p>

      <div className="p-10 ">
        <StickyScrollRevealDemo content={content} />
      </div>
    </div>
  );
};

export default ServicesSection;
