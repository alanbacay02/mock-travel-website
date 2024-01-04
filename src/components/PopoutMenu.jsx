import React, { useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiPackage } from 'react-icons/bi';
import { BsClipboardCheck, BsGlobeAmericas} from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im';

const PopoutMenu = (props) => {
  const menuRef = useRef();

  useEffect(() => {
    // Function to handle click events.
    let handleClick = (e) => {
      if (!menuRef.current.contains(e.target)) {
        props.setNavMenu(false); // Sets state `navMenu` to false when click event is outside `menuRef`.
      }
    }
    // Adds event listener for `mousedown` events.
    document.addEventListener('mousedown', handleClick);

    // Clean up event listener and remove 'no-scroll' class when component unmounts.
    const popoutMenu = menuRef.current;
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.body.classList.remove('no-scroll');
      popoutMenu.style.overflow = 'hidden';
    }
  }, [props]);

  useEffect(() => {
    const popoutMenu = menuRef.current;
    // Get the current viewport width.
    const viewportWidth = window.innerWidth;
    // Add or remove 'no-scroll' class based on the 'navMenu' state and viewport size.
    if (props.navMenu && viewportWidth < 768) { // Adds a no-scroll class if viewport is less than to 768px.
      document.body.classList.add('no-scroll');
      popoutMenu.style.overflow = 'auto';
    } else {
      document.body.classList.remove('no-scroll');
      popoutMenu.style.overflow = 'hidden';
    }
  }, [props]);

  return (
    <>
      {/* Popout Menu */}
      <div 
        ref={menuRef} 
        className={ props.navMenu
          ? 'fixed h-screen top-0 right-0 w-[85%] bg-white text-black ease-in-out duration-500 shadow-2xl md:block md:absolute md:h-fit md:right-4 md:top-[80px] md:w-[300px] md:rounded-lg md:transition-none z-50'
          : 'right-[-100%] fixed h-screen top-0 w-[85%] bg-white text-black ease-in-out duration-500 md:transition-none z-50'
        }
      >
        <ul className='flex flex-col h-fit text-base sm:text-lg'>
          <li className="flex justify-end p-4 md:hidden text-xl">
            <AiOutlineClose onClick={() => {props.handleNavMenu()}} />
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <AiOutlineInfoCircle className='my-auto mr-5 text-blue-600' />
            About
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <BsGlobeAmericas className='my-auto mr-5 text-blue-600' />
            Destinations
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <BiPackage className='my-auto mr-5 text-blue-600' />
            Packages
          </li>
          <li className="p-4 font-medium border-b inline-flex hover:cursor-pointer hover:bg-gray-200">
            <BsClipboardCheck className='my-auto mr-5 text-blue-600' />
            Reviews
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
            <ImPriceTag className='my-auto mr-5 text-blue-600' />
            Explore Everywhere
          </li>
          <li className="p-4 font-medium border-b inline-flex hover:cursor-pointer hover:bg-gray-200">
            <AiOutlineQuestionCircle className='my-auto mr-5 text-blue-600' /> 
            Help
          </li>
          <li className='flex flex-row p-3 mx-auto my-auto space-x-5 md:space-x-8 text-2xl xs:text-3xl'>
            <FaFacebookSquare className='text-blue-600 hover:cursor-pointer active:text-blue-800' />
            <FaInstagram className='text-blue-600 hover:cursor-pointer active:text-blue-800' />
            <FaTwitter className='text-blue-600 hover:cursor-pointer active:text-blue-800' />
            <FaPinterestSquare className='text-blue-600 hover:cursor-pointer active:text-blue-800' />
          </li>
        </ul>
      </div>
      {/* End of Popout Menu */}
    </>
  );
};

export default PopoutMenu