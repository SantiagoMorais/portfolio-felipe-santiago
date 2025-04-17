import { ContentContainer } from "@/components/content-container";
import { IPostsData } from "@/core/interfaces/get-posts-query";
import { IPostsFilters } from "@/core/interfaces/posts-filters-query";
import { getPosts } from "@/db/functions/get-posts";
import { getProjectsByCategory } from "@/db/functions/get-projects-by-category";
import { GET_FILTERS_QUERY } from "@/db/queries/get-filters-query";
import { GET_POSTS_QUERY } from "@/db/queries/get-posts-query";

import { Banner } from "./banner";
import { SearchPostsMethods } from "./search-posts-methods";

export const BlogContent = async () => {
  const data = await getPosts<IPostsData>({
    first: 10,
    query: GET_POSTS_QUERY,
  });

  const filters = await getProjectsByCategory<IPostsFilters>({
    query: GET_FILTERS_QUERY,
  });

  return (
    <ContentContainer>
      <Banner />
      <SearchPostsMethods initialData={data} filters={filters} />
    </ContentContainer>
  );
};
