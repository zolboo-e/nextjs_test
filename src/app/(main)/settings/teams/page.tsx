//

import { cookies } from "next/headers";

//
import { decrypt } from "common/utils";
import { backend } from "configs/default";

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

  const secret = process.env.AUTH0_SECRET!;
  const { accessToken } = await decrypt(session, secret);

  const response = await fetch(`https://api.gtnapp.tokyo/teams`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      "X-API-KEY": "8D-E.dZs7xccC4",
    },
  });

  return response.json();
};

async function TeamsPage() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="flex flex-col gap-y-10">
        <ul>
          {data &&
            data.teams.map((team, index) => (
              <li key={`team-${index}`}>{JSON.stringify(team)}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default TeamsPage;
