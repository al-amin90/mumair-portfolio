import person1 from "../../assets/Testimonial/Ellipse1.png";
import person2 from "../../assets/Testimonial/Ellipse11.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "../Shared/SectionTitle";

const Testimonials = () => {
  return (
    <div className="relative max-w-full overflow-hidden ">
      {/* heading section */}
      <div className="max-w-[1920px] w-[90%] lg:w-[78%] mx-auto">
        <SectionTitle
          title="Testimonials"
          description="Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus"
        ></SectionTitle>
      </div>

      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper overflow-auto relative right-0 lg:right-[100vh] w-full lg:w-[190%]"
        >
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person1} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person2} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person1} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person2} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="block lg:hidden" >
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mySwiper overflow-auto relative right-0 lg:right-[100vh] w-full lg:w-[190%]"
        >
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person1} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person2} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person1} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-xl py-10 gap-3 px-9 bg-[#F8F8F8]  flex">
              <div>
                <img src={person2} className="w-[370px]" alt="" />
              </div>

              <div className="">
                <p className="text-[#fd6f00] text-3xl">“</p>
                <p className="ml-3 -mt-4 text-sm">
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim
                  malesuada commodo ultrices.{" "}
                  <span className="text-[#fd6f00] text-3xl absolute ml-2 mt-1">
                    “
                  </span>
                </p>
                <h5 className="font-medium text-lg text-black mt-3 ml-3">
                  Name
                </h5>
                <p className="text-base ml-3">CEO</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
