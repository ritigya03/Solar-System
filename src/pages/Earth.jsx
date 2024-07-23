import ellipse2 from '../assets/Ellipse 2.png'
import ellipse3 from '../assets/Ellipse 3.png'
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import EarthImg from '../assets/Layer 2 (8).png';
import Rocket from '../assets/Group.png'
import Arrow from '../assets/Vector (1).png'
import '../index.css';
import EarthCard from '../assets/card (1).png'

function Earth() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <div className='absolute z-10 w-[90%] lg:w-[1100px] top-10 left-5'>
                <h1 className='text-3xl mt-6 md:text-7xl text-white font-black'>3. Earth</h1>
                <p className=' text-white text-sm md:text-base mt-2 font-sans'>
                    Earth is the third planet from the Sun and the only known planet to support life. Earth is the only planet known to harbor life. It's a diverse and dynamic world with a wide range of ecosystems, climates, and geological features.
                    Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.
                </p>
            </div>
            <div className="md:w-[900px] top-[300px] lg:top-[220px] absolute w-[300px] right-3  lg:height-[200px] lg:left-[30px] text-right">
                <h1 className='text-white  text-3xl md:text-5xl font-black'>Moon Planet</h1>
                <p className='text-white right-3 lg:left-[460px] w-[300px] lg:w-[500px] absolute z-40 mt-2 text-sm font-sans'>Earth has one natural satellite, the Moon, which plays a role in stabilizing the planet's rotation and tides. The Moon's gravitational pull causes ocean tides to rise and fall.</p>
            </div>
            <img className='absolute right-20 h-[50px] lg:h-[110px] top-10  earth-card' src={EarthCard} alt="" />
            <img className='absolute h-1 md:h-[90px] top-[210px] left-[970px] arrow' src={Arrow} alt="" />
            <img className='absolute z-10 md:z-40 h-[100px] md:h-[200px] top-[480px] md:top-[350px] animate-float md:left-[50px]' src={Rocket} alt="" />
            <div className='flex justify-center'>
                <img className='absolute z-20 bottom-0 ellipse2' src={ellipse2} alt="" />
            </div>
            <div className='flex justify-center'>
                <img className='absolute z-10 bottom-0 ellipse3' src={ellipse3} alt="" />
            </div>
            <div className='flex justify-center'>
                <img className='absolute z-30 bottom-0 earth-img animate-floatDown' src={EarthImg} alt="" />
            </div>
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Earth;
