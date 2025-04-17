import { ITechnologyCard } from "@/utils/technology-cards";

import { ICursorPosition } from "./routes-list-props";

export interface ITechnologyCardProps {
  card: ITechnologyCard;
  setPosition: React.Dispatch<React.SetStateAction<ICursorPosition>>;
}
