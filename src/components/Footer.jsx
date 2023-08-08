import React from 'react';
import MountainSVG from './MountainSVG';
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full py-6 bg-slate-900/90 text-white'>
      {/* Grid Container */}
      <div className='grid sm:grid-cols-3 justify-center items-center mx-auto px-6 gap-5 max-w-[1240px]'>
        {/* Column 1 */}
        <div>
          <div className='flex flex-row items-center'>
            <div className='w-[45px] h-full sm:w-[50px] md:w-[65px] fill-white'>
              <MountainSVG />
            </div>
            <h1 className='text-xl md:text-2xl font-bold hover:cursor-pointer'>HIGH<span className='text-[#56ace1]'>LANDER</span>.</h1>
          </div>
          <div className="flex justify-between w-full max-w-[280px] my-6">
            <FaFacebookSquare size={30} className="hover:cursor-pointer" />
            <FaInstagram size={30} className="hover:cursor-pointer" />
            <FaTwitterSquare size={30} className="hover:cursor-pointer" />
            <FaGithubSquare size={30} className="hover:cursor-pointer" />
            <FaDribbbleSquare size={30} className="hover:cursor-pointer" />
          </div>
        </div>
        {/* End of Column 1 */}
        {/* Columns 2 & 3 */}
        <div className="sm:col-span-2 grid grid-cols-2 xs:grid-cols-4 gap-5 justify-between">
          <div>
            <h6 className="font-medium text-lg text-sky-400">Explore</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Domestic Flights</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Cities</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Airlines</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Hotels</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg text-sky-400">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Pricing</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Trip</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Accomodation</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Guides</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg text-sky-400">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">About</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Blog</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Jobs</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Careers</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-lg text-sky-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Claim</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Policy</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Terms</li>
              <li className="py-2 text-sm hover:cursor-pointer hover:underline">Insights</li>
            </ul>
          </div>
        </div>
        {/* End of Columns 2 & 3 */}
      </div>
      {/*End of Grid Container */}
    </div>
  );
}

export default Footer;