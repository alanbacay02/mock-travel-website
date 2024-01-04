import React from 'react';
import DestinationsSlick from './DestinationsSlick.jsx';


const Destinations = () => {
  return (
    <div className='relative w-full pb-12 md:pb-16 pt-5 md:pt-8'>
      <div className='w-full max-w-[1200px] mx-auto'>
        <div className='flex flex-col text-center md:text-start px-6'>
          <h1 className='font-bold text-lg sm:text-xl mb-2 pl-2'>Popular Destinations Right Now</h1>
        </div>
        <div className='md:mb-2'>
          <DestinationsSlick />
        </div>
      </div>
    </div>
  )
}

export default Destinations;