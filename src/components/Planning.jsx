import React from 'react'
import { BsCarFrontFill, BsPeople } from 'react-icons/bs'
import { FaHotel, FaPlaneDeparture } from 'react-icons/fa'

const PlanningImageSection = () => {
  return (
    <div className='relative rounded-xl shadow-lg h-[280px] xs:h-[330px] sm:h-[380px] md:h-[450px]'>
      <img
        className='w-full h-full mx-auto object-cover object-bottom rounded-xl'
        src='https://images.unsplash.com/photo-1604363937376-bde1acf2a658?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' 
        alt='hotel_room.jpg'
      />
      
      <div className='acc-div-shadow absolute right-2 -bottom-4 md:right-4 md:-bottom-8 h-min w-[90%] md:w-[60%] px-4 py-2 md:px-7 md:py-3 flex flex-row justify-between rounded-2xl bg-white text-[10px] xs:text-sm sm:text-base'>
        <div className='flex flex-col'>
          <h3 className='font-medium'>John's trip to Asia</h3>
          <p className='font-medium text-gray-600'>24 June - 15 July</p>
          <div className='flex flex-row items-center pt-1'>
            <BsPeople />
            <p className='pl-1'>5 people going</p>
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
            <div className='rounded-full bg-gray-200/80 text-gray-600 p-2'>
              <BsCarFrontFill />
            </div>
            <div className='rounded-full bg-gray-200/80 text-gray-600 p-2'>
              <FaHotel />
            </div>
            <div className='rounded-full bg-gray-200/80 text-gray-600 p-2'>
              <FaPlaneDeparture />
            </div>
          </div>
      </div>

      <div className='acc-div-shadow absolute flex flex-row items-center top-10 -left-[4%] sm:-left-[4%] md:-left-[10%] lg:-left-[8%] ml-0 sm:ml-2 md:ml-8 px-3 py-2 md:px-4 md:py-3 bg-white rounded-2xl text-[10px] xs:text-sm sm:text-base'>
        <img
          className='w-7 h-7 xs:w-9 xs:h-9 xs:mr-1 sm:w-11 sm:h-11 object-cover object-top rounded-full'
          src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          alt='main_review_portrait.jpg'
        />
        <div className='flex flex-col justify-center pl-1'>
          <p className='font-medium'>John's Trip Progress</p>
          <p>60% Completed</p>
          <div className='mt-1 ml-[2px] relative w-[95%] bg-gray-300'>
            <div className='border-2 border-blue-600 w-[60%] bg-blue-600' />
          </div>
        </div>
      </div>
    </div>
  )
}

const Planning = () => {
  return (
    <div className='w-full max-w-[1360px] mx-auto py-10 md:py-16'>
      <div className='grid md:grid-cols-2 gap-5 lg:gap-8 px-6'>
        <div className='hidden md:block'>
          <PlanningImageSection />
        </div>
        <div className='flex flex-col justify-center'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4'>Travel Planning Made Simple</h1>
          <div className='md:hidden'>
            <PlanningImageSection />
          </div>
          <p className='text-lg sm:text-xl mt-6 md:m-0'>Planning your dream getaway has never been this easy. Our user-friendly planning interface is designed with you in mind, making every step of your journey a breeze.</p>
          <p className='text-lg sm:text-xl mt-3'>From choosing your destination to crafting the perfect itinerary, we've got you covered.</p>
          {/* Buttons */}
          <div className='flex flex-row space-x-4 items-center mt-10 ml-1 justify-center md:justify-normal'>
          <button className='px-4 py-3 md:px-8 md:py-4 bg-blue-600 text-white font-bold md:text-lg hover:bg-blue-700 active:bg-blue-800' onClick={() => {}}>Plan Your Trip Now</button>
            <a href='/#' className='m-1 text-blue-700 hover:cursor-pointer hover:underline underline-offset-2 active:text-blue-400 md:text-lg font-semibold ml-auto select-none'>Learn More &gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planning