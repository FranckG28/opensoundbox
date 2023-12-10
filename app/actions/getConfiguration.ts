"use server";

import { Configuration } from "@/models/configuration";
import { configuration } from "../defaults";
import { airtableRecordsToObject } from "../utils";

export default async function getConfiguration(): Promise<Configuration> {

    if (!process.env.AIRTABLE_CONFIG_TABLE) {
        return configuration;
    }

    if (!process.env.AIRTABLE_URL) {
        throw new Error("Missing AIRTABLE_URL");
    }

    if (!process.env.AIRTABLE_PAT_KEY) {
        throw new Error("Missing AIRTABLE_PAT_KEY");
    }

    const res = await fetch(
        process.env.AIRTABLE_URL + process.env.AIRTABLE_CONFIG_TABLE,
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

    try {
        const parsedConfig = airtableRecordsToObject(result.records);

        return {
            ...configuration,
            ...parsedConfig,
        };

    } catch (e) {
        console.error("Failed to parse configuration", e);
        throw new Error("Failed to parse configuration. See logs for details.");
    }
} 