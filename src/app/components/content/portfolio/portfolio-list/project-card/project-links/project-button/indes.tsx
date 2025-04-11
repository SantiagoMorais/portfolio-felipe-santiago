import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import { IProjectButtonProps } from "@/core/interfaces/project-button-props";

export const ProjectButton = ({
  icon,
  isMouseIn,
  url,
  buttonText,
}: IProjectButtonProps) => (
  <Button
    asChild
    variant="outline"
    className="hover:border-secondary hover:text-secondary border-2 border-transparent duration-300 hover:opacity-80"
  >
    <a
      href={url}
      target="_blank"
      onClick={(e) => {
        if (!isMouseIn) e.preventDefault();
      }}
      className={`text-xl font-normal ${isMouseIn && "hidden"}`}
    >
      <FontAwesomeIcon icon={icon} className="mr-2 text-xl" />
      {buttonText}
    </a>
  </Button>
);
