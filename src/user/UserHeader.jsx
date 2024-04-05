import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserHeader() {
  // State variable to track menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const toggleBtn = document.getElementById('toggle');
    const collapseMenu = document.getElementById('collapseMenu');

    function handleClick() {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }

    toggleBtn.addEventListener('click', handleClick);

    // Cleanup event listener on component unmount
    return () => {
      toggleBtn.removeEventListener('click', handleClick);
    };
  }, []); // Empty dependency array ensures effect runs only once

  // Function to toggle menu visibility using React state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <div className="flex flex-wrap items-center justify-between gap-5 relative">
          <a href="javascript:void(0)">
            <img
              src="https://readymadeui.com/readymadeui.svg"
              alt="logo"
              className="w-36"
            />
          </a>
          { 
           <div className="flex lg:order-1 max-sm:ml-auto">
            <Link to={'/parent-login'}>
            <button className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]">
              Login
            </button>
            </Link>
           <Link to={'/parent-register'}>
           <button  className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff] ml-3">
              Sign up
            </button>
           </Link>
            <button id="toggle" className="lg:hidden ml-7" onClick={toggleMenu}>
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>}
          {/* Render menu based on isMenuOpen state */}
          <ul
            id="collapseMenu"
            className={`lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full ${isMenuOpen ? '' : 'hidden'}`}
          >
            <li className="max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-[#007bff] max-lg:text-white block font-semibold text-[15px]"
              >
                Home
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <Link
                to={'/children'}
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Children
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Feature
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Blog
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                About
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-2 px-3 max-lg:rounded">
              <a
                href="javascript:void(0)"
                className="lg:hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default UserHeader;
