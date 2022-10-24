import hkdf from "futoin-hkdf";
import { jwtDecrypt } from "jose";

export const decrypt = async (session: string, secret: string) => {
  const { payload } = await jwtDecrypt(
    session,
    hkdf(secret, 32, { info: "JWE CEK", hash: "SHA-256" })
  );

  return payload;
};
