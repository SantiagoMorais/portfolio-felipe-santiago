import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface IProjectButtonProps {
  icon: IconDefinition;
  isMouseIn: boolean;
  url: string;
  buttonText: string;
}
