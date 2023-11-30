const ExperienceCard = ({ title, place, period, imgUrl, details }: any) => {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative group w-80 h-56 md:w-[36rem] md:h-[24rem] group cursor-pointer">
        <img src={imgUrl} alt={title} className="w-full h-full" />
        <div className="transition ease-in-out duration-500 absolute top-0 flex flex-col justify-center opacity-0 px-8 bg-dark/90 text-base  md:text-xl font-semibold w-full h-full group-hover:opacity-100">
          {details}
        </div>
      </div>
      <div className="text-lg md:text-xl mt-4 underline font-semibold w-fit">
        {title}
      </div>
      <div className="flex flex-col md:flex-row md:space-x-2">
        <div className="text-lg md:text-xl">{place}</div>
        <div className="text-base md:text-lg">
          {"("}
          {period}
          {")"}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
