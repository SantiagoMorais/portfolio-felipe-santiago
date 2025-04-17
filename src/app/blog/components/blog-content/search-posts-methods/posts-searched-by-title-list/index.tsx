"use client";

import { useEffect, useState } from "react";

import { ButtonResetSearchHooks } from "@/components/button-reset-search-hooks";
import { IPostsData } from "@/core/interfaces/get-posts-query";
import { getPosts } from "@/db/functions/get-posts";
import { GET_POSTS_SEARCHED_BY_TITLE_QUERY } from "@/db/queries/get-posts-searched-by-title-query";

import { PostsList } from "../posts-list";

export const PostsSearchedByTitleList = ({ title }: { title: string }) => {
  const [data, setData] = useState<IPostsData | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts<IPostsData>({
        query: GET_POSTS_SEARCHED_BY_TITLE_QUERY,
        first: 10,
        title,
      });

      setData(posts);
    };

    fetchPosts();
  }, [title]);

  if (!data) return <p>Carregando posts...</p>;

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <ButtonResetSearchHooks />
      <p className="text-center text-lg">
        {data && data.postsConnection.edges.length > 0
          ? `Resultados para "${title.toLocaleLowerCase()}"`
          : `Nenhum resultado para "${title.toLocaleLowerCase()}"`}
      </p>
      <PostsList initialData={data} />
    </div>
  );
};
