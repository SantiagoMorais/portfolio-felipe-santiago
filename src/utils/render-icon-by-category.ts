import {
  faNodeJs,
  faReact,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLaptopCode,
  faMobileScreen,
  faN,
} from "@fortawesome/free-solid-svg-icons";

import { TCategiesList } from "@/core/types/categories-list";

export const renderIconByCategory = (
  category: TCategiesList
): IconDefinition => {
  switch (category) {
    case "React":
      return faReact;
    case "Next":
      return faN;
    case "Node":
      return faNodeJs;
    case "React Native":
      return faMobileScreen;
    default:
      return faLaptopCode;
  }
};
