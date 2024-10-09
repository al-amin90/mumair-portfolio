import React from "react";

const SectionTitle = ({title, description}) => {
  return (
    <div className="text-center text-[#000000] mt-24">
      <h1 className="text-4xl lg:text-5xl  font-semibold">{title}</h1>

      <p className="text-sm lg:text-base w-full md:w-2/3 mx-auto font-medium mb-4 mt-6 ">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
