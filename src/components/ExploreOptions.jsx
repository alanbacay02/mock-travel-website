import React from 'react'
import { BiBed, BiGlobe } from 'react-icons/bi'
import { BsGlobeAmericas } from 'react-icons/bs'
import { LuPlane } from 'react-icons/lu'
import { MdOutlineDirectionsCarFilled } from 'react-icons/md'

const BUTTON_INFO = [
  {
    buttonName: 'Explore',
    icon: <BsGlobeAmericas />
  },
  {
    buttonName: 'Hotels',
    icon: <BiBed />
  },
  {
    buttonName: 'Car Rent',
    icon: <MdOutlineDirectionsCarFilled />
  },
  {
    buttonName: 'Flights',
    icon: <LuPlane />
  },
  {
    buttonName: 'Blogs',
    icon: <BiGlobe />
  },
]

const onClickFunctions = [
  () => {  // logic for the "Explore" button
    return (
      console.log('Explore button has been pressed')
    )
  },
  () => {  // logic for the "Hotels" button
    return (
      console.log('Hotels button has been pressed')
    )
  },
  () => {  // logic for the "Car Rent" button
    // Car Rent button leads to a different page
  },
  () => {  // logic for the "Flights" button
    // Flights button leads to a different page
  },
  () => {  // logic for the "Blogs" button
    // Blogs button leads to a different page
  },
]

const ExploreOptions = () => {
  return (
    <div className='w-full py-7'>
      <div className='w-full mx-auto max-w-[1300px]'>
        <div className='scrolling-wrapper md:hidden pl-2'>
          {BUTTON_INFO.map((items, index) => {
              return (
                <button
                  key={index}
                  onClick={onClickFunctions[index]}
                  className='group relative rounded-2xl py-3 px-4 mr-2 border border-gray-400 hover:border-blue-600 transition-colors duration-500 font-medium overflow-clip'
                >
                  <div className='flex flex-row items-center justify-between gap-2 group-hover:text-white transition-colors duration-500'>
                    <p>{items.buttonName}</p>
                    <div className='text-xl'>
                      {items.icon}
                    </div>
                  </div>
                  <div className='absolute left-0 top-0 bottom-0 h-full -z-50 bg-blue-600 w-0 group-hover:w-full transition-all duration-500' />
                </button>
              )
            })}
        </div>
        <div className='hidden md:grid grid-cols-5 gap-7 px-6'>
          {BUTTON_INFO.map((items, index) => {
            return (
              <button
                key={index}
                onClick={onClickFunctions[index]}
                className='group relative rounded-2xl py-3 px-4 border border-gray-400 hover:border-blue-600 transition-colors duration-500 font-medium overflow-clip'
              >
                <div className='flex flex-row items-center justify-between group-hover:text-white transition-colors duration-500'>
                  <p>{items.buttonName}</p>
                  <div className='text-xl'>
                    {items.icon}
                  </div>
                </div>
                <div className='absolute left-0 top-0 bottom-0 h-full -z-50 bg-blue-600 w-0 group-hover:w-full transition-all duration-500' />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ExploreOptions