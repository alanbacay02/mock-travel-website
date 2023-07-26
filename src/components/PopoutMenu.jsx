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
        props.setNav(false); // Sets state `nav` to false when click event is outside `menuRef`.
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
    // Add or remove 'no-scroll' class based on the 'nav' state.
    if (props.nav) {
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
        className={ props.nav
          ? 'fixed h-screen top-0 right-0 w-[85%] bg-white text-black ease-in-out duration-500 shadow-2xl sm:block sm:absolute sm:h-fit sm:right-4 sm:top-[80px] sm:w-[300px] sm:rounded-lg sm:transition-none'
          : 'right-[-100%] fixed h-screen top-0 w-[85%] bg-white text-black ease-in-out duration-500 sm:transition-none'
        }
      >
        <ul className='flex flex-col h-fit'>
          <li className="flex justify-end p-4 sm:hidden">
            <AiOutlineClose onClick={() => {props.handleNav()}} size={25} />
          </li>
          <li className="p-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
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
    </>
  );
};

export default PopoutMenu