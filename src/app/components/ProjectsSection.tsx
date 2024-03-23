import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "AI Genius Web",
    description:
      "Create convertion, image, video, code and music using ai tools.",
    image: "/images/projects/Dashboard-Nif-ai.png",
    gitUrl: "https://github.com/nivnomdar/Nif-ai",
  },
  {
    id: 2,
    title: "Spotify Web",
    description: "Listen to music and choose your favorite songs.",
    image: "/images/projects/Dashboard-Nif-Spotify.png",
    gitUrl: "https://github.com/nivnomdar/Nif-Spotify",
  },
  {
    id: 3,
    title: "Movies-TvShows Web",
    description:
      "Search for movies or tvshows, see their information and add to your favorites.",
    image: "/images/projects/Dashboard-MoviesTvShows.png",
    gitUrl: "https://github.com/nivnomdar/Nif-MoviesTvShows-App",
  },
  {
    id: 4,
    title: "Games Web",
    description:
      "Search Videogames, see their information and add to your favorites.",
    image: "/images/projects/Dashboard-VideoGames.png",
    gitUrl: "https://github.com/nivnomdar/Nif-GamesWeb",
  },
  {
    id: 5,
    title: "Add-Note Project Web",
    description: "Add a new note, edit or remove it.",
    image: "/images/projects/Dashboard-Note.png",
    gitUrl: "https://github.com/nivnomdar/Note-Project-1",
  },
  {
    id: 6,
    title: "Crypto Web",
    description:
      "Stay informed about cryptocurrency industry updates and market trends.",
    image: "/images/projects/Dashboard-Crypto.png",
    gitUrl: "https://github.com/nivnomdar/Crypto-Web-Project",
  },
  {
    id: 7,
    title: "Meeting-Room Schedule Web",
    description: "Choose meeting room, team and time and add to the schedule.",
    image: "/images/projects/Dashoboard-MeetingRoomsSchedule.png",
    gitUrl: "https://github.com/nivnomdar/Meeting-Rooms-Schedule",
  },
  {
    id: 8,
    title: "Cellphone Lab Web",
    description:
      "Improve customer service by managing waiting lists based on inquiry types. Collect and store phone numbers for prioritized assistance.",
    image: "/images/projects/Dashboard-CellphoneLab.png",
    gitUrl: "https://github.com/nivnomdar/CellKlum-Phone-Services",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projectsSection">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mx-5">
        {projectsData.map((project) => (
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
