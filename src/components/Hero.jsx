import React from 'react';
import { BsSearch } from 'react-icons/bs';
import HeroBackground from '../assets/mountainSunset.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='relative h-fit w-full'>
      {/* Filter for other bg images: bg-stone-800/50 */}
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-2 bg-stone-800/70 text-white'>
        <h1 className='text-3xl sm:text-5xl md:text-6xl py-6 font-bold text-center'>Uncover Hidden Horizons<br />with Us</h1>
        <p className='max-w-[900px] text-sm sm:text-xl md:text-2xl sm:pt-2 text-center'>Our expert team curates immersive itineraries, blending exploration, culture, and awe-inspiring encounters</p>
        <div className='w-full max-w-[900px] flex flex-row my-4 sm:my-8 pl-2 sm:pl-4 md:pl-6 pr-2 py-1 sm:py-2 rounded-3xl bg-transparent border border-gray-100/90'>
          <Typed
            className='w-full my-auto'
            strings={[
              'Search a destination now...',
              'Palawan, Philippines',
              'Tokyo, Japan',
              'Malé, Maldives',
              'Bali, Indonesia']}
            typeSpeed={40}
            backSpeed={50}
            attr='placeholder'
            loop>
            <input className='w-full bg-transparent text-white text-sm sm:text-lg md:text-2xl placeholder:text-gray-300 outline-none' type='text' />
          </Typed>
          <HiOutlineLocationMarker className='my-auto text-white text-2xl xs:text-4xl hover:cursor-pointer hover:bg-gray-100/20 hover:rounded-full'/>
          <div className='w-fit my-auto p-[6px] sm:p-3 ml-1 rounded-3xl text-sm xs:text-lg sm:text-xl bg-gray-100/20 hover:cursor-pointer hover:bg-gray-200/60'>
            <BsSearch />
          </div>
        </div>
        <div className='flex flex-row justify-center items-center gap-3 md:gap-8'>
          <button className='px-2 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 border border-white bg-transparent font-bold text-xs md:text-lg hover:bg-gray-200/60'>Learn More</button>
          <button className='px-2 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 border border-white bg-gray-200/30 text-white font-bold text-xs md:text-lg hover:bg-gray-200/60'>Plan Your Trip</button>
        </div>
      </div>
      <img className='w-full h-screen object-cover' loading='lazy' src={HeroBackground} alt='canyon_neom2.jpg' />
    </div>
  );
}

export default Hero;