import { Sound } from "@/models/sound";
import SoundGrid from "./SoundGrid";
import Container from "./Container";

export default function HomePage({ sounds }: { sounds: Sound[] }) {
  return (
    <>
      <main className="bg-[#006198] py-8">
        <Container>
          <h1 className="text-xl lg:text-3xl font-medium text-white leading-loose tracking-tight">
            <span className="font-bold">Sikish</span> Sounds
          </h1>

          <SoundGrid sounds={sounds} />
        </Container>
      </main>
      <footer className="w-full bg-[#FE000B] py-6">
        <Container>
          <p className="text-lg">La fabrique de vos sonorités préférées.</p>
        </Container>
      </footer>
    </>
  );
}
