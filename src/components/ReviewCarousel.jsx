import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const ReviewCarousel = () => {
  const slider = useRef();

  const REVIEWS = [
    {
      name: 'MountainEnthusiast22',
      placeVisited: 'San Martino, Italy',
      rating: '4',
      review: 'As an avid mountain enthusiast, I chose Highlander for their promise of authentic mountain experiences. I recommend Highlander to anyone seeking an authentic connection with nature.',
      image: 'https://images.unsplash.com/photo-1584221358462-56cd068aa252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'CulturalExplorer',
      placeVisited: 'Bali, Indonesia',
      rating: '5',
      review: 'Highlander truly delivered an immersive cultural experience. The guides were incredibly knowledgeable and acted as bridges between us and the locals. I\'ll cherish the memories I made during my Highlander trip forever.',
      image: 'https://images.unsplash.com/photo-1536456364204-85a9b0676106?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
    },
    {
      name: 'GlobetrotterEmily',
      placeVisited: 'Oia Village, Greece',
      rating: '5',
      review: 'Highlander exceeded my expectations in every way possible. From the moment I booked my trip, their team was attentive and responsive to my questions. I\'m already planning my next adventure with Highlander!',
      image: 'https://images.unsplash.com/photo-1687360440491-702812c5728c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
    }
  ];

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: '.prev',
    nextArrow: '.next'
  }

  return (
    <div>
      <div className='hidden md:flex justify-end gap-2 p-2 text-lg'>
        <button
          className='bg-white rounded-full p-1'
          onClick={() => slider?.current?.slickPrev()}
        >
          <FiArrowLeft className='text-blue-600' />
        </button>
        <button
          className='bg-white rounded-full p-1'
          onClick={() => slider?.current?.slickNext()}
        >
          <FiArrowRight className='text-blue-600' />
        </button>
      </div>
      <Slider ref={slider} {...settings}>
        {REVIEWS.map((item, index) => {
          return (
            <div key={'review' + index}>
              <div id='speech-bubble' className='relative flex flex-row bg-white drop-shadow-xl py-4 px-2 md:p-8 mx-3 mb-5 gap-1 sm:gap-3 border-l-4 border-blue-600'>
                <div>
                  <BiSolidQuoteLeft className='text-blue-600 text-xl sm:text-2xl'/>
                </div>
                <h2 className='font-medium text-sm sm:text-base'>{item.review}</h2>
              </div>
              <div className='flex flex-row gap-2 sm:gap-3 py-4 px-1 sm:p-4 sm:pl-6'>
                <img
                  src={item.image}
                  alt={'review_image' + (index + 1)}
                  className='w-14 h-14 bg-gray-300 object-cover object-center rounded-full'
                  loading='lazy'
                />
                <div className='flex flex-col justify-center'>
                  <h2 className='font-bold text-sm sm:text-base'>{item.name}</h2>
                  <p className='text-xs sm:text-sm'>{item.placeVisited}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  )
}

export default ReviewCarousel;