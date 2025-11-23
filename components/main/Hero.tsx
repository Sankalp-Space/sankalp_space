import React from 'react'
import HeroContent from '../sub/HeroContent';
import StarsCanvas from "@/components/main/starBackground";
import { motion } from 'framer-motion';
import { slideInFromTop } from '@/utils/motion';

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <img
        src="/sankalp_space.png"
        alt="Logo"
        className="absolute top-4 left-4 w-40 z-50 object-contain"
      />
      {/* <video autoPlay muted loop className='rotated-180 absolute top-[-200px] left-0 z-[-1]  w-full h-full object-cover' >
        <source  src='/blackhole.webm' type='video/webm'/>
      </video> */}
      <StarsCanvas/>
      <HeroContent/>
    </div>
  );
}

export default Hero;
