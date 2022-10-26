//
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import type { NextPageWithLayout } from "next";
import Link from "next/link";

//
import { Breadcrumbs, MainLayout, NarrowTemplate } from "common/components";
import { classNames } from "common/utils";

const SettingsPage: NextPageWithLayout = () => {
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
            <h1 className="text-lg font-bold">{title}</h1>
            <ul className="flex flex-col gap-y-2">
              {children.map(({ key, external, href, title }) => (
                <li key={key}>
                  <Link href={href} target={external ? "_blank" : undefined}>
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

interface IItem {
  key: string;
  title: string;
  children: { key: string; external?: boolean; href: string; title: string }[];
}
const items: IItem[] = [
  {
    key: "contents",
    title: "アプリ用のコンテンツ管理",
    children: [
      {
        key: "coupons",
        external: true,
        href: "https://gtn-article.site/wp-admin/edit.php?post_type=coupon",
        title: "特典管理",
      },
      {
        key: "articles",
        external: true,
        href: "https://gtn-article.site/wp-admin/edit.php?post_type=article",
        title: "記事管理",
      },
      {
        key: "contents",
        external: true,
        href: "https://gtn-article.site/wp-admin/edit.php?post_type=contents",
        title: "コンテンツ管理",
      },
      {
        key: "news",
        external: true,
        href: "https://gtn-article.site/wp-admin/edit.php?post_type=news",
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
        href: "/settings/teams",
        title: "チーム管理",
      },
      {
        key: "employees",
        href: "/settings/employees",
        title: "スタッフ管理",
      },
      {
        key: "plans",
        href: "/settings/plans",
        title: "プラン管理",
      },
    ],
  },
  {
    key: "profile",
    title: "アカウント",
    children: [
      {
        key: "profile",
        href: "/profile",
        title: "アカウント管理",
      },
    ],
  },
];
