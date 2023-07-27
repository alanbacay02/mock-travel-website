import React from 'react';
import DestinationSwiper from './DestinationSwiper.jsx';


const Destinations = () => {
  return (
    <div className='relative w-full py-16 px-6'>
      <div className='w-full max-w-[1300px] mx-auto'>
        <div className='flex flex-col justify-center items-center text-center p-2'>
          <p className='font-medium text-base md:text-lg text-white bg-[#56ace1] py-1 px-2'>FIND YOUR NEXT GETAWAY</p>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>Popular Destinations Right Now</h1>
        </div>
        <div className='relative my-3'>
          <div className='absolute left-0 right-0 w-full max-w-[1400px] mx-auto bg-gray-100 h-[calc(100%-90px)] bottom-0'></div>
          <DestinationSwiper />
        </div>
      </div>
    </div>
  )
}

export default Destinations;