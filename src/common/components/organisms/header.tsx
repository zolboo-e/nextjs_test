import { useUser } from "@auth0/nextjs-auth0";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b px-20">
      <div className="text-lg font-bold">{`申込管理`}</div>
      <Menu />
    </header>
  );
};

export const Menu: React.FC = () => {
  const buttonRef = useRef<HTMLLabelElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const { user } = useUser();
  if (!user) {
    return null;
  }

  return (
    <div className="dropdown-end dropdown">
      <label className="flex items-center gap-x-3" tabIndex={0} ref={buttonRef}>
        <div>{user.nickname}</div>
        {user.picture && (
          <div className="relative aspect-square w-10">
            <Image
              src={user.picture}
              layout="fill"
              alt="user"
              className="rounded-full"
            />
          </div>
        )}
        <ChevronDownIcon className="h-5 w-5 text-[#dddddd]" />
      </label>
      <ul
        className="dropdown-content menu rounded-box menu-compact mt-10 w-40 bg-base-100 p-2 font-bold shadow"
        ref={menuRef}
        tabIndex={0}
      >
        <li>
          <Link href="/api/auth/logout">
            <a onClick={() => menuRef.current?.blur()}>{`ログアウト`}</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
