import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import Leaderboard from '@mui/icons-material/Leaderboard';
import { memo } from 'react';
import { SpeedDialIcon } from '@mui/material';
import { muiColor } from 'widgets/BookHeader/lib/styles';
import { speedDialStyle, dialIconStyle } from '../lib/styles';
import { useSettingsBtn } from '../model/hooks';
import { ISettingsBtn } from '../lib/types';

const SettingsBtn = ({ item }: ISettingsBtn) => {
  const { hardFabProps, learnFabProps, handleClose, handleOpen, userWord, group, open } =
    useSettingsBtn(item);

  return (
    <Box sx={speedDialStyle}>
      <SpeedDial
        ariaLabel="SpeedDial"
        direction={'down'}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        icon={
          <SpeedDialIcon
            sx={dialIconStyle}
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
          FabProps={hardFabProps}
        />
        <SpeedDialAction
          icon={<AddIcon color={muiColor[Number(group)]} />}
          tooltipTitle={'Изученное'}
          tooltipOpen
          FabProps={learnFabProps}
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
