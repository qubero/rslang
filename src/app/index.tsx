import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import MainPage from 'pages/MainPage';
import DrawerLayout from 'widgets/DrawerLayout';
import ErrorBoundary from 'widgets/Error';
import { GameInit, GAMES_TITLES } from 'widgets/Games';
import { ROUTE_PATH } from 'shared/constants';
import { theme } from './lib/styles';
import './lib/style.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Routes>
        <Route path={ROUTE_PATH.INDEX} element={<DrawerLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTE_PATH.BOOK} element={<div>book</div>} />
          <Route path={ROUTE_PATH.SPINT} element={<GameInit game={GAMES_TITLES[0]} />} />
          <Route path={ROUTE_PATH.AUDIOCALL} element={<GameInit game={GAMES_TITLES[1]} />} />
          <Route path={ROUTE_PATH.INFO} element={<div>info</div>} />
        </Route>
      </Routes>
    </ErrorBoundary>
  </ThemeProvider>
);


export default App;
