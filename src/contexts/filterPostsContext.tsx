"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface IFilterPostsContext {
  filter: string;
  setFilter: (title: string) => void;
}

const FilterPostsContext = createContext<IFilterPostsContext>({
  filter: "",
  setFilter: () => {},
});

export const FilterPostsProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<string>("");

  return (
    <FilterPostsContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterPostsContext.Provider>
  );
};

export const useFilterPosts = () => {
  const context = useContext(FilterPostsContext);
  if (!context)
    throw new Error(
      "The useFilterPosts must be wrapped by a FilterPostsProvider"
    );
  return context;
};
