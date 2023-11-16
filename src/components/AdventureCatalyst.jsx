import React from 'react'
import { ContourSVG2 } from '../svg-components/BackgroundSVG'

const AdventureCatalyst = () => {
  return (
    <div className='relative w-full py-20 md:my-14 overflow-clip'>
      <div className='w-full max-w-[800px] mx-auto'>
        <div className='flex flex-col justify-center items-center text-center p-2 px-6'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3 bg-stone-50'>Elate Your Adventure</h1>
          <p className='mt-2 text-lg md:text-xl bg-stone-50'>Unleash your wanderlust with Highlander. We're your passport to extraordinary adventures. Explore, dream, and plan with ease. Start Planning now!</p>
          <button className='px-2 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 mt-9 bg-blue-600 text-white font-bold text-xs md:text-lg'>Start Planning</button>
        </div>
      </div>
      
      <div className='absolute w-[2700px] h-[2000px] inset-0 -top-56 fill-gray-200 bg-stone-50 -z-50'>
        <ContourSVG2 />
      </div>
    </div>
  )
}

export default AdventureCatalyst