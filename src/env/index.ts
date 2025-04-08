import { z } from "zod";

const envSchema = z.object({
  PHONE_NUMBER: z.string(),
  EMAIL: z.string().email(),
  LINKEDIN_URL: z.string().url(),
  GITHUB_PROFILE_URL: z.string().url(),
  INSTAGRAM_URL: z.string().url(),
  PROJECT_REPOSITORY_URL: z.string().url(),
  GITHUB_REPOSITORIES_URL: z.string().url(),
  DATABASE_URL: z.string().url(),
  DATABASE_ACESS_TOKEN: z.string(),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) throw new Error("Invalid Environment Variables");

export const env = _env.data;
