"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "AI Genius Web",
    description:
      "Create convertion, image, video, code and music using ai tools.",
    image: "/images/projects/Dashboard-Nif-ai.png",
    tag: ["All", "Next.js", "Vercel"],
    gitUrl: "https://github.com/nivnomdar/Nif-ai",
  },
  {
    id: 2,
    title: "Spotify Web",
    description: "Listen to music and choose your favorite songs.",
    image: "/images/projects/Dashboard-Nif-Spotify.png",
    tag: ["All", "Next.js", "Vercel"],
    gitUrl: "https://github.com/nivnomdar/Nif-Spotify",
  },
  {
    id: 3,
    title: "Movies-TvShows Web",
    description:
      "Search for movies or tvshows, see their information and add to your favorites.",
    image: "/images/projects/Dashboard-MoviesTvShows.png",
    tag: ["All", "React", "Vercel"],
    gitUrl: "https://github.com/nivnomdar/Nif-MoviesTvShows-App",
  },
  {
    id: 4,
    title: "Games Web",
    description:
      "Search Videogames, see their information and add to your favorites.",
    image: "/images/projects/Dashboard-VideoGames.png",
    tag: ["All", "React", "Vercel"],
    gitUrl: "https://github.com/nivnomdar/Nif-GamesWeb",
  },
  {
    id: 5,
    title: "Add-Note Project Web",
    description: "Add a new note, edit or remove it.",
    image: "/images/projects/Dashboard-Note.png",
    tag: ["All", "html-css-js"],
    gitUrl: "https://github.com/nivnomdar/Note-Project-1",
  },
  {
    id: 6,
    title: "Crypto Web",
    description:
      "Stay informed about cryptocurrency industry updates and market trends.",
    image: "/images/projects/Dashboard-Crypto.png",
    tag: ["All", "html-css-js"],
    gitUrl: "https://github.com/nivnomdar/Crypto-Web-Project",
  },
  {
    id: 7,
    title: "Meeting-Room Schedule Web",
    description: "Choose meeting room, team and time and add to the schedule.",
    image: "/images/projects/Dashoboard-MeetingRoomsSchedule.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/nivnomdar/Meeting-Rooms-Schedule",
  },
  {
    id: 8,
    title: "Cellphone Lab Web",
    description:
      "Improve customer service by managing waiting lists based on inquiry types. Collect and store phone numbers for prioritized assistance.",
    tag: ["All", "html-css-js"],
    image: "/images/projects/Dashboard-CellphoneLab.png",
    gitUrl: "https://github.com/nivnomdar/CellKlum-Phone-Services",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projectsSection">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-start gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="html-css-js"
          isSelected={tag === "html-css-js"}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mx-5">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
