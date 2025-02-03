import AnimatedWrapper from "@/components/Animation/AnimatedWrapper";
import { StickyScrollRevealDemo } from "@/components/StickyScroll/StickyScroll";
import IMAGES from "@/constants/images";

const ServicesSection = () => {
  const content = [
    {
      icon: IMAGES.icons.erp,
      title: "ERP Solutions",
      description:
        " Streamline operations, enhance productivity, and achieve more with solutions built to fit your unique business needs.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.erpbasic}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Collaborative Editing"
          />
        </div>
      ),
    },
    {
      icon: IMAGES.icons.dataandai,
      title: "Data & AI",
      description:
        " Transform raw data into powerful insights that drive smarter strategies and fuel your business growth.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <img
            src={IMAGES.dataandaibasic}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Real-time Changes"
          />
        </div>
      ),
    },
    {
      icon: IMAGES.icons.clouud,
      title: "Cloud Solutions",
      description:
        " Unlock limitless potential with scalable, secure, and accessible cloud technologies designed for modern businesses.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.cloudbasic}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control"
          />
        </div>
      ),
    },

    {
      icon: IMAGES.icons.customsolution,
      title: "Software Development",
      description:
        " Designing and building scalable, high-performance software solutions tailored to business needs.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.ctbasic}
            width={500}
            height={300}
            className="h-full w-full object-cover"
            alt="Version Control"
          />
        </div>
      ),
    },

    {
      icon: IMAGES.icons.business,
      title: "IT Infrastructure",
      description:
        "Empower your business with reliable, future-proof systems that adapt to your ever-changing needs.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          <img
            src={IMAGES.itbasic}
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

      <AnimatedWrapper>
        <div className="p-10 ">
          <StickyScrollRevealDemo content={content} />
        </div>
      </AnimatedWrapper>
    </div>
  );
};

export default ServicesSection;
