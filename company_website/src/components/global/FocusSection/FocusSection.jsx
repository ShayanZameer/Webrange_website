import HeadingWithIcon from "./_components/HeadingWithIcon";
// import { BsGraphUp } from "react-icons/bs";
import { Sparkle, Swords, ChartSpline, Bolt } from "lucide-react";

const FocusSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-6 py-10">
      {" "}
      <div className="flex-[0.8] flex flex-col bg-red py-12 px-8 lg:py-24 lg:px-16 justify-center">
        {" "}
        <p className="font-jakarta font-semibold text-xs mb-2">HOW WE THINK</p>
        <p className="font-jakarta font-bold mb-2 text-2xl sm:text-3xl lg:text-4xl">
          {" "}
          Our Focus
        </p>
        <p className="font-jakarta text-sm sm:text-base lg:text-lg overflow-hidden">
          Take a moment to explore the principles that guide our approach. These
          pillars represent our unwavering commitment to excellence and
          innovation.
        </p>
      </div>
      <div className="flex-1 py-4 px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex flex-col lg:flex-row">
          {" "}
          <div className="flex-1 mb-4 lg:mb-0  border-r border-b">
            {" "}
            <HeadingWithIcon
              heading="Driving Business Growth"
              Icon={ChartSpline}
              description="We design and develop software solutions that align with your core business objectives. By focusing on profitability and user-centricity, we ensure your success in a competitive landscape."
            />
          </div>
          <div className="flex-1 mb-4 lg:mb-0 border-b">
            {" "}
            <HeadingWithIcon
              heading="Solving Complex Challenges
"
              Icon={Swords}
              description="Our methodology revolves around simplifying the intricate. We tackle each project with a systematic approach, ensuring that even the most complex problems are met with efficient, user-friendly solutions."
              border=""
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          {" "}
          <div className="flex-1 mb-4 lg:mb-0">
            {" "}
            <HeadingWithIcon
              heading="Elevating User Experience"
              Icon={Bolt}
              description="Through a blend of creativity and data-driven insights, we create software that resonates with end-users, fostering engagement and loyalty."
              border="border-r"
            />
          </div>
          <div className="flex-1">
            {" "}
            <HeadingWithIcon
              heading="Achieving Tangible Results"
              Icon={Sparkle}
              description="Our strategies are built for impact. By combining innovative thinking with cutting-edge technology, we deliver solutions that drive measurable results for your business."
              border=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
