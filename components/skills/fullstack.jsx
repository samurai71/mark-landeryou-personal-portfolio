import Image from 'next/image';
import React from 'react';
import Javascript from '../../public/assets/skills/javascript.png';
import NextJS from '../../public/assets/skills/nextjs.png';
import Github from '../../public/assets/skills/github1.png';
import Git from '../../public/assets/skills/git-icon-svgrepo-com.svg';
import NodeJS from '../../public/assets/skills/node.png';
import ViteJS from '../../public/assets/skills/vite-svgrepo-com.svg';
import VercelJS from '../../public/assets/skills/vercel.svg';
import WebpackJS from '../../public/assets/skills/webpack-svgrepo-com.svg';
import WordpressCMS from '../../public/assets/skills/wordpress-svgrepo-com.svg';
import Php from '../../public/assets/skills/php-svgrepo-com.svg';
import Python from '../../public/assets/skills/python-svgrepo-com.svg';

const FullStack = () => {
  return (
    <>
      <h3 className='py-4'>Full Stack Skills</h3>
      <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={Javascript}
                width='64px'
                height='64px'
                alt='Javascript icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Javascript</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={NextJS}
                width='64px'
                height='64px'
                alt='NextJS Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Next</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={Github}
                width='64px'
                height='64px'
                alt='Github Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Github</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Git} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Git</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={NodeJS}
                width='64px'
                height='64px'
                alt='NodeJS Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Node</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={ViteJS}
                width='64px'
                height='64px'
                alt='ViteJS Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Vite</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={VercelJS}
                width='64px'
                height='64px'
                alt='VercelJS Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Vercel</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={WebpackJS}
                width='64px'
                height='64px'
                alt='Webpack Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Webpack</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={WordpressCMS} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>WordPress</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Php} width='64px' height='64px' alt='PHP Icon' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>PHP</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={Python}
                width='64px'
                height='64px'
                alt='Python Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Python</h3>
            </div>
          </div>
        </div>
        {/* <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={MongoDB}
                width='64px'
                height='64px'
                alt='MongoDB icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>MongoDB</h3>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default FullStack;
