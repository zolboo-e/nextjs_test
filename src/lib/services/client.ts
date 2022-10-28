//
import { initClient } from "@ts-rest/core";
import { cookies } from "next/headers";

//
import { auth0, backend } from "configs/default";
import { decrypt } from "lib/utils";

//
import { appContract } from "./contracts";

export const client = initClient(appContract, {
  baseUrl: backend.baseUrl,
  baseHeaders: {
    "X-API-KEY": backend.apiKey,
  },
  api: async ({ path, method, headers, body }) => {
    const _cookies = cookies();
    const session = _cookies.get("appSession");
    if (!session) {
      throw Error("UNAUTHORIZED");
    }

    const { accessToken } = await decrypt(session, auth0.secret);
    const response = await fetch(path, {
      method,
      body,
      headers: {
        ...headers,
        authorization: `Bearer ${accessToken}`,
      },
    });

    return { status: response.status, body: await response.json() };
  },
});
