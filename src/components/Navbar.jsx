import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineInfoCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiPackage } from 'react-icons/bi';
import { BsClipboardCheck, BsGlobeAmericas} from 'react-icons/bs';
import { CiUser } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagram, FaPinterestSquare, FaTwitter } from 'react-icons/fa';
import { ImPriceTag } from 'react-icons/im';
import { SlMenu } from 'react-icons/sl';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='absolute z-50 top-0 left-0 flex flex-row justify-between items-center h-16 sm:h-20 md:h-24 w-full mx-auto px-2 md:px-6 bg-white'>
      <h1 className='text-lg sm:text-2xl md:text-3xl font-bold hover:cursor-pointer'>WAY<span className='text-[#56ace1]'>FARER</span>.</h1>
      <div>
        <div className='flex w-full flex-row justify-center items-center'>
          <p className='hidden sm:flex whitespace-nowrap p-1 m-3 font-medium hover:cursor-pointer text-xs sm:text-base'><CiUser size={20} className='my-auto mx-1'/> Log in</p>
          <div className='block' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} className='md:ml-5 hover:cursor-pointer' /> :  <SlMenu size={20} className='md:ml-5 hover:cursor-pointer' /> }
          </div>
        </div>
      </div>

      {/* Popout Menu */}
      <div className={nav ? 'fixed h-screen top-[60px] right-0 w-[90%] sm:h-fit sm:right-4 sm:top-[88px] md:top-[104px] sm:w-[300px] sm:rounded-lg bg-white ease-in-out duration-500' :  'right-[-100%] sm:right-[-100%] fixed h-screen top-[60px] w-[90%] sm:h-fit sm:top-[108px] sm:w-[35%] sm:rounded-lg bg-white ease-in-out duration-500'}>
        <ul className='flex flex-col h-fit my-1'>
          <li className="p-4 mt-8 sm:mt-0 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200">
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
          <li className='sm:hidden p-4 mt-4 font-medium inline-flex hover:cursor-pointer hover:bg-gray-200'>
            Login
          </li>
          <li className='sm:hidden p-4 font-medium border-b inline-flex hover:cursor-pointer hover:bg-gray-200'>
            Signup
          </li>
          <li className='flex flex-row p-3 mx-auto my-auto space-x-10'>
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