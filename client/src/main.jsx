import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import rootReducer from '../src/reducers/index';
import App from './App';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  spacing: 8, // or any configuration you need
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true, // Thunk middleware is automatically included
      serializableCheck: false,
    }),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
