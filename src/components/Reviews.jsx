import React from 'react';
import ReviewCarousel from './ReviewCarousel';



const Reviews = () => {
  return (
    <div className='w-full py-16 bg-stone-50'>
      <div className='flex flex-col justify-center items-center'>
        <div className='slanted-container'>
          <p className='slanted-text font-medium text-base md:text-lg text-white bg-blue-500 py-1'>REVIEWS BY PEOPLE</p>
        </div>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>What People Say About Us</h1>
      </div>
      <div className='max-w-[1200px] mx-auto my-6'>
        <ReviewCarousel />
      </div>
    </div>
  );
}

export default Reviews;