//
import "tailwindcss/tailwind.css";

//
import { UserProvider } from "@auth0/nextjs-auth0";
import type { AppPropsWithLayout } from "next/app";

const MyApp: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AppWrapper>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </AppWrapper>
  );
};

export default MyApp;

const AppWrapper: React.FCC = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

// const Layout: React.FCC = ({ children }) => {
//   const { user, isLoading } = useUser();

//   return (
//     <div className="h-screen w-screen grid grid-cols-[80px,1fr] grid-rows-[70px,1fr]">
//       <div className="bg-[#C62F37] flex justify-center items-center">
//         <div className="w-8 h-8 bg-white rounded flex justify-center items-center">
//           GTN
//         </div>
//       </div>
//       <div className="bg-blue-400">
//         {!isLoading && !user && (
//           <div>
//             {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
//             <a href="/api/auth/login">Login</a>
//           </div>
//         )}
//       </div>
//       <ul className="bg-primary row-start-2 text-white relative">
//         <li>
//           <Link href="/">
//             <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
//               Index
//             </a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/about">
//             <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
//               About
//             </a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/user">
//             <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
//               User
//             </a>
//           </Link>
//         </li>
//         <li>
//           <Link href="/settings">
//             <a className="w-full aspect-square flex justify-center items-center hover:bg-white/10">
//               Settings
//             </a>
//           </Link>
//         </li>
//         {!isLoading && user && (
//           <li>
//             {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
//             <a
//               className="absolute bottom-0 w-full aspect-square flex justify-center items-center hover:bg-white/10"
//               href="/api/auth/logout"
//             >
//               Logout
//             </a>
//           </li>
//         )}
//       </ul>

//       {children}
//     </div>
//   );
// };
