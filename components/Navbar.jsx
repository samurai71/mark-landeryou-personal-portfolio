import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
import NavLogo from '../public/assets/navLogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  // const [position, setPosition] = useState('fixed')
  // const router = useRouter();

  // useEffect(() => {
  //   if (
  //     router.asPath === '/property' ||
  //     router.asPath === '/crypto' ||
  //     router.asPath === '/netflix' ||
  //     router.asPath === '/twitch'
  //   ) {
  //     setNavBg('transparent');
  //     setLinkColor('#ecf0f3');
  //   } else {
  //     setNavBg('#ecf0f3');
  //     setLinkColor('#1f2937');
  //   }
  // }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed z-[100] h-20 w-full shadow-xl duration-300 ease-in-out'
          : 'fixed z-[100] h-20 w-full'
      }
    >
      <div className='flex h-full w-full items-center justify-between px-2 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image
              src={NavLogo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer duration-200 ease-in hover:scale-110'
            />
          </a>
        </Link>
        <div className='flex items-center justify-center pr-4'>
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden font-[Bitter] md:flex'
          >
            <li className='text-md ml-10 uppercase text-red-600 duration-200 ease-in-out hover:scale-110 hover:border-b hover:text-blue-500'>
              <Link href='/'>Home</Link>
            </li>
            <li className='text-md ml-10 uppercase text-red-600 duration-200 ease-in-out hover:scale-110 hover:border-b hover:text-blue-500'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='text-md ml-10 uppercase text-red-600 duration-200 ease-in-out hover:scale-110 hover:border-b hover:text-blue-500'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='text-md ml-10 uppercase text-red-600 duration-200 ease-in-out hover:scale-110 hover:border-b hover:text-blue-500'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='text-md ml-10 uppercase text-red-600 duration-200 ease-in-out hover:scale-110 hover:border-b hover:text-blue-500'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className='md:hidden'
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? ' fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]'
              : 'fixed left-[-100%] top-0 p-10 duration-500 ease-in'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                  <Image src={NavLogo} width='87' height='35' alt='/' />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] py-4 md:w-[90%]'>
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div className='flex flex-col py-4'>
            <ul className='uppercase'>
              <Link href='/'>
                <li
                  onClick={() => setNav(false)}
                  className='text-md py-4 font-serif text-red-600 hover:text-blue-500'
                >
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li
                  onClick={() => setNav(false)}
                  className='text-md py-4 font-serif text-red-600 hover:text-blue-500'
                >
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li
                  onClick={() => setNav(false)}
                  className='text-md py-4 font-serif text-red-600 hover:text-blue-500'
                >
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li
                  onClick={() => setNav(false)}
                  className='text-md py-4 font-serif text-red-600 hover:text-blue-500'
                >
                  Projects
                </li>
              </Link>

              <Link href='/#contact'>
                <li
                  onClick={() => setNav(false)}
                  className='text-md py-4 font-serif text-red-600 hover:text-blue-500'
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-4'>
              <p className='uppercase tracking-widest text-blue-700'>
                Let&#39;s Connect
              </p>
              <div className='my-4 flex w-full items-center justify-between sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/marklanderyou/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/samurai71'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
