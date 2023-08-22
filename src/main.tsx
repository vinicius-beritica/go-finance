import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/Login/index.tsx';
import { Register } from './components/Register/index.tsx';
import { UserArea } from './components/UserArea/index.tsx';
import { Loading } from './components/Loading/index.tsx';
import { messages } from './utils/messages.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Login /> },
      { path: '/register', element: <Register /> },
      {
        path: '/deu_ruim',
        element: <Loading text={`${messages.textModal.forgotPassword}`} />
      }
    ]
  },
  {
    path: '/login/:id',
    element: <UserArea />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
