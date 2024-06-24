// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import styles from './assets/Home.module.css'; // Create this CSS module file
import apple from '@/app/assets/images/appletvplus.png';
import disney from '@/app/assets/images/disneyplus.png';
import hbomax from '@/app/assets/images/hbomax.png';
import videoland from '@/app/assets/images/videoland.png';
import instagram from '@/app/assets/images/instagram.png';
import wfllogo from '@/app/assets/images/purple_darker.png';
import bmacoffee from '@/app/assets/images/bmc_qr.png';

const logos = [
  {
    name: 'Apple TV Plus',
    src: apple,
    url: 'https://tv.apple.com/',
  },
  {
    name: 'Disney Plus',
    src: disney,
    url: 'https://disneyplus.com/home',
  },
  {
    name: 'HBO Max',
    src: hbomax,
    url: 'https://hbomax.com',
  },
  {
    name: 'Videoland',
    src: videoland,
    url: 'https://videoland.com',
  },
  {
    name: 'Instagram',
    src: instagram,
    url: 'https://instagram.com/',
  },
  {
    name: 'Buy me a coffee',
    src: bmacoffee,
    url: 'https://buymeacoffee.com/wfls',
  },
];

const companyLogo = [
  {
    name: 'Waveformlabs B.V.',
    src: wfllogo,
    url: 'https://waveformlabs.io',
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="flex justify-center mt-10">
        {companyLogo.map((businesslogo) => (
          <a key={businesslogo.name} href={`${businesslogo.url}`}>
            <Image
              className="flex flex-col align-self-center"
              src={businesslogo.src}
              alt={businesslogo.name}
              width={350}
              height={250}
            />
          </a>
        ))}
      </div>
      <header className="flex justify-center mt-20 font-semibold ">
        <p>
          Click on a icon below to open in fullscreen and on the youtube page
          that opens next, choose &quot;go to site&quot;
        </p>
      </header>

      <main className="mt-40">
        <div className={styles.logoGrid}>
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={`https://www.youtube.com/redirect?q=${logo.url}`}
            >
              <Image src={logo.src} alt={logo.name} width={200} height={200} />
            </a>
          ))}
        </div>
      </main>

      <footer className="flex justify-center mt-40 font-bold">
        <p>
          Website created by Waveformlabs B.V. Privacy: No cookies, no tracking,
          no analytics just for fun
        </p>
      </footer>
    </div>
  );
}
