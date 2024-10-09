import React from "react";
import SectionTitle from "../Shared/SectionTitle";

const Projects = () => {
  return (
    <section>
      {/* heading section */}
      <SectionTitle title="My Projects" description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"></SectionTitle>

      {/* project card */}
      <div className=" mt-14 text-lg *:py-2 *:px-4 font-normal *:rounded-xl *:border *:border-[#545454] gap-3 flex items-center justify-center">
        <button className="bg-[#F8F8F8]">All</button>
        <button className="bg-[#F8F8F8]">UI/UX</button>
        <button className="bg-[#FD6F00] text-white">Web Design</button>
        <button className="bg-[#F8F8F8]">App Design</button>
        <button className="bg-[#F8F8F8]">Graphic Design</button>
      </div>
    </section>
  );
};

export default Projects;
