import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import MainPage from 'pages/MainPage';
import DrawerLayout from 'widgets/DrawerLayout';
import ErrorBoundry from 'widgets/Error';
import { theme } from './lib/styles';
import './lib/style.scss';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundry>
        <Routes>
          <Route path="/" element={<DrawerLayout />}>
            <Route index element={<MainPage />} />
            <Route path="book" element={<div>book</div>} />
            <Route path="sprint" element={<div>sprint</div>} />
            <Route path="audio" element={<div>audio</div>} />
            <Route path="info" element={<div>info</div>} />
          </Route>
        </Routes>
      </ErrorBoundry>
    </ThemeProvider>
  );
};

export default App;
