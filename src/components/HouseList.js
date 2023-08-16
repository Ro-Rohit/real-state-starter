import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im'
import House from '../components/House';

const HouseList = () => {
  const { houseData, loading } = useContext(HouseContext);

  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />)
  }

  if (houseData.length < 1) {
    return <div className='text-center mt-[150px] text-3xl capitalize text-slate-700'>Sorry, nothing found!</div>
  }

  return (
    <section className='mb-20 mt-1'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-content-center gap-x-4 gap-y-8' >
          {houseData.map((house, index) => {
            return (
              <Link onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className='place-self-center' key={index} to={`/property/${house.id}`}>
                <House house={house} />
              </Link>
            )
          })}
        </div>

      </div>

    </section>
  );
};

export default HouseList;
