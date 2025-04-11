"use client";

import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import { IPortfolioData } from "@/core/interfaces/get-portfolio-by-category-query";

import { ProjectButton } from "./project-button/indes";

export const ProjectLinks = ({
  project,
}: {
  project: Pick<IPortfolioData, "htmlUrl" | "homePage">;
}) => {
  const [isMouseIn, setIsMouseIn] = useState<boolean>(false);
  const handleMousePosition = (mouseIn: boolean) => {
    setIsMouseIn(mouseIn);
  };

  return (
    <div
      className={`group absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer flex-col items-center justify-center gap-2 opacity-0 duration-300 ${isMouseIn && "opacity-100 backdrop-blur-xs"}`}
      onMouseEnter={() => handleMousePosition(true)}
      onMouseLeave={() => handleMousePosition(false)}
    >
      <ProjectButton
        icon={faEye}
        isMouseIn={isMouseIn}
        url={project.homePage}
        buttonText="Ver site"
      />

      {project.htmlUrl && (
        <ProjectButton
          icon={faGithubAlt}
          isMouseIn={isMouseIn}
          url={project.htmlUrl}
          buttonText="GitHub"
        />
      )}
    </div>
  );
};
