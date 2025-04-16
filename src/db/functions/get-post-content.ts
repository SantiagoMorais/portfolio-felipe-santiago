import { env } from "@/env";

export const getPostContent = async <T>({
  query,
  id,
}: {
  id: string;
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
      variables: {
        id,
      },
    }),
  });
  const json = await response.json();
  return json.data as T;
};
