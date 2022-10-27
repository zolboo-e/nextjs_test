//
import { useUser } from "@auth0/nextjs-auth0";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

//
import { classNames } from "common/utils";
import { useDrawer } from "common/zustand";

export const Header: React.FC = () => {
  const openDrawer = useDrawer((state) => state.open);

  return (
    <header className="flex items-center justify-between border-b bg-white">
      <div className="container">
        <div className="flex items-center gap-x-2.5">
          <button
            className={classNames("btn-ghost btn-square btn", "sm:hidden")}
            onClick={openDrawer}
          >
            <Bars3Icon className="h-5 w-5 text-black" />
          </button>
          <div className="text-lg font-bold">{`申込管理`}</div>
        </div>
        <Menu />
      </div>
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
          <Image
            src={user.picture}
            alt="user"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        )}
        <ChevronDownIcon className="h-5 w-5 text-[#dddddd]" />
      </label>
      <ul
        className="dropdown-content menu rounded-box menu-compact mt-10 w-40 bg-base-100 p-2 font-bold shadow"
        ref={menuRef}
        tabIndex={0}
      >
        <li>
          <Link href="/api/auth/logout" onClick={() => menuRef.current?.blur()}>
            {`ログアウト`}
          </Link>
        </li>
      </ul>
    </div>
  );
};
