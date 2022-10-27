//
import type { NextApiRequest, NextApiResponse } from "next";

//
import { decrypt } from "common/utils";
import { auth0 } from "configs/default";

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
