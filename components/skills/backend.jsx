import Image from 'next/image';
import React from 'react';
import Firebase from '../../public/assets/skills/firebase.png';
import MongoDB from '../../public/assets/skills/mongo.png';
import MysqlDB from '../../public/assets/skills/mysql-svgrepo-com.svg';

const BackEnd = () => {
  return (
    <>
      <h3 className='py-4'>Back End Skills</h3>
      <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={Firebase}
                width='64px'
                height='64px'
                alt='Firebase icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Firebase</h3>
            </div>
          </div>
        </div>
        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
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
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={MysqlDB}
                width='64px'
                height='64px'
                alt='MySQL Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>MySQL</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackEnd;
