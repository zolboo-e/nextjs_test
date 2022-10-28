//
import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();
export const contract = c.router({
  getTeams: {
    method: "GET",
    path: "/teams",
    responses: {
      200: z.object({
        teams: z
          .object({
            id: z.number(),
            code: z.number(),
            name: z.string(),
            members_count: z.number(),
            thumb: z.string().nullable(),
          })
          .array(),
      }),
    },
    summary: "Get teams",
  },
});
