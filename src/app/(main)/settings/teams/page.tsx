//

import { cookies } from "next/headers";

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
