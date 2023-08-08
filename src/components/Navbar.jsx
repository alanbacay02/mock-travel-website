import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiUser } from 'react-icons/ci';
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
        <div className='flex flex-row items-center justify-center'>
          <div className='w-[40px] xs:w-[50px] sm:w-[70px] h-full fill-white'>
            <MountainSVG />
          </div>
          <h1 className='xs:text-xl sm:text-2xl md:text-3xl font-bold hover:cursor-pointer'>HIGH<span className='text-[#56ace1]'>LANDER</span>.</h1>
        </div>
        <div>
          <div className='flex w-full flex-row justify-center items-center'>
            <div
            className='flex justify-center items-center p-[4px] sm:p-2 m-3 rounded-full bg-white text-black gap-1 hover:cursor-pointer'
            onClick={handleLoginMenu} 
            >
              <CiUser className='text-xs xs:text-base sm:text-lg md:text-xl'/>
              <p className='font-medium text-xs xs:text-base pr-1'>Log in</p>
            </div>
            <div className='block' onClick={handleNavMenu}>
              {navMenu ? <AiOutlineClose size={20} className='md:ml-2 hover:cursor-pointer' /> :  <SlMenu size={20} className='md:ml-2 hover:cursor-pointer' /> }
            </div>
          </div>
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