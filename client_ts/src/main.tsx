import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvier } from './Contexts/AuthContext.tsx';
import { ToastProvier } from './Contexts/ToastContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvier>
        <AuthProvier>
          <App /> 
        </AuthProvier>
      </ToastProvier>
    </BrowserRouter>
  </React.StrictMode>
)
