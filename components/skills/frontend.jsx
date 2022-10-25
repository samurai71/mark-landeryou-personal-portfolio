import Image from 'next/image';
import React from 'react';
import Html from '../../public/assets/skills/html.png';
import Css from '../../public/assets/skills/css.png';
import Tailwind from '../../public/assets/skills/tailwind.png';
import BootstrapCSS from '../../public/assets/skills/bootstrap-svgrepo-com.svg';
import FoundationCSS from '../../public/assets/skills/foundation-svgrepo-com.svg';
import ReactImg from '../../public/assets/skills/react.png';
import VueJS from '../../public/assets/skills/vue-9-logo-svgrepo-com.svg';
import PostCSS from '../../public/assets/skills/postcss-svgrepo-com.svg';
import Illustrator from '../../public/assets/skills/adobe-illustrator-cc-logo-svgrepo-com.svg';
import Photoshop from '../../public/assets/skills/adobe-photoshop-cs6-logo-svgrepo-com.svg';
import Figma from '../../public/assets/skills/figma-svgrepo-com.svg';

const FrontEnd = () => {
  return (
    <>
      <h3 className='py-4'>Front End Skills</h3>
      <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Html} width='64px' height='64px' alt='HTML 5 icon' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>HTML</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Css} width='64px' height='64px' alt='CSS3 icon' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>CSS</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={Tailwind}
                width='64px'
                height='64px'
                alt='CSS3 icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Tailwind CSS</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={BootstrapCSS}
                width='64px'
                height='64px'
                alt='Bootstrap CSS icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Bootstrap CSS</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={FoundationCSS}
                width='64px'
                height='64px'
                alt='Foundation CSS icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Foundation CSS</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image
                src={ReactImg}
                width='64px'
                height='64px'
                alt='React Icon'
              />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>React</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={VueJS} width='64px' height='64px' alt='Vue Icon' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Vue</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={PostCSS} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>PostCSS</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Illustrator} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Illustrator</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Photoshop} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Photoshop</h3>
            </div>
          </div>
        </div>

        <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
          <div className='grid grid-cols-2 items-center justify-center gap-4'>
            <div className='m-auto'>
              <Image src={Figma} width='64px' height='64px' alt='/' />
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h3>Figma</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrontEnd;
