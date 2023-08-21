import React, { useRef } from 'react';
import Card from './Card.jsx';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const CARD_CONTENT = [
  {
    title: 'Grand Canyon',
    location: 'Arizona, United States',
    price: '$341',
    rating : '4.6',
    image: 'https://images.unsplash.com/photo-1535515505622-7621ebc4fc58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    imageAlt: 'grand_canyon.jpeg'
  },
  {
    title: 'Oia Village',
    location: 'Santorini, Greece',
    price: '$500',
    rating : '4.8',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    imageAlt: 'oia_village.jpg'
  },
  {
    title: 'Grand Canal',
    location: 'Venice, Italy',
    price: '$500',
    rating : '4.4',
    image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2566&q=80'
  },
  {
    title: 'Hōkan-ji Temple',
    location: 'Kyoto, Japan',
    price: '$500',
    rating : '4.9',
    image: 'https://images.unsplash.com/photo-1624253321171-1be53e12f5f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    imageAlt: 'hokanji_temple.jpg'
  },
  {
    title: 'Padar Island',
    location: 'Tenggara, Indonesia',
    price: '$473',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1571366343168-631c5bcca7a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    imageAlt: 'padar_island.jpg'
  },
  {
    title: 'San Martino',
    location: 'Trentino, Italy',
    price: '$500',
    rating : '4.7',
    image: 'https://images.unsplash.com/photo-1614094082869-cd4e4b2905c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
    imageAlt: 'san_martino.jpg'
  },
  {
    title: 'Shibuya Crossing',
    location: 'Tokyo, Japan',
    price: '$500',
    rating : '4.9',
    image: 'https://images.unsplash.com/photo-1532236204992-f5e85c024202?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2095&q=80',
    imageAlt: 'shibuya.jpg'
  },
  {
    title: 'Veligandu Island',
    location: 'Veligandu, Maldives',
    price: '$500',
    rating : '4.9',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80',
    imageAlt: 'veligandu.jpg'
  },
  {
    title: 'Lake Prags',
    location: 'Pragser Wildsee, Italy',
    price: '$500',
    rating : '4.7',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageAlt: 'lake_prags.jpg'
  },
  {
    title: 'El Nido',
    location: 'El Nido, Philippines',
    price: '$500',
    rating : '4.8',
    image: 'https://images.unsplash.com/photo-1517971053567-8bde93bc6a58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80',
    imageAlt: 'el_nido.jpg'
  },
  {
    title: 'Mt. Fuji',
    location: 'Shizuoka, Japan',
    price: '$586',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1570459027562-4a916cc6113f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80',
    imageAlt: 'chureito_pagoda.jpg'
  },
  {
    title: 'Siargao',
    location: 'Siargao, Philippines',
    price: '$500',
    rating : '4.7',
    image: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80',
    imageAlt: 'siargao.jpg'
  }
];

const DestinationsSlick = () => {
  const slider = useRef();

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
      {
        breakpoint: 1280, // Change settings for viewport width 1280px and below
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 980, // Change settings for viewport width 980px and below
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Change settings for viewport width 7480px and below
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className='relative'>
      <Slider ref={slider} {...settings}>
        {CARD_CONTENT.map((item, index) => {
          return (
              <Card
                key={'carousel-item' + index}
                title={item.title}
                location={item.location}
                image={item.image}
                imageAlt={item.imageAlt}
                price={item.price}
                rating={item.rating}
              />
          );
        })}
      </Slider>
      <div className='absolute left-0 right-0 w-full mx-auto bg-gray-100 h-[calc(100%-90px)] bottom-0 -z-10' />
      <div className='hidden md:flex text-3xl'>
        <button
          className='p-3 bg-white text-blue-600 hover:text-white hover:bg-black transition-colors duration-300'
          onClick={() => slider?.current?.slickPrev()}
        >
          <FiArrowLeft />
        </button>
        <button
          className='p-3 bg-blue-600 text-white hover:bg-black transition-colors duration-300'
          onClick={() => slider?.current?.slickNext()}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}

export default DestinationsSlick;