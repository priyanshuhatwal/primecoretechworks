import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="
        relative z-20 pointer-events-auto
        w-full
        flex flex-col items-center justify-center
        py-16 md:py-24
      "
    >
      {/* HEADING */}
      <h1
        className="
          text-[32px] md:text-[40px]
          font-semibold
          text-transparent bg-clip-text
          bg-gradient-to-r from-purple-500 to-cyan-500
          mb-12 md:mb-20
          text-center
        "
      >
        Our Projects
      </h1>

      {/* PROJECTS GRID */}
      <div
        className="
          w-full max-w-7xl
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-8 md:gap-10
          px-4 sm:px-8 md:px-10
        "
      >
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A modern, fast and scalable portfolio built using Next.js with clean UI and smooth animations."
        />

        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Engaging and interactive card-based UI components designed for modern web experiences."
        />

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A visually rich space-themed website featuring advanced animations and immersive design."
        />
      </div>
    </section>
  );
};

export default Projects;
