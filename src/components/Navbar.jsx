import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SlMenu } from 'react-icons/sl';
import MountainSVG from './MountainSVG.jsx';
import PopoutMenu from './PopoutMenu.jsx';
import LoginMenu from './LoginMenu.jsx';


const Navbar = () => {
  const [navMenu, setNavMenu] = useState(false);
  const [loginMenu, setLoginMenu] = useState(false);

  const handleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const handleLoginMenu = () => {
    setLoginMenu(!loginMenu);
  }

  return (
    <div>
      <div id='navbar' className='absolute top-0 left-0 right-0 flex flex-row justify-between items-center h-16 sm:h-20 md:h-24 w-full mx-auto px-2 md:px-6 text-white z-10'>
        <a href='/#'>
          <div className='flex flex-row items-center justify-center hover:cursor-pointer'>
            <div className='w-[30px] xs:w-[50px] sm:w-[70px] h-full fill-white'>
              <MountainSVG />
            </div>
            <h1 className='text-sm xs:text-lg sm:text-2xl md:text-3xl font-bold'>HIGH<span className='text-[#56ace1]'>LANDER</span>.</h1>
          </div>
        </a>

        <div className='flex flex-row justify-center items-center'>
          {/* Unordered List Items Shown On LG Devices */}
          <div className='hidden lg:flex w-fit h-fit items-center mr-3'>
            <ul className='flex flex-row justify-center items-center gap-10 xl:gap-14 text-lg'>
              <li className='hover:cursor-pointer'>
                <a href='/#' className='text-center group transition-all duration-300'>
                  Home
                  <span className='block max-w-0 group-hover:max-w-full transition-all ease-in-out duration-500 h-0.5 bg-white z-30' />
                </a>
              </li>
              <li className='hover:cursor-pointer'>
                <a href='/#' className='group transition-all duration-300'>
                  About
                  <span className='block max-w-0 group-hover:max-w-full ease-in-out duration-500 h-0.5 bg-white z-30' />
                </a>
              </li>
              <li className='hover:cursor-pointer'>
                <a href='/#' className='group transition-all duration-300'>
                  Explore
                  <span className='block max-w-0 group-hover:max-w-full transition-all ease-in-out duration-500 h-0.5 bg-white z-30' />
                </a>
              </li>
              <li className='hover:cursor-pointer'>
                <a href='/#' className='group transition-all duration-300'>
                  Tickets
                  <span className='block max-w-0 group-hover:max-w-full ease-in-out duration-500 h-0.5 bg-white z-30' />
                </a>
              </li>
              <li className='hover:cursor-pointer'>
                <a href='/#' className='group transition-all duration-300'>
                  Hotels
                  <span className='block max-w-0 group-hover:max-w-full transition-all ease-in-out duration-500 h-0.5 bg-white z-30' />
                </a>
              </li>
            </ul>
          </div>
          {/* End of Unordered List Items Shown On LG Devices */}
          
          {/* Start of Login Button */}
          <div
            className='group relative flex justify-center items-center p-1 xs:py-1 xs:px-2 sm:py-1 sm:px-3 md:py-2 md:px-8 ml-1 lg:ml-5 border-b-2 border-transparent hover:border-white hover:cursor-pointer hover:bg-transparent'
            onClick={handleLoginMenu} 
          >
            <p className='font-medium text-[10px] xs:text-xs sm:text-lg'>Log in</p>
            <div className='absolute bottom-0 h-0 w-full bg-blue-600 -z-10 group-hover:h-full ease-in-out duration-500' />
          </div>
          {/* End of Login Button */}

          {/* Start of Signup Button */}
          <div
            className='group relative flex justify-center items-center p-1 xs:py-1 xs:px-2 sm:py-1 sm:px-3 lg:py-2 lg:px-8 ml-1 lg:ml-3 border-2 border-white gap-1 hover:cursor-pointer'
            onClick={() => {}} 
          >
            <p className='font-medium text-[10px] xs:text-xs sm:text-lg'>Sign Up</p>
            <div className='absolute inset-0 h-0 w-full bg-blue-600 -z-10 group-hover:h-full ease-in-out duration-500' />
          </div>
          {/* End of Signup Button */}

          {/* Start of Hamburger Menu on Smaller Devices */}
          <div className='block lg:hidden' onClick={handleNavMenu}>
            {navMenu ? <AiOutlineClose className='text-base xs:text-lg sm:text-2xl ml-2 sm:ml-4 hover:cursor-pointer' /> :  <SlMenu className='text-base xs:text-lg sm:text-2xl ml-2 sm:ml-4 hover:cursor-pointer' /> }
          </div>
          {/* End of Hamburger Menu on Smaller Devices */}
        </div>
      </div>

      <PopoutMenu navMenu={navMenu} setNavMenu={setNavMenu} handleNavMenu={handleNavMenu} />
      <LoginMenu loginMenu={loginMenu} setLoginMenu={setLoginMenu} handleLoginMenu={handleLoginMenu} />
      {/* Overlay that appears behind `loginMenu` when active */}
      {/* Navbar: z-10; PopoutMenu: z-10; LoginMenu: z-50; Overlay: z-20 */}
      <div id='overlay' className={loginMenu ? 'absolute top-0 left-0 w-full h-screen bg-black/50 z-20' : 'hidden'} />
    </div>
  );
}

export default Navbar;