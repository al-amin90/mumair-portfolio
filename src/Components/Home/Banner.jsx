import React from "react";
import banner from "../../assets/bannerImg.png"

const Banner = () => {
  return (
    <div className="flex flex-col justify-between h-[calc(100nh-88px)]  mt-24 lg:flex-row gap-8">
      {/* banner left side */}
      <div className="text-[#000000] flex-1">
        <h6 className="text-base font-semibold"> Hi I am </h6>
        <h6 className="text-[#FD6F00] text-xl mt-2 font-semibold">
          Muhammad Umair{" "}
        </h6>
        <h1 className="text-7xl font-bold">
          UI & UX <br /> <span className="ml-40">Designer</span>
        </h1>

        <p className="text-base  font-medium mb-4 mt-6 ">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        <button className="bg-[#FD6F00] text-base hidden lg:flex text-white px-9 py-2 rounded-[5px] whitespace-nowrap">
          Hire Me
        </button>
      </div>

      {/* banner right side */}
      <div className="flex-1">
        <img src={banner} className=" mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Banner;
