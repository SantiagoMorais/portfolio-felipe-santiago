import { z } from "zod";

export const searchPostByTitleSchema = z.object({
  postTitle: z.string().max(100, "Não exceder 100 caracteres"),
});

export type TSearchPostByTitle = z.infer<typeof searchPostByTitleSchema>;
