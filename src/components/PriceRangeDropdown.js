import React, { useContext, useState } from 'react';

import { Menu } from '@headlessui/react';

import { RiArrowDownSLine, RiArrowUpSLine, RiWallet3Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {
  const { price, setPrice, } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '220000 - 250000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)} className='dropdown-btn  text-left space-x-2'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {price}
          </div>
          <div className='text-[12px] italic font-light '>
            Choose Price range
          </div>

        </div>

        {isOpen
          ? (<RiArrowUpSLine className='dropdown-icon-secondary' />)
          : (<RiArrowDownSLine className='dropdown-icon-secondary' />)
        }

      </Menu.Button>
      <Menu.Items as="ul" className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              key={index}
              as="li"
              onClick={() => { setIsOpen(false); setPrice(price.value) }}
              className='cursor-pointer  hover:text-violet-700 transition-all'
            >
              {price.value}
            </Menu.Item>
          )
        })}

      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
