import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiPackage } from 'react-icons/bi';
import { BsClipboardCheck, BsGlobeAmericas} from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im';
import { SlMenu } from 'react-icons/sl';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const popMenuRef = useRef();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    // Function to handle click events.
    let handleClick = (e) => {
      if (!popMenuRef.current.contains(e.target)) {
        setNav(false); // Sets state `nav` to false when click event is outside `popMenuRef`.
      }
    }
    // Adds event listener for `mousedown` events.
    document.addEventListener('mousedown', handleClick);

    // Clean up event listener and remove 'no-scroll' class when component unmounts.
    const popoutMenu = popMenuRef.current;
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.body.classList.remove('no-scroll')
      popoutMenu.style.overflow = 'hidden';
    }
  }, [popMenuRef]);

  useEffect(() => {
    const popoutMenu = popMenuRef.current;
    // Add or remove 'no-scroll' class based on the 'nav' state.
    if (nav) {
      document.body.classList.add('no-scroll');
      popoutMenu.style.overflow = 'auto';
    } else {
      document.body.classList.remove('no-scroll');
      popoutMenu.style.overflow = 'hidden';
    }
  }, [nav]);


  return (
    <div className='absolute z-50 top-0 left-0 right-0 flex flex-row justify-between items-center h-16 sm:h-20 md:h-24 w-full mx-auto px-2 md:px-6 text-white'>
      <h1 className='text-lg sm:text-2xl md:text-3xl font-bold hover:cursor-pointer'>STAR<span className='text-[#56ace1]'>BLAZE</span>.</h1>
      <div>
        <div className='flex w-full flex-row justify-center items-center'>
          <div className='flex justify-center items-center p-[4px] sm:p-2 m-3 rounded-full bg-white text-black gap-1 hover:cursor-pointer'>
          <CiUser size={20}/> 
          <p className='font-medium text-xs sm:text-base pr-1'>Log in</p>
          </div>
          <div className='block' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} className='md:ml-2 hover:cursor-pointer' /> :  <SlMenu size={20} className='md:ml-2 hover:cursor-pointer' /> }
          </div>
        </div>
      </div>

      {/* Popout Menu */}
      <div ref={popMenuRef} className={nav ? 'fixed sm:absolute h-screen top-0 right-0 w-[85%] sm:h-fit sm:right-4 sm:top-[80px] sm:w-[300px] sm:rounded-lg bg-white text-black ease-in-out duration-500 shadow-2xl' :  'right-[-100%] sm:right-[-100%] fixed h-screen top-0 w-[85%] sm:h-fit sm:top-[80px] sm:w-[300px] sm:rounded-lg bg-white text-black ease-in-out duration-500'}>
        <ul className='flex flex-col h-fit'>
          <li className="flex justify-end p-4 sm:hidden">
            <AiOutlineClose onClick={handleNav} size={25} />
          </li>
          <li className="p-4 sm:mt-0 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200 sm:hover:rounded-lg">
            <AiOutlineInfoCircle className='my-auto mr-5' size={20} />
            About
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <BsGlobeAmericas className='my-auto mr-5' size={20} />
            Destinations
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <BiPackage className='my-auto mr-5' size={20} />
            Packages
          </li>
          <li className="p-4 font-medium border-b inline-flex hover:cursor-pointer hover:bg-gray-200">
            <BsClipboardCheck className='my-auto mr-5' size={20} />
            Reviews
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <ImPriceTag className='my-auto mr-5' size={20} />
            Explore Everywhere
          </li>
          <li className="p-4 font-medium border-b inline-flex hover:cursor-pointer hover:bg-gray-200">
            <AiOutlineQuestionCircle className='my-auto mr-5' size={20} /> 
            Help
          </li>
          <li className='flex flex-row p-3 mx-auto my-auto space-x-5 md:space-x-8 '>
            <FaFacebookSquare className='hover:cursor-pointer' size={30}/>
            <FaInstagram className='hover:cursor-pointer' size={30} />
            <FaTwitter className='hover:cursor-pointer' size={30} />
            <FaPinterestSquare className='hover:cursor-pointer' size={30} />
          </li>
        </ul>
      </div>
      {/* End of Popout Menu */}
    </div>
  );
}

export default Navbar;