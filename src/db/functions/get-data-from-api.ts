"use server";
import { env } from "@/env";

export const getDataFromApi = async <T>({
  query,
}: {
  query: string;
}): Promise<T> => {
  const response = await fetch(env.DATABASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.DATABASE_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    }),
  });
  const json = await response.json();
  return json.data as T;
};
