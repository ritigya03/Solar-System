import { useState } from 'react';
import { Link } from 'react-router-dom';
import SaturnImg from '../assets/Layer 2 (10).png';
import SaturnCard1 from '../assets/card (7).png'
import SaturnCard2 from '../assets/card (8).png'
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import '../index.css';

function Saturn() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute h-[250px] md:h-[400px] lg:h-[700px] z-10 left-0  animate-float" src={SaturnImg} alt="Sun" />
            <h1 className='text-white absolute top-[120px] left-[250px] text-3xl font-black'>Titan</h1>
            <div className="absolute z-30 top-[220px] md:top-[30px] w-[400px] right-[20px] lg:top-[60px] md:right-[30px] lg:right-[150px] text-right lg:w-[700px]">
                <h1 className='text-3xl md:text-7xl text-white font-black'>6. Saturn</h1>
                <p className='text-white mt-5 font-sans'>Saturn, often referred to as the "Ringed Planet," is known for its stunning system of rings that encircle the planet's equator. It's the sixth planet from the Sun and is one of the most visually distinctive objects in our solar system, with more than 80 known satellites.</p>
            </div>
            <div className="absolute  z-10 top-[410px] right-[150px] md:top-[270px]">
                <img className='h-[100px] md:h-[180px]' src={SaturnCard1} alt="" />
                <img className='h-[100px] md:h-[180px] mt-5' src={SaturnCard2} alt="" />
            </div>
         
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Saturn;