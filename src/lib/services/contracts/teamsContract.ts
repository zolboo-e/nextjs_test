//
import { z } from "zod";

//
import { c } from "./contract";

export const teamsContract = c.router({
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
