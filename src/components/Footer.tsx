import { memo } from 'react';
import { Toolbar, Typography, Link, SvgIcon } from '@mui/material';

import { ReactComponent as RSS } from '../assets/logo_RSS.svg';

const Footer = () => (
  <Toolbar sx={{ bgcolor: '#000', paddingY: 1 }}>
    <Link
      href="https://rs.school/"
      target="_blank"
      rel="noopener"
      underline="none"
      sx={{ flexGrow: 1 }}
    >
      <SvgIcon component={RSS} sx={{ width: '60px', height: '60px' }} inheritViewBox />
    </Link>
    <Link href="https://github.com/diXrom" target="_blank" rel="noopener" underline="none">
      <Typography variant="h6" component="div" color="secondary">
        GitHub
      </Typography>
    </Link>
    <Typography variant="h6" component="div" sx={{ ml: 3, color: '#FFF' }}>
      2022
    </Typography>
  </Toolbar>
);

export default memo(Footer);
