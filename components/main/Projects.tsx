import React from "react";
import ProjectCard from "../sub/ProjectCard";
import ExpandableCardDemo from "../expandable-card-demo-grid";
import { ComicText } from "@/components/ui/comic-text"

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center py-20 relative z-10"
      id="projects"
    >
      <h1 className='text-white'><ComicText>Projects</ComicText></h1>
      <ExpandableCardDemo/>
    </div>
  );
};

export default Projects;