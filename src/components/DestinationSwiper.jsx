import React, { useEffect, useRef } from 'react';
import Card from './Card.jsx';
import { register } from 'swiper/element/bundle';


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

const DestinationSwiper = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();
    const swiperContainer = swiperElRef.current;
    // Object with parameters
    const params = {
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        520: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3
        },
        968: {
          slidesPerView: 4
        }
      },
      navigation: true,
      
      // CSS Styling for Swiper
      injectStyles: [
        `
          .swiper-wrapper {
            position: static;
          }
          .swiper-button-next,
          .swiper-button-prev {
            justify-content: space-around;
            position: static;
            display: inline-flex;
            width: 23px;
            height: 23px;
            padding: 13px;
            margin:0;
            align-items: center;
            justify-content: center;
            border: none;
            margin-top: 20px;
          }
          .swiper-button-prev {
            background-color: #fff;
            opacity: 1;
            margin-right: -4px;
            z-index: 1000;
          }
          .swiper-button-next {
            background-color: #0f66fd;
            color: white;
          }
        `,
      ]
    };
    // Assign it to swiper element
    Object.assign(swiperContainer, params);
    // initialize swiper
    swiperContainer.initialize();
  },[]);

  return (
    <swiper-container ref={swiperElRef} init='false'>
      {CARD_CONTENT.map((item, index) => {
        return (
          <swiper-slide>
            <Card
              key={'carousel-item' + index}
              title={item.title}
              location={item.location}
              image={item.image}
              imageAlt={item.imageAlt}
              price={item.price}
              rating={item.rating}
            />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
}

export default DestinationSwiper;