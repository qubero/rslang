type IGameControls = {
  isMuted: boolean;
  toggleFullscreen: () => void;
  toggleSound: () => void;
};

const GameControls = (props: IGameControls) => {
  const { isMuted, toggleSound, toggleFullscreen } = props;

  return (
    <div
      style={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <button>в учебник</button>
      <button onClick={toggleFullscreen}>фуллскрин</button>
      <button onClick={toggleSound}>{isMuted ? 'нет' : 'звук'}</button>
    </div>
  );
};

export default GameControls;
