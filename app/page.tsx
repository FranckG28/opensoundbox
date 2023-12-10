import { Sound } from "@/models/sound";
import HomePage from "./components/HomePage";

async function getData(): Promise<{ sounds: Sound[] }> {
  if (!process.env.AIRTABLE_URL) {
    throw new Error("Missing AIRTABLE_URL");
  }

  if (!process.env.AIRTABLE_SOUNDS_TABLE) {
    throw new Error("Missing AIRTABLE_SOUNDS_TABLE");
  }

  const res = await fetch(
    process.env.AIRTABLE_URL + process.env.AIRTABLE_SOUNDS_TABLE,
    {
      headers: {
        Authorization: "Bearer " + process.env.AIRTABLE_PAT_KEY,
      },
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data : " + res.statusText);
  }

  const result = await res.json();

  return {
    sounds: result.records
      .map((record: any) => ({
        title: record.fields.title,
        audio: record.fields.audio?.[0].url,
        image: record.fields.image?.[0].thumbnails?.large.url,
      }))
      .filter((sound: Sound) => !!sound.audio),
  };
}

export default async function Page() {
  const { sounds } = await getData();

  return <HomePage sounds={sounds} />;
}
