import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { TbAirConditioning } from 'react-icons/tb';
import { HiOutlineSparkles } from 'react-icons/hi';

const ValueProposition = () => {
  return (
    <div className='w-full max-w-[1360px] mx-auto'>
      {/* Start of container */}
      <div className='grid md:grid-cols-2 gap-8 px-6 pb-16'>
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-3'>Looking for a place to rest?</h1>
          <img
            className='md:hidden w-full h-[300px] mb-4 mx-auto object-cover shadow-xl'
            src='https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
            alt='hotel_room.jpg' />
          <p className='text-xl'>With Highlander, we will make sure to find you the best accomodation at the best rates.</p>
          <div className='grid grid-cols-2 gap-y-6 my-7 sm:my-9 mx-auto gap-x-3 xs:gap-x-16 md:gap-x-0 md:mx-0 text-gray-700 font-medium text-sm xs:text-base sm:text-xl'>
            <div className='flex flex-col xs:flex-row items-center gap-3'>
              <HiOutlineSparkles className='text-blue-600 text-lg xs:text-xl sm:text-2xl' />
              <p>Clean Rooms</p>
            </div>
            <div className='flex flex-col xs:flex-row items-center gap-3'>
              <TbAirConditioning className='text-blue-600 text-lg xs:text-xl sm:text-2xl' />
              <p>Air Conditioning</p>
            </div>
            <div className='flex flex-col xs:flex-row items-center gap-3'>
              <BiLockAlt className='text-blue-600 text-lg xs:text-xl sm:text-2xl' />
              <p>Secure</p>
            </div>
            <div className='flex flex-col xs:flex-row items-center gap-3'>
              <AiOutlineWifi className='text-blue-600 text-lg xs:text-xl sm:text-2xl' />
              <p>Internet/Wifi</p>
            </div>
          </div>
          {/* Buttons */}
          <div className='flex flex-row space-x-4 items-center ml-2 justify-center md:justify-normal'>
            <button className='px-4 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold md:text-lg hover:bg-blue-700 active:bg-blue-800'>Book Now</button>
            <a href='/#' className='m-1 underline text-blue-700 hover:cursor-pointer active:text-blue-400 md:text-lg font-semibold ml-auto select-none'>Learn More</a>
          </div>
        </div>
        <img
          className='hidden md:block w-full h-[400px] mx-auto object-cover shadow-xl'
          src='https://images.unsplash.com/flagged/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
          alt='hotel_room.jpg' />
      </div>

      {/* End of container */}
    </div>
  );
}

export default ValueProposition;