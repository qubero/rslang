import { Box, Button, Grow, Typography } from '@mui/material';
import { groupData } from 'widgets/BookHeader/model/constants';
import { GAMES } from '../model/constants';

type IGameInit = {
  game: string | number;
  settings: {
    page: number;
    group: number;
  };
  handleGroupChange: (g: number) => void;
  handleStart: () => void;
};

const GROUPS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

const GameInit = (props: IGameInit) => {
  const {
    game,
    settings: { group, page },
    handleGroupChange,
    handleStart,
  } = props;
  const { title, description } = GAMES[game];

  return (
    <Grow in={true} timeout={1000}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          maxWidth: '500px',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {isNaN(group) ? (
          <div>
            Выберите сложность:
            <br />
            <br />
            {GROUPS.map((g: string, idx: number) => (
              <Button
                color={groupData[idx].color}
                variant="contained"
                sx={{ height: '50px', mr: 2 }}
                key={g}
                onClick={() => handleGroupChange(idx)}
              >
                {g}
              </Button>
            ))}
          </div>
        ) : (
          <div>
            Выбранная группа: {GROUPS[+group]}, страница: {+page + 1}
          </div>
        )}
        {!(isNaN(page) || isNaN(group)) && (
          <Grow in={true} timeout={1000} onClick={handleStart}>
            <Button variant="contained">Начать</Button>
          </Grow>
        )}
      </Box>
    </Grow>
  );
};

export default GameInit;
