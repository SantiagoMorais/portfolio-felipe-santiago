"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import {
  ICursorPosition,
  IRoutesListProps,
} from "@/core/interfaces/routes-list-props";
import { navBarRoutes } from "@/utils/routes";

import { Cursor } from "./cursor";
import { ResumeLink } from "./resume-link";
import { RouteItem } from "./route-item";

export const RoutesList = ({
  insideASheet,
  className,
  resumes,
}: IRoutesListProps) => {
  const [position, setPosition] = useState<ICursorPosition>({
    top: 0,
    left: 0,
    width: 0,
    opacity: 0,
    height: 0,
  });

  const handleOnMouseLeave = () => {
    setPosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <ul
      onMouseLeave={handleOnMouseLeave}
      className={twMerge(
        "relative flex flex-col items-center gap-4 pt-8 md:mx-auto md:flex-row md:justify-center md:gap-0 md:pt-0",
        className
      )}
    >
      {navBarRoutes.map((route) => (
        <RouteItem
          key={route.title}
          route={route}
          setPosition={setPosition}
          insideASheet={insideASheet}
        />
      ))}
      <ResumeLink resumes={resumes} linksData={{ setPosition, insideASheet }} />
      <Cursor position={position} />
    </ul>
  );
};
