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
          <h6>UX</h6>
          <div className="relative my-3 w-full bg-[#EDECEC] rounded-full h-3">
            <div
              className="bg-[#FD6F00] h-3 rounded-full"
              style={{ width: `92%` }}
            ></div>
            <div
              className={`absolute top-1/2 left-[88%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
            ></div>
          </div>
          <h6>Website Design</h6>
          <div className="relative my-3 w-full bg-[#EDECEC] rounded-full h-3">
            <div
              className="bg-[#FD6F00] h-3 rounded-full"
              style={{ width: `85%` }}
            ></div>
            <div
              className={`absolute top-1/2 left-[80%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
            ></div>
          </div>
          <h6>App Design </h6>
          <div className="relative my-3 w-full bg-[#EDECEC] rounded-full h-3">
            <div
              className="bg-[#FD6F00] h-3 rounded-full"
              style={{ width: `96%` }}
            ></div>
            <div
              className={`absolute top-1/2 left-[90%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
            ></div>
          </div>
          <h6>Graphic Design </h6>
          <div className="relative my-3 w-full bg-[#EDECEC] rounded-full h-3">
            <div
              className="bg-[#FD6F00] h-3 rounded-full"
              style={{ width: `90%` }}
            ></div>
            <div
              className={`absolute top-1/2 left-[84%] transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-[#FD6F00] bg-[#EDECEC]`}
            ></div>
          </div>
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
          <div className="bg-[#FD6F0099]  h-[7vh] absolute ml-auto py-3 lg:py-7 2xl:py-8 w-[35vh] lg:w-[40vh] top-[12vh] lg:top-[13vh] 2xl:top-[13vh] px-0 lg:px-10 right-[38vh] lg:right-1/2  translate-x-1/2 "></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
