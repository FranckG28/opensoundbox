import { useState, useEffect } from "react";

export function useSound(url: string): [play: () => void] {
  const [audio, setAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  const play = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return [play];
}
