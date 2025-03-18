import { REQUEST_URL } from "@/constants";

export async function GET() {
  const res = await fetch(REQUEST_URL, {
    headers: {
      "X-Riot-Token": `${process.env.NEXT_PUBLIC_RIOT_API_KEY}`,
    },
  });
  const data = await res.json();
  return Response.json({ data });
}
