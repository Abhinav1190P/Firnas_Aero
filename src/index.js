import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login';
import FirnasLog from './pages/firnas_log';
import MedLog from './pages/med_log';
import { AuthProvider } from './pages/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },

  {
    path: "/firnas_log",
    element: <FirnasLog />,
  },

  {
    path: "/med_log",
    element: <MedLog />,
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);


reportWebVitals();
