"use client";

import Image from "next/image";

import imageNotFound from "@/assets/imgs/image-not-found.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { IPortfolioData } from "@/core/interfaces/get-portfolio-by-category-query";

import { ProjectCardHeader } from "./project-card-header";
import { ProjectLinks } from "./project-links";

export const ProjectCards = ({
  selectedCategory,
}: {
  selectedCategory:
    | {
        id: string;
        categoryName: string;
        portfolio: Array<IPortfolioData>;
      }
    | undefined;
}) => (
  <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
    {selectedCategory?.portfolio.map((project) => (
      <Card key={project.id} className="bg-muted w-full">
        <ProjectCardHeader project={project} />
        <CardContent>
          <div
            key={project.id}
            className="group relative h-80 w-full overflow-hidden rounded-lg"
          >
            <ProjectLinks project={project} />

            <Image
              src={project.banner ? project.banner.url : imageNotFound}
              alt={project.description}
              fill
              className="object-cover object-top duration-300 group-hover:scale-110"
            />
          </div>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {project.topics.map((topic) => (
              <li
                key={topic}
                className="bg bg-muted-foreground rounded-md px-2 uppercase"
              >
                {topic}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
);
