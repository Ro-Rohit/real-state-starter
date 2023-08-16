import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='max-h-fit h-full w-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col mb-4 lg:flex-row items-center h-full justify-center'>

          {/* text  */}
          <div className='flex-1 flex flex-col text-center lg:text-left'>
            <h1
              className='font-bold text-4xl md:text-5xl tracking-wider mb-8  '
            >
              <span className='text-violet-700'>Rent </span>
              Your Dream <br /> House With Us.
            </h1>

            <p className='max-w-md font-primary text-primary leading-relaxed'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto facilis fugit impedit nisi omnis tenetur, a culpa consectetur alias f
              uga maiores cumque totam quidem ratione delectus provident possimus laudantium suscipit?
            </p>
          </div>


          {/* img */}
          <div className='hidden flex-1 lg:flex flex-row justify-end'>
            <img src={Image} alt="banner" />
          </div>
        </div>

        <Search />
      </div>
    </section>
  );
};

export default Banner;
