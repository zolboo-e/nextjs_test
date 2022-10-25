import Link from "next/link";

interface IBreadcrumbItem {
  key: string;
  href: string;
  title: string;
}
interface IBreadcrumbs {
  items: IBreadcrumbItem[];
}
export const Breadcrumbs: React.FC<IBreadcrumbs> = ({ items }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul className="text-[10px] font-bold">
        {items.map(({ key, href, title }, index) => {
          if (index === items.length - 1) {
            return <li key={key}>{title}</li>;
          }

          return (
            <li key={key}>
              <Link href={href}>
                <a>{title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
