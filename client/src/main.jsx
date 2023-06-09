import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './sass/index.scss';
import { DarkModeContextProvider } from './context/DarkModeContext.jsx';
import { UserProvider } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </UserProvider>
  </React.StrictMode>,
);
