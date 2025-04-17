"use client";
import { useFilterPosts } from "@/contexts/filterPostsContext";
import { useSearchPostByTitle } from "@/contexts/searchPostByTitleContext";
import { IPostsData } from "@/core/interfaces/get-posts-query";

import { PostsList } from "./posts-list";
import { SearchPostsByTitleForm } from "./search-posts-by-title-form";

export const SearchPostsMethods = ({
  initialData,
}: {
  initialData: IPostsData;
}) => {
  const { postTitle } = useSearchPostByTitle();
  const { filter } = useFilterPosts();

  const content = () => {
    if (postTitle) return "";
    if (filter) return "";
    return <PostsList initialData={initialData} />;
  };

  return (
    <section className="flex w-full flex-col">
      <div className="flex flex-col gap-4 pb-8 md:flex-row">
        <SearchPostsByTitleForm />
      </div>
      {content()}
    </section>
  );
};
