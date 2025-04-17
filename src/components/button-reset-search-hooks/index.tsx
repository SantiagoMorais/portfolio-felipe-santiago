"use client";

import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFilterPosts } from "@/contexts/filterPostsContext";
import { useSearchPostByTitle } from "@/contexts/searchPostByTitleContext";

import { Button } from "../ui/button";

export const ButtonResetSearchHooks = () => {
  const { setPostTitle } = useSearchPostByTitle();
  const { setFilter } = useFilterPosts();

  const handleResetInput = () => {
    setPostTitle("");
    setFilter("");
  };

  return (
    <Button className="group space-x-2" onClick={handleResetInput}>
      <FontAwesomeIcon
        icon={faUndo}
        className="duration-300 group-hover:scale-110 group-hover:rotate-[-360deg]"
      />
      Retornar
    </Button>
  );
};
