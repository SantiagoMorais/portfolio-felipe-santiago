"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useSearchPostByTitle } from "@/contexts/searchPostByTitleContext";
import {
  searchPostByTitleSchema,
  TSearchPostByTitle,
} from "@/core/types/search-posts-by-title-schema";

export const SearchPostsByTitleForm = () => {
  const { setPostTitle } = useSearchPostByTitle();

  const form = useForm<TSearchPostByTitle>({
    resolver: zodResolver(searchPostByTitleSchema),
    defaultValues: {
      postTitle: "",
    },
  });

  const onSubmit = (data: TSearchPostByTitle) => {
    setPostTitle(data.postTitle);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-1">
        <FormField
          control={form.control}
          name="postTitle"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="w-full rounded-r-none border-r-0"
                  {...field}
                  placeholder="Procure um post"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-l-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
      </form>
    </Form>
  );
};
