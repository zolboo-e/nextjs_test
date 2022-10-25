//
import { useUser } from "@auth0/nextjs-auth0";
import type { NextPageWithLayout } from "next";
import Image from "next/image";

//
import { MainLayout } from "common/components";

const SettingsPage: NextPageWithLayout = () => {
  const { user } = useUser();

  return (
    <div>
      <h1 className="text-red-400">Next User Page</h1>
      {user && (
        <div>
          <div className="relative h-[120px] w-[120px]">
            <Image src={user.picture ?? ""} alt="user" layout="fill" />
          </div>
          <h1>{user.email}</h1>
        </div>
      )}
    </div>
  );
};
SettingsPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};
export default SettingsPage;
