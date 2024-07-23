import { useState } from 'react';
import { Link } from 'react-router-dom';
import Mercurycards from '../assets/Frame 5 (1).png';
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import MercuryImg from '../assets/Group 4.png';
import '../index.css';

function Mercury() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className='mt-9 absolute left-0 h-[200px] lg:h-[650px] animate-float mx-auto' src={MercuryImg} alt="" />
            <div className='absolute z-10 top-[250px] md:top-[180px] lg:top-[100px] left-[50%] transform -translate-x-1/2 w-[90%] sm:w-[80%] lg:w-[600px] lg:left-[650px] lg:transform-none h-[500px]'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-black'>1. Mercury</h1>
                <p className='font-sans mt-10 text-white text-xs sm:text-sm'>Mercury is the closest planet to the Sun and is known for its extreme temperatures and barren, rocky surface. It is one of the four terrestrial planets in our solar system, characterized by their solid, rocky composition.</p>
                <img className='mt-5 w-full lg:w-auto' src={Mercurycards} alt="" />
            </div>
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Mercury;
