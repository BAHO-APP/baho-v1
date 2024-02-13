import HomeDiv from "./components/Home/home";
import Team from "./components/team/team"
import {Footer} from "./components/footer/footer"
import Product from "./components/product/product";
import Mission from "./components/mission/mission";
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';


export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

 
  return (
    <div className=" h-[100vh] ">
      <video
      src="/butterfly.mp4"
          className=" vid "
          autoPlay
          loop
          muted
        />


        
       
<div>

        <div className="content z-0">
       

        <HomeDiv />
          <Mission></Mission> 
           <Product />
          <Team></Team>
          <Footer></Footer>
        </div>{isOpen?<div onClick={handleClose} className="flex justify-center  items-center"> <div className="md:hidden absolute  z-100   ">
        <div className=' bg-[#141615] rounded-lg text-center flex  p-2  h-24 '>
          
          <div>
          <p className='text-white font-bold text-2xl'>
            
            Coming Soon
          </p>
          <p className='text-white font-bold  text-2xl'>
            
            1st March 2024
          </p>
          </div>
          <button
          className="  ml-2 p-2 rounded-full bg-gray-200 font-bold text-white hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
          onClick={handleClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        </div>
      
  </div></div>:null}

    </div>
    </div>
   

  );
}
