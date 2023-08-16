import React, { useContext } from 'react';

import CountryDropdown from '../components/CountryDropdown';
import PriceRangeDropdown from '../components/PriceRangeDropdown';
import PropertyDropdown from '../components/PropertyDropdown';

import { RiSearch2Line } from 'react-icons/ri';
import { HouseContext } from './HouseContext';




const Search = () => {
  const { handleSearch } = useContext(HouseContext)
  return (
    <section
      className='bg-white px-[30px] py-6 lg:shadow-lg flex flex-col lg:flex-row lg:justify-between 
      items-center gap-y-6 max-w-5xl w-full lg:backdrop-blur lg:bg-transparent relative lg:-top-4'
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <div onClick={handleSearch}
        className='flex justify-center w-full gap-x-3 cursor-pointer items-center px-6 py-3 text-lg rounded-md
       text-white bg-violet-700 hover:bg-violet-900 transition-all duration-150 '
      >
        <h3>Search</h3>
        <RiSearch2Line />
      </div>

    </section>
  );
};

export default Search;
