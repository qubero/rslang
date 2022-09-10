import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { Wrapper } from 'shared/ui/Wrapper';
import MainPage from 'pages/MainPage';
import BookPage from 'pages/BookPage';
import StatisticsPage from 'pages/StatisticsPage';
import ErrorBoundary from 'widgets/Error';
import { DrawerLayout } from 'widgets/DrawerLayout';
import { Game, GAMES_TITLES } from 'widgets/Games';
import { ROUTE_PATH } from 'shared/constants';
import { theme } from './lib/styles';
import './lib/style.scss';

const App = () => (
  <ThemeProvider theme={theme}>
    <ErrorBoundary>
      <Routes>
        <Route path={ROUTE_PATH.INDEX} element={<DrawerLayout />}>
          <Route index element={<MainPage />} />
          <Route path={ROUTE_PATH.BOOK} element={<BookPage />} />
          <Route path={ROUTE_PATH.SPRINT} element={<Game game={GAMES_TITLES[0]} />} />
          <Route path={ROUTE_PATH.AUDIOCALL} element={<Game game={GAMES_TITLES[1]} />} />
          <Route path={ROUTE_PATH.INFO} element={<StatisticsPage />} />
        </Route>
      </Routes>
    </ErrorBoundary>
  </ThemeProvider>
);

export default App;
