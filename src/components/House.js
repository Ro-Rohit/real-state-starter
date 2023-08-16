import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';


const House = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;
  return (
    <div className='h-fit w-[320px] p-5 bg-white rounded-tl-[90px] shadow-1 hover:shadow-2x l transition-all'>
      <div className='h-fit w-full mb-4'>
        <img src={image} alt="image" className='h-full  object-cover' />
      </div>

      {/* tags  */}
      <div className='mb-4 flex gap-x-2 items-center text-sm'>
        <div className='bg-green-500 rounded-full px-3 text-white'>{type}</div>
        <div className='bg-violet-500 rounded-full px-3 text-white'>{country}</div>
      </div>


      {/* address  */}
      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>


      {/* info */}
      <div className='flex items-center gap-6 mb-3 text-slate-800'>
        {/* bedrooms  */}
        <div className='flex gap-1'>
          <BiBed className='text-[20px]' />
          <div>{bedrooms}</div>
        </div>

        {/* bathroom  */}
        <div className='flex gap-1'>
          <BiBath className='text-[20px]' />
          <div>{bathrooms}</div>
        </div>


        {/* surface  */}
        <div className='flex gap-1'>
          <BiArea className='text-[20px]' />
          <div>{surface}</div>
        </div>
      </div>


      {/* price  */}
      <div className='font-semibold text-violet-500 text-lg'>${price}</div>
    </div>
  )
};

export default House;
