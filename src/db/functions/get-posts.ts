"use server";
import { env } from "@/env";

export const getPosts = async <T>({
  query,
  after,
  first,
  title,
  filter,
}: {
  after?: string | null;
  query: string;
  first: number;
  title?: string;
  filter?: string;
}): Promise<T> => {
  const response = await fetch(env.DATABASE_URL, {
    next: { revalidate: 60 },
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
        ...(title ? { title } : {}),
        ...(filter ? { filter } : {}),
      },
    }),
  });
  const json = await response.json();
  return json.data as T;
};
