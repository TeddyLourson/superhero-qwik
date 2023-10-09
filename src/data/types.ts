import { PromiseClient } from "@connectrpc/connect";
import { SuperheroService } from "@buf/teddy-lourson_superhero.connectrpc_es/superhero/v1/superhero_service_connect";

export type APIClient = {
  superheroes: PromiseClient<typeof SuperheroService>;
};
