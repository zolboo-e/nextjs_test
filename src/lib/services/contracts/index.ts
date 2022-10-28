//
import { c } from "./contract";
import { teamsContract } from "./teamsContract";

export const appContract = c.router({
  teams: teamsContract,
});
