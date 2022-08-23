import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import MainPage from 'pages/MainPage';
import DrawerLayout from 'widgets/DrawerLayout';
import ErrorBoundary from 'widgets/Error';
import { ROUTE_PATH } from 'shared/constants';
import { theme } from './lib/styles';
import './lib/style.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <Routes>
          <Route path={ROUTE_PATH.home} element={<DrawerLayout />}>
            <Route index element={<MainPage />} />
            <Route path={ROUTE_PATH.book} element={<div>book</div>} />
            <Route path={ROUTE_PATH.sprint} element={<div>sprint</div>} />
            <Route path={ROUTE_PATH.audiocall} element={<div>audiocall </div>} />
            <Route path={ROUTE_PATH.info} element={<div>info</div>} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
