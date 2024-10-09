import React from 'react';
import Banner from '../../Components/Home/Banner';
import AboutMe from '../../Components/Home/AboutMe';
import Services from '../../Components/Home/Services';
import Projects from '../../Components/Home/Projects';
import DesignTogether from '../../Components/Home/DesignTogether';

const Home = () => {
    return (
        <div className="max-w-[1920px] w-[90%] lg:w-[78%] mx-auto">
            <Banner/>
            <AboutMe/>
            <Services/>
            <Projects/>
            <DesignTogether/>
        </div>
    );
};

export default Home;