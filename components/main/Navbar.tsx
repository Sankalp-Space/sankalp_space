'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Hide logo after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full h-[200px] fixed top-0 z-50 flex items-center justify-center">
      <motion.a
        href="#about-me"
        className="h-auto w-auto flex flex-row items-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isScrolled ? 0 : 1
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        <Image
          src="/sankalp_space.png"
          alt="logo"
          width={200}
          height={160}
          className="cursor-pointer hover:animate-slowspin"
        />
      </motion.a>
    </div>
  );
};

export default Navbar;
