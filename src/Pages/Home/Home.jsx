import React from 'react';
import Banner from '../../Components/Home/Banner';
import AboutMe from '../../Components/Home/AboutMe';

const Home = () => {
    return (
        <div className="max-w-[1920px] w-[90%] lg:w-[78%] mx-auto">
            <Banner/>
            <AboutMe/>
        </div>
    );
};

export default Home;