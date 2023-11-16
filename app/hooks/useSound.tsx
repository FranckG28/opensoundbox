import { useState } from "react";

export function useSound(url: string): [play: () => void] {
    const [audio] = useState(() => new Audio(url));
    
    const play = () => {
        audio.currentTime = 0;
        audio.play();
    };
    
    return [play];
    };
    