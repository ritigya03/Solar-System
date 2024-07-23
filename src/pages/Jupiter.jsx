import { useState } from 'react';
import { Link } from 'react-router-dom';
import JupiterImg from '../assets/Layer 2 (9).png';
import JupiterCard1 from '../assets/card (5).png'
import JupiterCard2 from '../assets/card (6).png'
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import '../index.css';

function Jupiter() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute h-[250px] md:h-[400px] lg:h-[700px] z-10 right-0  animate-float" src={JupiterImg} alt="Sun" />
            <div className=" absolute left-2 top-[230px] md:top-[50px] lg:left-[140px] w-[99%] md:w-[400px] lg:w-[550px] ">
                <h1 className='text-3xl md:text-7xl text-white font-black'>5. Jupiter</h1>
                <p className='text-white mt-5 font-sans'>Jupiter, the largest planet in our solar system, is a gas giant known for its immense size, powerful storms, and numerous moons.</p>
            </div>
            <div className="absolute z-10 top-[370px] md:top-[270px] md:left-[140px]">
                <img className='h-[100px] md:h-[150px] lg:h-[180px]' src={JupiterCard1} alt="" />
                <img className='h-[100px] md:h-[150px] lg:h-[180px] mt-5' src={JupiterCard2} alt="" />
            </div>
         
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Jupiter;