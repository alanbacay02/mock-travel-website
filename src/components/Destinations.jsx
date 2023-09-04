import React from 'react';
import DestinationsSlick from './DestinationsSlick.jsx';


const Destinations = () => {
  return (
    <div className='relative w-full pb-16'>
      <div className='w-full max-w-[1300px] mx-auto'>
        <div className='flex flex-col justify-center items-center text-center p-2 px-6'>
          <div className='slanted-container'>
            <p className='slanted-text font-medium text-base md:text-lg text-white bg-blue-500 py-1'>FIND YOUR NEXT GETAWAY</p>
          </div>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>Popular Destinations Right Now</h1>
        </div>
        <div className='md:my-2'>
          <DestinationsSlick />
        </div>
      </div>
    </div>
  )
}

export default Destinations;