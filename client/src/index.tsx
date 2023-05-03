import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider  } from 'react-router-dom';
import { app_router } from './routes';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={app_router} />
  </React.StrictMode>
);

