import logo from '/images/tr_logo.png';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    if (isOpen === true) {
      setIsOpen(false);
    }
  }

  return (
    <div className="flex items-center justify-center  sticky top-0 bg-white z-10  border-black shadow-[0_12px_18px_-5px_rgba(0,0,0,0.3)] scroll-smooth">
      <nav className="flex items-center justify-between flex-wrap p-4 max-w-7xl min-w-[260px] ">
        <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 ">
          <a href="/">
            <img
              src={logo}
              className="w-16 h-16 mr-1"
              alt="True Reality Logo"
            />
          </a>
        </div>
        <div className="block lg:hidden">
          <span>Київ, 25/05</span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
          >
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <div
            className={`text-base lg:flex-grow flex flex-col lg:flex-row items-center justify-center absolute top-50 left-0 right-0 bg-white lg:relative py-4 lg:py-0 ${
              isOpen
                ? 'shadow-[0_12px_18px_-5px_rgba(0,0,0,0.3)]'
                : 'shadow-none'
            }`}
          >
            <a
              href="/#masters"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              onClick={handleClick}
            >
              Майстри
            </a>
            <a
              href="/#schedule"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              onClick={handleClick}
            >
              Розклад
            </a>
            <a
              href="/#place"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              onClick={handleClick}
            >
              Місце
            </a>
            <a
              href="/#contacts"
              className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4"
              onClick={handleClick}
            >
              Контакти
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

//  <div className="bg-black/80 w-full py-4  flex justify-center sticky top-0 ">
//     <div className="flex items-center justify-between gap-14 max-w-5xl text-white">
