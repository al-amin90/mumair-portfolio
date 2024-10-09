import React from "react";
import Banner from "../../Components/Home/Banner";
import AboutMe from "../../Components/Home/AboutMe";
import Services from "../../Components/Home/Services";
import Projects from "../../Components/Home/Projects";
import DesignTogether from "../../Components/Home/DesignTogether";
import Testimonials from "../../Components/Home/Testimonials";

const Home = () => {
  return (
    <div>
      <div className="max-w-[1920px] w-[90%] lg:w-[78%] mx-auto">
        <Banner />
        <AboutMe />
        <Services />
        <Projects />
      </div>
      <Testimonials />
      <div className="max-w-[1920px] w-[90%] lg:w-[78%] mx-auto">
        <DesignTogether />
      </div>
    </div>
  );
};

export default Home;
