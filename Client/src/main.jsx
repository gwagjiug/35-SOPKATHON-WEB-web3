import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from './styles';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global />
    <App />
  </StrictMode>
);
