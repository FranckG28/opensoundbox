import { MetadataRoute } from "next";
import getConfiguration from "./actions/getConfiguration";

export default async function manifest(): Promise<MetadataRoute.Manifest> {

  const configuration = await getConfiguration();

  return {
    name: configuration.name,
    short_name: configuration.name,
    description: configuration.description,
    start_url: "/",
    display: "standalone",
    background_color: configuration.backgroundColor,
    theme_color: configuration.backgroundColor,
    icons: [
      {
        src: configuration.icon512,
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: configuration.icon192,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: configuration.icon384,
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: configuration.icon512,
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
