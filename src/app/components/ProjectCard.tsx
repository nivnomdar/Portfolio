import React from "react";
import { SearchCode } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
}

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
}: ProjectCardProps) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}>
        <div
          className="overlay items-center justify-center absolute top-0 
            left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden 
            group-hover:flex group-hover:bg-opacity-80 group-hover:border
             group-hover:border-white transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
            <SearchCode className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
