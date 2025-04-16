import { ContentContainer } from "@/components/content-container";
import { IPostsData } from "@/core/interfaces/get-posts-query";
import { getPosts } from "@/db/functions/get-posts";
import { GET_POSTS_QUERY } from "@/db/queries/get-posts-query";

import { Banner } from "./banner";
import { PostsList } from "./posts-list";

export const BlogContent = async () => {
  const data = await getPosts<IPostsData>({
    first: 10,
    query: GET_POSTS_QUERY,
  });

  return (
    <ContentContainer>
      <Banner />
      <PostsList initialData={data} />
    </ContentContainer>
  );
};
