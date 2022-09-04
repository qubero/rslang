import { useRef, useState } from 'react';

const useGameControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const fullscreenRef = useRef<HTMLDivElement | null>(null);

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && fullscreenRef.current) {
      fullscreenRef.current.requestFullscreen();
    } else if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  return {
    fullscreenRef,
    isMuted,
    toggleSound,
    toggleFullscreen,
  };
};

export default useGameControls;
