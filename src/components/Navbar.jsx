import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
import { SlMenu } from 'react-icons/sl';
import MountainSVG from './MountainSVG.jsx';
import PopoutMenu from './PopoutMenu.jsx';


const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <div className='absolute z-50 top-0 left-0 right-0 flex flex-row justify-between items-center h-16 sm:h-20 md:h-24 w-full mx-auto px-2 md:px-6 text-white'>
      <div className='flex flex-row items-center justify-center'>
        <div className='w-[45px] h-full sm:w-[70px] fill-white'>
          <MountainSVG />
        </div>
        <h1 className='text-lg sm:text-2xl md:text-3xl font-bold hover:cursor-pointer'>HIGH<span className='text-[#56ace1]'>LANDER</span>.</h1>
      </div>
      <div>
        <div className='flex w-full flex-row justify-center items-center'>
          <div className='flex justify-center items-center p-[4px] sm:p-2 m-3 rounded-full bg-white text-black gap-1 hover:cursor-pointer'>
          <CiUser size={20}/> 
          <p className='font-medium text-xs sm:text-base pr-1'>Log in</p>
          </div>
          <div className='block' onClick={handleNavMenu}>
            {navMenu ? <AiOutlineClose size={20} className='md:ml-2 hover:cursor-pointer' /> :  <SlMenu size={20} className='md:ml-2 hover:cursor-pointer' /> }
          </div>
        </div>
      </div>
      <PopoutMenu navMenu={navMenu} setNavMenu={setNavMenu} handleNavMenu={handleNavMenu} />
    </div>
  );
}

export default Navbar;