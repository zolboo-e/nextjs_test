//
import type { NextApiRequest, NextApiResponse } from "next";

//
import { auth0 } from "configs/default";
import { decrypt } from "lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = req.cookies["appSession"];

  if (session) {
    const payload = await decrypt(session, auth0.secret);

    return res.status(200).json(payload);
  }

  return res.status(200).json({ user: null });
}
