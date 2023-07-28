import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineTwitter, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG, FaUser, FaLock } from 'react-icons/fa';

const LoginMenu = (props) => {
  const loginRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
    ? 'absolute h-fit left-0 right-0 m-auto top-[20vh] w-[300px] sm:w-[400px] rounded-lg bg-white text-black shadow-2xl z-30'
    : 'right-[-100%] fixed top-0 bg-white text-black'}
  >
    <div className='flex flex-col justify-center py-4 px-5 max-w-[360px] mx-auto'>
      <div className='relative flex flex-row justify-center my-3'>
        <h2 className='font-bold text-lg sm:text-xl'>Sign In</h2>
        <AiOutlineClose className='absolute right-0 top-[2px] hover:cursor-pointer'  onClick={()=>{props.handleLoginMenu()}} size={20}/>
      </div>

      {/* Beginning of Login Form */}
      <form className='flex flex-col' onSubmit={handleLogin}>
        {/* Email or Phone Input field */}
        <div className='flex flex-row items-center p-1 my-3 border-b border-gray-400'>
          <FaUser size={25} className='mr-1 fill-gray-400' />
          <label htmlFor='email' className='sr-only'>Email or Phone</label>
          <input
            className='px-1 w-full outline-none sm:text-lg'
            type='email'
            id='email'
            value={email}
            onChange={handleEmailChange}
            placeholder='Email or Phone'
            required
          />
        </div>
        {/* Password Input field */}
        <div className='flex flex-row items-center p-1 mt-3 border-b border-gray-400'>
          <FaLock size={25} className='mr-1 fill-gray-400' />
          <label htmlFor='password' className='sr-only'>Password</label>
          <input
            className='px-1 w-full outline-none sm:text-lg'
            type={showPassword ? 'text' : 'password'}
            id='password'
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
            required
          />
          <div onClick={() => {setShowPassword(!showPassword)}}>
            {showPassword ? <AiFillEyeInvisible size={20} className='fill-gray-400 hover:cursor-pointer' /> : <AiFillEye size={20} className='ml-auto fill-gray-400 hover:cursor-pointer' />}
          </div>
        </div>
        {/* Forgot Password Link */}
        <a href='/#' className='m-1 underline text-blue-600 hover:cursor-pointer active:text-blue-400 text-sm font-semibold ml-auto select-none'>Forgot Password?</a>
        {/* Submit Button */}
        <button
          className='bg-blue-600 mx-auto my-7 px-14 sm:px-16 py-2 rounded-lg text-white sm:text-lg active:bg-blue-800'
          type='submit'
        >
          Login
        </button>
        {/* Other Sign In methods */}
        <label className='text-center my-2 font-medium sm:text-lg' htmlFor='button'>Or Sign in with:</label>
        <div className='flex flex-row justify-center items-center gap-6 mt-2 mb-8'>
          <button type='button' className='px-5 sm:px-6 py-2 sm:py-3 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 active:bg-gray-100'>
            <FaFacebookF size={25} />
          </button>
          <button type='button' className='px-5 sm:px-6 py-2 sm:py-3 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 active:bg-gray-100'>
            <AiOutlineTwitter size={25}/>
          </button>
          <button type='button' className='px-5 sm:px-6 py-2 sm:py-3 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 active:bg-gray-100'>
            <FaGooglePlusG size={25}/>
          </button>
        </div>
        {/* Sign Up link */}
        <div className='border-t border-gray-400'>
          <p className='mt-3 text-right font-normal'>Not a member? <a href='/#' className='underline text-blue-600 hover:cursor-pointer active:text-blue-400'>Sign Up</a></p>
        </div>
      </form>
      {/* End of Login Form */}

    </div>
  </div>
  );
}

export default LoginMenu;