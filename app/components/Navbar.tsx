'use client'
import React, { useState } from 'react';


const Navbar = () => {
  const [mobilenavOpen, setMobilenavOpen] = useState(false);

  return (
    <header className="md:flex items-center justify-between px-8 bg-[#fafaed] h-20 sticky top-0 z-50 border border-b border-b-slate-300">
      <div className="flex items-center justify-between h-20">
        <div>
          <a className="flex items-center gap-1" href="/">
            <span className="text-xl font-semibold">Naz Soham</span>
          </a>
        </div>

        <div className="md:hidden">
          <a
            onClick={() => setMobilenavOpen(!mobilenavOpen)}
            className="h-12 w-12 flex items-center justify-center hover:cursor-pointer rounded-lg"
          >
            {mobilenavOpen ? (
              // Delete Icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </a>
        </div>
      </div>

      {/* Render navigation links always */}
      <nav className={`${mobilenavOpen ? 'block' : 'hidden'} md:block bg-[#fafaed] h-screen w-screen md:h-auto md:w-auto -mt-20 md:mt-0 absolute md:relative z-[-1]`}>
        <ul className="text-slate-600 uppercase semibold tracking-widest text-3xl md:text-sm flex items-center navitems flex-col md:flex-row gap-8 justify-center h-full -translate-y-10 md:translate-y-0">
          <li><a className="hover:underline hover:decoration-1 hover:text-slate-900" href="#">About</a></li>
          <li><a className="hover:underline hover:decoration-1 hover:text-slate-900" href="#">Gallery</a></li>
          <li><a className="hover:underline hover:decoration-1 hover:text-slate-900" href="#">Menu</a></li>
          <li><a className="hover:underline hover:decoration-1 hover:text-slate-900" href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;