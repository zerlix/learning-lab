import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import TaskList from './components/TaskList';
import Counter from './components/Counter';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <TaskList />
      <Counter />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
