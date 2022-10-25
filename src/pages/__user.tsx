import { useUser } from "@auth0/nextjs-auth0";
import type { NextPage } from "next";
import Image from "next/image";

const UserPage: NextPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1 className="text-red-400">Next User Page</h1>
      {user && (
        <div>
          <div className="w-[120px] h-[120px] relative">
            <Image src={user.picture ?? ""} alt="user" layout="fill" />
          </div>
          <h1>{user.email}</h1>
        </div>
      )}
    </div>
  );
};

export default UserPage;
