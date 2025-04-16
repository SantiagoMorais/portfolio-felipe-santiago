import { ContentContainer } from "@/components/content-container";

import { Banner } from "./banner";
import { PostsList } from "./posts-list";

export const BlogContent = () => (
  <ContentContainer>
    <Banner />
    <PostsList />
  </ContentContainer>
);
