import React from 'react'
import { TireTrackSVG } from '../svg-components/BackgroundSVG'

const AccomodationImageSection = () => {
  return (
    <div className='relative w-[100%] h-full overflow-clip mx-auto px-1 rounded-xl'>
      <img
        className='h-full w-fit scale-150 object-cover shadow-xl'
        src='https://images.unsplash.com/photo-1529369623266-f5264b696110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' 
        alt='hotel_room.jpg'
      />
    </div>
  )
}

const Transportation = () => {
  return (
  <div className='relative w-full py-16 overflow-clip'>
    <div className='w-full max-w-[1360px] mx-auto'>
      {/* Start of container */}
      <div className='grid md:grid-cols-2 gap-5 lg:gap-8 px-6'>
        <div className=''>
          <AccomodationImageSection />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mb-3'>Book a Car</h1>
          <p className='text-lg sm:text-xl '>Through Highlander and our partners, we will make sure to find you the best vehicle that suits your travel needs.</p>
          {/* Buttons */}
          <div className='flex flex-row space-x-4 items-center mt-3 ml-2 justify-center md:justify-normal'>
            <button className='px-4 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold md:text-lg hover:bg-blue-700 active:bg-blue-800'>Rent Now</button>
            <a href='/#' className='m-1 text-blue-700 hover:cursor-pointer hover:underline underline-offset-2 active:text-blue-400 md:text-lg font-semibold ml-auto select-none'>Learn More &gt;</a>
          </div>
          <h1 className='font-bold text-xl sm:text-2xl md:text-3xl mt-7 mb-3'>Book an Airline</h1>
          <p className='text-lg sm:text-xl '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam expedita ullam in aut assumenda laboriosam, perspiciatis quod repellendus magnam suscipit consequuntur libero harum quasi officiis repellat!</p>
          {/* Buttons */}
          <div className='flex flex-row space-x-4 items-center mt-3 ml-2 justify-center md:justify-normal'>
            <button className='px-4 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold md:text-lg hover:bg-blue-700 active:bg-blue-800'>Book Now</button>
            <a href='/#' className='m-1 text-blue-700 hover:cursor-pointer hover:underline underline-offset-2 active:text-blue-400 md:text-lg font-semibold ml-auto select-none'>Learn More &gt;</a>
          </div>
        </div>
      </div>

      <div className='absolute -top-[340px] md:top-2 left-[6%] md:left-[4%] w-[400px] md:w-auto h-full scale-150 md:scale-100 fill-gray-100 -z-50'>
        <TireTrackSVG />
      </div>
    </div>
  </div>
  )
}

export default Transportation