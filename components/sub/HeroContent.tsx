"use client";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import { Astronaut } from "./Astronaut";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "./Loader";
import TextType from "./TextType";
import RotatingText from "./RotatingText";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useResponsiveLayoutKey } from "@/hooks/use-responsive-layout-key";

const HeroContent = () => {
  const layoutKey = useResponsiveLayoutKey([854]);
  const isCompactLayout = layoutKey === "bp-0";

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative z-[20] flex w-full flex-col items-start justify-start px-6 pt-36 pb-20 sm:px-8 md:mt-40 md:flex-row md:items-center md:justify-center md:px-20 md:pt-0 md:pb-0"
    >
      <div className="flex h-full w-full flex-col justify-center gap-5 text-start md:m-auto md:max-w-[600px]">
        {/* <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            SoFtware Developer Engineer Portfolio
          </h1>
        </motion.div> */}

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 flex min-h-[10.5rem] w-full max-w-[600px] flex-col gap-4 overflow-hidden text-[clamp(2.9rem,14vw,5.5rem)] leading-[0.92] font-bold text-white md:mt-8 md:min-h-[7.5rem] md:gap-8"
        >
          <TextType
            key={`hero-greeting-${layoutKey}`}
            text={[
              "Hello World",
              "Hola Mundo",
              "Bonjour le monde",
              "Hallo Welt",
              "Ciao Mondo",
              "Olá Mundo",
              "你好，世界",
              "こんにちは世界",
              "안녕하세요 월드",
              "Привет, мир",
              "Mingalabar World",
              "Chào thế giới",
              "สวัสดีชาวโลก",
              "Hej världen",
              "Hei maailma",
              "Hej Verden",
              "Hei Verden",
              "Ahoj světe",
              "Pozdravljen, svet",
              "Pozdravljen svijete",
              "Zdravo svete",
              "Здраво свету",
              "Halo Dunia",
              "Salom Dunyo",
              "Салам бүгүнүй",
              "Сәлем Әлем",
              "Salam Dünya",
              "Բարեւ աշխարհ",
              "שָׁלוֹם עוֹלָם",
              "Mo ki o ni agbaiye",
              "Moni Dziko",
              "Habari Dunia",
              "Sawubona Mhlaba",
              "Helló Világ",
              "Sveika, pasaule",
              "Tere, maailm",
              "Witaj świecie",
              "Kaixo Mundua",
              "Halo werld",
              "Kamusta Mundo",
              "Hello World",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#ffffff", "#b49bff", "#7042f8"]}
            className="block max-w-full whitespace-nowrap tracking-tight"
          />
          {/* <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project exprience
          </span> */}
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.8)}
          className="my-5 max-w-[600px] text-base leading-8 text-gray-100 sm:text-lg"
        >
        <motion.div
          variants={slideInFromRight(0.5)}
          className="mb-4 flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-2"
        >
          <div className="overflow-hidden rounded-l bg-none text-2xl text-white sm:py-1 sm:text-3xl md:py-2 md:text-4xl">
            I&apos;m a
          </div>
          <RotatingText
            key={`hero-role-${layoutKey}`}
            texts={[
              "Software Developer Engineer",
              "Full Stack Developer",
              "Backend Developer",
            ]}
            mainClassName="overflow-hidden rounded-lg bg-none px-0 text-2xl text-white sm:px-2 sm:text-3xl md:px-3 md:text-4xl"
            staggerFrom="last"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-120%", opacity: 0 }}
            staggerDuration={isCompactLayout ? 0 : 0.06}
            splitBy="words"
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={isCompactLayout ? 2600 : 2000}
          />
        </motion.div>
        crafting websites, mobile apps, and software solutions. My projects
        work surprisingly well considering the amount of chai involved. Feel
        free to explore my work it&apos;s safe, I promise.
      </motion.div>
      <motion.div
        variants={slideInFromLeft(1)}
        className="relative z-40 flex max-w-[300px] space-x-6 pt-2 pointer-events-auto"
      >
        <motion.a
          href="https://github.com/Sankalp-Space"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/sankalp-space1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://wa.me/7351432611"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a
          href="https://leetcode.com/u/sankalp-space/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl"
          whileHover={{ scale: 1.2 }}
          // whileTap={{ scale: 0.9 }}
        >
          <SiLeetcode />
        </motion.a>
      </motion.div>
      <div aria-hidden className="h-48 w-full shrink-0 md:hidden" />
      </div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="hidden h-full w-full items-center justify-center md:flex"
      >
        <figure
          className="pointer-events-none absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas camera={{ position: [0.5, 1, 2] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </figure>
      </motion.div>
    </motion.div>
  );
};
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default HeroContent;
