"use client";

//
import Link from "next/link";

//
import { drawerId } from "common/components";
import type { ISidebarItem } from "common/components";
import { classNames } from "common/utils";

//

export const DrawerItem: React.FC<Omit<ISidebarItem, "key">> = ({
  href,
  icon,
  title,
}) => {
  return (
    <Link
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
    </Link>
  );
};
