import { Sound } from "@/models/sound";
import SoundGrid from "./SoundGrid";
import Container from "./Container";
import { Configuration } from "@/models/configuration";

export default function HomePage({
  sounds,
  configuration,
}: {
  sounds: Sound[];
  configuration: Configuration;
}) {
  return (
    <>
      <main
        className="py-8"
        style={{ backgroundColor: configuration.backgroundColor }}
      >
        <Container>
          <h1
            className="text-xl lg:text-3xl font-medium leading-loose tracking-tight"
            style={{ color: configuration.titleColor }}
          >
            {configuration.name}
          </h1>

          <SoundGrid sounds={sounds} />
        </Container>
      </main>
      <footer
        className="w-full py-6"
        style={{ backgroundColor: configuration.footerColor }}
      >
        <Container>
          <p
            className="text-lg"
            style={{ color: configuration.footerTextColor }}
          >
            {configuration.footerText}
          </p>
        </Container>
      </footer>
    </>
  );
}
