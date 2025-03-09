import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import badge from '@/../public/RocketAir_badge.svg'

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <div className="grid md:grid-cols-2 border-t">
        {/* Left section */}
        <div className="w-full p-20 flex flex-col justify-between items-center bg-black text-white">
          <div className="text-center mb-8 flex flex-col justify-between items-center">
            <h2 className="text-6xl mb-4">Fuel for Thought</h2>
            <p className="text-gray-300 max-w-md text-center">
              A casual hello from the RocketAir Crew filled with insights, 
              inspiration, and good vibes only.
            </p>
          </div>
          
          <div className="flex justify-center items-center mt-12">
            <Image 
              src={badge} 
              alt='badge'
              width={300} 
              height={300}
              className="mb-8"
            />
          </div>
          
          <div className="mt-8 w-full max-w-md flex flex-col items-center">
            <div className="mb-6 w-full">
              <label htmlFor="email" className="text-gray-400 absolute mb-[0.3rem] mr-3 leading-6 transition-all duration-150 origin-top-left">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none py-2 text-white"
                placeholder=""
              />
            </div>
            <button className="border border-white rounded-full px-8 py-2 hover:bg-white hover:text-black transition-colors duration-250">
              Subscribe
            </button>
          </div>
        </div>
        
        {/* Right section - Navigation */}
        <div className="w-full border-l pb-0">
          <nav className="flex flex-col">
            <Link 
              href="/work" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                Work
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/about" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                About
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/services" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                Services
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/verticals" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                Verticals
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/careers" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                Careers
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/ideas" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                Ideas
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/news" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                News
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            <Link 
              href="/contact" 
              className="py-6 px-8 text-4xl border-b relative overflow-hidden group"
            >
              <span className="relative z-10 transition-colors duration-250 group-hover:text-black">
                Contact
              </span>
              <span className="absolute left-0 right-0 top-1/2 h-0 bg-white group-hover:h-full group-hover:top-0 transition-all duration-250 ease-out z-0"></span>
            </Link>
            {/* Social links and privacy policy */}
            <div className="flex justify-between items-center p-8 border-t border-l border-gray-800">
              <div className="flex space-x-4">
                <Link href="https://twitter.com" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="https://linkedin.com" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="https://youtube.com" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </Link>
                <Link href="https://instagram.com" className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
              </div>
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;