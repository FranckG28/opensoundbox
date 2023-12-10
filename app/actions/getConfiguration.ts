"use server";

import { Configuration } from "@/models/configuration";
import { configuration } from "../defaults";

export default async function getConfiguration(): Promise<Configuration> {

    if (!process.env.AIRTABLE_CONFIGURATION_TABLE) {
        return configuration;
    }

    if (!process.env.AIRTABLE_URL) {
        throw new Error("Missing AIRTABLE_URL");
    }

    if (!process.env.AIRTABLE_PAT_KEY) {
        throw new Error("Missing AIRTABLE_PAT_KEY");
    }

    const res = await fetch(
        process.env.AIRTABLE_URL + process.env.AIRTABLE_CONFIGURATION_TABLE,
        {
            headers: {
                Authorization: "Bearer " + process.env.AIRTABLE_PAT_KEY,
            },
            next: { revalidate: 3600 },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch configuration : " + res.statusText);
    }

    const result = await res.json();

    console.log("configuration", result.records);

    return {

    }

} 