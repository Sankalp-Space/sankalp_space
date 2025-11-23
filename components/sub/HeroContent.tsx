"use client";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import { Astronaut } from "./Astronaut";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "./Loader";
import TextType from "./TextType";
import RotatingText from "./RotatingText";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const HeroContent = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full  w-full flex flex-col gap-5 justify-center m-auto text-start">
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
          className="flex flex-col gap-8 mt-8 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <TextType
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
              "Салам дүйнө",
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
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-100 my-5 max-w-[600px]"
        >
          <motion.div  variants={slideInFromRight(0.5)} className="flex">
            <motion.p className="text-4xl  bg-none text-white  overflow-hidden  sm:py-1 md:py-2 justify-center rounded-l">I&apos;m a</motion.p>
          <RotatingText
            texts={["Software Deveoper Engineer", "Full Stack Developer", "Backend Developer",]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-none text-white text-4xl overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{" "}
          </motion.div>
          crafting websites, mobile apps, and software solutions. My projects work surprisingly well considering the amount of coffee involved. Feel free to explore my work—it's safe, I promise.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex space-x-6 max-w-[300px]"
        >
          <motion.a
            href="https://github.com/Sankalp-Space"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sankalp-space1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://wa.me/7351432611"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/sankalp-space/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiLeetcode />
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className="w-full h-full flex justify-center items-center"
      >
        <figure
          className="absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas camera={{ position: [0.5, 1, 2] }}>
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.23}
                  position={isMobile && [1, -1.5, 1]}
                />
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
