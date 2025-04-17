import { Collapse } from "react-collapse";

import { useFilterPosts } from "@/contexts/filterPostsContext";
import { useSearchPostByTitle } from "@/contexts/searchPostByTitleContext";
import { IPostsFilters } from "@/core/interfaces/posts-filters-query";

export const AccordionContent = ({
  data,
  isOpen,
}: {
  data: IPostsFilters;
  isOpen: boolean;
}) => {
  const { setFilter } = useFilterPosts();
  const { setPostTitle } = useSearchPostByTitle();

  const handleSelectFilter = (selectedFilter: string) => {
    if (!selectedFilter) return;
    setFilter(selectedFilter);
    setPostTitle("");
  };

  return (
    <Collapse isOpened={isOpen}>
      <div className="border-muted bg-background flex flex-col rounded-md border px-2 py-2">
        {data.filters.map((filter) => (
          <button
            onClick={() => handleSelectFilter(filter.title)}
            key={filter.id}
            className="text-foreground after:border-muted hover:bg-primary/30 relative mb-1 flex w-full rounded-md px-4 py-2 duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:border-b after:duration-300 last-of-type:mb-0 last-of-type:after:border-b-0 hover:after:opacity-0"
          >
            {filter.title}
          </button>
        ))}
      </div>
    </Collapse>
  );
};
