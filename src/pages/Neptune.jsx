import NeptuneImg from '../assets/Group 12.png';
import NeptuneCards from '../assets/Frame 9 (1).png'
import stars from '../assets/Clip path group.png';
import moreStars from '../assets/Clip path group (1).png';
import '../index.css';

function Neptune() {
    return (
        <div className="relative min-h-screen overflow-hidden">
            <img className="absolute top-0 left-0 w-full h-full object-cover z-10" src={moreStars} alt="More Stars" />
            <img className="absolute h-[280px] md:h-[500px] z-10 bottom-0 left-0 lg:h-[900px] " src={NeptuneImg} alt="Sun" />
            
            <div className="absolute z-10 left-4 w-[90%] top-[50px] text-center  lg:left-[300px] lg:w-[900px] lg:top-[60px] ">
                <h1 className='text-3xl md:text-7xl text-white font-black'>8. Neptune</h1>
                <p className='text-white mt-4 font-sans'>Neptune, often called the "Blue Giant," is the eighth and farthest planet from the Sun in our solar system. It is a gas giant known for its striking blue color and turbulent atmosphere.</p>
            </div>
            <div className="absolute left-10 right-10 top-[250px] z-10 md:left-[460px] md:top-[210px]">
                <img className='h-[100px]  lg:h-[140px]' src={NeptuneCards} alt="" />
            </div>
         
            <img className="absolute bottom-0 left-0 w-full h-full object-cover z-0" src={stars} alt="Stars" />
        </div>
    );
}

export default Neptune;