"use client";

import { classNames } from "common/utils";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export const Breadcrumbs: React.FC = () => {
  const segments = useSelectedLayoutSegments();

  return (
    <div
      className={classNames(
        "container px-0"
        // segments.includes("(narrow)") && "max-w-[800px]"
      )}
    >
      <_Breadcrumbs
        items={["(main)", ...segments]
          .map(segmentToText)
          .filter((segment): segment is IBreadcrumbItem => !!segment)}
      />
    </div>
  );
};

interface IBreadcrumbItem {
  key: string;
  href: string;
  title: string;
}
interface IBreadcrumbs {
  items: IBreadcrumbItem[];
}
const _Breadcrumbs: React.FC<IBreadcrumbs> = ({ items }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul className="text-[10px] font-bold">
        {items.map(({ key, href, title }, index) => {
          if (index === items.length - 1) {
            return <li key={key}>{title}</li>;
          }

          return (
            <li key={key}>
              <Link href={href}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const segmentToText = (segment: string) => {
  switch (segment) {
    case "(main)":
      return {
        key: "root",
        href: "/",
        title: "ホーム",
      };
    case "settings":
      return {
        key: "settings",
        href: "/settings",
        title: "設定",
      };
  }

  return null;
};
