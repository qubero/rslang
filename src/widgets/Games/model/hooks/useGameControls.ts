import { useRef, useState } from 'react';

const useGameControls = () => {
  const [isFull, setIsFull] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement | null>(null);

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && fullscreenRef.current) {
      fullscreenRef.current.requestFullscreen();
      setIsFull(true);
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFull(false);
    }
  };

  return {
    fullscreenRef,
    isFull,
    isMuted,
    toggleSound,
    toggleFullscreen,
  };
};

export default useGameControls;
