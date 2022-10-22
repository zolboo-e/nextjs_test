//
import "tailwindcss/tailwind.css";

//
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppProps } from "next/app";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default MyApp;

const AppWrapper: React.FCC = ({ children }) => {
  return (
    <UserProvider>
      <Layout>{children}</Layout>
    </UserProvider>
  );
};

const Layout: React.FCC = ({ children }) => {
  return (
    <div className="h-screen w-screen grid grid-cols-[80px,1fr] grid-rows-[70px,1fr]">
      <div className="bg-[#C62F37] flex justify-center items-center">
        <div className="w-8 h-8 bg-white rounded flex justify-center items-center">
          GTN
        </div>
      </div>
      <div className="bg-blue-400">Header</div>
      <ul className="bg-primary row-start-2 text-white">
        <li>
          <Link href="/">
            <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
              Index
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/user">
            <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
              User
            </a>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
              Settings
            </a>
          </Link>
        </li>
      </ul>

      {children}
    </div>
  );
};
