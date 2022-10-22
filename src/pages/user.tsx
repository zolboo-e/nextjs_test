import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const UserPage: NextPage = () => {
  return (
    <div>
      <h1 className="text-red-400">Next User Page</h1>
    </div>
  );
};

export default UserPage;
