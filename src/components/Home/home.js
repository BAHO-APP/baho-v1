// HomeDiv.js
import React, { useEffect } from 'react';
import { trackVisit } from '../../services/traffic';
import Nav from '../Navigation/nav';

// import { motion } from 'framer-motion';

const HomeDiv = () => {
  useEffect(() => {
    trackVisit();

    document.addEventListener('visibilitychange', trackVisit);

    return () => {
      document.removeEventListener('visibilitychange', trackVisit);
    };
  }, []);

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
    <main className="text-sm  font-poppins mb-[10%] relative overflow-x-hidden overflow-y-hidden h-screen ">
      <Nav />
      <div className="pt-10 mb-[30%]  md:mb-12">
        <div className="text-center mx-5 mt-[20%] lg:mt-[3%]">
          <p className="md:text-9xl mb-16 text-4xl tracking-tighter font-bold text-[#60e796]   ">
            IKINYARWANDA
          </p>
          <p className="md:text-9xl text-4xl tracking-tighter font-bold text-[#60e796]   ">
            TUKIVUGE{' '}
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-[70%]">
        {' '}
        <div className="md:hidden absolute z-100">
          <div className=" bg-[#141615] rounded-lg text-center flex  px-4 pt-3  h-24 ">
            <div>
              <p className="text-white font-bold text-2xl">Coming Soon</p>
              <p className="text-white font-bold  text-2xl">1st March 2024</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomeDiv;
