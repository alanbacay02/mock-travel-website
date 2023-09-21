import React from 'react'
import { 
  AirlineTicketIcon, 
  Blob1, 
  Blob2, 
  Blob3, 
  CreditCardIcon, 
  MapIcon 
} from '../svg-components/TripBookingSvg'

const STEP_DATA = [
  {
    title: 'Explore Destinations',
    description: 'Pick your dream getaway from our top-notch selection.',
    vectorIcon: <MapIcon />,
    blobIcon: <Blob1 />
  },
  {
    title: 'Hassle Free Booking',
    description: 'Reserve flights, lodging, and transportation with ease via our safe payment platform.',
    vectorIcon: <CreditCardIcon />,
    blobIcon: <Blob2 />
  },
  {
    title: 'Smooth Airport Experience',
    description: 'Grab your e-ticket from Highlander, reach the airport, and have a fantastic journey!',
    vectorIcon: <AirlineTicketIcon />,
    blobIcon: <Blob3 />
  }
]


const TripBookingSteps = () => {
  return (
    <div className='w-full pt-11 pb-5 md:py-11 px-6'>
      <div className='w-full max-w-[1300px] mx-auto'>
        <div className='flex flex-col justify-center items-center text-center p-2'>
          <div className='slanted-container'>
            <p className='slanted-text font-medium text-base md:text-lg text-white bg-blue-500 py-1'>PLAN YOUR TRIP NOW</p>
          </div>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>Take Your Trip With 3 Easy Steps</h1>
        </div>
        <div className='grid md:grid-cols-3 my-6 md:my-12 gap-12'>
          {STEP_DATA.map((item, index) => {
            return (
              <div key={index} className='flex flex-col items-center justify-center'>
                <div className='relative h-auto w-24 md:w-36 md:my-4 fill-[#FFED46] drop-shadow-[12px_6px_0_rgba(0,0,0,0.10)]'>
                  {item.blobIcon}
                  <div className='absolute inset-0 my-auto mx-auto h-auto w-14 md:w-20 fill-black'>
                    {item.vectorIcon}
                  </div>
                </div>
                <div className='text-center'>
                  <h2 className='font-bold text-lg md:text-2xl mt-4 mb-2'>{item.title}</h2>
                  <p className='font-medium md:text-xl text-gray-500'>{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TripBookingSteps