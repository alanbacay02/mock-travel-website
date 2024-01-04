import React, { useRef, useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
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
  {
    title: 'Bora Bora',
    location: 'French Polynesia',
    href: '/#'
  },
  {
    title: 'Maui',
    location: 'Hawaii, USA',
    href: '/#'
  },
  {
    title: 'Colosseo',
    location: 'Rome, Italy',
    href: '/#'
  },
]

const sponsoredLocations = (SEARCH_LOCATIONS.filter(item => item.hasOwnProperty('sponsored')))
const searchLocations = (SEARCH_LOCATIONS.filter(item => !item.hasOwnProperty('sponsored')))

const PopoutOptions = (props) => {
  const menuRef = useRef();
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    // Function to handle click events.
    let handleClick = (e) => {
      // Gets the width of the viewport and assigns it to the `windowSize` variable.
      let windowSize = window.innerWidth;
      // Checks if the click event target is outside the `menuRef` element and if the `windowSize` is greater than or equal to 768px.
      if (!menuRef.current.contains(e.target) && windowSize >= 768) {
        props.setShowMenu(!props.showMenu); // Sets state `navMenu` to false when click event is outside `menuRef`.
      }
    }
    // Adds event listener for `mousedown` events.
    document.addEventListener('mousedown', handleClick);

    // Clean up event listener and remove 'no-scroll' class when component unmounts.
    const popoutMenu = menuRef.current;
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.body.classList.remove('no-scroll');
      popoutMenu.style.overflow = 'hidden';
    }
  }, [props]);

  useEffect(() => {
    const popoutMenu = menuRef.current;
    // Add or remove 'no-scroll' class based on the 'navMenu' state.
    if (props.showMenu) {
      document.body.classList.add('no-scroll');
      popoutMenu.style.overflow = 'auto';
    } else {
      document.body.classList.remove('no-scroll');
      popoutMenu.style.overflow = 'hidden';
    }
  }, [props]);

  const handleSearchInput = (e) => {
    return (
      setSearchInput(e.target.value)
    )
  }

  const handleSearch = () => {
    return (
      // Perform search logic here using `searchInput` value.
      console.log('searching for destination...')
    )
  }

  return (
    <div className='fixed top-0 left-0 h-full w-full flex items-center justify-center px-4 z-30'>
      {/* Popout Menu that will show on smaller devices */}
      <div className='md:hidden z-50'>
        <div className='px-4 py-2 w-[100vw] h-[100vh] overflow-auto bg-white mx-auto'>
          <form onSubmit={handleSearch}>
            <div className='w-full flex flex-row items-center gap-2 border-b border-black border-spacing-2 px-1 my-3'>
              <label htmlFor='back-button' className='sr-only'>Back Button</label>
              <button
                id='back-button'
                type='button'
                onClick={() => {props.setShowMenu(!props.showMenu)}}
                className='text-lg'
              >
                <AiOutlineArrowLeft />
              </button>
              <label htmlFor='text' className='sr-only'>Search Destination</label>
              <input
                className='w-full bg-transparent py-2 outline-none'
                type='search'
                value={searchInput}
                onChange={handleSearchInput}
                placeholder='Search Destination'
              />
              <label htmlFor='submit' className='sr-only'>Search Button</label>
              <button type='submit' className='text-lg'>
                <AiOutlineSearch />
              </button>
            </div>
            <ul className='font-medium'>
              <li>
                <a className='w-full flex flex-row gap-2 justify-start items-center py-2 border-b border-gray-300' href='/#'>
                  <i className='rounded-full border border-gray-400 p-1 text-lg'>
                    <CiLocationArrow1 />
                  </i>
                  <p>Nearby</p>
                </a>
              </li>
              {sponsoredLocations.map((item, index) => {
                return (
                  <li>
                    <a
                      href={item.href}
                      className={`w-full flex flex-row gap-2 justify-start items-center py-2 ${sponsoredLocations.length - 1 === index ? '' : 'border-b border-gray-300'}`}
                    >
                      <i className='rounded-full border border-gray-400 p-1.5 text-lg'>
                        <AiOutlineHeart />
                      </i>
                      <div className='flex flex-col justify-start'>
                        <p className='text-xs font-medium'>SPONSORED</p>
                        <p>{item.title}</p>
                        <p className='text-sm font-normal'>{item.sponsor}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
              <p className='mt-3 mb-1 font-medium text-sm'>RECOMMENDED</p>
              {searchLocations.map((item, index) => {
                return (
                  <li>
                    <a
                      href={item.href}
                      className={`w-full flex flex-row gap-2 justify-start items-center py-2 ${searchLocations.length - 1 === index ? '' : 'border-b border-gray-300'}`}
                    >
                      <i className='rounded-full border border-gray-400 p-1.5 text-lg'>
                        <CiLocationOn />
                      </i>
                      <div className='flex flex-col justify-start'>
                        <p>{item.title}</p>
                        <p className='text-sm font-normal'>{item.location}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </form>
        </div>
      </div>

      {/* Popout Menu that will show on larger devices */}
      <div ref={menuRef} className='hidden md:block w-1/2 z-50 overflow-hidden'>
        <div className='p-5 w-[90%] max-w-[800px] bg-white mx-auto rounded-xl'>
          <form onSubmit={handleSearch}>
            {/* Start of Destinations Search Bar */}
            <div className='w-full flex flex-row items-center gap-2 border-b-2 border-black border-spacing-2 px-1 mb-3 text-sm'>
                <label htmlFor='button' className='sr-only'>Search Button</label>
                <button type='submit'>
                  <AiOutlineSearch />
                </button>
                <input
                  className='w-full bg-transparent py-2 outline-none'
                  type='search'
                  value={searchInput}
                  onChange={handleSearchInput}
                  placeholder='Search Destination'
                />
            </div>
            {/* End of Destinations Search Bar */}
            <ul className='font-medium text-sm'>
              <li>
                <a className='w-full flex flex-row gap-2 justify-start items-center py-2 border-b border-gray-300' href='/#'>
                  <i className='rounded-full border border-gray-400 p-1.5'>
                    <CiLocationArrow1 />
                  </i>
                  <p>Nearby</p>
                </a>
              </li>
              {sponsoredLocations.map((item, index) => {
                return (
                  <li>
                    <a
                      href={item.href}
                      className={`w-full flex flex-row gap-2 justify-start items-center py-2 ${sponsoredLocations.length - 1 === index ? '' : 'border-b border-gray-300'}`}
                    >
                      <i className='rounded-full border border-gray-400 p-1.5'>
                        <AiOutlineHeart />
                      </i>
                      <div className='flex flex-col justify-start'>
                        <p className='text-xs font-medium'>SPONSORED</p>
                        <p>{item.title}</p>
                        <p className='text-xs font-normal'>{item.sponsor}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
              <p className='mt-3 mb-1 font-medium text-xs'>RECOMMENDED</p>
              {searchLocations.map((item, index) => {
                return (
                  <li>
                    <a
                      href={item.href}
                      className={`w-full flex flex-row gap-2 justify-start items-center py-2 ${searchLocations.length - 1 === index ? '' : 'border-b border-gray-300'}`}
                    >
                      <i className='rounded-full border border-gray-400 p-1.5'>
                        <CiLocationOn />
                      </i>
                      <div className='flex flex-col justify-start'>
                        <p>{item.title}</p>
                        <p className='text-xs font-normal'>{item.location}</p>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </form>
        </div>
      </div>

      {/* Div that darkens background */}
      <div id='overlay' className='fixed top-0 left-0 w-full h-screen bg-black/50 -z-10' />
    </div>
  )
}

export default PopoutOptions