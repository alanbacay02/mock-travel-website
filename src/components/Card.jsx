import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const Card = ({image, imageAlt, rating, title, location, price}) => {
  return (
    <figure className='group relative flex flex-col h-fit w-fit mx-auto my-3 md:my-5 hover:cursor-pointer bg-white shadow-lg rounded-xl overflow-clip'> 
      {/* Insert src image here from JSON */}
      <img className='w-[250px] h-[250px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] scale-110 md:group-hover:scale-100 transition-all duration-500 object-cover object-center pointer-events-none rounded-t-xl -z-0' src={image} alt={imageAlt} loading='lazy' />
      <div className='absolute flex flex-row justify-center items-center top-0 right-0 px-3 mr-1 mt-2 rounded-full bg-gray-900/60 text-white hover:cursor-pointer select-none text-sm'>
        <AiFillStar className='text-yellow-400' />
        <p className='pl-1'>{rating}</p>
      </div>
      <figcaption className='flex flex-row justify-between w-full p-2 rounded-b-lg text-black z-50 bg-white'>
        <div>
          {/* Insert title here from JSON */}
          <h2 className='font-medium sm:text-sm text-left'>{title}</h2>
          <div className='flex flex-row items-center py-1 text-xs'>
            <HiOutlineLocationMarker />
            {/* Insert location here from JSON */}
            <p className='font-medium pl-[2px]'>{location}</p>
          </div>
        </div>
        {/* Insert price here from JSON */}
        <div className='flex flex-col'>
          <p className='text-xs text-right'>starts at</p>
          <p className='text-lg text-right'>{price}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default Card;