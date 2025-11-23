import React from 'react'
import HeroContent from '../sub/HeroContent';
import StarsCanvas from "@/components/main/starBackground";

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      {/* <video autoPlay muted loop className='rotated-180 absolute top-[-200px] left-0 z-[-1]  w-full h-full object-cover' >
        <source  src='/blackhole.webm' type='video/webm'/>
      </video> */}
      <StarsCanvas/>
      <HeroContent/>
    </div>
  );
}

export default Hero;
