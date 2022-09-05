import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import Leaderboard from '@mui/icons-material/Leaderboard';
import { useState, memo } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { useUserWord } from 'widgets/UserWords';
import { IWord } from 'shared/api/lib/types';
import { muiColor } from 'widgets/BookHeader/lib/styles';
import { useQueryParams } from 'widgets/BookHeader/model/hooks/useQuery';

type ISettingsBtn = {
  item: IWord;
};

const SettingsBtn = ({ item }: ISettingsBtn) => {
  const { id, userWord } = item;
  const { group } = useQueryParams();
  const { markAsLearned, markAsDifficult, handleDelete } = useUserWord(id);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        transform: 'translateZ(0px)',
        flexGrow: 1,
        position: 'absolute',
        top: '0',
        right: '50px',
      }}
    >
      <SpeedDial
        ariaLabel="SpeedDial"
        direction={'down'}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        icon={
          <SpeedDialIcon
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              height: 'auto',
            }}
            icon={<DownIcon fontSize="large" />}
            openIcon={<UpIcon fontSize="large" />}
          />
        }
        FabProps={{ sx: { width: '45px', height: '45px' }, color: muiColor[Number(group)] }}
      >
        <SpeedDialAction
          className={'HardToolTip'}
          icon={<AddIcon color={muiColor[Number(group)]} />}
          tooltipTitle={group === '6' ? 'Несложное' : 'Сложное'}
          tooltipOpen
          FabProps={{
            disabled: userWord?.difficulty === 'hard' && group !== '6' && true,
            onClick: () => {
              if (group === '6') handleDelete();
              else markAsDifficult();
              handleClose();
            },
          }}
        />
        <SpeedDialAction
          icon={<AddIcon color={muiColor[Number(group)]} />}
          tooltipTitle={'Изученное'}
          tooltipOpen
          FabProps={{
            disabled: userWord?.optional.isLearned,
            onClick: () => {
              markAsLearned();
              handleClose();
            },
          }}
        />
        <SpeedDialAction
          tooltipTitle={`Прогресс ${userWord ? userWord.optional.learnProgress : 0}/${
            userWord?.difficulty === 'hard' ? '5' : '3'
          }`}
          icon={<Leaderboard color={muiColor[2]} fontSize="small" />}
          FabProps={{ disabled: true }}
          tooltipOpen
        />
      </SpeedDial>
    </Box>
  );
};

export default memo(SettingsBtn);
