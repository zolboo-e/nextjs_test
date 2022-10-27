//

import { cookies } from "next/headers";

//
import { decrypt } from "common/utils";
import { backend } from "configs/default";

const getData = async (): Promise<any[] | null> => {
  const _cookies = cookies();
  const session = _cookies.get("appSession");
  console.log("session", session);
  if (!session) {
    return null;
  }

  const secret = process.env.AUTH0_SECRET!;
  const { accessToken } = await decrypt(session, secret);
  console.log("accessToken", accessToken);

  const response = await fetch(`https://api.gtnapp.tokyo/teams`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      "X-API-KEY": "8D-E.dZs7xccC4",
    },
  });
  const data = await response.json();
  console.log("data", data);

  return data;
};

async function TeamsPage() {
  const data = await getData();

  return (
    <div className="mx-auto max-w-[800px]">
      <div className="flex flex-col gap-y-10">
        <ul>
          {data &&
            data.map((team, index) => (
              <li key={`team-${index}`}>{JSON.stringify(team)}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
export default TeamsPage;
