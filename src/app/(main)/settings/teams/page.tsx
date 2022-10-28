//
import Link from "next/link";

//
import { client } from "lib/services";
import { classNames } from "lib/utils";

async function TeamsPage() {
  const { body, status } = await client.teams.getTeams({});

  if (status !== 200) {
    return status;
  }

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-lg font-bold">{`チーム一覧`}</h1>
        <div className="flex items-center justify-between">
          <div className="flex gap-x-2">
            <input className="input w-[300px]" placeholder="チーム名で検索" />
            <Link
              href="/"
              prefetch={false}
              className="btn-primary btn"
            >{`検索`}</Link>
          </div>
          <Link
            href="/"
            prefetch={false}
            className="btn-primary btn"
          >{`チームの登録`}</Link>
        </div>
        <table
          className={classNames(
            "table-auto border-collapse border px-10",
            "[&_th]:py-4 [&_th]:px-8 [&_th]:text-left [&_th:first-child]:w-0 [&_th:first-child]:whitespace-nowrap",
            "[&_td]:py-4 [&_td]:px-8 [&_td:first-child]:whitespace-nowrap"
          )}
        >
          <thead>
            <tr className="border bg-[#eeeeee]">
              <th>{`チーム名`}</th>
              <th>{`所属数`}</th>
            </tr>
          </thead>
          <tbody>
            {body.teams.map(({ id, name, members_count }) => (
              <tr key={id} className="border bg-white">
                <td>{name}</td>
                <td>{`${members_count}人`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TeamsPage;
