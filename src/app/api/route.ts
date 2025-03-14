export const REQUEST_URL = `https://br1.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`;

export async function GET(request: Request) {
  const res = await fetch(REQUEST_URL);
  const data = await res.json();
  return Response.json({ data });
}
