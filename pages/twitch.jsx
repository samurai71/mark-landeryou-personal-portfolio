import Image from 'next/image';
import React from 'react';
import twitchImg from '../public/assets/projects/twitch.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const twitch = () => {
  return (
    <div className='w-full'>
      <div className='relative h-[50vh] w-screen'>
        <div className='absolute top-0 left-0 z-10 h-[50vh] w-full bg-black/70' />
        <Image
          className='z-1 absolute'
          layout='fill'
          objectFit='cover'
          src={twitchImg}
          alt='/'
        />
        <div className='absolute top-[70%] left-[50%] right-[50%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white'>
          <h2 className='py-2'>Twitch UI</h2>
          <h3>Next JS / Tailwind / Next Auth</h3>
        </div>
      </div>

      <div className='mx-auto grid max-w-[1240px] gap-8 p-2 py-8 md:grid-cols-5'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application was built using NEXT.JS and is styled with Tailwind
            CSS. The application is hosted statically using Vercel. This is a
            mobile responsive recreation of Twitch.tv and features Next/Auth.js
            for authentication. Users may choose to be authenticated with either
            a Github account or a Google account. A few features to note with
            this project are lazy loading images using the Image component,
            built in routing, and Next/Auth Context.
          </p>
          <a
            href='https://twitch-nextjs-tailwind.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='mt-4 mr-8 px-8 py-2'>Demo</button>
          </a>
          <a
            href='https://github.com/fireclint/twitch-nextjs-tailwind'
            target='_blank'
            rel='noreferrer'
          >
            <button className='mt-4 px-8 py-2'>Code</button>
          </a>
        </div>
        <div className='col-span-4 rounded-xl py-4 shadow-xl shadow-gray-400 md:col-span-1'>
          <div className='p-2'>
            <p className='pb-2 text-center font-bold'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Next Auth
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Github Auth
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Google Auth
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

export default twitch;
