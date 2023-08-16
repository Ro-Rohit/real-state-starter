import React from 'react';
import Banner from '../components/Banner';
import HouseList from '../components/HouseList'

const Home = () => {
  return (
    <section className='min-h-[1800px] h-full w-full'>
      <Banner />
      <HouseList />
    </section>
  );
};

export default Home;
