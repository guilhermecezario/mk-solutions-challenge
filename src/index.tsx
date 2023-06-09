import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import './i18n'

import { RouterProvider } from 'react-router-dom';
import router from './routes';

import { Provider } from 'react-redux';
import store from './store';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </React.StrictMode>,
  </Provider>
);
