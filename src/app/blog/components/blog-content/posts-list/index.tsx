"use client";

import {
  faFaceSmileWink,
  faPlus,
  faSpinner,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { IPostsData } from "@/core/interfaces/get-posts-query";
import { getPosts } from "@/db/functions/get-posts";
import { GET_POSTS_QUERY } from "@/db/queries/get-posts-query";

import { PostCard } from "./post-card";

export const PostsList = ({ initialData }: { initialData: IPostsData }) => {
  const [postsData, setPostsData] = useState<IPostsData>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const hasNextPage = postsData.postsConnection.pageInfo.hasNextPage;
  const endCursor = postsData.postsConnection.pageInfo.endCursor;

  const fetchMorePosts = async () => {
    if (isLoading || !hasNextPage) return;

    setIsLoading(true);
    try {
      const newData = await getPosts<IPostsData>({
        first: 10,
        after: endCursor,
        query: GET_POSTS_QUERY,
      });
      setPostsData((prevData) => ({
        postsConnection: {
          ...prevData.postsConnection,
          pageInfo: newData.postsConnection.pageInfo,
          edges: [
            ...prevData.postsConnection.edges,
            ...newData.postsConnection.edges,
          ],
        },
      }));
    } catch (error) {
      console.error("Error loading more posts", error);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonState = ((): { icon: IconDefinition; content: string } => {
    if (isLoading) return { content: "Carregando", icon: faSpinner };
    if (hasNextPage) return { content: "Carregar mais", icon: faPlus };
    return { content: "Fim da lista", icon: faFaceSmileWink };
  })();

  return (
    <section className="flex flex-col items-center gap-8">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {postsData.postsConnection.edges.map(({ node }) => (
          <PostCard key={node.id} postData={node} />
        ))}
      </div>
      <Button disabled={!hasNextPage || isLoading} onClick={fetchMorePosts}>
        {buttonState.content}
        <FontAwesomeIcon
          className={isLoading ? "animate-spin" : ""}
          icon={buttonState.icon}
        />
      </Button>
    </section>
  );
};
