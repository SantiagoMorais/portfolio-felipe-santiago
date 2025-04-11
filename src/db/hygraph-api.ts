import { env } from "@/env";

export const getProjectsByCategory = async <T>({
  query,
}: {
  query: string;
}): Promise<T> => {
  const response = await fetch(env.DATABASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.DATABASE_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const json = await response.json();
  return json.data as T;
};
