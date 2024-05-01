import { useState, useRef, useEffect } from 'react';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div>
      <div className="flex justify-between py-2 px-4 md:px-4">
        <div className=' bg-[#141615] rounded-lg text-center hidden md:block p-2  h-24 '>
          <p className='text-white font-bold text-2xl'>
            
            Coming Soon
          </p>
          <p className='text-white font-bold  text-2xl'>
            
            00 May 2024
          </p>
        </div>
        <div className="lg:ml-[3%] ml-[30%] mt-16 rounded-full">
          <img alt="logo" src="/logo.png" className="lg:w-[26em] w-[10em]" />
        </div>

        <div className="md:hidden mr-2">
          <button className="text-white" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="hidden  text-lg cursor-pointer md:flex font-extrabold space-x-4 text-[#60e796] ">
         
          <a href="#product" className="relative group">
            Product
          </a>
          <a href="#team" className="relative group">
            Team
          </a>
          <a href="#vision" className="relative group">
            vision
          </a>
        </div>

        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden absolute top-20 right-4 z-[200] bg-white p-4 rounded-md shadow-md">
           
            <a href="#product" className="block focus:outline-none py-2 text-gray-800">
              Product
            </a>
            <a href="#team" className="block focus:outline-none py-2 text-gray-800">
              Team
            </a>
            <a href="#vision" className="block focus:outline-none py-2 text-gray-800">
              vision
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
