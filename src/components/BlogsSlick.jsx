import React, { useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const BLOGS = [
  {
    blogTitle: 'Exploring the Charms of France: A Comprehensive Guide',
    blogCategory: 'Europe, All Things Europe',
    blogImgSrc: 'https://images.unsplash.com/photo-1623009070533-593d7b6fc383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1960&q=80'
  },
  {
    blogTitle: 'Embracing Spring in Japan: Your Ultimate Travel Companion',
    blogCategory: 'Japan, Suggested Itineraries',
    blogImgSrc: 'https://images.unsplash.com/photo-1684641558015-ae70a4dde582?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  },
  {
    blogTitle: 'The Unmissable Activities for Your Bali Getaway',
    blogCategory: 'Southeast Asia, All Things Asia',
    blogImgSrc: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1938&q=80'
  },
  {
    blogTitle: 'A Taste of Thailand: Exploring Thai Cuisine and Culture',
    blogCategory: 'Southeast Asia, Food and Culture',
    blogImgSrc: 'https://images.unsplash.com/photo-1552538962-40822613a09d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80',
  },
  {
    blogTitle: 'Wildlife Safari in South Africa: A Journey to Remember',
    blogCategory: 'Africa, Wildlife Adventures',
    blogImgSrc: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
  },
  {
    blogTitle: 'Cruising the Caribbean: Island-Hopping in Paradise',
    blogCategory: 'Caribbean, Beach Vacations',
    blogImgSrc: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
  },
  {
    blogTitle: 'Exploring the Wonders of the Great Barrier Reef',
    blogCategory: 'Australia, Underwater Adventures',
    blogImgSrc: 'https://images.unsplash.com/photo-1442386967425-6205da77c3ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
  }
]

const BlogsSlick = () => {
  const slider = useRef();

  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: '.prev',
    nextArrow: '.next',
    responsive: [
      {
        breakpoint: 1280, // Change settings for viewport width 1280px and below
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 980, // Change settings for viewport width 980px and below
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 480, // Change settings for viewport width 7480px and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ]
  }

  return (
    <div className='relative w-full'>
      <Slider ref={slider} {...settings}>
        {BLOGS.map((item, index) => {
          return (
            <div className='px-2 my-5'>
              <div className='group mx-auto w-full relative overflow-clip rounded-xl shadow-lg hover:cursor-pointer'>
                <img className='w-full h-[400px] scale-110 object-cover group-hover:scale-100 transition-all duration-500' src={item.blogImgSrc} alt={`blogItem${index}`} />
                <div className='w-full h-[120px] md:h-[130px] absolute bottom-0 left-0 flex flex-col pl-3 pb-2 bg-white z-50'>
                  <h3 className='pt-3 font-medium text-base md:text-lg max-w-[85%]'>{item.blogTitle}</h3>
                  <p className='font-medium text-sm md:text-base text-gray-600'>{item.blogCategory}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      {/* <div className='absolute left-0 right-0 w-full mx-auto bg-gray-100 h-[calc(100%-90px)] bottom-0 -z-10' /> */}
      {/* Start of Controls and Link Container */}
      <div className='w-full flex flex-row justify-between'>
        {/* Start of Link Container */}
        <div className='w-full flex flex-row justify-start pl-1 md:pl-5'>
          <a className='font-medium text-blue-600 text-sm md:text-lg hover:underline hover:cursor-pointer underline-offset-2' href='/#'>Read More Blogs &gt;</a>
        </div>
        {/* End of Link Container */}
        <div className='flex gap-1 md:gap-2 text-sm md:text-xl'>
          <button
            className='p-1 sm:p-2 h-fit w-fit text-gray-400 border-2 border-gray-400 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300'
            onClick={() => slider?.current?.slickPrev()}
          >
            <FiArrowLeft />
          </button>
          <button
            className='p-1 sm:p-2 h-fit w-fit text-gray-400 border-2 border-gray-400 rounded-full hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors duration-300'
            onClick={() => slider?.current?.slickNext()}
          >
            <FiArrowRight />
          </button>
        </div>
        {/* Start of Controls Container */}


      </div>
      {/* End of Controls and Link Container */}
    </div>
  )
}

export default BlogsSlick