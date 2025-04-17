import { Collapse } from "react-collapse";

import { useFilterPosts } from "@/contexts/filterPostsContext";
import { useSearchPostByTitle } from "@/contexts/searchPostByTitleContext";
import { IPostsFilters } from "@/core/interfaces/posts-filters-query";
import { cn } from "@/lib/utils";

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
      <div
        className={cn(
          "border-muted bg-background absolute z-10 mt-2 flex w-full flex-col rounded-md border px-2 py-2 shadow-md transition-all duration-300",
          !isOpen && "pointer-events-none opacity-0"
        )}
      >
        {data.filters.map((filter) => (
          <button
            onClick={() => handleSelectFilter(filter.title)}
            key={filter.id}
            className="text-foreground hover:bg-primary/30 relative mb-1 flex w-full rounded-md px-4 py-2 duration-300 last-of-type:mb-0"
          >
            {filter.title}
          </button>
        ))}
      </div>
    </Collapse>
  );
};
