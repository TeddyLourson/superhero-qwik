import { Transport, createPromiseClient } from "@connectrpc/connect";
import { APIClient } from "./types";
import { SuperheroService } from "@buf/teddy-lourson_superhero.connectrpc_es/superhero/v1/superhero_service_connect";

export const buildAPIClient = (transport: Transport): APIClient => {
  const superheroClient = createPromiseClient(SuperheroService, transport);
  const apiClient: APIClient = { superheroes: superheroClient };
  return apiClient;
};
