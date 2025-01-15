const HeadingWithIcon = ({ heading, Icon, description, border }) => {
  return (
    <div
      className={`flex flex-col items-start p-5 border-[#00000033] ${
        border || ""
      }`}
    >
      <div className="flex justify-between items-center w-full">
        <p className="text-lg font-semibold font-jakarta leading-6">
          {heading}
        </p>
        {Icon && <Icon className="text-2xl mb-4 font-semibold" />}
      </div>
      <p className="mt-2 text-[#202124] text-sm font-light font-jakarta">
        {description}
      </p>
    </div>
  );
};

export default HeadingWithIcon;
