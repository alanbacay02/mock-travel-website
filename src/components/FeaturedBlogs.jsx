import React from 'react'
import BlogsSlick from './BlogsSlick'


const FeaturedBlogs = () => {
  return (
    <div className='w-full py-16'>
      <div className='w-full max-w-[1300px] mx-auto'>
        <div className='flex flex-col justify-center items-center text-center p-2 px-6'>
          <div className='slanted-container'>
            <p className='slanted-text font-medium text-base md:text-lg text-white bg-blue-500 py-1'>FEATURED BLOGS</p>
          </div>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-3'>Read Our Latest Blog Posts</h1>
        </div>
        <div className='flex flex-col w-[85%] justify-center items-center mt-10 mx-auto'>
          <div className='relative hover:cursor-pointer h-fit w-full overflow-clip mb-4 rounded-xl group'>
            <div className='absolute top-0 mt-2 ml-3 md:mt-5 md:ml-6 left-0 z-50'>
              <p className='font-bold text-sm md:text-lg text-white py-1 px-3 rounded-3xl bg-black/20'>Popular Right Now</p>
            </div>

            <div className='absolute bottom-0 left-0 md:max-w-[450px] pl-3 md:pl-9 py-7 text-white z-50'>
              <h2 className='font-bold md:text-2xl py-1'>Unveiling the Mysteries of Machu Picchu: A Journey Through Time</h2>
              <p className='text-sm md:text-lg md:pl-1 max-w-[200px] sm:max-w-none'>South America, Historical Wonders</p>
            </div>
            {/* Img Overlay Filter */}
            <div className='absolute w-full h-full inset-0 bg-black/20 rounded-xl z-20' />
            <img
              className='w-full object-cover object-center h-[400px] md:h-[400px] rounded-xl scale-110 group-hover:scale-100 transition-all duration-500 -z-20'
              src='https://images.unsplash.com/photo-1590835192370-3941b97e93fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80'
              alt='hero-blog-img'
            />
          </div>
          <BlogsSlick />
          <div className='w-full flex flex-row justify-start pl-1 md:pl-5'>
            <a className='font-medium text-blue-600 md:text-lg hover:underline hover:cursor-pointer underline-offset-2' href='/#'>Read More Blogs &gt;</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlogs