"use client";

import { useState } from "react";

import { useFilterPosts } from "@/contexts/filterPostsContext";
import { IPostsFilters } from "@/core/interfaces/posts-filters-query";

import { AccordionContent } from "./accordion-content";
import { ResetFilterButton } from "./reset-filter-button";

export const FilterPostsForm = ({ filters }: { filters: IPostsFilters }) => {
  const { filter } = useFilterPosts();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      className="group relative flex flex-1 flex-col pb-2"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="bg-background flex min-w-0 flex-1 cursor-pointer items-stretch md:w-full">
        <p
          className={`border-ring/60 group-hover:border-ring/100 group-hover:ring-muted/60 text-foreground flex min-w-0 flex-1 items-center rounded-md rounded-r-none border border-r-0 px-3 duration-300 group-hover:ring-3 ${!filter && "text-foreground/50"}`}
        >
          {!filter ? "Selecione um filtro" : filter}
        </p>
        <ResetFilterButton isOpen={isOpen} />
      </div>
      <AccordionContent data={filters} isOpen={isOpen} />
    </div>
  );
};
