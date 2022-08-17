import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from './shared/store';
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <CssBaseline>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </CssBaseline>
);
