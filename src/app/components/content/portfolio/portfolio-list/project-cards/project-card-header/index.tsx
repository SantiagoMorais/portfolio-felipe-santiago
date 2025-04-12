import { CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { IPortfolioData } from "@/core/interfaces/get-portfolio-by-category-query";

export const ProjectCardHeader = ({
  project,
}: {
  project: Pick<IPortfolioData, "description" | "name">;
}) => (
  <CardHeader>
    <HoverCard>
      <HoverCardTrigger className="group cursor-default">
        <CardTitle className="text-lg group-hover:underline">
          {project.name}
        </CardTitle>
        <p className="line-clamp-2 text-start group-hover:underline">
          {project.description}
        </p>
      </HoverCardTrigger>
      <HoverCardContent className="flex flex-col gap-2 p-4">
        <h2 className="text-lg font-semibold">{project.name}</h2>
        <p>{project.description}</p>
      </HoverCardContent>
    </HoverCard>
  </CardHeader>
);
