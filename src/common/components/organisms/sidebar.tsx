//
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

//
import { classNames } from "common/utils";

export const Sidebar: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-[#c62f37]">
        <div className="relative aspect-square w-16">
          <Image src="/assets/images/logo.png" layout="fill" alt="gtn logo" />
        </div>
      </div>
      <div className="row-start-2 h-full bg-primary">
        <ul>
          {items.map(({ key, href, title }) => (
            <li key={key}>
              <Link href={href}>
                <a
                  className={classNames(
                    "flex aspect-square w-full flex-col items-center justify-center gap-y-2 text-white",
                    "hover:bg-white/20"
                  )}
                >
                  <div className="flex aspect-square w-8 items-center justify-center rounded-full bg-white/20">
                    <ChatBubbleLeftRightIcon className="w-4" />
                  </div>
                  <div className="text-xs">{title}</div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const items = [
  {
    key: "tickets",
    href: "/tickets",
    title: "チケット",
  },
  {
    key: "options",
    href: "/options",
    title: "オプション",
  },
  {
    key: "companies",
    href: "/companies",
    title: "法人",
  },
  {
    key: "customers",
    href: "/customers",
    title: "ユーザー",
  },
  {
    key: "settings",
    href: "/settings",
    title: "設定",
  },
];
