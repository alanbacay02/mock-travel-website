import React from 'react';
import { BsSearch } from 'react-icons/bs';
// import HeroBackground from '../assets/canyon_neom2.jpg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-2 text-white bg-stone-800/50'>
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
            <input className='w-full bg-transparent text-white text-sm sm:text-lg md:text-2xl outline-none' type='text' />
          </Typed>
          <HiOutlineLocationMarker className='my-auto text-white hover:cursor-pointer' size={30}/>
          <div className='w-fit my-auto p-[6px] sm:p-3 ml-1 rounded-3xl bg-gray-100/20 hover:cursor-pointer'><BsSearch size={20} /></div>
        </div>
      </div>
      <img className='w-full h-full object-cover' src='https://images.unsplash.com/photo-1508739773434-c26b3d09e071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80' alt='canyon_neom2.jpg' />
    </div>
  );
}

export default Hero;