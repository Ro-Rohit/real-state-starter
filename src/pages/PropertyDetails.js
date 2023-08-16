import React from 'react';
import { housesData } from '../data';
import { useParams } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const PropertyDetails = () => {
  const { id } = useParams();
  const selectedHouse = housesData.find((house) => house.id === parseInt(id));
  const { imageLg, name, description, type, country,
    address, bedrooms, bathrooms, surface, price, agent } = selectedHouse;

  return (
    <section className='h-fit w-full'>
      <div className='container mx-auto'>

        <header className='flex flex-col lg:flex-row lg:justify-between  lg:items-center mb-4'>
          <div>
            <h1 className='font-bold text-2xl font-primary leading-tight'>{name}</h1>
            <p className='text-md text-gray-500 font-light font-primary'>{address}</p>
          </div>

          <div className='mb-4 flex gap-x-3 pt-4 text-sm'>
            <div className='bg-green-500 rounded-full px-3 py-1  text-white'>{type}</div>
            <div className='bg-violet-500 rounded-full px-3 py-1 text-white'>{country}</div>
          </div>

          <div className='font-semibold  text-violet-500 text-lg'>${price}</div>
        </header>




        <main className='flex flex-col lg:flex-row gap-8 justify-center '>
          <article className='flex-[1.7]'>

            {/* img  */}
            <div className='w-full overflow-hidden h-fit mb-8'>
              <img src={imageLg} alt="img" className='w-full object-cover' />
            </div>


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


            {/* description  */}

            <p className='max-w-2xl w-full text-primary font-primary text-left'>{description}</p>

          </article>


          <aside className='flex-1 h-full'>
            <div className='p-4 border border-gray-300'>

              {/* agent  */}
              <div className='mb-4 flex max-w-md gap-x-6 items-center'>
                <img src={agent.image} alt="image" className='w-[80px] h-[80px] rounded-full' />
                <div>
                  <h3 className='font-bold leading-4 font-primary text-lg'>{agent.name}</h3>
                  <Link to='' className='text-md text-gray-500 '>
                    view listings
                  </Link>
                </div>
              </div>


              {/* form  */}
              <form className='flex flex-col space-y-3'>
                <input
                  type="text"
                  className='border border-gray-400 placeholder:text-violet-400 focus:placeholder:text-violet-600 
                   focus:border-violet-700 outline-none rounded w-full px-4 h-12'
                  required
                  placeholder='Your name*'
                />
                <input
                  type="text"
                  className='border border-gray-400 placeholder:text-violet-400 focus:placeholder:text-violet-600 
                   focus:border-violet-700 outline-none rounded w-full px-4 h-12'
                  required
                  placeholder='Your Email*'
                />
                <input
                  type="phone"
                  className='border border-gray-400 placeholder:text-violet-400 focus:placeholder:text-violet-600 
                   focus:border-violet-700 outline-none rounded w-full px-4 h-12'
                  required
                  placeholder='phone*'
                />
                <textarea
                  style={{ resize: 'none' }}
                  className='border border-gray-400 p-1 text-gray-400 placeholder:text-violet-400 focus:placeholder:text-gray-400 
                   focus:border-violet-700 outline-none rounded w-full px-4 h-52'
                  placeholder='Your message'
                  defaultValue='Hello I am interested in [MODREN APARTMENT]'
                />

                <div className='flex gap-x-4 items-center'>

                  <button className='text-md text-white w-fit h-fit px-4 py-2
                    transition-all duration-200 shadow-md rounded-md bg-violet-700 hover:bg-violet-800'
                  >
                    Send message
                  </button>

                  <button className='text-md bg-white hover:shadow-xl hover:text-violet-900 transition-all duration-100 w-fit h-fit px-4 py-2 rounded-md shadow-md'>
                    Call me
                  </button>
                </div>
              </form>

            </div>

          </aside>

        </main>

      </div>
    </section>
  );
};

export default PropertyDetails;
