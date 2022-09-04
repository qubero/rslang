import { AutoStories, Fullscreen, FullscreenExit, VolumeMute, VolumeUp } from '@mui/icons-material';
import { Box, Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type IGameControls = {
  isFull: boolean;
  isMuted: boolean;
  toggleFullscreen: () => void;
  toggleSound: () => void;
};

const GameControls = (props: IGameControls) => {
  const { isFull, isMuted, toggleSound, toggleFullscreen } = props;
  const navigate = useNavigate();

  const handleToBook = () => {
    navigate('/book');
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: 55,
      }}
    >
      <Fab color="primary" aria-label="В учебник" size="small">
        <AutoStories onClick={handleToBook} />
      </Fab>
      <Fab color="primary" aria-label="Полный экран" onClick={toggleFullscreen} size="small">
        {isFull ? <FullscreenExit /> : <Fullscreen />}
      </Fab>
      <Fab color="primary" aria-label="Переключить звук" onClick={toggleSound} size="small">
        {isMuted ? <VolumeMute /> : <VolumeUp />}
      </Fab>
    </Box>
  );
};

export default GameControls;
