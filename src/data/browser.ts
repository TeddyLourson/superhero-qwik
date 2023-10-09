import { createConnectTransport } from "@connectrpc/connect-web";
import { buildAPIClient } from "./utils";

export const createBrowserAPIClient = () => {
  const transport = createConnectTransport({
    // baseUrl: import.meta.env.PUBLIC_API!,
    baseUrl: "http://localhost:3000",
    fetch,
  });
  return buildAPIClient(transport);
};

export const browserClient = createBrowserAPIClient();
