import React, { useState } from 'react'
import { BiBed, BiGlobe } from 'react-icons/bi'
import { BsGlobeAmericas } from 'react-icons/bs'
import { LuPlane } from 'react-icons/lu'
import { MdOutlineDirectionsCarFilled } from 'react-icons/md'
import PopoutOptions from './PopoutOptions'
import { FiMoreHorizontal } from 'react-icons/fi'

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
  {
    buttonName: 'More',
    icon: <FiMoreHorizontal />
  },
]

// Define an array of click handlers for different buttons within the ExploreOptions component.
// These handlers control the behavior of the showMenu state.
const onClickFunctions = (showMenu, setShowMenu) => [
  () => {  // logic for the "Explore" button - toggles the showMenu state.
    setShowMenu(!showMenu)
  },
  () => {  // logic for the "Hotels" button - also toggles the showMenu state.
    setShowMenu(!showMenu)
  },
  () => {  // logic for the "Car Rent" button -  leads to a different page.
  },
  () => {  // logic for the "Flights" button -  leads to a different page.
  },
  () => {  // logic for the "Blogs" button -  leads to a different page.
  },
]

const ExploreOptions = () => {
  // Creates state `showMenu` to track the state of `PopoutDestinations`.
  const [showMenu, setShowMenu] = useState(false)

  // Obtain the click handlers for buttons.
  const clickHandlers = onClickFunctions(showMenu, setShowMenu)

  return (
    <div className='w-full pt-7 pb-5'>
      <div className='w-full mx-auto max-w-[1200px] px-6'>
        <div className='scrolling-wrapper md:hidden pl-2'>
          {BUTTON_INFO.map((items, index) => {
              return (
                <button
                  key={index}
                  onClick={clickHandlers[index]}
                  className='group relative rounded-2xl py-2 px-4 mr-2 border border-gray-400 hover:border-blue-600 transition-colors duration-500 font-medium overflow-clip'
                >
                  <div className='flex flex-row items-center justify-between gap-7 group-hover:text-white transition-colors duration-500'>
                    <p className='text-sm xs:text-md'>{items.buttonName}</p>
                    <div className='text-lg xs:text-xl'>
                      {items.icon}
                    </div>
                  </div>
                  <div className='absolute left-0 top-0 bottom-0 h-full -z-50 bg-blue-600 w-0 group-hover:w-full transition-all duration-500' />
                </button>
              )
            })}
        </div>
        <div className='hidden md:grid grid-cols-6 gap-7'>
          {BUTTON_INFO.map((items, index) => {
            return (
              <button
                key={index}
                onClick={clickHandlers[index]}
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
      <PopoutOptions showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  )
}

export default ExploreOptions