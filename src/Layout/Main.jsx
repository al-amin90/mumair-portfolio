import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import Home from '../Pages/Home/Home';
import Footer from '../Pages/Shared/Footer';
import Testimonials from '../Components/Home/Testimonials';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default Main;