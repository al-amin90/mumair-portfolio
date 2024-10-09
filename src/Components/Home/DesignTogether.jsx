import React from "react";
import SectionTitle from "../Shared/SectionTitle";

const DesignTogether = () => {
  return (
    <section>
      {/* heading section */}
      <SectionTitle
        title="Lets Design Together"
        description="Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium"
      ></SectionTitle>

    {/* input part */}
    <div className="flex items-center mt-12 justify-center">
        <input className="text-sm md:w-1/2 py-3 px-4 md:py-4 md:px-6 font-normal rounded-xl border border-[#AFAFAF]" type="email" name="" placeholder="Enter Your Email" id="" />
        <button className="py-3 px-4 md:py-4 md:px-6 font-normal rounded-xl whitespace-nowrap bg-[#FD6F00] ml-4 text-white">Contact Me </button>
    </div>
    </section>
  );
};

export default DesignTogether;
