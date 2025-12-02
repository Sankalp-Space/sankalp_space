"use client";
import Shuffle from "../sub/Shuffle";
import LogoLoop from "../sub/LogoLoop";
import FeatureGrid from "../sub/FeatureGrid";

const LogoLoopAny: any = LogoLoop;

import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiPostman,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

const Skills = () => {
  const skillLogos = [
    { id: "c", node: <SiC className="text-4xl" />, title: "C" },
    { id: "cpp", node: <SiCplusplus className="text-4xl" />, title: "C++" },
    {
      id: "js",
      node: <SiJavascript className="text-4xl text-yellow-400" />,
      title: "JavaScript",
    },
    {
      id: "ts",
      node: <SiTypescript className="text-4xl text-sky-400" />,
      title: "TypeScript",
    },
    {
      id: "react",
      node: <SiReact className="text-4xl text-emerald-400" />,
      title: "React.js",
    },
    {
      id: "next",
      node: <SiNextdotjs className="text-4xl" />,
      title: "Next.js",
    },
    {
      id: "node",
      node: <SiNodedotjs className="text-4xl text-green-400" />,
      title: "Node.js",
    },
    {
      id: "express",
      node: <SiExpress className="text-4xl" />,
      title: "Express.js",
    },
    {
      id: "tailwind",
      node: <SiTailwindcss className="text-4xl text-sky-300" />,
      title: "Tailwind CSS",
    },
    {
      id: "mongodb",
      node: <SiMongodb className="text-4xl text-emerald-400" />,
      title: "MongoDB",
    },
    {
      id: "mysql",
      node: <SiMysql className="text-4xl text-blue-400" />,
      title: "MySQL",
    },
    {
      id: "aws",
      node: <span className="text-base font-semibold">AWS</span>,
      title: "AWS",
    },
    {
      id: "git",
      node: <SiGit className="text-4xl text-orange-500" />,
      title: "Git",
    },
    { id: "github", node: <SiGithub className="text-4xl" />, title: "GitHub" },
    {
      id: "postman",
      node: <SiPostman className="text-4xl text-orange-400" />,
      title: "Postman",
    },
    {
      id: "docker",
      node: <SiDocker className="text-4xl text-sky-500" />,
      title: "Docker",
    },
    {
      id: "k8s",
      node: <SiKubernetes className="text-4xl text-sky-600" />,
      title: "Kubernetes",
    },
  ];

  const programming = ["C", "C++", "JavaScript", "TypeScript"];
  const frameworks = [
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
  ];
  const databases = ["MongoDB", "MySQL", "AWS"];
  const tools = ["Git", "GitHub", "Postman", "Docker", "Kubernetes", "VS Code"];
  const core = [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "DBMS",
  ];

  return (
    <section className="py-12 bg-transparent text-white mt-16">
      <div className="container mx-auto px-6 mt-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-1 rounded-xl bg-none shadow-lg">
            <div className=" rounded-lg  ">
              <Shuffle
                text="Skills & Tools"
                shuffleDirection="right"
                duration={0.45}
                animationMode="evenodd"
                shuffleTimes={2}
                ease="power3.out"
                stagger={0.02}
                threshold={0.1}
                triggerOnHover={false}
                loop={true}
                loopDelay={3.5}
                triggerOnce={true}
                onShuffleComplete={() => {}}
                colorFrom={undefined}
                colorTo={undefined}
                respectReducedMotion={true}
                className="text-3xl md:text-4xl font-bold"
              />
              <p className="mt-3 text-slate-300">
                A snapshot of languages, frameworks, databases, tools and core
                concepts I use daily.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-6 md:-mt-24">
          <div className="relative h-52 md:h-64 overflow-hidden rounded-full p-2 md:p-4 flex items-center">
            <LogoLoopAny
              logos={skillLogos}
              speed={90}
              direction="left"
              logoHeight={210}
              gap={64}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Skills carousel"
            />
          </div>
        </div>
        <div>
          {/* Feature grid (Multiple Tech Stack, Dev & Design, Open to Collaborations) */}
          <FeatureGrid />
        </div>
      </div>
    </section>
  );
};

export default Skills;
