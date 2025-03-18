export const REQUEST_URL =
  "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations";

export async function GET(request: Request) {
  const res = await fetch(REQUEST_URL, {
    headers: {
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });
  const data = await res.json();
  return Response.json({ data });
}
