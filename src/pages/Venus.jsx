import { useState } from 'react';
import { Link } from 'react-router-dom';
import Venuscards from '../assets/Frame 5 (2).png';
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import VenusImg from '../assets/Group 6.png';
import '../index.css';

function Venus() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className='absolute z-10 bottom-0 right-0 sm:h-[400px] lg:h-[700px] animate-floatDown ' src={VenusImg} alt="" />
            <div className='absolute z-10 top-[70px] md:left-[400px] lg:left-[120px] transform -translate-x-1/2 w-[90%] left-[200px] sm:w-[80%] lg:w-[600px] lg:transform-none h-[500px]'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-black'>2. Venus</h1>
                <p className='font-sans mt-5 text-white text-xs sm:text-sm'>Venus is often referred to as Earth's "sister planet" due to its similar size and composition, but it stands out with its extremely inhospitable environment</p>
                <img className='mt-10 h-[350px] w-full lg:w-auto' src={Venuscards} alt="" />
            </div>
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Venus;
