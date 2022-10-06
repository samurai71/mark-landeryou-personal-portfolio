import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='h-screen w-full text-center'>
      <div className='mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2'>
        <div>
          <p className='text-sm uppercase tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Mark</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Full Stack Web Developer</h1>
          <p className='m-auto py-4 text-gray-600 sm:max-w-[70%]'>
            I’m focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <div className='m-auto flex max-w-[330px] items-center justify-between py-4'>
            <a
              href='https://www.linkedin.com/in/clint-briley-50056920a/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/fireclint'
              target='_blank'
              rel='noreferrer'
            >
              <div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
