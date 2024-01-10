/* eslint-disable @next/next/no-img-element */
"use client";

import { Sound } from "@/models/sound";
import { useSound } from "../hooks/useSound";
import Image from "next/image";

export default function SoundCard({ sound }: { sound: Sound }) {
  const [play] = useSound(sound.audio);

  return (
    <button
      onClick={play}
      key={sound.title}
      className="relative bg-white shadow-md rounded-lg overflow-hidden transition group hover:scale-105 active:scale-95"
    >
      <img
        className="w-full h-48 object-cover transition brightness-80 group-hover:brightness-100"
        src={sound.image}
        alt={sound.title}
        width={200}
        height={200}
      />
      <div className="absolute top-0 left-0 bottom-0 right-0 z-0 bg-black/20"></div>
      <h2 className="absolute z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-xl font-bold text-center text-white text-shadow">
        {sound.title}
      </h2>
    </button>
  );
}
