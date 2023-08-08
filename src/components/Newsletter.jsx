import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-12 bg-blue-800'>
      <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto px-6 items-center'>
        <div className='text-white'>
          <h1 className='font-bold text-2xl sm:text-2xl md:text-3xl'>Don't Miss Out on Your Dream Getaway!</h1>
          <p className='text-sm sm:text-base md:text-lg'>Your dream vacation is a click away - receive the latest offers and destinations in your inbox.</p>
        </div>
        <div className='my-4'>
          <form className='w-full' onSubmit={() => {}}>
            <div className='flex flex-col gap-x-2 gap-y-3 sm:flex-row items-center w-full'>
              <label htmlFor='email' className='sr-only'>Email</label>
              <input
                className='rounded-lg px-4 py-2 w-full outline-none'
                placeholder='Enter Email'
              />
              <button className='bg-zinc-950 text-white w-44 px-4 py-2 rounded-lg'>Notify Me</button>
            </div>
          </form>
          <p className='text-white text-center md:text-left my-1'>We care about the protection of your data. Read our <a href='/#' className='text-yellow-400 underline'>privacy policy</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;