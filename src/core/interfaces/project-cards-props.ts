import { IPortfolioData } from "./get-portfolio-by-category-query";

export interface IProjectCardsProps {
  selectedCategory:
    | {
        id: string;
        categoryName: string;
        portfolio: Array<IPortfolioData>;
      }
    | undefined;
}
