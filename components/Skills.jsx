import Image from 'next/image';
import React from 'react';

//import FrontEnd from '../components/skills/frontend';

//import AWS from '../public/assets/skills/aws.png';
import FrontEnd from '../components/skills/frontend';
import BackEnd from '../components/skills/backend';

import FullStack from '../components/skills/fullstack';

const Skills = () => {
  return (
    <section id='skills' className='w-full p-2 lg:h-screen'>
      <div className='mx-auto flex h-full max-w-[1240px] flex-col justify-center'>
        <div>
          <p className='text-xl uppercase tracking-widest text-blue-700'>
            Skills
          </p>
          <h2 className='py-4'>What I Can Do</h2>
        </div>
        <FrontEnd />
        <BackEnd />
        <FullStack />
      </div>
    </section>
  );
};

export default Skills;
