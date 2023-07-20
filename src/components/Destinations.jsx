import React, { useState } from 'react';
import Card from './Card.jsx';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 412, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 900, itemsToShow: 4 }
];

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

const Destinations_Rework = () => {
  const [showMoreCards, setShowMoreCards] = useState(false);
  return (
    <div className='w-full max-w-[1240px] mx-auto py-16'>
      <div className='flex flex-col justify-center items-center text-center p-2'>
        <p className='font-bold text-base md:text-lg text-orange-400'>FIND YOUR NEXT GETAWAY</p>
        <h1 className='font-medium text-2xl sm:text-3xl md:text-4xl pt-1'>Popular Destinations Right Now</h1>
        <p className='text-sm sm:text-base md:text-xl pt-5 pb-2'>All the destinations popular among travelers right now.</p>
      </div>
      <div className='hidden sm:grid grid-cols-2 lg:grid-cols-4'>
        {CARD_CONTENT.map((item, index) => {
          return (
            <div key={'card' + index} className={`xs:p-2 sm:p-4 mx-auto hover:z-50 duration-200 ${!showMoreCards && index >= 8 ? 'hidden-card' : 'showed-card'}`}>
              <Card
                title={item.title}
                location={item.location}
                image={item.image}
                imageAlt={item.imageAlt}
                price={item.price}
                rating={item.rating}
              />
            </div>
          );
        })}
      </div>
      <div className='hidden w-full sm:flex py-4'>
        <button className='mx-auto px-4 py-2 rounded-xl bg-orange-400 font-medium text-white text-xl' onClick={() => {setShowMoreCards(!showMoreCards)}}>{!showMoreCards ? 'See more' : 'See Less'}</button>
      </div>

      {/* Carousel on mobile devices for card destinations */}
      <div className='flex flex-row sm:hidden py-6 px-1'>
        <Carousel 
          className='destination-carousel'
          breakPoints={breakPoints}
          pagination={false}>
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
        </Carousel>
      </div>
      {/* End of Carousel on mobile devices for card destinations */}
    </div>
  )
}

export default Destinations_Rework;