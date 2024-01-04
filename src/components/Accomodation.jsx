import React from 'react';
import { AiFillStar, AiOutlineWifi } from 'react-icons/ai';
import { BiLockAlt } from 'react-icons/bi';
import { TbAirConditioning } from 'react-icons/tb';
import { HiLocationMarker, HiOutlineSparkles } from 'react-icons/hi';

const REVIEW_PROFILE = [
  {
    reviewerName: '',
    imageSrc: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    imageAlt: ''
  },
  {
    reviewerName: '',
    imageSrc: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
    imageAlt: ''
  },
  {
    reviewerName: '',
    imageSrc: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    imageAlt: ''
  },
  {
    reviewerName: '',
    imageSrc: 'https://images.unsplash.com/photo-1687360441387-0179af118555?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2727&q=80',
    imageAlt: ''
  },
]


const AccomodationImageSection = () => {
  return (
    <div className='relative px-1 h-[250px] sm:h-fit'>
      {/* Main Img */}
      <img
        className='w-full h-full mt-12 mb-5 mx-auto object-cover shadow-xl rounded-xl'
        src='https://www.niagaratower.com/images/resort-tower-king-hotel-room.jpg' 
        alt='hotel_room.jpg'
        loading='lazy'
      />

      {/* Top Left Hover Div */}
      <div className='acc-div-shadow absolute left-[8%] -top-[17%] xs:-top-[12%] sm:left-[14%] px-2 py-2 sm:px-3 md:px-4 bg-white shadow-md rounded-2xl text-[10px] xs:text-sm sm:text-base'>
        <p className='font-medium pt-1 text-xs'>Verified Reviews</p>
        <div className='relative flex flex-row w-[145px] xs:py-1'>
          {REVIEW_PROFILE.map((item, index) => {
            return (
              <img
                key={index}
                className='acc-prof-img absolute w-7 h-7 xs:w-8 xs:h-8 rounded-full border-2 border-white object-cover object-top'
                src={item.imageSrc}
                alt={item.imageAlt}
              />
            )
          })}
            <div className='absolute left-[100px] z-50 flex justify-center items-center w-7 h-7 xs:w-8 xs:h-8 rounded-full border-2 border-white bg-blue-600 text-center text-white text-[11px]'>305+</div>
        </div>
        <div className='flex flex-row text-yellow-400 text-sm pl-1 pt-1'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      
      {/* Middle Right Hover Div */}
      <div className='acc-div-shadow absolute flex flex-row items-center gap-1 -right-[6%] xs:-right-[2%] md:-right-[4%] top-24 px-2 py-2 bg-white rounded-2xl text-[10px] text-sm'>
        <HiLocationMarker className='text-blue-600' />
        <a className='text-gray-600 font-medium hover:underline' href='/#'>Fallsview Tower Hotel</a>
      </div>

      <div className='acc-div-shadow absolute flex flex-row gap-1 top-[73%] -left-[10%] xs:-left-[5%] sm:-left-[2%] md:-left-[5%] ml-3 px-3 py-2 md:px-4 md:py-3 bg-white rounded-2xl text-[10px] xs:text-sm sm:text-base'>
        <img
          className='w-7 h-7 xs:w-9 xs:h-9 object-cover object-top rounded-full'
          src='https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
          alt='main_review_portrait.jpg'
        />
        <div className='flex flex-col justify-center text-[10px] xs:text-xs'>
          <p className='font-medium pl-1'>John Smith</p>
          <div className='flex items-center gap-0.5'>
            <AiFillStar className='text-yellow-400' />
            <p className='font-medium text-gray-500'><span className='font-medium text-black'>4.9</span> (Very good services)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const Accomodation = () => {
  return (
    <div className='w-full'>
      <div className='w-full max-w-[1200px] mx-auto py-10 md:py-16'>
        {/* Start of container */}
        <div className='grid md:grid-cols-2 gap-5 lg:gap-8 px-6'>
          <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-xl sm:text-2xl mb-3'>Looking for a place to rest?</h1>
            <div className='md:hidden mb-4'>
              <AccomodationImageSection />
            </div>
            <p className='text-sm sm:text-base'>With Highlander, we will make sure to find you the best accomodation at the best rates.</p>
            <div className='grid grid-cols-2 gap-y-6 my-7 sm:my-9 mx-auto gap-x-3 xs:gap-x-16 md:gap-x-0 md:mx-0 text-gray-700 font-medium text-sm xs:text-base'>
              <div className='flex flex-col xs:flex-row items-center gap-3'>
                <HiOutlineSparkles className='text-blue-600 text-2xl' />
                <p>Clean Rooms</p>
              </div>
              <div className='flex flex-col xs:flex-row items-center gap-3'>
                <TbAirConditioning className='text-blue-600 text-2xl' />
                <p>Air Conditioning</p>
              </div>
              <div className='flex flex-col xs:flex-row items-center gap-3'>
                <BiLockAlt className='text-blue-600 text-2xl' />
                <p>Secure</p>
              </div>
              <div className='flex flex-col xs:flex-row items-center gap-3'>
                <AiOutlineWifi className='text-blue-600 text-2xl' />
                <p>Internet/Wifi</p>
              </div>
            </div>
            {/* Buttons */}
            <div className='flex flex-row space-x-4 items-center justify-center md:justify-normal'>
              <button className='px-2 py-3 sm:px-4 bg-blue-600 text-white font-medium text-xs sm:text-sm hover:bg-blue-700 active:bg-blue-800' onClick={() => {}}>Book Now</button>
              <a href='/#' className='m-1 text-blue-700 hover:cursor-pointer hover:underline underline-offset-2 active:text-blue-400 text-xs sm:text-sm font-semibold ml-auto select-none'>Learn More &gt;</a>
          </div>
          </div>
          <div className='hidden md:block'>
            <AccomodationImageSection />
          </div>
        </div>

        {/* End of container */}
      </div>
    </div>
  );
}

export default Accomodation;