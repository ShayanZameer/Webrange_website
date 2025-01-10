const InfoRow = ({ icon, heading, value }) => {
  return (
    <div className=" space-x-2">
      {/* Icon */}
      <div className=" px-2 text-greyColour flex space-x-2">
        {icon}

        <p className="text-sm text-greyColour">{heading}</p>
      </div>

      {/* Text Section */}
      <div className="py-2">
        <p className="text-base text-[#202124] font-jakarta font-semibold underline underline-offset-2">
          {value}
        </p>
      </div>
    </div>
  );
};

export default InfoRow;
