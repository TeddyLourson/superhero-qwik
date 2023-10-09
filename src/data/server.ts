import { RequestEventBase } from "@builder.io/qwik-city";
import { createConnectTransport } from "@connectrpc/connect-web";
import { buildAPIClient } from "./utils";

export const createServerAPIClient = (requestEvent: RequestEventBase) => {
  const transport = createConnectTransport({
    // baseUrl: requestEvent.env.get("PUBLIC_API")!,
    baseUrl: "http://localhost:3000",
    fetch,
  });
  return buildAPIClient(transport);
};
