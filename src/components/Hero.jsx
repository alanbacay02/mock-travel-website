import React from 'react';
import HeroBackground from '../assets/beach2.jpg';
import { BsSearch } from 'react-icons/bs';
// import { MdGpsFixed } from 'react-icons/md'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center px-4 md:px-14 text-white bg-slate-900/30'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl py-6 font-bold text-center'>Looking for a getaway?</h1>
        <p className='font-medium text-lg sm:text-2xl md:text-3xl text-center'>Get access to top 1% locations worldwide</p>
        <div className='w-full max-w-[900px] flex flex-row my-8 pl-2 sm:pl-4 md:pl-6 pr-1 sm:pr-2 py-2 rounded-xl bg-white'>
          <Typed
            className='w-full my-auto'
            strings={[
              'Search a destination...',
              'Palawan, Philippines',
              'Tokyo, Japan',
              'Malé, Maldives',
              'Bali, Indonesia']}
            typeSpeed={40}
            backSpeed={50}
            attr='placeholder'
            loop>
            <input className='w-full bg-transparent text-black text-base sm:text-lg md:text-2xl outline-none' type='text' />
          </Typed>
          <HiOutlineLocationMarker className='my-auto text-gray-600/90 hover:cursor-pointer' size={30}/>
          <div className='w-fit my-auto p-[6px] ml-1 rounded-xl bg-[#0281d0] hover:cursor-pointer'><BsSearch size={20} /></div>
        </div>
      </div>
      <img className='w-full h-full object-cover' src={HeroBackground} alt='beach2.jpg' />
    </div>
  );
}

export default Hero;