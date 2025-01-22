const Pagination = ({ caseStudyData, currentCaseStudyIndex }) => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="flex space-x-2">
        {caseStudyData.map((_, index) => {
          const totalDotsToShow = 5;
          const halfWindow = Math.floor(totalDotsToShow / 2);
          const start = Math.max(
            0,
            Math.min(
              currentCaseStudyIndex - halfWindow,
              caseStudyData.length - totalDotsToShow
            )
          );
          const end = Math.min(start + totalDotsToShow, caseStudyData.length);

          if (index >= start && index < end) {
            return (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentCaseStudyIndex
                    ? "bg-black scale-110"
                    : "bg-gray-400"
                } transition-all duration-300`}
              ></div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Pagination;
