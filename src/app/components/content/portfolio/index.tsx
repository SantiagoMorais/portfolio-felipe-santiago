import { IGetProjectsByCategoriesQuery } from "@/core/interfaces/get-portfolio-by-category-query";
import { getDataFromApi } from "@/db/functions/get-data-from-api";
import { GET_PORTFOLIO_BY_CATEGORY } from "@/db/queries/get-portfolio-by-category-query";

import { ContentComingSoon } from "./content-coming-soon";
import { PortfolioDescription } from "./portfolio-description";
import { PortfolioList } from "./portfolio-list";
import { GithubRepositoriesLink } from "./portfolio-list/github-repositories-link";

export const Portfolio = async () => {
  const { categories } =
    await getDataFromApi<IGetProjectsByCategoriesQuery>({
      query: GET_PORTFOLIO_BY_CATEGORY,
    });

  const renderContent = () => {
    if (!categories.length) return <ContentComingSoon />;
    return <PortfolioList categories={categories} />;
  };

  return (
    <section className="flex w-full max-w-(--breakpoint-xl) flex-col items-center gap-8">
      <PortfolioDescription />
      {renderContent()}
      <GithubRepositoriesLink />
    </section>
  );
};
