import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <header className='py-6 w-full mb-12  border-b-2 '>
      <div className='container mx-auto h-fit'>
        <div className='flex justify-between items-center'>
          {/* Logo  */}
          <Link to='/'>
            <img src={Logo} alt="logo" />
          </Link>


          {/* btn */}
          <div className='flex gap-x-4 items-center'>
            <button className='text-md bg-white hover:shadow-xl hover:text-violet-900 transition-all duration-100 w-fit h-fit px-4 py-2 rounded-md shadow-md'>
              log in
            </button>

            <button className='text-md text-white w-fit h-fit px-4 py-2
             transition-all duration-200 shadow-md rounded-md bg-violet-700 hover:bg-violet-800'>
              Sign up
            </button>

          </div>

        </div>

      </div>

    </header>
  );
};

export default Header;
