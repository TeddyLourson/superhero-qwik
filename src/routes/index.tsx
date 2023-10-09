import { Resource, component$ } from "@builder.io/qwik";
import { browserClient } from "~/data/browser";
import { z, type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import { SuperheroCard } from "~/components/superhero-card/superhero-card";
import { createServerAPIClient } from "~/data/server";
import { Superhero } from "~/types/superhero";

// Server
export const UseSuperheroes = z.object({
  superheroes: Superhero.array(),
});
export type UseSuperheroes = z.infer<typeof UseSuperheroes>;
export const useSuperheroes = routeLoader$<UseSuperheroes>(
  async (requestEvent) => {
    const api = createServerAPIClient(requestEvent);
    const res = await api.superheroes.getSuperheroes({});
    return { superheroes: res.superheroes };
  }
);

export default component$(() => {
  return (
    <>
      <h1>Retrieved data :</h1>
      {/* Server */}
      {useSuperheroes().value.superheroes.map((superhero) => (
        <SuperheroCard key={superhero.id} superhero={superhero} />
      ))}

      {/* Browser */}
      <Resource
        value={browserClient.superheroes.getSuperheroes({})}
        onResolved={(res) => (
          <>
            {res.superheroes.map((superhero) => (
              <SuperheroCard key={superhero.id} superhero={superhero} />
            ))}
          </>
        )}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
