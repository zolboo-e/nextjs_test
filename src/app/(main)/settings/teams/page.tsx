//

import { cookies } from "next/headers";
import Link from "next/link";

//
import { decrypt } from "common/utils";
import { auth0, backend } from "configs/default";

const getData = async (): Promise<{
  teams: {
    id: number;
    code: number;
    name: string;
    members_count: number;
    thumb: string;
  }[];
} | null> => {
  const _cookies = cookies();
  const session = _cookies.get("appSession");

  if (!session) {
    return null;
  }

  const { accessToken } = await decrypt(session, auth0.secret);

  const response = await fetch(`${backend.baseUrl}/teams`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      "X-API-KEY": backend.apiKey,
    },
  });

  return response.json();
};

async function TeamsPage() {
  const data = await getData();

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-lg font-bold">{`チーム一覧`}</h1>
      <div className="flex items-center justify-between">
        <div className="flex gap-x-2">
          <input className="input w-[300px]" placeholder="チーム名で検索" />
          <Link href="/" className="btn-primary btn">{`検索`}</Link>
        </div>
        <Link href="/" className="btn-primary btn">{`チームの登録`}</Link>
      </div>
      <ul>
        {data &&
          data.teams.map((team, index) => (
            <li key={`team-${index}`}>{JSON.stringify(team)}</li>
          ))}
      </ul>
    </div>
  );
}
export default TeamsPage;
