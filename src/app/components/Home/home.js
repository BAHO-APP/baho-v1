// HomeDiv.js
import React from 'react';
import Nav from '../Navigation/nav';
import styles from '../../styles/HomeDiv.module.css'; // Import the styles
import Circles from "../../../../public/circles.png"
// import { motion } from 'framer-motion';


const HomeDiv = () => {
  // const buttonVariants = {
  //   hover: {
  //     scale: 1.1,
  //     transition: {
  //       duration: 0.3,
  //       yoyo: Infinity,
  //     },
  //   },
  // };
  return (
    <main className="text-sm  font-poppins mb-[10%] relative overflow-x-hidden h-screen ">
      <Nav />
<div className='pt-10 mb-[30%]  md:mb-12'>
      <div className="text-center mt-[20%] lg:mt-[3%]">
        
  
        <p className="md:text-9xl mb-16 text-5xl tracking-tighter font-bold text-[#60e796]   ">IKINYARWANDA</p>
        <p className="md:text-9xl text-5xl tracking-tighter font-bold text-[#60e796]   ">TUKIVUGE </p>
        </div>

     
      </div>
    </main>
  );
};

export default HomeDiv;