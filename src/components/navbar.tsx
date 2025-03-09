import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/../public/RocketAir_logo.svg'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black py-6 w-full px-12'>
      <Link
        href="/"
        className="relative"
      >
        <Image src={logo} alt='logo' />
      </Link>
      <div className="flex items-center">
        <Link
          href="/contact"
          className="text-sm px-4.5 py-1.5 mx-6 font-medium bg-[#DEFD35] text-black rounded-full relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get in touch</span>
          <span className="absolute left-0 right-0 top-1/2 h-0 bg-black group-hover:h-full group-hover:top-0 transition-all duration-300 ease-out z-0"></span>
        </Link>
        <div className="ml-4 flex flex-col gap-2 group">
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-white group-hover:bg-[#DEFD35]"></div>
            <div className="h-2 w-2 rounded-full bg-white group-hover:bg-[#DEFD35]"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-full bg-white group-hover:bg-[#DEFD35]"></div>
            <div className="h-2 w-2 rounded-full bg-white group-hover:bg-[#DEFD35]"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar