/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mark Personal Portfolio</title>
        <meta
          name='description'
          content='Mark Landeryou Personal Portfolio from Sarnia Ontario Canada'
        />
        {/* <link rel='icon' href='/favicon.ico' /> */}
      </Head>

      <main>
        <h1 className='container mt-3 text-center font-serif text-6xl font-bold text-blue-600'>
          Mark Landeryou's Portfolio
        </h1>
      </main>

      <footer className='mt-3 text-center underline'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
