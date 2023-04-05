import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import store from './store';

import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>
);
