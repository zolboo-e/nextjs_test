// "use client";

//
// import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";

//
import { CloseDrawer, DrawerItem, sidebarItems } from "common/components";
import { classNames } from "common/utils";

export const drawerId = "my-drawer";
export const Drawer: React.FCC = ({ children }) => {
  // const { user } = useUser();

  return (
    <div className="drawer">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side">
        <DrawerMenu />
      </div>
    </div>
  );
};

const DrawerMenu: React.FC = () => {
  return (
    <>
      <label htmlFor={drawerId} className="drawer-overlay" />
      <div
        className={classNames(
          "flex h-screen w-[80vw] flex-col bg-primary py-5"
        )}
      >
        <div className="flex items-center gap-x-2.5 px-2.5">
          <div className="relative aspect-square w-12">
            <Image
              src="/assets/images/logo.png"
              width={64}
              height={64}
              alt="gtn logo"
            />
          </div>
          <div className="text-3xl font-medium text-white">{`Circle`}</div>
        </div>
        <ul className="flex flex-col">
          {sidebarItems.map(({ key, ...rest }) => (
            <li key={key}>
              <DrawerItem {...rest} />
              {/* <Link
                href={href}
                className={classNames(
                  "flex items-center gap-x-2.5 px-5 py-2.5 text-white",
                  "hover:bg-black/20"
                )}
                onClick={() => {
                  const element = document.getElementById(drawerId);
                  if (element instanceof HTMLInputElement) {
                    element.checked = false;
                  }
                }}
              >
                <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-white/20">
                  <div className="w-4">{icon}</div>
                </div>
                <div className="text-xs">{title}</div>
              </Link> */}
            </li>
          ))}
        </ul>
        {/* {user && (
        <div className="flex flex-col gap-y-2.5 px-5">
          <small className="text-white">{`その他`}</small>
          <div
            className={classNames(
              "flex items-center gap-x-2.5 px-5 py-2.5 text-white",
              "hover:bg-black/20"
            )}
          >
            <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-white/20">
              <Image src={user.picture ?? ""} alt="user" />
            </div>
            <div className="text-xs">{user.name}</div>
          </div>
        </div>
      )}
      {user && (
        <Link
          href="/api/auth/logout"
          className={classNames("px-5 py-2.5 text-white", "hover:bg-black/20")}
        >{`ログアウト`}</Link>
      )} */}
        {/* <CloseDrawer /> */}
      </div>
    </>
  );
};
