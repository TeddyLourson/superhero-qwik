import { z } from "@builder.io/qwik-city";

export const Superhero = z.object({
  id: z.string(),
  name: z.string(),
  firstName: z.string(),
  lastName: z.string(),
});
export type Superhero = z.infer<typeof Superhero>;
