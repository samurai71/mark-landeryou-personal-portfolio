import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';
import NodeJS from '../public/assets/skills/node.png';
import AWS from '../public/assets/skills/aws.png';

const Skills = () => {
  return (
    <section id='skills' className='w-full p-2 lg:h-screen'>
      <div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
        <p className='text-xl uppercase tracking-widest text-blue-700'>
          Skills
        </p>
        <h2 className='py-4'>What I Can Do</h2>
        <h3 className='py-4'>Front-End Skills</h3>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={NodeJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
          </div>
        </div>
        <h3 className='py-4'>Back-End Skills</h3>
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={NodeJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Node</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
