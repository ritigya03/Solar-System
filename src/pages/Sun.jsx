import { useState } from 'react';
import { Link } from 'react-router-dom';
import Suncards from '../assets/Frame 5.png';
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import SunImg from '../assets/Layer 2 (7).png';
import '../index.css';

function Sun() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute z-10 top-0 left-0 w-full h-auto md:h-[400px] animate-float" src={SunImg} alt="Sun" />
            <div className="absolute z-10 top-[200px] left-[20px] w-[90%] max-w-[700px] text-left md:top-[350px] md:left-[60px] lg:left-[100px] md:w-[700px] md:text-left">
                <h1 className="text-white font-black text-4xl md:text-6xl lg:text-8xl">. Sun</h1>
                <p className="text-white font-sans mt-4 text-base md:text-lg lg:text-xl">The Sun is a huge, glowing ball of hot plasma at the center of our solar system and provides the vital energy needed for life on Earth. This energy radiates outward in the form of light and heat, providing warmth and light to the entire solar system.</p>
                <img className="mt-4 h-[80px] lg:h-[100px] " src={Suncards} alt="Card" />
            </div>
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Sun;
