import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from './styles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </StrictMode>,
);
