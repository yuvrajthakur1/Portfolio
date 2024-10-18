import  { useState } from 'react';
import { FaLinkedin,FaGithub} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import myImg from '../assets/Yuvraj.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className="bg-slate-500 bg-opacity-15  ml-5 shadow-sm shadow-slate-400 mr-4 text-white mt-3 rounded-lg p-2">
      <div className="container mx-auto flex justify-center items-center">
        <div className="hidden md:flex lg:gap-16 gap-8  ">
        <img src={myImg} width={30} height={30} className="rounded-full mt-0" />
          <a href="#" className="text-white trans hover:underline ">Home</a>
          <a href="#" className="text-white hover:underline ">About</a>
          <a href="#" className="text-white hover:underline ">Services</a>
          <a href="#" className="hover:underline ">Contact</a>
          <a href="#" className="hover:underline"><FaLinkedin className='text-gray-400 drop-shadow-lg hover:text-white animate-pulse transition-all duration-800 text-xl hover:rotate-45'></FaLinkedin></a>
          <a href="#" className="text-white hover:underline "><FaGithub className='text-gray-400 drop-shadow-lg animate-pulse transition-all duration-800 text-xl hover:rotate-45 hover:text-white'></FaGithub></a>
          <a href="#" className="text-white hover:underline "><SiLeetcode className='text-gray-400 drop-shadow-lg animate-pulse transition-all duration-800 text-xl hover:rotate-45 hover:text-white'></SiLeetcode></a>
        </div>
        <button onClick={toggleMenu} className="md:hidden  text-white bg-slate-500 shadow-md shadow-slate-700 rounded-md pl-3 pr-3 transform-all duration-300 font-semibold hover:rotate-180">
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {isOpen && (
        <div className={`md:hidden p-2 gap-y-3 rounded-sm font-semibold `}>
          
          <a href="#" className="block text-gray-400 hover:underline">Home</a>
          <a href="#" className="block text-gray-400 hover:underline">About</a>
          <a href="#" className="block text-gray-400 hover:underline">Services</a>
          <a href="#" className="block text-gray-400 hover:underline">Contact</a>
          <a href="#" className="text-white hover:underline"><FaLinkedin className='mt-3'></FaLinkedin></a>
          <a href="#" className="text-white hover:underline"><FaGithub className='mt-3'></FaGithub></a>
          <a href="#" className="text-white hover:underline"><SiLeetcode className='mt-3'></SiLeetcode></a>
    
        </div>
      )}
    </nav>
  );
};

export default Navbar;
