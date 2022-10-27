"use client";
//
import "tailwindcss/tailwind.css";

//
import { UserProvider } from "@auth0/nextjs-auth0";

const RootLayout: React.FCC = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
