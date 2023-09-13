import React from 'react'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { CiLocationArrow1, CiLocationOn } from 'react-icons/ci'

const SEARCH_LOCATIONS = [
  {
    sponsored: true,
    title: 'The Ultimate Guide To Unlocking Asia ',
    sponsor: 'Wayfarer',
    href: '/#'
  },
  {
    title: 'Shibuya',
    location: 'Tokyo, Japan',
    href: '/#'
  },
  {
    title: 'San Juan Beach',
    location: 'La Union, Philippines',
    href: '/#'
  },
]

const PopoutDestinations = () => {
  return (
    <div className='fixed top-1/3 left-0 right-0 z-50 overflow-hidden'>
      <div className='px-4 py-2 w-[90%] max-w-[800px] bg-white mx-auto rounded-xl'>
        <form onSubmit={() => {}}>
          <div className='w-full flex flex-row items-center gap-2 border-b-2 border-black border-spacing-2 px-1 my-3'>
            <label htmlFor='text' className='sr-only'>Search Destination</label>
              <div className='text-xl'>
                <AiOutlineSearch />
              </div>
              <input
                className='w-full bg-transparent py-2 outline-none'
                type='search'
                value=''
                onChange={() => {}}
                placeholder='Search Destination'
              />
          </div>
          <ul className='font-medium'>
            <li>
              <a className='w-full flex flex-row gap-2 justify-start items-center py-2 border-b border-gray-300' href='/#'>
                <i className='rounded-full border border-gray-400 p-1.5 text-lg'>
                  <CiLocationArrow1 />
                </i>
                <p>Nearby</p>
              </a>
            </li>
            {SEARCH_LOCATIONS.map((item, index) => {
              return (
                <li>
                  <a
                    href={item.href}
                    className={`w-full flex flex-row gap-2 justify-start items-center py-2 ${SEARCH_LOCATIONS.length - 1 === index ? '' : 'border-b border-gray-300'}`}
                  >
                    <i className='rounded-full border border-gray-400 p-1.5 text-lg'>
                      {item.sponsored ? <AiOutlineHeart /> : <CiLocationOn />}
                    </i>
                    <div className='flex flex-col justify-start'>
                      {item.sponsored ? <p className='text-xs font-medium'>SPONSORED</p> : ''}
                      <p>{item.title}</p>
                      {item.sponsor ? <p className='text-sm font-normal'>{item.sponsor}</p> : ''}
                      {item.location ? <p className='text-sm font-normal'>{item.location}</p> : ''}
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </form>
      </div>
      <div id='overlay' className='fixed top-0 left-0 w-full h-screen bg-black/50 -z-10' />
    </div>
  )
}

export default PopoutDestinations