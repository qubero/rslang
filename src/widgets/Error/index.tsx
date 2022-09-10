import { Component } from 'react';
import { Box, Typography } from '@mui/material';

import { errorStyle } from './lib/styles';
import { IErrorProps, IErrorState } from './lib/types';

export default class ErrorBoundary extends Component<IErrorProps, IErrorState> {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return (
        <Box sx={errorStyle}>
          <Typography variant="h2" component="h2" sx={{ color: 'black' }}>
            Извините, произошла неизветная ошибка, перезагрузите страницу
          </Typography>
        </Box>
      );
    return this.props.children;
  }
}
