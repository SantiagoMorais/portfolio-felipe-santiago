"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { IGetProjectsByCategoriesQuery } from "@/core/interfaces/get-portfolio-by-category-query";
import { TCategiesList } from "@/core/types/categories-list";
import { renderIconByCategory } from "@/utils/render-icon-by-category";

import { ProjectCards } from "./project-cards";

export const PortfolioList = ({
  categories,
}: IGetProjectsByCategoriesQuery) => {
  const sortedCategories = [...categories].sort((a, b) => {
    if (a.categoryName === "Principais") return -1;
    if (b.categoryName === "Principais") return 1;
    return a.categoryName.localeCompare(b.categoryName);
  });

  const [categorySelectedId, setCategorySelectedId] = useState<string>(
    sortedCategories[0].id
  );

  const handleCategorySelected = (id: string) => {
    setCategorySelectedId(id);
  };

  const selectedCategory = categories.find(
    (category) => category.id === categorySelectedId
  );

  return (
    <section className="flex w-full flex-col items-center gap-4 md:flex-row md:items-start md:gap-8">
      <ul className="flex w-full flex-wrap items-center justify-center gap-2 md:w-fit md:flex-col">
        {sortedCategories.map((category) => (
          <li
            key={category.id}
            className="w-full flex-1"
            onClick={() => handleCategorySelected(category.id)}
          >
            <Button
              variant="ghost"
              className={`w-full overflow-hidden text-ellipsis md:max-w-64 md:justify-start md:text-lg ${category.id === selectedCategory?.id && "bg-primary/20 text-primary"}`}
            >
              <FontAwesomeIcon
                icon={renderIconByCategory(
                  category.categoryName as TCategiesList
                )}
              />
              <p className="truncate">{category.categoryName}</p>
            </Button>
          </li>
        ))}
      </ul>
      <ProjectCards selectedCategory={selectedCategory} />
    </section>
  );
};
