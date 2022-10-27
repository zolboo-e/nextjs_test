//
import "tailwindcss/tailwind.css";

//
import { CustomUserProvider } from "common/components";

const RootLayout: React.FCC = ({ children }) => {
  return (
    <html>
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {/* {children} */}
        <CustomUserProvider>{children}</CustomUserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
