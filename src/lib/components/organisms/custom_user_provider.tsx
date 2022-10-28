"use client";

//
import { UserProvider } from "@auth0/nextjs-auth0";

export const CustomUserProvider: React.FCC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};
