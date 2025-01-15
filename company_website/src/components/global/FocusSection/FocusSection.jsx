import HeadingWithIcon from "./_components/HeadingWithIcon";
import { BsGraphUp } from "react-icons/bs";

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
          Take a moment to familiarize yourself with our mindset. These are the
          guiding principles and insights about us that provide a deeper
          understanding of our identity.
        </p>
      </div>
      <div className="flex-1 py-4 px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="flex flex-col lg:flex-row">
          {" "}
          <div className="flex-1 mb-4 lg:mb-0">
            {" "}
            <HeadingWithIcon
              heading="We help our clients generate revenue"
              Icon={BsGraphUp}
              description="In our design approach, we prioritize the primary business needs and goals. Recognizing that profitability is fundamental to every project, we aim to deliver solutions that contribute to our clients' financial success."
              border="border-b border-r"
            />
          </div>
          <div className="flex-1 mb-4 lg:mb-0">
            {" "}
            <HeadingWithIcon
              heading="We help our clients generate revenue"
              Icon={BsGraphUp}
              description="In our design approach, we prioritize the primary business needs and goals. Recognizing that profitability is fundamental to every project, we aim to deliver solutions that contribute to our clients' financial success."
              border="border-b"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          {" "}
          <div className="flex-1 mb-4 lg:mb-0">
            {" "}
            <HeadingWithIcon
              heading="We help our clients generate revenue"
              Icon={BsGraphUp}
              description="In our design approach, we prioritize the primary business needs and goals. Recognizing that profitability is fundamental to every project, we aim to deliver solutions that contribute to our clients' financial success."
              border="border-r"
            />
          </div>
          <div className="flex-1">
            {" "}
            <HeadingWithIcon
              heading="We help our clients generate revenue"
              Icon={BsGraphUp}
              description="In our design approach, we prioritize the primary business needs and goals. Recognizing that profitability is fundamental to every project, we aim to deliver solutions that contribute to our clients' financial success."
              border=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusSection;
