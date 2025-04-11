export interface IPortfolioData {
  id: string;
  updatedAt: string;
  createdAt: string;
  name: string;
  htmlUrl: string | null;
  description: string;
  homePage: string;
  topics: Array<string>;
  banner?: {
    url: string;
  };
}

export interface IGetProjectsByCategoriesQuery {
  categories: Array<{
    id: string;
    categoryName: string;
    portfolio: Array<IPortfolioData>;
  }>;
}
