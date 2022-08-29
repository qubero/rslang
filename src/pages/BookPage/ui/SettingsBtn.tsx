import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { BlackTooltip } from 'widgets/Footer/lib/styles';
import { themeColor } from '../lib/styles';

const SettingsBtn = () => {
  return {
    /* <BlackTooltip title={add ? 'Удалить из сложных' : 'Добавить в сложные'} placement="bottom">
      <IconButton sx={{ color: `#${themeColor[Number(group)]}`, p: '2px' }}>
        <Add fontSize="large" />
      </IconButton>
    </BlackTooltip> */
  };
};

export default SettingsBtn;
