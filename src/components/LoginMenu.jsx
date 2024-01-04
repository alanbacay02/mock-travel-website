import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineTwitter, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaFacebookF, FaGooglePlusG, FaUser, FaLock } from 'react-icons/fa';

const LoginMenu = (props) => {
  const loginRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (props.loginMenu) { // adds '.no-scroll' class to body when `loginMenu` state is true
      document.body.classList.add('no-scroll')
    }

    // Function to handle click events.
    let handleClick = (e) => {
      if (!loginRef.current.contains(e.target)) {
        props.setLoginMenu(false); // Sets state `navMenu` to false when click event is outside `menuRef`.
      }
    }
    // Adds event listener for `mousedown` events.
    document.addEventListener('mousedown', handleClick);

    // Clean up event listener and removes applied classes when component unmounts.
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.body.classList.remove('no-scroll')
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
    <div className='fixed top-0 left-0 h-full w-full flex items-center justify-center px-4 z-30'>
      <div 
        id='login-menu'
        ref={loginRef} 
        className='h-fit w-[250px] xs:w-[300px] sm:w-[370px] rounded-lg bg-white text-black shadow-2xl z-50'
      >
        <div className='flex flex-col justify-center py-4 px-5 max-w-[360px] mx-auto'>
          <div className='relative flex flex-row justify-center my-3'>
            <h2 className='font-bold text-base sm:text-lg'>Sign In</h2>
            <AiOutlineClose className='absolute right-0 top-[2px] hover:cursor-pointer'  onClick={()=>{props.handleLoginMenu()}} size={20}/>
          </div>

          {/* Beginning of Login Form */}
          <form className='flex flex-col' onSubmit={handleLogin}>
            {/* Email or Phone Input field */}
            <div className='flex flex-row items-center p-1 my-3 border-b border-gray-400 text-sm'>
              <FaUser className='mr-1 fill-gray-400' />
              <label htmlFor='email' className='sr-only'>Email or Phone</label>
              <input
                className='px-1 w-full outline-none'
                type='email'
                id='email'
                value={email}
                onChange={handleEmailChange}
                placeholder='Email or Phone'
                required
              />
            </div>
            {/* Password Input field */}
            <div className='flex flex-row items-center p-1 mt-3 border-b border-gray-400 text-sm'>
              <FaLock className='mr-1 fill-gray-400' />
              <label htmlFor='password' className='sr-only'>Password</label>
              <input
                className='px-1 w-full outline-none'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='Password'
                required
              />
              {/* Hide/Show Password Button */}
              <div onClick={() => {setShowPassword(!showPassword)}} className='text-base'>
                {showPassword ? <AiFillEyeInvisible className='fill-gray-400 hover:cursor-pointer' /> : <AiFillEye className='ml-auto fill-gray-400 hover:cursor-pointer' />}
              </div>
            </div>

            {/* Forgot Password Link */}
            <a href='/#' className='mr-1 mt-2 underline text-blue-600 hover:cursor-pointer hover:text-blue-500 text-xs active:text-blue-400 font-semibold ml-auto select-none'>Forgot Password?</a>
            {/* Submit Button */}
            <button
              className='bg-blue-600 mx-auto my-7 px-10 py-2 rounded-lg text-white text-sm hover:bg-blue-700'
              type='submit'
            >
              Login
            </button>
            {/* Other Sign In methods */}
            <label className='text-center my-2 font-medium text-xs sm:text-sm' htmlFor='button'>Or Sign in with:</label>
            <div className='flex flex-row justify-center items-center gap-6 mt-2 mb-8 text-lg sm:text-xl'>
              <button type='button' className='px-5 sm:px-6 py-2 sm:py-3 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 hover:bg-gray-100'>
                <FaFacebookF />
              </button>
              <button type='button' className='px-5 sm:px-6 py-2 sm:py-3 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 hover:bg-gray-100'>
                <AiOutlineTwitter />
              </button>
              <button type='button' className='px-5 sm:px-6 py-2 sm:py-3 shadow-md shadow-blue-400/80 rounded-3xl text-blue-600 hover:bg-gray-100'>
                <FaGooglePlusG />
              </button>
            </div>
            {/* Sign Up link */}
            <div className='border-t border-gray-400'>
              <p className='mt-3 text-right font-normal text-xs'>Not a member? <a href='/#' className='underline text-blue-600 hover:cursor-pointer hover:text-blue-500'>Sign Up</a></p>
            </div>
          </form>
          {/* End of Login Form */}

        </div>
      </div>
      <div className='absolute w-screen h-screen bg-black/40 z-30' />
    </div>
  );
}

export default LoginMenu;