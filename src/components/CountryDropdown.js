import React, { useContext, useState } from 'react';

import { Menu } from '@headlessui/react';

import { RiArrowDownSLine, RiArrowUpSLine, RiMapPin2Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';


const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn  text-left space-x-2'
      >
        <RiMapPin2Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {country}
          </div>
          <div className='text-[12px] italic font-light '>
            Select your place
          </div>

        </div>

        {isOpen
          ? (<RiArrowUpSLine className='dropdown-icon-secondary' />)
          : (<RiArrowDownSLine className='dropdown-icon-secondary' />)
        }

      </Menu.Button>
      <Menu.Items as="ul" className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              key={index}
              as="li"
              onClick={() => { setIsOpen(false); setCountry(country) }}
              className='cursor-pointer  hover:text-violet-700 transition-all'
            >
              {country}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
