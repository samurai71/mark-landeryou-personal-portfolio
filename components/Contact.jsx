import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact = () => {
  return (
    <section id='contact' className='w-full lg:h-screen'>
      <div className='m-auto w-full max-w-[1240px] px-2 py-16 '>
        <p className='text-xl uppercase tracking-widest text-blue-700'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid gap-8 lg:grid-cols-5'>
          {/* left */}
          <div className='col-span-3 h-full w-full rounded-xl p-4 shadow-xl shadow-gray-400 lg:col-span-2'>
            <div className='h-full lg:p-4 '>
              <div>
                <Image
                  className='rounded-xl duration-300 ease-in hover:scale-105'
                  src={ContactImg}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Mark Landeryou</h2>
                <p className='text-blue-600'>Full Stack Developer</p>
                <p className='py-4'>
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className='pt-8 uppercase text-blue-600'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/marklanderyou/'
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
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className='col-span-3 h-auto w-full rounded-xl shadow-xl shadow-gray-400 lg:p-4'>
            <div className='p-4'>
              <form
                action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
                method='POST'
                encType='multipart/form-data'
              >
                <div className='grid w-full gap-4 py-2 md:grid-cols-2'>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>Name</label>
                    <input
                      className='flex rounded-lg border-2 border-gray-300 p-3'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='py-2 text-sm uppercase'>
                      Phone Number
                    </label>
                    <input
                      className='flex rounded-lg border-2 border-gray-300 p-3'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Email</label>
                  <input
                    className='flex rounded-lg border-2 border-gray-300 p-3'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Subject</label>
                  <input
                    className='flex rounded-lg border-2 border-gray-300 p-3'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='py-2 text-sm uppercase'>Message</label>
                  <textarea
                    className='rounded-lg border-2 border-gray-300 p-3'
                    rows='10'
                    name='message'
                  ></textarea>
                </div>
                <button className='mt-4 w-full p-4 text-gray-100'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110'>
                <HiOutlineChevronDoubleUp className='text-blue-600' size={30} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
