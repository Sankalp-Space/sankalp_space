"use client";

import React from "react";
import HeroContent from "../sub/HeroContent";
import StarsCanvas from "@/components/main/starBackground";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import StickerPeel from '../sub/StickerPeel' ;


const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      
      <StickerPeel
        imageSrc='/sankalp_space.png'
        width={200}
        rotate={0}
        peelBackHoverPct={55}
        peelBackActivePct={40}
        shadowIntensity={1}
        lightingIntensity={1}
        // initialPosition={{ x: -100, y: 100 }}
      />
      {/* <video autoPlay muted loop className='rotated-180 absolute top-[-200px] left-0 z-[-1]  w-full h-full object-cover' >
        <source  src='/blackhole.webm' type='video/webm'/>
      </video> */}
      <StarsCanvas />
      <HeroContent />
    </div>
  );
};

export default Hero;
