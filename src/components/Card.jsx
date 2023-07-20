import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Card = ({image, imageAlt, rating, title, location, price}) => {
  return (
    <figure className='relative flex flex-col h-fit w-fit mx-2 sm:hover:scale-125 transition-all duration-200 rounded-lg '> 
      {/* Insert src image here from JSON */}
      <img className='w-[240px] h-[250px] object-cover object-center rounded-xl pointer-events-none' src={image} alt={imageAlt} />
      <div className='absolute flex flex-row justify-center items-center top-0 right-0 px-3 mr-1 mt-2 rounded-full bg-gray-900/30 text-white hover:cursor-pointer select-none'>
        <AiFillStar className='text-amber-300' scale={10} />
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
        <p className='text-lg sm:text-2xl'>{price}</p>
      </figcaption>
    </figure>
  );
}

export default Card;