import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (newTag: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "text-white border-orange-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-3 py-2 text-xl cursor-pointer`}
      onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
