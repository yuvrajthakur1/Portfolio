import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useRef } from "react";

export const Hero= ()=>{

  const my= useRef();
  const by= useRef();

 useGSAP(()=>{
    gsap.from(my.current,{
      y:100,
      opacity:0,
      duration:1,
      delay:2.5,
    })
  })
 useGSAP(()=>{
    gsap.from(by.current,{
      y:100,
      opacity:0,
      duration:1,
      delay:1,
    })
  })





    return(
        <>
          <div className="container mx-auto flex md:flex-row flex-col lg:gap-16 gap-8 justify-evenly items-center md:mt-10" id="box">


          <div ref = {by} className=" w-96 h-96 rounded-full md:block hidden text-white mt-6 p-5  shadow-md  shadow-black">
          
            <img src="/images/Yuvraj.png"  height={100} className="rounded-full"/>
          
          </div>

            <div className="md:block hidden">    
              <FaReact className="text-white  mt-8 text-4xl   transition-all duration-300 hover:rotate-180 "></FaReact>
              <TbBrandJavascript className="text-white  mt-8 text-4xl   transition-all duration-300 hover:rotate-180 "></TbBrandJavascript>
              <FaHtml5 className="text-white  mt-8 text-4xl   transition-all duration-300 hover:rotate-180 "></FaHtml5>
              <RiTailwindCssFill className="text-white  mt-8 text-4xl   transition-all duration-300 hover:rotate-180 "></RiTailwindCssFill>
            </div>
            <div ref={my} className=" md:w-96 w-full h-96  p-5 text-white mt-6 shadow-md rounded-md shadow-black" >
              <h1 className="text-3xl font-bold pl-1 pr-1 mt-4 tracking-wider text-slate-200">YUVRAJ THAKUR</h1>
               <p className="md:text-sm text-xs text-justify font-thin  pl-1 pr-1 lg:mt-8 mt-4 tracking-wider text-slate-400 " id="hero-para">I’m [Your Name], a passionate [Your Profession/Field] with a knack for [specific skills or areas of expertise]. Here, you’ll find a curated collection of my work that reflects my dedication to creativity and innovation. Each project showcases my commitment to excellence and my unique approach to problem-solving.</p>   
               <button className="w-48 p-2 rounded-sm mt-4 font-semibold font-sans shadow-md shadow-black bg-green-600 hover:rotate-12">Click</button>
            </div>
           
          </div>
        </>
    )
}