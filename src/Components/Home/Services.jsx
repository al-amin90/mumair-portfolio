import ui from "../../assets/services/ui.png";
import graphic from "../../assets/services/graphic.png";
import app from "../../assets/services/app.png";
import web from "../../assets/services/web.png";
import SectionTitle from "../Shared/SectionTitle";

const Services = () => {
  return (
    <section>
      {/* heading section */}
      <SectionTitle
        title="Services"
        description=" Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra"
      ></SectionTitle>

      {/* services card */}
      <div className="grid grid-cols-1 mt-12 gap-6 lg:grid-cols-4 md:grid-cols-2">
        <div className="rounded-xl text-[#000000] bg-[#F8F8F8] px-4 py-10">
          <img src={ui} alt="" />
          <h4 className="mt-5 mb-3 text-2xl font-semibold">UI/UX</h4>
          <p className="font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="rounded-xl text-[#000000] bg-[#F8F8F8] px-4 py-10">
          <img src={web} alt="" />
          <h4 className="mt-5 mb-3 text-2xl font-semibold">Web Design </h4>
          <p className="font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="rounded-xl text-[#000000] bg-[#F8F8F8] px-4 py-10">
          <img src={app} alt="" />
          <h4 className="mt-5 mb-3 text-2xl font-semibold">App Design </h4>
          <p className="font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
        <div className="rounded-xl text-[#000000] bg-[#F8F8F8] px-4 py-10">
          <img src={graphic} alt="" />
          <h4 className="mt-5 mb-3 text-2xl font-semibold">Graphic Design </h4>
          <p className="font-normal text-sm">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
