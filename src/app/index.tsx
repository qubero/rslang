import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import MainPage from 'pages/MainPage';
import DrawerLayout from 'widgets/DrawerLayout';
import ErrorBoundary from 'widgets/Error';
import { GameInit, GAMES_TITLES } from 'widgets/Games';
import { theme } from './lib/styles';
import './lib/style.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<DrawerLayout />}>
            <Route index element={<MainPage />} />
            <Route path="book" element={<div>book</div>} />
            <Route path="sprint" element={<GameInit game={GAMES_TITLES[0]} />} />
            <Route path="audio" element={<GameInit game={GAMES_TITLES[1]} />} />
            <Route path="info" element={<div>info</div>} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
