import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);
