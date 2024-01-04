import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior to avoid page reload.
    // Perform newsletter subscription logic here using the email state values.
    console.log('Subscribing to newsletter...');

    // Clear state after submission logic to prepare for another email address submission.
    setEmail('');
  }

  return (
    <div className='w-full py-10 bg-sky-400 text-black'>
      <div className='max-w-[1200px] grid md:grid-cols-2 gap-x-4 mx-auto px-6 items-center'>
        <div>
          <h1 className='font-bold text-lg sm:text-xl text-center md:text-left'>Don't Miss Out On Your Dream Getaway!</h1>
          <p className='text-sm sm:text-base text-center md:text-left'>Your dream vacation is a click away - receive the latest offers and destinations in your inbox.</p>
        </div>
        <div>
          <form className='w-full' onSubmit={handleEmailSubmit}>
            <div className='flex flex-col gap-x-2 gap-y-3 sm:flex-row items-center w-full justify-center text-sm'>
              <label htmlFor='email' className='sr-only'>Email</label>
              <input
                className='rounded-lg px-4 py-2 w-full max-w-[450px] outline-none'
                type='email'
                id='news-email'
                value={email}
                onChange={handleEmailChange}
                placeholder='Enter Email'
              />
              <button className='bg-zinc-950/90 text-white w-44 px-4 py-2 rounded-lg'>Notify Me</button>
            </div>
          </form>
          <p className='text-center text-sm md:text-left my-1'>We care about the protection of your data. Read our <a href='/#' className='underline'>privacy policy</a>.</p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;