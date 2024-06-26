// Mission.js
import React from 'react';

export default function Mission() {
  return (
    <main id="mission" className=" font-poppins text-sm mt-[40%] lg:mt-[20%]">
       <div className=" lg:ml-[34%] ml-[30%]  mt-4 rounded-full   ">
         <img alt="logo" src="/logo.png" className='lg:w-[26em] w-[10em]'/>
        </div>

      <div className=" overflow-x-hidden grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 mt-32 text-center">
        {[
          {
            title: 'Challenge',
            content:
"Reduction in the use of our native language Kinyarwanda replacing it with foreign languages. Existing language barrier between Kinyarwanda and English speakers. Also the existence of low usage of smartphones among the Rwandan society."          },
          {
            title: 'Solution',
            content:
              'BAHO is an AI  smartphone voice application built by native Rwandans.The application BAHO uses AI conversational technology . Preserving Kinyarwanda language and promoting the adoption of smartphones by new users through the use of BAHO application ',
          }
          // {
          //   title: 'Vision',
          //   content:
          //     "BAHO App, with its representation of the Kinyarwanda language, marks the inception of voice technology for the empowerment and development of other underrepresented native African languages. Our mission is ensuring that the diverse voices of Africa are heard and understood.",
          // },
        ].map((item, index) => (
          <div key={index} className="w-full mb-[8em] md:mb-0">
            <div className="md:w-[16em] lg:md:w-[20em] w-[80%] lg:w-[22em] h-[100%] p-6 bg-gradient-to-b from-[#131313] to-[#1F2A23]  rounded-3xl mx-auto">
              {/* <div className="h-2 ml-[25%] mb-1 bg-[#60e796] rounded-full w-2"></div> */}
              <p className="text-[#60e796] md:text-5xl text-3xl font-bold">{item.title}</p>
              
              <p className="mt-6  text-left pl-2 text-gray-300  font-bold">{item.content} </p>
              <p className="mt-1  text-left pl-2 text-gray-300  font-bold">{item.new} </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 