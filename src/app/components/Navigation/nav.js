import { useState, useRef, useEffect } from 'react';
import Image from 'next/image'

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isMobileMenuOpen]);

  return (
    <main>
      <div className="flex justify-between py-10 px-4 md:px-14">
        <div className=" lg:ml-[34%] ml-[30%]  mt-4 rounded-full   ">
         <Image alt="logo" src="/logo.png" className='lg:w-[26em] w-[10em]'/>
        </div>

        <div className="md:hidden">
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

        <div className="hidden text-sm cursor-pointer md:flex font-bold space-x-8 text-white">
          <a href="#mission" className="relative group">
            Mission
          </a>
          <a href="#product" className="relative group">
            Product
          </a>
          <a href="#team" className="relative group">
            Team
          </a>
        </div>

        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="md:hidden absolute top-20 right-4  z-[200] bg-white p-4 rounded-md shadow-md">
            <a href="#" className="block py-2 text-gray-800">
              Home
            </a>
            <a href="#mission" className="block py-2 text-gray-800">
              Mission
            </a>
            <a href="#product" className="block py-2 text-gray-800">
              Product
            </a>
            <a href="#team" className="block py-2 text-gray-800">
              Team
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
