"use server";
import { DocumentNode } from "graphql";

import { env } from "@/env";

export const getPosts = async <T>({
  query,
  after,
  first,
}: {
  after?: string | null;
  query: DocumentNode | string;
  first: number;
}): Promise<T> => {
  const response = await fetch(env.DATABASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.DATABASE_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables: {
        after,
        first,
      },
    }),
  });
  const json = await response.json();
  return json.data as T;
};
