import { useState } from 'react';
import { Link } from 'react-router-dom';
import MarsImg from '../assets/Group 9.png';
import MarsCard1 from '../assets/card (2).png';
import MarsCard2 from '../assets/card (3).png';
import MarsCard3 from '../assets/card (4).png';
import stars from '../assets/Clip path group.png';
import MarsArrow from '../assets/Vector (2).png';
import moreStars from '../assets/Clip path group (1).png';
import '../index.css';

function Mars() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute z-10 bottom-0 h-[250px] lg:h-[480px] animate-floatDown" src={MarsImg} alt="Sun" />
            <div className='absolute left-4 top-10 md:left-[150px] md:top-10 md:w-[600px] md:h-[200px] w-[90%] max-w-[600px]'>
                <h1 className='text-white text-4xl sm:text-5xl md:text-7xl font-black'>4. Mars</h1>
                <p className='text-white mt-4 sm:mt-4 md:mt-5 text-base sm:text-lg font-sans'>Mars, often referred to as the "Red Planet," is the fourth planet from the Sun and has captivated human imagination for centuries with its reddish appearance and potential for hosting life.</p>
            </div>
            <div className="absolute z-10 top-[220px] right-4 md:right-[90px] mg-top-[100px] lg:top-20 space-y-5 gap-5 flex md:block">
                <img className='w-[80px] mt-5 h-[40px] md:h-[80px] lg:h-[150px] sm:w-[100px] md:w-[200px] lg:w-[300px]' src={MarsCard1} alt="" />
                <img className='w-[80px] mt-[100px] h-[40px] md:h-[80px] lg:h-[150px] sm:w-[100px] md:w-[200px] lg:w-[300px]' src={MarsCard2} alt="" />
                <img className='w-[80px]  h-[40px] lg:h-[150px]  md:h-[80px] sm:w-[100px] md:w-[200px] lg:w-[300px]' src={MarsCard3} alt="" />
            </div>
            <img className='absolute h-1  lg:h-[70px] left-4 md:left-[500px] top-[250px] md:top-[310px]' src={MarsArrow} alt="" />
            <div className="absolute z-10 top-[300px] lg:top-[340px]  left-4 md:top-[250px] sm:left-20 lg:left-[650px] w-[90%] max-w-[400px] h-auto">
                <h1 className='text-white text-2xl sm:text-3xl md:text-5xl font-black'>Martian Moons</h1>
                <p className='text-white mt-5 sm:mt-4 md:mt-5 text-xs md:text-base sm:text-sm lg:w-[300px] font-sans'>Mars has two small moons, Phobos and Deimos, which are irregularly shaped and thought to be captured asteroids.</p>
            </div>
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Mars;


