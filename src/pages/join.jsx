import NeptuneImg2 from '../assets/Group 16.png';
import SubscribeBtn from '../assets/Button (1).png'
import { Link } from 'react-scroll'
import stars from '../assets/Clip path group.png';
import logo from '../assets/Frame 11.png';
import moreStars from '../assets/Clip path group (1).png';
import '../index.css';


function Join() {
    return (
        <div className="relative h-[60vh] overflow-hidden ">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute z-10 left-0 md:h-[285px] lg:h-[512px] " src={NeptuneImg2} alt="Sun" />
            <div className='absolute w-[90%] left-4 md:left-10 lg:top-10 lg:left-[70px] z-20 text-center  border-2 rounded-[40px] border-purple-950 bg-neutral-800'>
                <div className='lg:w-[800px] py-1 px-3 lg:py-10 lg:ml-[300px]'>
                    <h1 className='text-white  font-black  text-4xl'>Join The Education Community</h1>
                    <p className='text-white mt-2 font-sans'>Join the Education Community today and be part of a movement that's transforming minds and shaping tomorrows.</p>
                    <div className='lg:w-[630px] lg:h-[70px] mt-5 lg:ml-20 py-2 border px-4 rounded-[40px] bg-white'>
                        <div className='flex align-center justify-between'>
                        <input className='w-[80%] rounded-[40px]' type="text" placeholder='Enter your email' />
                        <button><img src={SubscribeBtn} alt="" /></button>
                        </div>
                    </div>

                </div>
                <nav className="w-full  lg:px-8 flex justify-between items-center mb-8 left-0 z-50 ">
                    <img className="mt-5 h-6 ml-5" src={logo} alt="Logo" />
                    <div className="hidden lg:flex lg:gap-7 mr-5 mt-7">
                    <Link to="home" className=' text-white ' smooth={true} duration={500}><button>Home</button></Link>
                        <Link to="sun" className=' text-white ' smooth={true} duration={500}><button>Sun</button></Link>
                        <Link to="mercury" className=' text-white ' smooth={true} duration={500}><button>Mercury</button></Link>
                        <Link to="venus" className=' text-white ' smooth={true} duration={500}><button>Venus</button></Link>
                        <Link to="earth" className=' text-white' smooth={true} duration={500}><button>Earth</button></Link>
                        <Link to="mars" className=' text-white ' smooth={true} duration={500}><button>Mars</button></Link>
                        <Link to="jupiter" className=' text-white '  smooth={true} duration={500}><button>Jupiter</button></Link>
                        <Link to="saturn" className=' text-white ' smooth={true} duration={500}><button>Saturn</button></Link>
                        <Link to="uranus" className=' text-white' smooth={true} duration={500}><button>Uranus</button></Link>
                        <Link to="neptune" className=' text-white ' smooth={true} duration={500}><button>Neptune</button></Link>
                        <Link to="join" className=' text-white ' smooth={true} duration={500}><button>Join</button></Link>
                    </div>
                
                </nav>
            </div>
         
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Join;