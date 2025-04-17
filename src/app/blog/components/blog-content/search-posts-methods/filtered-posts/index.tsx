"use client";
import { useEffect, useState } from "react";

import { IPostsData } from "@/core/interfaces/get-posts-query";
import { getPosts } from "@/db/functions/get-posts";
import { GET_FILTERED_POSTS_QUERY } from "@/db/queries/get-filtered-posts-query";

import { PostsList } from "../posts-list";

export const FilteredPosts = ({ filter }: { filter: string }) => {
  const [data, setData] = useState<IPostsData | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts<IPostsData>({
        query: GET_FILTERED_POSTS_QUERY,
        first: 10,
        filter,
      });

      setData(posts);
    };

    fetchPosts();
  }, [filter]);

  if (!data) return <p>Carregando posts...</p>;
  return <PostsList initialData={data} />;
};
