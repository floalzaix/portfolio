import { z } from "zod";

/**
 * A simple project schema for the modeling of a p
 * project I made in real life.
 */
export const ProjectSchema = z.object({
  title: z.string(),
  goal: z.string(),
  techs: z.array(z.string()),
  note: z.string().optional(),
  image: z.string().optional(),
  video: z.string().optional(),
  link: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;