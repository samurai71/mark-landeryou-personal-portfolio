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
import MongoDB from '../public/assets/skills/mongo.png';
import ViteJS from '../public/assets/skills/vite-svgrepo-com.svg';
import VercelJS from '../public/assets/skills/vercel.svg';
import WebpackJS from '../public/assets/skills/webpack-svgrepo-com.svg';
import VueJS from '../public/assets/skills/vue-9-logo-svgrepo-com.svg';
import MysqlDB from '../public/assets/skills/mysql-svgrepo-com.svg';
import BootstrapCSS from '../public/assets/skills/bootstrap-svgrepo-com.svg';
import WordpressCMS from '../public/assets/skills/wordpress-svgrepo-com.svg';
import Php from '../public/assets/skills/php-svgrepo-com.svg';
import Python from '../public/assets/skills/python-svgrepo-com.svg';
import FoundationCSS from '../public/assets/skills/foundation-svgrepo-com.svg';
//import PostCSS from '../public/assets/skills/postcss-svgrepo-com.svg';
//import Illustrator from '../public/assets/skills/adobe-illustrator-cc-logo-svgrepo-com.svg';
//import Photoshop from '../public/assets/skills/adobe-photoshop-cs6-logo-svgrepo-com.svg';
//import Figma from '../public/assets/skills/figma-svgrepo-com.svg';
//import Git from '../public/assets/skills/git-icon-svgrepo-com.svg';

//import AWS from '../public/assets/skills/aws.png';

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

        {/* <h3 className='py-4'>Front-End Skills</h3> */}
        <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image
                  src={Html}
                  width='64px'
                  height='64px'
                  alt='HTML 5 icon'
                />
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
                  src={Javascript}
                  width='64px'
                  height='64px'
                  alt='JS icon'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>JavaScript</h3>
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
                <Image
                  src={Tailwind}
                  width='64px'
                  height='64px'
                  alt='TailwindCSS Icon'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image
                  src={Firebase}
                  width='64px'
                  height='64px'
                  alt='Firebase Icon'
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
                  src={MongoDB}
                  width='64px'
                  height='64px'
                  alt='MongoDB Icon'
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
                  alt='Vercel Icon'
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

          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image
                  src={BootstrapCSS}
                  width='64px'
                  height='64px'
                  alt='Bootstrap Icon'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Bootstrap</h3>
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

          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image
                  src={FoundationCSS}
                  width='64px'
                  height='64px'
                  alt='FoundationCSS Icon'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Foundation</h3>
              </div>
            </div>
          </div>

          {/* <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
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

          <div className='rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105'>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
              <div className='m-auto'>
                <Image src={Git} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  );
};

export default Skills;
