import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/Frame 11.png';
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import planet1 from '../assets/Group 2.png';
import LearnBtn from '../assets/Button.png';
import planet2 from '../assets/Layer 2.png';
import planet3 from '../assets/Layer 2 (1).png';
import planet4 from '../assets/Layer 2 (2).png';
import planet5 from '../assets/Layer 2 (3).png';
import planet6 from '../assets/Layer 2 (4).png';
import planet7 from '../assets/Layer 2 (5).png';
import planet8 from '../assets/Layer 2 (6).png';
import '../index.css';

function Home() {
    const [isDown, setIsDown] = useState(false);

    const toggleDropdown = () => {
        setIsDown(!isDown);
    };

    return (
        <>
            <div className="relative min-h-screen overflow-hidden">

                <nav className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center mb-4 lg:mb-8 fixed top-0 left-0 z-50 ">
                    <Link to="home" ><img className="mt-5 ml-0 h-6 md:ml-5 cursor-pointer" src={logo} alt="Logo" /></Link>
                    <div className="hidden lg:flex lg:gap-7 mr-5 mt-7">
                        <Link to="home" className=' text-white ' smooth={true} duration={500}><button>Home</button></Link>
                        <Link to="sun" className=' text-white ' smooth={true} duration={500}><button>Sun</button></Link>
                        <Link to="mercury" className=' text-white ' smooth={true} duration={500}><button>Mercury</button></Link>
                        <Link to="venus" className=' text-white ' smooth={true} duration={500}><button>Venus</button></Link>
                        <Link to="earth" className=' text-white' smooth={true} duration={500}><button>Earth</button></Link>
                        <Link to="mars" className=' text-white ' smooth={true} duration={500}><button>Mars</button></Link>
                        <Link to="jupiter" className=' text-white '  smooth={true} duration={500}><button>Jupiter</button></Link>
                        <Link to="saturn" className=' text-white ' smooth={true} duration={500}><button>Jupiter</button></Link>
                        <Link to="uranus" className=' text-white' smooth={true} duration={500}><button>Uranus</button></Link>
                        <Link to="neptune" className=' text-white ' smooth={true} duration={500}><button>Neptune</button></Link>
                        <Link to="join" className=' text-white ' smooth={true} duration={500}><button>Join</button></Link>
                    
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleDropdown} className="text-white relative z-50 mt-7 text-3xl">
                            <FaBars />
                        </button>
                    </div>
                </nav>

           
                {isDown && (
                    <div className="lg:hidden absolute top-0 w-full h-full blacktransparent p-4 flex flex-col items-center z-40">
                        <div className='mt-10 text-center'>
                        <Link to="home" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Home</button></Link>
                        <Link to="sun" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Sun</button></Link>
                        <Link to="mercury" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Mercury</button></Link>
                        <Link to="venus" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Venus</button></Link>
                        <Link to="earth" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Earth</button></Link>
                        <Link to="mars" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Mars</button></Link>
                        <Link to="jupiter" className='block text-3xl leading-[50px] font-bold text-white'  smooth={true} duration={500}><button>Jupiter</button></Link>
                        <Link to="saturn" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Saturn</button></Link>
                        <Link to="uranus" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Uranus</button></Link>
                        <Link to="neptune" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Neptune</button></Link>
                        <Link to="join" className='block text-3xl leading-[50px] font-bold text-white ' smooth={true} duration={500}><button>Join</button></Link>

                        </div>
                    </div>
                )}

                <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
                <img className='absolute top-10 z-20 h-[200px] animate-float' src={planet1} alt="" />
                <img className='absolute top-10 z-20 ml-[770px] animate-float' src={planet2} alt="" />
                <img className='md:absolute md:z-20 h-1 md:mt-[240px] md:h-[350px] animate-float' src={planet3} alt="" />
                <img className='absolute z-20 mt-[250px] ml-[350px] animate-float' src={planet4} alt="" />
                <img className='md:absolute h-1 md:z-20 md:right-0 md:h-[300px] animate-float' src={planet5} alt="" />
                <img className='absolute z-20 bottom-0 right-0 animate-floatDown' src={planet6} alt="" />
                <img className='absolute z-20 bottom-0 ml-[600px] animate-floatDown' src={planet7} alt="" />
                <img className='absolute z-20 bottom-0 animate-floatDown' src={planet8} alt="" />

                <div className='absolute animate-pop-up inset-0 flex items-center justify-center z-30'>
                    <div className='w-[750px] text-center'>
                        <h1 className='text-4xl md:text-7xl leading-tight md:leading-[90px] font-black text-white'>
                            Let's Get To Know Our Solar System Galaxy
                        </h1>
                        <p className='text-white mt-6 text-sm md:text-base font-sans'>
                            Embark on a cosmic journey across the ethereal expanse of the solar system Galaxy and follow the orchestration of the cosmos and the planets weaving stories of their timeless existence.
                        </p>
                        <button className='mt-5'>
                            <Link to='sun'><img src={LearnBtn} alt="Learn Button" /></Link>
                        </button>
                    </div>
                </div>
                <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
            </div>
        </>
    );
}

export default Home;
