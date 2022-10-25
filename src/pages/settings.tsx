//
import { useUser } from "@auth0/nextjs-auth0";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import type { NextPageWithLayout } from "next";
import Image from "next/image";
import Link from "next/link";

//
import { Breadcrumbs, MainLayout, NarrowTemplate } from "common/components";
import { classNames } from "common/utils";

const SettingsPage: NextPageWithLayout = () => {
  const { user } = useUser();

  return (
    <div className="flex flex-col gap-y-10">
      <Breadcrumbs
        items={[
          {
            key: "home",
            href: "/",
            title: "ホーム",
          },
          {
            key: "settings",
            href: "/settings",
            title: "設定",
          },
        ]}
      />
      <div className="flex flex-col gap-y-10">
        {items.map(({ key, children, title }) => (
          <div key={key} className="flex flex-col gap-y-4">
            <h1 className="text-lg font-bold">{`アプリ用のコンテンツ管理`}</h1>
            <ul className="flex flex-col gap-y-2">
              {children.map(({ key, href, title }) => (
                <li key={key}>
                  <Link href={href}>
                    <a
                      className={classNames(
                        "flex gap-x-5 border bg-white px-8 py-5",
                        "hover:bg-black/5"
                      )}
                    >
                      <ArrowDownTrayIcon className="h-6 w-6 text-primary" />
                      {title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
SettingsPage.getLayout = (page) => {
  return (
    <MainLayout>
      <NarrowTemplate>{page}</NarrowTemplate>
    </MainLayout>
  );
};
export default SettingsPage;

const items = [
  {
    key: "contents",
    title: "アプリ用のコンテンツ管理",
    children: [
      {
        key: "rewards",
        href: "/",
        title: "特典管理",
      },
      {
        key: "articles",
        href: "/",
        title: "記事管理",
      },
      {
        key: "contents",
        href: "/",
        title: "コンテンツ管理",
      },
      {
        key: "notifications",
        href: "/",
        title: "お知らせ管理",
      },
    ],
  },
  {
    key: "others",
    title: "その他",
    children: [
      {
        key: "teams",
        href: "/",
        title: "チーム管理",
      },
      {
        key: "staffs",
        href: "/",
        title: "スタッフ管理",
      },
      {
        key: "plans",
        href: "/",
        title: "プラン管理",
      },
    ],
  },
  {
    key: "account",
    title: "アカウント",
    children: [
      {
        key: "account",
        href: "/",
        title: "アカウント管理",
      },
    ],
  },
];
