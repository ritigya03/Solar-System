import { useState } from 'react';
import { Link } from 'react-router-dom';
import UranusImg from '../assets/Group 11.png';
import UranusCards from '../assets/Frame 9.png'
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import '../index.css';

function Uranus() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute z-10 bottom-0 right-0  animate-floatDown" src={UranusImg} alt="Sun" />
            
            <div className="absolute z-30 w-[90%] left-4 md:left-20 top-[60px] md:w-[500px]">
                <h1 className='text-3xl md:text-7xl text-white font-black'>7. Uranus</h1>
                <p className='text-white mt-8 font-sans'>Uranus, often referred to as the "Ice Giant," is a unique and mysterious planet in our solar system. It stands out due to its distinct blue-green color and its unusual rotation axis.</p>
            </div>
            <div className="absolute right-[10px] top-[280px] z-10 md:right-[100px] lg:top-[60px]">
                <img className='h-[100px] md:h-[130px] lg:[180px]' src={UranusCards} alt="" />
            </div>
         
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Uranus;