import Image from 'next/image';
import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='relative h-[50vh] w-screen'>
        <div className='absolute top-0 left-0 z-10 h-[50vh] w-full bg-black/70' />
        <Image
          className='z-1 absolute'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        <div className='absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white'>
          <h2 className='py-2'>Netflix App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='mx-auto grid max-w-[1240px] gap-8 p-2 py-8 md:grid-cols-5'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management.
          </p>
          <a
            href='https://github.com/fireclint/netflix-react-tailwind'
            target='_blank'
            rel='noreferrer'
          >
            <button className='mt-4 mr-8 px-8 py-2'>Code</button>
          </a>
          <a
            href='https://fireclint.github.io/netflix-react-tailwind/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='mt-4 px-8 py-2'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 rounded-xl py-4 shadow-xl shadow-gray-400 md:col-span-1'>
          <div className='p-2'>
            <p className='pb-2 text-center font-bold'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> IMDB API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='cursor-pointer text-red-600 underline'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
