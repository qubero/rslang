import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

import { mainStyle, theme } from './util/styles';
import ErrorBoundry from './components/ErrorBoundry';
import Layout from './components/Layout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundry>
        <Box sx={mainStyle}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<div>Hello World!</div>} />
            </Route>
          </Routes>
        </Box>
      </ErrorBoundry>
    </ThemeProvider>
  );
};

export default App;
