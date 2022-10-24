//
import type { NextApiRequest, NextApiResponse } from "next";

//
import { decrypt } from "common/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = req.cookies["appSession"];
  const secret = process.env.AUTH0_SECRET;

  if (session && secret) {
    const payload = await decrypt(session, secret);

    return res.status(200).json(payload);
  }

  return res.status(200).json({ user: null });
}
