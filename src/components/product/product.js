// Mission.js
import React from 'react';



export default function Product() {
  return (
    <main id="product" className=" overflow-x-hidden font-poppins text-sm px-[4%] mt-[6%]">
 <div>
 <div className="text-center mt-32 ">
          <p className="text-5xl text-[#60e796] font-poppins font-extrabold">
             Product
          </p>
          
          
        </div>
 </div>
 <div className=' block sm:flex lg:mt-[14%] mt-[22%] '>
 <div className='flex-grow flex-basis-0 flex   justify-center'>
 <p className='absolute text-[#60e796]    lg:text-5xl text-4xl   font-bold '>Conversational</p>
    <img alt="conversation" className='md:w-[65%] w-[45%] mt-[20%]  lg:mt-[24%] ' src='/convo.png' />
  </div>
  <div className='w-1/3 mt-[10%] text-center hidden sm:block'>
  <img alt="badge" className=' lg:w-[74%] md:w-[100em]  px-10  mt-[4%] inline-block' src='/play-badge.png' />
  <img alt="badge" className=' lg:w-[85%] md:w-[100em] mt-[-10%] px-10 inline-block' src='/app-badge.png' />
</div>

    <div className='flex-grow flex-basis-0 flex  mt-[25%] lg:mt-0 justify-center'>
    {/* <p className="text-[#33B467] mr-14 text-center" >Translation</p> */}
    <p className='absolute text-[#60e796]   lg:text-5xl  text-4xl font-bold '>Translational</p>
    <img  className='sm:w-[65%] w-[45%] mt-[20%] lg:mt-[24%]' src='/trans.png' alt="Translation"/>
  </div>
  <div className='sm:w-1/3 mt-[10%] text-center sm:hidden block'>
  <img className='sm:w-[74%] w-[54%]  px-10  mt-[4%] inline-block' src='/play-badge.png' alt="Play Badge"/>
  <img className='sm:w-[85%] w-[61%] mt-[-10%] px-10 inline-block' src='/app-badge.png' alt="App Badge"/>
</div>

 </div>
    </main>
  );
}