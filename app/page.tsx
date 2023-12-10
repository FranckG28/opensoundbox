import getConfiguration from "./actions/getConfiguration";
import { getSounds } from "./actions/getSounds";
import HomePage from "./components/HomePage";
import type { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const configuration = await getConfiguration();

  return {
    title: configuration.name,
    description: configuration.description,
    openGraph: {
      title: configuration.name,
      description: configuration.description,
      url: configuration.appUrl,
      siteName: configuration.name,
      images: [
        {
          url: configuration.ogImage,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    icons: {
      icon: configuration.icon512,
      shortcut: configuration.icon192,
      apple: configuration.icon512,
      other: {
        rel: "apple-touch-icon-precomposed",
        url: configuration.icon512,
      },
    },
  };
}

export default async function Page() {
  const data = await Promise.all([getConfiguration(), getSounds()]);
  const [configuration, sounds] = data;

  return <HomePage sounds={sounds} configuration={configuration} />;
}
