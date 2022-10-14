import React from 'react'
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import TimeRain from './TimeRain';
import TimePuff from './TimePuff';
import TimeCart from './TimeCart';
import TimeNap from './TimeNap';
import Espufi from './Espufi';
import Footer from './Footer';



const Home = () => {
    return (
        <div id="view-home">
           <Navbar />
           <Carousel />
           <TimeRain />
           <TimePuff />
           <TimeCart />
           <TimeNap />
           <Espufi />
           <Footer />
        </div>
        
    )
}

export default Home