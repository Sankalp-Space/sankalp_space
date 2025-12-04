"use client"
import React from "react";
import ExpandableCardDemo from "../expandable-card-demo-grid";
import { ComicText } from "@/components/ui/comic-text"
import DecryptedText from '../sub/DecryptedText';

const Projects = () => {
  return (
    <div
    className="flex flex-col items-center py-20 relative z-[30]"
      id="projects"
    >
      <h1 className='text-white'><ComicText>Projects</ComicText></h1>
      <ExpandableCardDemo/>
      <div className="mt-8 text-center">
        <DecryptedText
          text="Currently working on more projects!"
          speed={30}
          maxIterations={15}
          animateOn="view"
          className="text-white text-lg font-medium"
          encryptedClassName="text-emerald-400"
          loopInterval={3000}
        />
      </div>
    </div>
  );
};

export default Projects;