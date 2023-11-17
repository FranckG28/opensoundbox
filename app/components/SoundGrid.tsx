import { Sound } from "@/models/sound";
import SoundCard from "./SoundCard";

export default function SoundGrid({ sounds }: { sounds: Sound[] }) {
  if (!sounds?.length) {
    return <p className="text-lg text-slate-200">Meuch ...</p>;
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-5">
      {sounds.map((sound, index) => (
        <SoundCard key={index} sound={sound} />
      ))}
    </div>
  );
}
