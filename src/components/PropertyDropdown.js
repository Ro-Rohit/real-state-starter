import React, { useContext, useState } from 'react';
import { HouseContext } from './HouseContext';
import { Menu } from '@headlessui/react';
import { RiHome5Line, RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn  text-left space-x-2'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
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
        {properties.map((property, index) => {
          return (
            <Menu.Item
              key={index}
              as="li"
              onClick={() => { setIsOpen(false); setProperty(property) }}
              className='cursor-pointer  hover:text-violet-700 transition-all'
            >
              {property}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
