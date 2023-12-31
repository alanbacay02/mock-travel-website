import React from 'react';
import ReviewCarousel from './ReviewCarousel';



const Reviews = () => {
  return (
    <div className='w-full py-16 bg-stone-50 px-4'>
      <div className='w-full max-w-[1200px] mx-auto'>
        <div className='flex flex-col justify-center items-center'>
          <div className='slanted-container'>
            <p className='slanted-text font-medium text-xs sm:text-sm text-white bg-blue-500 py-1'>REVIEWS BY PEOPLE</p>
          </div>
          <h1 className='text-center font-bold text-xl sm:text-2xl mt-3'>What People Say About Us</h1>
        </div>
        <div className='mx-auto my-6'>
          <ReviewCarousel />
        </div>
      </div>
    </div>
  );
}

export default Reviews;