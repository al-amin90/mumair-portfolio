import pro1 from "../../assets/Projects/pro1.png";
import pro2 from "../../assets/Projects/pro2.png";
import pro3 from "../../assets/Projects/pro3.png";
import SectionTitle from "../Shared/SectionTitle";

const Projects = () => {
  return (
    <section>
      {/* heading section */}
      <SectionTitle
        title="My Projects"
        description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
      ></SectionTitle>

      {/* projects card */}
      <div className=" mt-14 text-lg *:py-2 *:px-4 font-normal *:rounded-xl *:border *:border-[#545454] gap-3 flex flex-wrap items-center justify-center">
        <button className="bg-[#F8F8F8]">All</button>
        <button className="bg-[#F8F8F8]">UI/UX</button>
        <button className="bg-[#FD6F00] text-white">Web Design</button>
        <button className="bg-[#F8F8F8]">App Design</button>
        <button className="bg-[#F8F8F8]">Graphic Design</button>
      </div>

      <div className="grid grid-cols-1 mt-12 gap-6 lg:grid-cols-3 md:grid-cols-2">
        <div className="rounded-xl text-[#000000]">
          <img src={pro1} alt="" />
          <h4 className="mt-5 mb-2 text-base font-normal text-[#FD6F00]">Web Design </h4>
          <p className="font-bold text-lg ">
          AirCalling Landing Page Design 
          </p>
        </div>
        <div className="rounded-xl text-[#000000]">
          <img src={pro2} alt="" />
          <h4 className="mt-5 mb-2 text-base font-normal text-[#FD6F00]">Web Design </h4>
          <p className="font-bold text-lg ">
          Business Landing Page Design 
          </p>
        </div>
        <div className="rounded-xl text-[#000000]">
          <img src={pro3} alt="" />
          <h4 className="mt-5 mb-2 text-base font-normal text-[#FD6F00]">Web Design </h4>
          <p className="font-bold text-lg ">
          Ecom Web Page Design  
          </p>
        </div>

      </div>
    </section>
  );
};

export default Projects;
