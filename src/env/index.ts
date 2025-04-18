import { z } from "zod";

const envSchema = z.object({
  PHONE_NUMBER: z.coerce.string().default("5531996951033"),
  EMAIL: z.string().email().optional(),
  LINKEDIN_URL: z.string().url().optional(),
  GITHUB_PROFILE_URL: z.string().url(),
  INSTAGRAM_URL: z.string().url().optional(),
  PROJECT_REPOSITORY_URL: z.string().url(),
  GITHUB_REPOSITORIES_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
  DATABASE_ACCESS_TOKEN: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) throw new Error("Invalid Environment Variables", _env.error);

export const env = _env.data;
