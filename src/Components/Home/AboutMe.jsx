import banner from "../../assets/aboutmeImg.png";
import bar1 from "../../assets/aboutMe/bar1.png";
import bar2 from "../../assets/aboutMe/bar2.png";
import bar3 from "../../assets/aboutMe/bar3.png";

const AboutMe = () => {
  return (
    <section className="flex flex-col-reverse mt-12 gap-8 lg:gap-0  justify-between items-center lg:flex-row-reverse">
      {/* banner right side */}
      <div className="text-[#000000] flex-1">
        {/* heading section */}
        <h1 className="text-4xl lg:text-5xl font-semibold">About Me</h1>
        <p className="text-sm lg:text-base  font-normal mb-4 mt-4 ">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
          pharetra
        </p>

        {/* progress part */}
        <div className="text-base lg:text-lg  font-semibold">
          <h6 >UX</h6>
          <img src={bar1} alt=""  className="cursor-no-drop my-1"/>
          <h6>Website Design</h6>
          <img src={bar2} alt=""  className="cursor-no-drop my-1"/>
          <h6>App Design </h6>
          <img src={bar3} alt=""  className="cursor-no-drop my-1"/>
          <h6>Graphic Design  </h6>
          <img src={bar1} alt=""  className="cursor-no-drop my-1"/>
        </div>
      </div>

      {/* banner left side */}
      <div className="flex-1">
        <div className="relative">
          <img
            src={banner}
            className="w-fit h-auto lg:h-[calc(100vh-120px)] mx-auto"
            alt=""
          />
          <div className="bg-[#FD6F0099]  h-[7vh] absolute ml-auto py-3 lg:py-7 2xl:py-8 w-[35vh] lg:w-[40vh] top-[11vh] 2xl:top-[13vh] px-0 lg:px-10 right-[33vh] lg:right-1/2  translate-x-1/2 "></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
