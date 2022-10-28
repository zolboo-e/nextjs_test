//
import {
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

//
import { classNames } from "lib/utils";

export const Sidebar: React.FC = () => {
  return (
    <>
      <Link
        href="/"
        prefetch={false}
        className={classNames(
          "hidden items-center justify-center bg-[#c62f37]",
          "sm:flex"
        )}
      >
        <div className="relative aspect-square w-16">
          <Image
            src="/assets/images/logo.png"
            width={64}
            height={64}
            alt="gtn logo"
          />
        </div>
      </Link>
      <div
        className={classNames(
          "row-start-2 hidden h-full bg-primary",
          "sm:block"
        )}
      >
        <ul>
          {sidebarItems.map(({ key, href, icon, title }) => (
            <li key={key}>
              <Link
                href={href}
                prefetch={false}
                className={classNames(
                  "flex aspect-square w-full flex-col items-center justify-center gap-y-2 text-white",
                  "hover:bg-black/20"
                )}
              >
                <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-white/20">
                  <div className="w-4">{icon}</div>
                </div>
                <div className="text-xs">{title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export interface ISidebarItem {
  key: string;
  href: string;
  icon: ReactNode;
  title: string;
}
export const sidebarItems = [
  {
    key: "tickets",
    href: "/tickets",
    icon: <ChatBubbleLeftRightIcon />,
    title: "チケット",
  },
  {
    key: "options",
    href: "/options",
    icon: <ChatBubbleLeftRightIcon />,
    title: "オプション",
  },
  {
    key: "companies",
    href: "/companies",
    icon: <BuildingOffice2Icon />,
    title: "法人",
  },
  {
    key: "customers",
    href: "/customers",
    icon: <UserGroupIcon />,
    title: "ユーザー",
  },
  {
    key: "settings",
    href: "/settings",
    icon: <Cog6ToothIcon />,
    title: "設定",
  },
];
