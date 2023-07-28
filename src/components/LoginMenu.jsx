import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const LoginMenu = (props) => {
  const loginRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Function to handle click events.
    let handleClick = (e) => {
      if (!loginRef.current.contains(e.target)) {
        props.setLoginMenu(false); // Sets state `navMenu` to false when click event is outside `menuRef`.
      }
    }
    // Adds event listener for `mousedown` events.
    document.addEventListener('mousedown', handleClick);

    // Clean up event listener when component unmounts.
    return () => {
      document.removeEventListener('mousedown', handleClick);
    }
  }, [props]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Perform login logic here using the email and password state values
    console.log('Logging in...');
  };

  return (
  <div 
    id='login-menu'
    ref={loginRef} 
    className={ props.loginMenu
    ? 'absolute h-fit left-0 right-0 m-auto top-[20vh] w-[300px] rounded-lg bg-white text-black shadow-2xl z-30'
    : 'right-[-100%] fixed top-0 bg-white text-black'}
  >
    <div className='flex flex-col justify-center py-4 px-5'>
      <div className='relative flex flex-row justify-center my-3'>
        <h2 className='font-bold text-lg'>Sign In</h2>
        <AiOutlineClose className='absolute right-0 top-[2px] hover:cursor-pointer'  onClick={()=>{props.handleLoginMenu()}} size={20}/>
      </div>
      <form className='flex flex-col'>
        <label htmlFor='email' className='sr-only'>Email or Phone</label>
        <input
          className='border-b border-gray-400 px-1 py-2 my-2 outline-none'
          type='email'
          id='email'
          value={email}
          onChange={handleEmailChange}
          placeholder='Email or Phone'
          required
        />
        <label htmlFor='password' className='sr-only'>Password</label>
        <input
          className='border-b border-gray-400 px-1 py-2 my-2 outline-none'
          type='password'
          id='password'
          value={password}
          onChange={handlePasswordChange}
          placeholder='Password'
          required
        />
        {/* Replace with anchor tag. Uses <p/> element to avoid Eslint error. */}
        <p className='mb-4 underline text-blue-600 hover:cursor-pointer active:text-blue-400 text-sm font-semibold ml-auto'>Forgot Password?</p>
        <button
          className='bg-blue-600 mx-auto my-2 px-8 py-2 rounded-lg text-white active:bg-blue-800'
          type='submit'
          onClick={handleLogin}
        >
          Login
        </button>
        <label className='text-center my-2 font-medium' htmlFor='button'>Or Sign in with:</label>
        <div className='flex flex-row justify-center items-center gap-6 mt-2 mb-10'>
          <div className='px-5 py-2 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 active:bg-gray-100'>
            <FaFacebookF size={25} />
          </div>
          <div className='px-5 py-2 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 active:bg-gray-100'>
            <AiOutlineTwitter size={25}/>
          </div>
          <div className='px-5 py-2 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 active:bg-gray-100'>
            <FaGooglePlusG size={25}/>
          </div>
        </div>
        <div className='border-t border-gray-400'>
          <p className='mt-3 text-right font-normal'>Not a member? <span className='underline text-blue-600 hover:cursor-pointer'>Sign Up</span></p>
        </div>
      </form>
    </div>
  </div>
  );
}

export default LoginMenu;