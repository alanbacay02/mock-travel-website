import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Card = ({image, imageAlt, rating, title, location, price}) => {
  return (
    <figure className='relative flex flex-col h-fit w-fit mx-auto my-3 md:my-5 sm:hover:scale-110 hover:cursor-pointer transition-all duration-200 bg-white shadow-lg rounded-xl'> 
      {/* Insert src image here from JSON */}
      <img className='w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-cover object-center pointer-events-none rounded-t-xl' src={image} alt={imageAlt} />
      <div className='absolute flex flex-row justify-center items-center top-0 right-0 px-3 mr-1 mt-2 rounded-full bg-gray-900/30 text-white hover:cursor-pointer select-none'>
        <AiFillStar className='text-yellow-400' scale={10} />
        <p className='text-sm sm:text-base pl-1'>{rating}</p>
      </div>
      <figcaption className='flex flex-row justify-between w-full p-2 rounded-b-lg text-black'>
        <div>
          {/* Insert title here from JSON */}
          <h2 className='font-medium sm:text-xl text-left'>{title}</h2>
          <div className='flex flex-row items-center py-1'>
            <HiOutlineLocationMarker scale={20} />
            {/* Insert location here from JSON */}
            <p className='text-xs sm:text-sm font-medium pl-[2px]'>{location}</p>
          </div>
        </div>
        {/* Insert price here from JSON */}
        <div className='flex flex-col'>
          <p className='text-xs sm:text-sm text-right'>starts at</p>
          <p className='text-lg sm:text-2xl text-right'>{price}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;