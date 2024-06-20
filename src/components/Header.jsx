import React, { useState } from 'react'
import { RiCheckboxBlankCircleFill, RiMenu3Fill, RiCloseLine } from 'react-icons/ri'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return <header className='flex items-center justify-between xl:justify-start w-full py-4 px-8 h-[10vh] z-50'>
    <div className='xk:w-1/6 text-center -mt-4'>
      <a href="#" className='text-2xl font-bold relative p-1 bg-background'>
        EidosTech<span className='text-primary text-5xl'>.</span>{" "}
        <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10' /></a>
    </div>
    <nav className={`fixed bg-background w-[80%] md:w-[40%] h-full ${showMenu ? "left-0" : "-left-full"} right-0 top-0 xl:static flex-1 flex flex-col
    xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>


      <a href="#" className=''>Home</a>
      <a href="#" className=''>About Us</a>
      <a href="#" className=''>Service</a>
      <a href="#" className=''>Products</a>


    </nav>
    <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>
      {showMenu ? <RiCloseLine /> : <RiMenu3Fill />} </button>
  </header>
}

export default Header
